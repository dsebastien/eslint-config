module.exports = {
	overrides: [
		{
			files: ["*.ts"],
			extends: ["./typescript"]
		},
		{
			files: ["*.spec.ts"],
			extends: ["./test"]
		},
		{
			files: ["*.html"],
			extends: ["./template"]
		}
	]
};
