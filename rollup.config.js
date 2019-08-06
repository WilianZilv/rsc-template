import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import css from 'rollup-plugin-css-only'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

module.exports = {
	input: 'src/index.js',
	output: {
		file: 'rollup_build/bundle.js',
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
		css({ output: 'rollup_build/bundle.css' }),
		babel({
			plugins: ['@babel/plugin-transform-react-jsx']
		}),
		commonjs({
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
		terser({
			compress: {
				passes: 2
			}
		})
	],
	external: ['react', 'react-dom']
}
