---
title: Modern CSS Boilerplate
layout: post.njk
---

# A modern, modular and extensible CSS boilerplate.
**Start your new project today by cloning the repo:**

```shell
$ git clone https://github.com/JoshuaSand0val/Neo-CSS.git
```

---

## What does Neo CSS do?
- Provides new CSS in addition to [normalize.css](https://github.com/necolas/normalize.css/) to fix additional problems with browser CSS.
- Provides a consistent styled baseline for all elements.
- Provides easy to use [API](/api/) to allow for effortless extension.
- Provides a modular design to allow developer choice in what components are included in compile.

## Getting started with Neo CSS
To get started with Neo CSS, complete the following:

1. Start your new project in a new directory and clone the repo.

```shell
$ mkdir my-project
$ cd my-project
$ git clone https://github.com/JoshuaSand0val/Neo-CSS.git
```

2. Make a new `master.scss` file in a separate directory that links to Neo CSS.

```shell
$ mkdir my-scss
$ cd my-scss
$ echo @forward "../Neo-CSS/scss/neo"; > master.scss
```

3. Compile using [SASS](https://sass-lang.com/install).

```shell
$ sass master.scss output.css
```

## Using Neo CSS API
The Neo CSS API uses the SASS module system.
To begin using it, link the entry file with `@use`:

```scss
@use "../Neo-CSS/scss/neo-api" as *;
```

[Learn more about the API.]({{ '/api/' | url }})

## Acknowledgment
Neo CSS was built by Joshua Elijah Sandoval.
Thanks to all those who worked on [normalize.css](https://github.com/necolas/normalize.css/).

## License
Neo CSS is distributed under the [{{ metadata.license.type }}]({{ metadata.license.url }}) License.