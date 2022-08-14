import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'index.ts',
    output: {
        file: 'output.js',
        format: 'esm',
    },
    external: ['chart.js'],
    plugins: [
        resolve(),
        typescript(),
    ],
};
