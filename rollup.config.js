import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

module.exports = {
	input: 'src/index.js',
	output: {
		file: 'build/bundle.js',
		format: 'iife',
		globals: {
			react: 'React',
			'react-dom': 'ReactDOM'
		}
	},
	plugins: [
		replace({
			'process.env.NODE_ENV': '\'production\''
		}),
		resolve({
			browser: true
		}),
		babel(),
		commonjs({
			include: 'node_modules/**',
			namedExports: {
				'node_modules/react/index.js': [
					'Component',
					'PureComponent',
					'Fragment',
					'Children',
					'createElement',
					'cloneElement',
					'createContext'
				],
				'node_modules/react-is/index.js': [
					'isValidElementType',
					'isElement',
					'ForwardRef'
				]
			}
		}),
		terser()
	],
	external: ['react', 'react-dom']
}
