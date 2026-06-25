const { recommendedTemplateRules } = require("../angular-eslint-rules");

module.exports = {
	parser: "@angular-eslint/template-parser",
	plugins: ["@angular-eslint/template"],
	rules: {
		...recommendedTemplateRules
	}
};
