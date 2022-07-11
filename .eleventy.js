// Require plugin for code syntax highlighting.
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = eleventyConfig => {
	// Add code syntax highlighting plugin.
	eleventyConfig.addPlugin(syntaxHighlight);
	// Add passthrough copy of website asset files.
	eleventyConfig.addPassthroughCopy("assets/");
	// Add year shortcode, used for copyright.
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	// Add filter that trims duplicate forward slashes in a URL:
	eleventyConfig.addFilter("trimURLslashes", (value) => {
		return value.replace(/([^:]\/)\/+/g, "$1");
	});
	// Customize I/O and template directories.
	return {
		dir: {
			layouts: "_layouts",
			input: "11ty",
			output: "docs"
		},
	};
};
