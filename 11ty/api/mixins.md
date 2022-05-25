---
title: API Mixins
layout: post.njk
chapterNavigation: api
---

# API Mixins
**All global API mixins by name, parameters and description.**

```scss
@use "../Neo-CSS/scss/neo-api" as *;
```
---

| Mixin Name | Parameters | Description |
| ---------- | ---------- | ----------- |
| `breakpoints` | `$properties, $values...` | Scales `$properties` across the viewport breakpoints. |
| `dark` | `@content` | A query for devices requesting dark mode. |
| `declare` | `$properties, $value` | Set multiple `$properties` to `$value`. |
| `inset` | `$value` | Set CSS top, right, bottom, left to `$value`. |
| `light` | `@content` | A query for devices requesting light mode. |
| `max-vh` | `$vh`, `@content` | A query for a maximum viewport height. |
| `max-vw` | `$vw`, `@content` | A query for a maximum viewport width. |
| `min-vh` | `$vh`, `@content` | A query for a minimum viewport height. |
| `min-vw` | `$vw`, `@content` | A query for a minimum viewport width. |
| `reduced-motion` | `@content` | A query for when the user requests reduced motion. |