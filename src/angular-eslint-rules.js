const angularEslint = require("angular-eslint");

function toConfigArray(configOrConfigs) {
	return Array.isArray(configOrConfigs) ? configOrConfigs : [configOrConfigs];
}

function mergeRules(configOrConfigs) {
	return toConfigArray(configOrConfigs).reduce((rules, config) => {
		if (config?.rules) {
			Object.assign(rules, config.rules);
		}

		return rules;
	}, {});
}

module.exports = {
	recommendedTemplateRules: mergeRules(angularEslint.configs.templateRecommended),
	recommendedTypeScriptRules: mergeRules(angularEslint.configs.tsRecommended)
};
