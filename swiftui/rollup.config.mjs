import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Node.js >= 14+
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, 'src/components');
const entryPoints = globSync(`${componentsDir}/**/*.{ts,tsx}`);

// Добавляем index.ts как точку входа
entryPoints.push(path.resolve(__dirname, 'src/index.ts'));

// Создаем директорию dist, если ее нет
if (!fs.existsSync(path.resolve(__dirname, 'dist'))) {
  fs.mkdirSync(path.resolve(__dirname, 'dist'));
}

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
    },
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].cjs',
      exports: 'named',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
      rootDir: 'src',
    }),
    postcss({
      extract: 'index.css', // Извлекает все CSS в один файл index.css
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        getJSON: (cssFileName, json) => {
          const fileName = path.basename(cssFileName) + '.d.ts';
          const content = `declare const classes: ${JSON.stringify(json)};\nexport default classes;\n`;
          fs.writeFileSync(path.resolve(__dirname, 'src/types', fileName), content);
        },
      },
      plugins: [autoprefixer()],
      minimize: true,
    }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
};