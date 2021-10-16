// Require plugin for code syntax highlighting.
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	// Add code syntax highlighting.
	eleventyConfig.addPlugin(syntaxHighlight);
	// Add passthrough copies of important asset files.
	eleventyConfig.addPassthroughCopy("src/assets/images/");
	eleventyConfig.addPassthroughCopy("src/assets/css/");
	eleventyConfig.addPassthroughCopy("src/assets/js/");
	// Add year shortcode, used for copyright.
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	// Add URL prefix for Github pages.
	// Add custom includes and layouts directories.
	// Change output directory to docs, and input to src.
	return {
		pathPrefix: "/Neo-CSS/",
		dir: {
			includes: "_includes",
			layouts: "_layouts",
			input: "src",
			output: "docs",
		},
	};
};
