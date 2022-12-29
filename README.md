# A modern CSS API built with SASS/SCSS.

**Add it to your project now via installation by NPM:**

```bash
$ npm install api.css
```

---

## What is API.css?
API.css is a modern CSS API, purpose built to streamline the creation of consistent CSS.

## Get started using API.css
### Getting started is easy! Just complete a few steps!

1. Open a terminal (in this case, Bash) and install via NPM.  
*If you are unfamiliar with NPM, here is an [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).*

```bash
$ npm install api.css
```

2. Make a new `api.scss` file and forward the package.  
*You can optionally [configure any variables](https://sass-lang.com/documentation/at-rules/forward#configuring-modules) using `with()` in SASS.*

```scss
@forward "node_modules/api.css/scss/";
```

3. Make a new `master.scss` file and write CSS using the package.  
*[Learn more about what is possible with API.css.](https://neo.joshuasandoval.me/api/)*

```scss
@use "api" as *;
```

4. Compile using SASS.  
*If you are unfamiliar with SASS, here is an [installation guide](https://sass-lang.com/install).*

```bash
$ sass --no-source-map master.scss master.css
```

## Acknowledgment
API.css was built by Joshua Elijah Sandoval.

## License
API.css is distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.