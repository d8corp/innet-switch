<a href="https://www.npmjs.com/package/innet">
  <img src="https://raw.githubusercontent.com/d8corp/innet/main/logo.svg" align="left" width="90" height="90" alt="InnetJs logo by Mikhail Lysikov">
</a>

# &nbsp; @innet/switch

&nbsp;

[![NPM](https://img.shields.io/npm/v/@innet/switch.svg)](https://www.npmjs.com/package/@innet/switch)
[![downloads](https://img.shields.io/npm/dm/@innet/switch.svg)](https://www.npmtrends.com/@innet/switch)
[![changelog](https://img.shields.io/badge/Changelog-⋮-brightgreen)](https://changelogs.xyz/@innet/switch)
[![license](https://img.shields.io/npm/l/@innet/switch)](https://github.com/d8corp/innet-switch/blob/main/LICENSE)

## Abstract
`switch` is a [jsx plugin](https://www.npmjs.com/package/@innet/jsx).  
It helps to select the first children that does not return `undefined`.

[![stars](https://img.shields.io/github/stars/d8corp/innet-switch?style=social)](https://github.com/d8corp/innet-switch/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet-switch?style=social)](https://github.com/d8corp/innet-switch/watchers)

## Install
npm
```bash
npm i @innet/switch
```
yarn
```bash
yarn add @innet/switch
```

## switchSync
Use it if you do not want to handle promises.

```typescript jsx
import innet, { createHandler } from 'innet'
import { switchSync } from '@innet/switch'
import { jsxPlugins } from '@innet/jsx'
import { object } from '@innet/utils'

const handler = createHandler([
  object([
    jsxPlugins({
      switch: switchSync,
    }),
  ]),
])

const app = (
  <switch>
    {undefined}
    test1
    {'test2'}
  </switch>
)

innet(app, handler)
// 'test1'
```

## switchAsync
Use it when you want to handle promises.  
It waits while a promise ends and the continues the checking.

```typescript jsx
import innet, { createHandler } from 'innet'
import { switchAsync } from '@innet/switch'
import { jsxPlugins } from '@innet/jsx'
import { object } from '@innet/utils'

const handler = createHandler([
  object([
    jsxPlugins({
      switch: switchAsync,
    }),
  ]),
])

const app = (
  <switch>
    {undefined}
    {new Promise(resolve => resolve('test1'))}
    {'test2'}
  </switch>
)

await innet(app, handler)
// 'test1'
```

Change `resolve('test1')` to `resolve(undefined)` and you get `test2`

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-switch/issues).

[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-switch)](https://github.com/d8corp/innet-switch/issues)
