const { recommendedTemplateRules } = require("../angular-eslint-rules");

module.exports = {
	parser: "@angular-eslint/template-parser",
	plugins: ["@angular-eslint/template"],
	rules: {
		...recommendedTemplateRules,
		// This is a large consumer-side template migration that is tracked separately.
		"@angular-eslint/template/prefer-control-flow": "off"
	}
};
