import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import swc from 'rollup-plugin-swc3';
import stylexPlugin from '@stylexjs/rollup-plugin';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { SourceMapGenerator } from 'source-map';
import * as csso from 'csso';

const clientDirectivePlugin = () => {
  return {
    name: 'add-client-directive',
    renderChunk(code, chunk) {
      const clientHooks = ['useState', 'useRef', 'useLayoutEffect', 'useEffect', 'useCallback', 'useMemo'];
      const needsClientDirective = clientHooks.some(hook => code.includes(hook));

      if (!needsClientDirective || code.startsWith("'use client'")) {
        return null;
      }

      const prefix = `'use client';\n`;
      const newCode = prefix + code;

      const map = new SourceMapGenerator({
        file: chunk.fileName,
      });

      // Линия-синхронизация sourcemap
      const originalLines = code.split('\n').length;

      for (let i = 0; i < originalLines; i++) {
        map.addMapping({
          source: chunk.fileName,
          original: { line: i + 1, column: 0 },
          generated: { line: i + 2, column: 0 },
        });
      }

      map.setSourceContent(chunk.fileName, code);

      return {
        code: newCode,
        map: map.toString(),
      };
    },
  };
};

const clientMergeGlobalsCss = ({
  inputFiles = ['dist/index.css', 'dist/stylex.css'],
  outputFile = 'globals.css',
  format = '.css',
  minify = true,
  debugFileComments = true,
}) => {
  return {
    name: 'merge-globals-css',
    writeBundle() {
      if (inputFiles.length === 0) {
        console.log('No input files specified for CSS merging. Skipping.');
        return;
      }

      let mergedContent = '';

      if (inputFiles.length === 1) {
        const filePath = path.resolve(__dirname, inputFiles[0]);
        if (!fs.existsSync(filePath)) {
          console.warn(`File not found: ${filePath}`);
          return;
        }
        if (!filePath.endsWith(format)) {
          console.warn(`File ${filePath} does not match the expected format ${format}`);
          return;
        }
        let content = fs.readFileSync(filePath, 'utf-8');
        if (debugFileComments) {
          content = `/** ${inputFiles[0]} start */\n${content}\n/** ${inputFiles[0]} end */`;
        }
        mergedContent = content;
      } else {
        mergedContent = inputFiles.reduce((acc, file) => {
          const filePath = path.resolve(__dirname, file);
          if (!fs.existsSync(filePath)) {
            console.warn(`File not found: ${filePath}`);
            return acc;
          }
          if (!filePath.endsWith(format)) {
            console.warn(`File ${filePath} does not match the expected format ${format}`);
            return acc;
          }
          let content = fs.readFileSync(filePath, 'utf-8');
          if (debugFileComments) {
            content = `/** ${file} start */\n${content}\n/** ${file} end */`;
          }
          return acc + content + '\n';
        }, '');
      }

      const outputPath = path.resolve(__dirname, 'dist', outputFile);

      const finalContent = minify && isProduction ? csso.minify(mergedContent).css : mergedContent;

      fs.writeFileSync(outputPath, finalContent);
    },
  };
};

// Node.js >= 14+
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entryPoints = [
  ...globSync(`${path.resolve(__dirname, 'src/components')}/**/index.ts`),
  ...globSync(`${path.resolve(__dirname, 'src/utils')}/**/index.ts`),
  ...globSync(`${path.resolve(__dirname, 'src/hooks')}/**/index.ts`),
  path.resolve(__dirname, 'src/index.ts'), // Добавляем index.ts как точку входа
];

// Создаем директорию dist, если ее нет
if (!fs.existsSync(path.resolve(__dirname, 'dist'))) {
  fs.mkdirSync(path.resolve(__dirname, 'dist'));
}

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: entryPoints,
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].js',
      exports: 'named',
      interop: 'auto',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'jsxRuntime',
      },
    },
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].cjs',
      exports: 'named',
      interop: 'auto',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'jsxRuntime',
      },
    },
  ],
  plugins: [
    clientDirectivePlugin(),
    resolve(),
    commonjs(),
    swc({
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true,
        },
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
      sourceMaps: true,
    }),
    stylexPlugin({
      fileName: 'stylex.css',
      use: ['react'],
      useCSSLayers: true,
      classNamePrefix: 'swiftui-',
      dev: !isProduction,
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: __dirname,
      },
    }),
    postcss({
      extract: 'index.css',
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        getJSON: (cssFileName, json) => {
          const fileName = path.basename(cssFileName) + '.d.ts';
          const content = `declare const classes: ${JSON.stringify(json)};\nexport default classes;\n`;
          fs.writeFileSync(path.resolve(__dirname, 'src/types', fileName), content);
        },
      },
      plugins: [autoprefixer()],
      minimize: false, // Не минимизируем тк будет минимизация после слияния файлов
      sourceMap: true,
      inject: false,
    }),
    clientMergeGlobalsCss({
      inputFiles: ['dist/index.css', 'dist/stylex.css'],
      outputFile: 'globals.css',
      format: '.css',
      minify: isProduction, // А вот здесь уже минимизируем конечный файл
      debugFileComments: !isProduction,
    }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },
};