import * as React from 'react';
import { classes } from 'typestyle';
import { f1, measure } from './tachyons-css';
const App = () => {
    return React.createElement("div", { className: classes(f1, measure) }, "Hello");
};
React.render(document.getElementById('body'), React.createElement(App, null));
