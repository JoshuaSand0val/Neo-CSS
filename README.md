# Neo CSS
A modern, modular and extensible CSS boilerplate built with SASS/SCSS meant to start as a basis for something larger.

## What does Neo CSS do?
- Provides new CSS in addition to [normalize.css](https://github.com/necolas/normalize.css/) to fix additional problems with browser CSS.
- Provides a consistent styled baseline for all elements.
- Provides easy to use toolkit to allow for effortless extension.
- Provides a modular design to allow developer choice in what components are included in compile.

## Getting started with Neo CSS
Neo CSS can extended using the core or external tools.
To get started with Neo CSS, complete the following:

1. Clone the repo and navigate to `/scss/`.
2. Create extensions and place them in a new directory (ex: `/layout/`, `/content/`, ect.).
2. Open [neo.scss](scss/neo.scss).
3. Add any `@forward` modules you created.
4. Compile using [SASS](https://sass-lang.com/install).

## Using Neo CSS toolkit
All of Neo CSS's toolkit uses the SASS module system.
To begin using any of the tools, first link the module with `@use`.

Neo CSS's toolkit is intuitive and condensed. If you know SASS/SCSS,
you can probably just pick up and use them.

However, there are some key things to understand.

### Themed Variable Maps
Many variables are defined using SASS maps, to support multiple themes.
Currently supported are values for light and dark themes.

The premier way to include these values in styles is with the `theme()` mixin.
Either from the [`color.scss`](scss/tools/color.scss) module,
or the [`media.scss`](scss/tools/media.scss) module.

Note that alternatively, you can define these values as CSS Custom Properties (Variables)
using the mixin, for an easier syntax for styles such as `box-shadow`.

### Spacing and Text Size
Neo CSS provides a step system for sizing padding, margin, ect., and typography.
They can be utilized either by a function, or by a mixin.

- The `size()` function for a single CSS property.
- The `size()` mixin for multiple properties.
- The `size-viewport()` mixin to scale with the viewport.

Note that the spacing module also supports precise values with the `px()` function.

## Acknowledgment
Neo CSS was built by Joshua Elijah Sandoval.
Thanks to all those who worked on [normalize.css](https://github.com/necolas/normalize.css/).

## License
Neo CSS is distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.