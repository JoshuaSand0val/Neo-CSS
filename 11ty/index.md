---
title: Neo CSS
description: A modern, modular and extensible CSS boilerplate.
layout: post
chapters:
    What is Neo CSS?: "#what-is"
    Getting Started: "#getting-started"
    Using Neo CSS API: "#using-api"
    Acknowledgment: "#acknowledgment"
    License: "#license"
---

# Create masterful websites with Neo CSS
## A modern, modular and extensible CSS boilerplate.

**Add it to your project now via installation by NPM:**

```bash
$ npm install css-neo # Installs {{ site.code.version }} via NPM.
```

---

## <span id="what-is">What is Neo CSS?</span>
### Neo CSS is a modern, modular and extensible CSS boilerplate written in SCSS, built to correct styles across browser engines.

**It provides the following benefits:**
- New CSS in addition to [normalize.css](https://github.com/necolas/normalize.css/) to fix additional problems with browser CSS.
- A consistent styled baseline for all elements.
- Easy to use [API]({{ '/api/' | url }}) to allow for effortless extension.
- Modular design to allow developer choice in what components are included in compile.

## <span id="getting-started">Getting Started</span>
### Getting started with Neo CSS is easy! Just complete three easy steps:

1. Open a terminal (in this case, Bash) and install Neo CSS via NPM.  
*If you are unfamiliar with NPM, here is an [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).*

```bash
$ npm install css-neo # Installs {{ site.code.version }} via NPM.
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

## <span id="using-api">Using Neo CSS API</span>
The Neo CSS API uses the SASS module system.
To begin using it, link the entry file with `@use`:

```scss
@use "node_modules/css-neo/scss/neo-api" as *;
```

But more ideally, `@forward` the above code instead, and `@use` that file instead for simplicity.

[Learn more about the API.]({{ '/api/' | url }})

## <span id="acknowledgment">Acknowledgment</span>
Neo CSS was built by Joshua Elijah Sandoval.
Thanks to all those who worked on [normalize.css](https://github.com/necolas/normalize.css/).

## <span id="license">License</span>
Neo CSS is distributed under the [{{ site.code.license.type }}]({{ site.code.license.url }}) License.