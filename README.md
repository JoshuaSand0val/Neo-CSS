# Create masterful websites with Neo CSS
## A modern, modular and extensible CSS boilerplate.

**Add it to your project now via installation by NPM:**

```bash
$ npm install css-neo # Installs latest via NPM.
```

---

## What is Neo CSS?
### Neo CSS is a modern CSS starter boilerplate, which aims to streamline the process of building a website's styles from scratch. It provides the following benefits:

- Provides new CSS in addition to [normalize.css](https://github.com/necolas/normalize.css/) to fix additional problems with browser CSS.
- Provides a consistent styled baseline for all elements.
- Provides easy to use [API](https://neo.joshuasandoval.me/api/) to allow for effortless extension.
- Provides a modular design to allow developer choice in what components are included in compile.

## Getting Started
### Getting started with Neo CSS is easy! Just complete three easy steps:

1. Open a terminal (in this case, Bash) and install Neo CSS via NPM.  
*If you are unfamiliar with NPM, here is an [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).*

```bash
$ npm install css-neo # Installs latest via NPM.
```

2. Make a new `master.scss` file that links to Neo CSS.  
*Alternatively you can link to `neo-setup` instead, which just includes the API and browser fixes.*

```bash
# Creates a new SCSS file that forwards Neo CSS.
$ echo '@forward "node_modules/css-neo/scss/neo";' > master.scss
```

3. Compile using SASS.  
*If you are unfamiliar with SASS, here is an [installation guide](https://sass-lang.com/install).*

```bash
# Compiles Neo CSS SCSS into a CSS file.
$ sass --no-source-map master.scss master.css
```

## Using Neo CSS API
The Neo CSS API uses the SASS module system.
To begin using it, link the entry file with `@use`:

```scss
@use "node_modules/css-neo/scss/neo-api" as *;
```

But more ideally, `@forward` the above code instead, and `@use` that file instead for simplicity.

[Learn more about the API.](https://neo.joshuasandoval.me/api/)

## Acknowledgment
Neo CSS was built by Joshua Elijah Sandoval.
Thanks to all those who worked on [normalize.css](https://github.com/necolas/normalize.css/).

## License
Neo CSS is distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.