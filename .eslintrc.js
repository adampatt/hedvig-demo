module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"prettier",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["prettier"],
	rules: {
		"react/jsx-filename-extension": [
			1,
			{ extensions: [".js", ".jsx"] },
		],
	},
	overrides: [
		{
			files: [
				"**/*.spec.js",
				"**/*.spec.jsx",
				"**/*.test.js",
				"**/*.test.jsx",
			],
			env: {
				jest: true,
			},
		},
	],
};
