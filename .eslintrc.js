module.exports = {
	extends: ['@taknepoidet-config/eslint-config'],
	rules: {
		'vuejs-accessibility/form-control-has-label': 0,
		'vue/no-v-html': 0,
		'vuejs-accessibility/label-has-for': 0,
		'import/extensions': [
			'error',
			'always',
			{
				jsx: 'never',
				js: 'never',
				ts: 'never',
				tsx: 'never'
			}
		]
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.scss', '.sass', '.ts', '.js', '.tsx', '.jsx']
			},
			webpack: {
				config: './build/prod.webpack.config.js',
				env: {
					NODE_ENV: 'local',
					production: true
				}
			}
		}
	},
	globals: {
		JSX: true
	}
};
