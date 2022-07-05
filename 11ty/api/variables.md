---
title: API Variables
---

# API Variables
**All global API variables by name, value and description.**

```scss
@use "../Neo-CSS/scss/neo-api" as *;
```
---

## Color Palette

| Variable Name | Default Value | Description |
| ------------- | ------------- | ----------- |
| `$white`  | `#EBEBEF` | The color white.  |
| `$black`  | `#18181C` | The color black.  |
| `$gray`   | `#727C83` | The color gray.   |
| `$red`    | `#EF6461` | The color red.    |
| `$orange` | `#EE8434` | The color orange. |
| `$yellow` | `#FFCB47` | The color yellow. |
| `$brown`  | `#BB946C` | The color brown.  |
| `$green`  | `#74bf80` | The color green.  |
| `$blue`   | `#5490b8` | The color blue.   |
| `$teal`   | `#2a9186` | The color teal.   |
| `$cyan`   | `#6bcee7` | The color cyan.   |
| `$purple` | `#b350ed` | The color purple. |
| `$indigo` | `#9892C8` | The color indigo. |
| `$pink`   | `#F47C98` | The color pink.   |
| `$colors` | `(<color>: <value>, ...)` | A color:value map of all color variables. |

## Color Contrast

| Variable Name | Default Value | Description |
| ------------- | ------------- | ----------- |
| `$contrast-text-ratio` | `4.5` | The default color contrast ratio for text, matching the WCAG requirement of 4.5. |
| `$contrast-step-ratio` | `1.1` | The ratio for stepping up the contrast of a color. |

## Scaling Properties

| Variable Name | Default Value | Description |
| ------------- | ------------- | ----------- |
| `$scale-baseline` | `1rem` | The baseline size for padding/margin/ect. Typically in **rem** units. |
| `$scale-ratio` | `1.33` | The ratio for upscaling CSS properties. |

## Font/Text Properties

| Variable Name | Default Value | Description |
| ------------- | ------------- | ----------- |
| `$font-size` | `1rem` | The default font size. Typically in **rem** units. |
| `$font-size-ratio` | `1.125` | The ratio for upscaling text. |
| `$font` | `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"` | The default font family stack. |
| `$font-heading` | `$font` | The font stack for headings. |
| `$font-mono` | `Consolas, Monaco, monospace` | The monospaced font stack. |
| `$weight` | `400` | The default text font weight. |
| `$weight-thin` | `200` | Thinner text font weight. |
| `$weight-bold` | `600` | Bolder text font weight. |
| `$weight-heavy` | `800` | Heavy text font weight. |
| `$line-height` | `1.5` | The default text CSS line-height. |
| `$line-height-heading` | `1.33` | The CSS line-height for headings. |

## Viewport Breakpoints
**Note: Add the following. Breakpoints are designed to work on every device. Including smart-watches!**
```html
<meta name="disabled-adaptations" content="watch" />
```

| Variable Name | Default Value | Description |
| ------------- | ------------- | ----------- |
| `$xs` | `180.5px` | An extra small device breakpoint width. |
| `$sm` | `300.5px` | A small device breakpoint width. |
| `$md` | `640.5px` | A medium-sized device breakpoint width. |
| `$lg` | `980.5px` | A large device breakpoint width. |
| `$xl` | `1280.5px` | An extra large device breakpoint width. |
| `$xxl` | `1440.5px` | An extra extra large device breakpoint width. |
| `$vw-map` | `(<variable>: <value>, ...)` | A variable:value map of all viewport width variables. |
| `$breakpoints` | `(0px, $sm, $md, $lg, $xl, $xxl)` | A list, each value being a viewport width breakpoint. |

## Corner Radius

| Variable Name | Default Value | Description |
| ------------- | ------------- | ----------- |
| `$radius-xs` | `3px` | An extra small radius value. |
| `$radius-sm` | `6px` | A small radius value. |
| `$radius-md` | `9px` | A medium-sized radius value. |
| `$radius-lg` | `12px` | A large radius value. |
| `$radius-xl` | `16px` | An extra large radius value. |
| `$radius-xxl` | `24px` | An extra extra large radius value. |

## Z-Index Positioning

| Variable Name | Default Value | Description |
| ------------- | ------------- | ----------- |
| `$z-dropdown` | `100` | An index for drop-down content containers. |
| `$z-sticky` | `200` | An index for `position: sticky` containers, or anything that sticks to the page scroll that is in normal document flow. |
| `$z-fixed` | `300` | An index for inline `position: fixed` containers. |
| `$z-modal-backdrop` | `400` | An index for `position: fixed` menu backdrops. |
| `$z-modal` | `500` | An index for `position: fixed` menus. |
| `$z-popover` | `600` | An index for pop-ups or popovers. |
| `$z-tooltip` | `700` | An index for mouse-over tooltips. |

## Safe Areas
**Note: A special viewport meta content value is needed for these variables.**
```html
<meta name="viewport" content="..., viewport-fit=cover" />
```

| Variable Name | Default Value | Description |
| ------------- | ------------- | ----------- |
| `$safe-top` | `env(safe-area-inset-top)` | Top-side padding for irregular screen shapes. |
| `$safe-right` | `env(safe-area-inset-right)` | Right-side padding for irregular screen shapes. |
| `$safe-bottom` | `env(safe-area-inset-bottom)` | Bottom-side padding for irregular screen shapes. |
| `$safe-left` | `env(safe-area-inset-left)` | Left-side padding for irregular screen shapes. |
| `$safe` | `$safe-top $safe-right $safe-bottom $safe-left` | Padding for irregular screen shapes. |
| `$safe-x` | `0 $safe-right 0 $safe-left` | X-Axis padding for irregular screen shapes. |
| `$safe-y` | `$safe-top 0 $safe-bottom 0` | Y-Axis padding for irregular screen shapes. |