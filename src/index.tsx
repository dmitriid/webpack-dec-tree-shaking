import * as React from 'react'
import { classes } from 'typestyle'
import { f1, measure } from './tachyons-css'

const App = () => {
  return <div className={classes(f1, measure)}>Hello</div>
}

React.render(document.getElementById('body'), <App />)
