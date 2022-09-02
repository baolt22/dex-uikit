# ApeSwap UIkit


ApeSwap UIkit is a set of React components and hooks used to build pages on ApeSwap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @luthebao/uikit`

## Setup

### Theme

Before using ApeSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@luthebao/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@luthebao/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
