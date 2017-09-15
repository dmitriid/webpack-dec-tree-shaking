# webpack-dec-tree-shaking

The issue in this repo has apparently been around for some time: https://github.com/webpack/webpack/issues/4784

*Note:* The original code is in Typescript, *but* webpack is instructed to work 
with the `compiled/` code. The compiled code is ES6 modules.

*Note:* UglifyJS is set up to leave comments intact in the generated code.

## How to run

If you want to recompile Typescript code:

```bash
npm run tsc
```

I fyou want to see webpack behaviour:

```bash
npm run webpack

```

## Overview

A quick run-through of what's happening:

- `tachyons-css` contains a lot of code like this:

```js
import * as typestyle from 'typestyle';
/*
    Changing this to
        import {style, media} from 'typestyle
    doesn't change anything
*/

export const html = typestyle.style({/*...*/})
export const body = typestyle.style({/*...*/})
/*...*/
export const bordercolorBlack40 = typestyle.style({/*...*/})
export const flexNone = typestyle.style({/*...*/})

```

- `index` imports only a couple of these constants:

```typescript
import * as React from 'react'
import { classes } from 'typestyle'
import { f1, measure } from './tachyons-css'


const App = () => {
  return <div className={classes(f1, measure)}>Hello</div>
}

React.render(document.getElementById('body'), <App />)
```

When you run webpack to bundle this:

- webpack correctly recognizes unused exports:

```javascript
/* unused harmony export body */
/* unused harmony export article */
/* unused harmony export aside */
/* unused harmony export footer */
/* unused harmony export header */
/* unused harmony export nav */
/* unused harmony export section */
/* unused harmony export h1 */
/* unused harmony export figcaption */
/* unused harmony export figure */
/* unused harmony export main */
/* unused harmony export hr */
/* unused harmony export pre */
/* unused harmony export a */
/* etc. */
```

- all the constants remain in generated code:

```javascript
m.c({$debugName:"bordercolorRed",borderColor:"#ff4136"}),
m.c({$debugName:"bordercolorLightred",borderColor:"#ff725c"}),
m.c({$debugName:"bordercolorOrange",borderColor:"#ff6300"}),
/* etc. */

```
