const sonarjs = require("eslint-plugin-sonarjs");

const historicalRecommendedRules = [
	"sonarjs/cognitive-complexity",
	"sonarjs/elseif-without-else",
	"sonarjs/max-switch-cases",
	"sonarjs/no-all-duplicated-branches",
	"sonarjs/no-collapsible-if",
	"sonarjs/no-collection-size-mischeck",
	"sonarjs/no-duplicate-string",
	"sonarjs/no-duplicated-branches",
	"sonarjs/no-element-overwrite",
	"sonarjs/no-empty-collection",
	"sonarjs/no-extra-arguments",
	"sonarjs/no-gratuitous-expressions",
	"sonarjs/no-identical-conditions",
	"sonarjs/no-identical-expressions",
	"sonarjs/no-identical-functions",
	"sonarjs/no-ignored-return",
	"sonarjs/no-inverted-boolean-check",
	"sonarjs/no-nested-switch",
	"sonarjs/no-nested-template-literals",
	"sonarjs/no-one-iteration-loop",
	"sonarjs/no-redundant-boolean",
	"sonarjs/no-redundant-jump",
	"sonarjs/no-same-line-conditional",
	"sonarjs/no-small-switch",
	"sonarjs/no-unused-collection",
	"sonarjs/no-use-of-empty-return-value",
	"sonarjs/no-useless-catch",
	"sonarjs/non-existent-operator",
	"sonarjs/prefer-immediate-return",
	"sonarjs/prefer-object-literal",
	"sonarjs/prefer-single-boolean-return",
	"sonarjs/prefer-while"
];

const recommendedLegacyRules = sonarjs.configs["recommended-legacy"].rules;

module.exports = {
	plugins: ["sonarjs"],
	rules: historicalRecommendedRules.reduce((rules, ruleName) => {
		if (ruleName in recommendedLegacyRules) {
			rules[ruleName] = recommendedLegacyRules[ruleName];
		}

		return rules;
	}, {})
};
