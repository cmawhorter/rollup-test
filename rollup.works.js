
// https://github.com/rollup/rollup/wiki/Command-Line-Interface#using-a-config-file

import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry:          'entry.js',
  dest:           'dest.js',
  format:         'cjs',
  plugins: [
    // works because this is disabled (and jsonwebtoken is left exteral)
    // resolve({
    //   jsnext:     true,
    //   main:       true,
    // }),
    commonjs(),
    babel({
      // excluding node_modules or not seems to have no effect
      exclude:    'node_modules/**',
    }),
  ],
  // without external i get warnings
  external: [
    'buffer',
    'stream',
    'util',
    'crypto',
    'path',
    'fs',
    'net',
    'dns',
  ],
};
