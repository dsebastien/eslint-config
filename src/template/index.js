const { recommendedTemplateRules } = require("../angular-eslint-rules");

module.exports = {
	parser: "@angular-eslint/template-parser",
	plugins: ["@angular-eslint/template"],
	rules: {
		...recommendedTemplateRules,
		// Stark and ngx-form-errors still have large ngIf/ngFor/ngSwitch template migrations pending.
		"@angular-eslint/template/prefer-control-flow": "off"
	}
};
