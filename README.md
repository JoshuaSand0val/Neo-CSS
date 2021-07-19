# Neo CSS
A modern, modular and extensible CSS boilerplate built with SASS/SCSS meant to start as a basis for something larger.

## What does Neo CSS do?
- Provides new CSS in addition to [normalize.css](https://github.com/necolas/normalize.css/) to fix additional problems with browser CSS.
- Provides a consistent styled baseline for all elements.
- Provides easy to use toolkit to allow for effortless extension.
- Provides a modular design to allow developer choice in what components are included in compile.

## Getting started with Neo CSS
Neo CSS can be extended using the core or external tools.
To get started with Neo CSS, complete the following:

1. Clone the repo and place it in a new directory (ex: `neo-css/`). This makes updating Neo CSS easy.
2. Start your new project in a new directory (ex: `my-project/`, ect.). This keeps your code separated.
3. Create a `master.scss` file and add any `@forward "<url>"` modules you created.
4. (Optional) Configure any toolkit module using the SASS `with` clause at the top of your `master.scss` file. [More info on SASS configuration](https://sass-lang.com/documentation/at-rules/forward#configuring-modules).
5. Compile using [SASS](https://sass-lang.com/install).

## Using Neo CSS toolkit
All of Neo CSS's [toolkit](scss/tools/) uses the SASS module system.
To begin using these, link the module with `@use "<url>" as <namespace>` in a new file.
An easy way to `@use` all of the tools at once is by linking the tools directory url instead. Each module will be prefixed with its filename (minus '.scss').

## Acknowledgment
Neo CSS was built by Joshua Elijah Sandoval.
Thanks to all those who worked on [normalize.css](https://github.com/necolas/normalize.css/).

## License
Neo CSS is distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.