import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const clientDirectivePlugin = () => {
  return {
    name: 'add-client-directive',
    renderChunk(code, chunk) {
      const clientHooks = ['useState', 'useRef', 'useLayoutEffect'];
      const needsClientDirective = clientHooks.some(hook => code.includes(hook));

      if (needsClientDirective && !code.startsWith("'use client'")) {
        return `'use client';\n${code}`;
      }
      return code;
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
  path.resolve(__dirname, 'src/global.css'),
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
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
      rootDir: 'src',
    }),
    postcss({
      extract: isProduction ? 'index.css' : false, // Извлекает CSS только в продакшн-режиме
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
      inject: true,
    }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },
};