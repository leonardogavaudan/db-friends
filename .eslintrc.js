module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:eslint-plugin-next',
		'plugin:@typescript-eslint/recommended',
		// 'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'eslint-plugin-react-hooks',
		'eslint-plugin-next',
		'@typescript-eslint/eslint-plugin',
	],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
