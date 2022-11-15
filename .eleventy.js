// Require 11ty site metadata.
const site = require("./11ty/_data/site.js");
// Require plugin for code syntax highlighting.
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = eleventyConfig => {
	// Add code syntax highlighting plugin.
	eleventyConfig.addPlugin(syntaxHighlight);
	// Add passthrough copy of website asset files.
	eleventyConfig.addPassthroughCopy("assets/");
	// Add year shortcode, used for copyright.
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	// Add filter that converts URLs into a canonical version:
	eleventyConfig.addFilter("canonicalURL", (value) => {
		return [site.url, value].join("/").replace(/([^:]\/)\/+/g, "$1");
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
