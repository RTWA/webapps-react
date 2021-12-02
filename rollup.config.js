import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-import-css';
import pkg from './package.json';

var MODE = [
    { format: 'cjs' },
    { format: 'esm' }
];
var config = [];

MODE.map((m) => {
    var conf = {
        input: 'src/index.js',
        output: {
            name: pkg.name,
            file: `dist/index.${m.format}.js`,
            format: m.format,
            exports: "auto"
        },
        external: ['axios', 'react', 'react-dom', 'react-router-dom', /@babel\/runtime/],
        plugins: [
            css(),
            resolve({
                extensions: ['.js'],
                dedupe: ['axios', 'perfect-scrollbar', 'react', 'react-dom', 'react-router-dom'],
                preferBuiltins: true,
            }),
            babel({
                exclude: 'node_modules/**',
                plugins: [
                    '@babel/transform-runtime',
                    '@babel/plugin-proposal-class-properties'
                ],
                babelHelpers: 'runtime'
            }),
            commonjs()
        ]
    }
    config.push(conf)
});

export default [
    ...config,
];