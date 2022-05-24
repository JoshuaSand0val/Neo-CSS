// Require plugin for code syntax highlighting.
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	// Add code syntax highlighting plugin.
	eleventyConfig.addPlugin(syntaxHighlight);
	// Add passthrough copies of production asset files.
	eleventyConfig.addPassthroughCopy("assets/");
	// Add year shortcode, used for copyright.
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	// Customize I/O and template directories.
	return {
		dir: {
			layouts: "_layouts",
			input: "11ty",
			output: "docs",
		},
	};
};
