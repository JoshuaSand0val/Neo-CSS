---
title: API Functions
layout: post.njk
chapterNavigation: api
---

# API Functions
**All global API functions by name, parameters and description.**

```scss
@use "../Neo-CSS/scss/neo-api" as *;
```
---

| Function Name | Parameters | Description |
| ------------- | ---------- | ----------- |
| `accessible` | `$color1, $color2, $ratio` | Adjusts constrast of `$color1` to be contrast `$ratio` on `$color2`. |
| `color-shift` | `$color, $perc` | Lightens/Darkens `$color` by `$perc` based on lightness. |
| `contrast` | `$color1, $color2` | Gets the contrast ratio between `$color1` and `$color2`. Based on <https://www.w3.org/TR/WCAG20/#contrast-ratiodef> |
| `font-size` | `$step` | Scales font based on `$step`. |
| `luminance` | `$color` | Gets the relative luminance of `$color`. Based on <https://www.w3.org/TR/WCAG20/#relativeluminancedef> |
| `px` | `$value` | Converts 'px' units into 'rem' units. |
| `shade` | `$color, $perc` | Darkens `$color` by `$perc`. |
| `size` | `$step` | Scales value based on `$step`. |
| `step-color` | `$color, $step, $ratio: $contrast-step-ratio` | Steps `$color` contrast by `$ratio`, `$step` number of times. |
| `step` | `$value, $ratio, $step` | Steps `$value` up/down based on `$ratio`. |
| `text-color` | `$color1, $color2, $ratio: $contrast-text-ratio` | Adjusts `$color1` contrast to be legible on `$color2`. |
| `tint` | `$color, $perc` | Lightens `$color` by `$perc`. |
| `tone` | `$color, $perc` | Grays `$color` by `$perc`. |