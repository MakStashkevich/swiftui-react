import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import swc from 'rollup-plugin-swc3';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { SourceMapGenerator } from 'source-map';

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
      minimize: isProduction, // Минимизирует CSS только в продакшн-режиме
      sourceMap: true,
      inject: false,
    }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },
};