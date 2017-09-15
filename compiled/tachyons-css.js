import * as typestyle from 'typestyle';
export const html = typestyle.style({
    $debugName: 'html',
    lineHeight: 1.15,
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%',
    boxSizing: 'border-box'
});
export const body = typestyle.style({
    $debugName: 'body',
    margin: 0,
    boxSizing: 'border-box'
});
export const article = typestyle.style({
    $debugName: 'article',
    display: 'block',
    boxSizing: 'border-box'
});
export const aside = typestyle.style({ $debugName: 'aside', display: 'block' });
export const footer = typestyle.style({
    $debugName: 'footer',
    display: 'block',
    boxSizing: 'border-box'
});
export const header = typestyle.style({
    $debugName: 'header',
    display: 'block',
    boxSizing: 'border-box'
});
export const nav = typestyle.style({ $debugName: 'nav', display: 'block' });
export const section = typestyle.style({
    $debugName: 'section',
    display: 'block',
    boxSizing: 'border-box'
});
export const h1 = typestyle.style({
    $debugName: 'h1',
    fontSize: '2em',
    margin: '.67em 0',
    boxSizing: 'border-box'
});
export const figcaption = typestyle.style({
    $debugName: 'figcaption',
    display: 'block'
});
export const figure = typestyle.style({
    $debugName: 'figure',
    display: 'block',
    margin: '1em 40px'
});
export const main = typestyle.style({
    $debugName: 'main',
    display: 'block',
    boxSizing: 'border-box'
});
export const hr = typestyle.style({
    $debugName: 'hr',
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible'
});
export const pre = typestyle.style({
    $debugName: 'pre',
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
    boxSizing: 'border-box',
    overflowX: 'auto',
    overflowY: 'hidden',
    overflow: 'scroll'
});
export const a = typestyle.style({
    $debugName: 'a',
    backgroundColor: 'transparent',
    '-webkit-text-decoration-skip': 'objects',
    boxSizing: 'border-box'
});
export const abbrTitle = typestyle.style({
    $debugName: 'abbrTitle',
    borderBottom: 'none',
    textDecoration: ['underline', 'underline dotted']
});
export const b = typestyle.style({ $debugName: 'b', fontWeight: 'bold' });
export const strong = typestyle.style({
    $debugName: 'strong',
    fontWeight: 'bolder'
});
export const code = typestyle.style({
    $debugName: 'code',
    fontFamily: 'Consolas, monaco, monospace',
    fontSize: '1em',
    boxSizing: 'border-box'
});
export const kbd = typestyle.style({
    $debugName: 'kbd',
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
});
export const samp = typestyle.style({
    $debugName: 'samp',
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
});
export const dfn = typestyle.style({ $debugName: 'dfn', fontStyle: 'italic' });
export const mark = typestyle.style({
    $debugName: 'mark',
    backgroundColor: '#ff0',
    color: '#000'
});
export const small = typestyle.style({ $debugName: 'small', fontSize: '80%' });
export const sub = typestyle.style({
    $debugName: 'sub',
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
    bottom: '-0.25em'
});
export const sup = typestyle.style({
    $debugName: 'sup',
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
    top: '-0.5em'
});
export const audio = typestyle.style({
    $debugName: 'audio',
    display: 'inline-block',
    $nest: { '&:not([controls])': { display: 'none', height: 0 } }
});
export const video = typestyle.style({
    $debugName: 'video',
    display: 'inline-block'
});
export const img = typestyle.style({ $debugName: 'img', maxWidth: '100%' });
export const svg = typestyle.style({
    $debugName: 'svg',
    $nest: {
        '&:not(': { overflow: 'hidden' },
        '&:root)': { overflow: 'hidden' }
    }
});
export const button = typestyle.style({
    $debugName: 'button',
    fontFamily: 'sans-serif',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: 0,
    overflow: 'visible',
    textTransform: 'none',
    '-webkit-appearance': 'button',
    $nest: { '&:-moz-focusring': { outline: '1px dotted ButtonText' } }
});
export const input = typestyle.style({
    $debugName: 'input',
    fontFamily: 'sans-serif',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: 0,
    overflow: 'visible'
});
export const optgroup = typestyle.style({
    $debugName: 'optgroup',
    fontFamily: 'sans-serif',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: 0
});
export const select = typestyle.style({
    $debugName: 'select',
    fontFamily: 'sans-serif',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: 0,
    textTransform: 'none'
});
export const textarea = typestyle.style({
    $debugName: 'textarea',
    fontFamily: 'sans-serif',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: 0,
    overflow: 'auto',
    boxSizing: 'border-box'
});
export const htmlTypeButton = typestyle.style({
    $debugName: 'htmlTypeButton',
    '-webkit-appearance': 'button'
});
export const typeReset = typestyle.style({
    $debugName: 'typeReset',
    '-webkit-appearance': 'button',
    $nest: { '&:-moz-focusring': { outline: '1px dotted ButtonText' } }
});
export const typeSubmit = typestyle.style({
    $debugName: 'typeSubmit',
    '-webkit-appearance': 'button',
    $nest: { '&:-moz-focusring': { outline: '1px dotted ButtonText' } }
});
export const typeButton = typestyle.style({
    $debugName: 'typeButton',
    $nest: { '&:-moz-focusring': { outline: '1px dotted ButtonText' } }
});
export const fieldset = typestyle.style({
    $debugName: 'fieldset',
    padding: '.35em .75em .625em',
    boxSizing: 'border-box'
});
export const legend = typestyle.style({
    $debugName: 'legend',
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: 0,
    whiteSpace: 'normal'
});
export const progress = typestyle.style({
    $debugName: 'progress',
    display: 'inline-block',
    verticalAlign: 'baseline'
});
export const typeCheckbox = typestyle.style({
    $debugName: 'typeCheckbox',
    boxSizing: 'border-box',
    padding: 0
});
export const typeRadio = typestyle.style({
    $debugName: 'typeRadio',
    boxSizing: 'border-box',
    padding: 0
});
export const typeNumber = typestyle.style({
    $debugName: 'typeNumber',
    $nest: {
        '&:': { height: 'auto' },
        '&:-webkit-outer-spin-button': { height: 'auto' }
    }
});
export const typeSearch = typestyle.style({
    $debugName: 'typeSearch',
    '-webkit-appearance': 'textfield',
    outlineOffset: '-2px',
    $nest: {
        '&:': { '-webkit-appearance': 'none' },
        '&:-webkit-search-decoration': { '-webkit-appearance': 'none' }
    }
});
export const undefined = typestyle.style({
    $debugName: 'undefined',
    $nest: {
        '&:': { '-webkit-appearance': 'button', font: 'inherit' },
        '&:-webkit-file-upload-button': {
            '-webkit-appearance': 'button',
            font: 'inherit'
        }
    }
});
export const details = typestyle.style({
    $debugName: 'details',
    display: 'block'
});
export const menu = typestyle.style({ $debugName: 'menu', display: 'block' });
export const summary = typestyle.style({
    $debugName: 'summary',
    display: 'list-item'
});
export const canvas = typestyle.style({
    $debugName: 'canvas',
    display: 'inline-block'
});
export const template = typestyle.style({
    $debugName: 'template',
    display: 'none'
});
export const hidden = typestyle.style({
    $debugName: 'hidden',
    display: 'none'
});
export const div = typestyle.style({
    $debugName: 'div',
    boxSizing: 'border-box'
});
export const form = typestyle.style({
    $debugName: 'form',
    boxSizing: 'border-box'
});
export const h2 = typestyle.style({
    $debugName: 'h2',
    boxSizing: 'border-box'
});
export const h3 = typestyle.style({
    $debugName: 'h3',
    boxSizing: 'border-box'
});
export const h4 = typestyle.style({
    $debugName: 'h4',
    boxSizing: 'border-box'
});
export const h5 = typestyle.style({
    $debugName: 'h5',
    boxSizing: 'border-box'
});
export const h6 = typestyle.style({
    $debugName: 'h6',
    boxSizing: 'border-box'
});
export const p = typestyle.style({ $debugName: 'p', boxSizing: 'border-box' });
export const ul = typestyle.style({
    $debugName: 'ul',
    boxSizing: 'border-box'
});
export const ol = typestyle.style({
    $debugName: 'ol',
    boxSizing: 'border-box'
});
export const li = typestyle.style({
    $debugName: 'li',
    boxSizing: 'border-box'
});
export const dl = typestyle.style({
    $debugName: 'dl',
    boxSizing: 'border-box'
});
export const dt = typestyle.style({
    $debugName: 'dt',
    boxSizing: 'border-box'
});
export const dd = typestyle.style({
    $debugName: 'dd',
    boxSizing: 'border-box'
});
export const table = typestyle.style({
    $debugName: 'table',
    boxSizing: 'border-box'
});
export const td = typestyle.style({
    $debugName: 'td',
    boxSizing: 'border-box'
});
export const th = typestyle.style({
    $debugName: 'th',
    boxSizing: 'border-box'
});
export const tr = typestyle.style({
    $debugName: 'tr',
    boxSizing: 'border-box'
});
export const inputTypeEmail = typestyle.style({
    $debugName: 'inputTypeEmail',
    boxSizing: 'border-box'
});
export const inputTypeNumber = typestyle.style({
    $debugName: 'inputTypeNumber',
    boxSizing: 'border-box'
});
export const inputTypePassword = typestyle.style({
    $debugName: 'inputTypePassword',
    boxSizing: 'border-box'
});
export const inputTypeTel = typestyle.style({
    $debugName: 'inputTypeTel',
    boxSizing: 'border-box'
});
export const inputTypeText = typestyle.style({
    $debugName: 'inputTypeText',
    boxSizing: 'border-box'
});
export const inputTypeUrl = typestyle.style({
    $debugName: 'inputTypeUrl',
    boxSizing: 'border-box'
});
export const borderBox = typestyle.style({
    $debugName: 'borderBox',
    boxSizing: 'border-box'
});
export const aspectratio = typestyle.style({
    $debugName: 'aspectratio',
    height: 0,
    position: 'relative'
});
export const aspectratio16x9 = typestyle.style({
    $debugName: 'aspectratio16x9',
    paddingBottom: '56.25%'
});
export const aspectratio9x16 = typestyle.style({
    $debugName: 'aspectratio9x16',
    paddingBottom: '177.77%'
});
export const aspectratio4x3 = typestyle.style({
    $debugName: 'aspectratio4x3',
    paddingBottom: '75%'
});
export const aspectratio3x4 = typestyle.style({
    $debugName: 'aspectratio3x4',
    paddingBottom: '133.33%'
});
export const aspectratio6x4 = typestyle.style({
    $debugName: 'aspectratio6x4',
    paddingBottom: '66.6%'
});
export const aspectratio4x6 = typestyle.style({
    $debugName: 'aspectratio4x6',
    paddingBottom: '150%'
});
export const aspectratio8x5 = typestyle.style({
    $debugName: 'aspectratio8x5',
    paddingBottom: '62.5%'
});
export const aspectratio5x8 = typestyle.style({
    $debugName: 'aspectratio5x8',
    paddingBottom: '160%'
});
export const aspectratio7x5 = typestyle.style({
    $debugName: 'aspectratio7x5',
    paddingBottom: '71.42%'
});
export const aspectratio5x7 = typestyle.style({
    $debugName: 'aspectratio5x7',
    paddingBottom: '140%'
});
export const aspectratio1x1 = typestyle.style({
    $debugName: 'aspectratio1x1',
    paddingBottom: '100%'
});
export const aspectratioObject = typestyle.style({
    $debugName: 'aspectratioObject',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100
});
export const backgroundsizeCover = typestyle.style({
    $debugName: 'backgroundsizeCover',
    backgroundSize: 'cover'
});
export const backgroundsizeContain = typestyle.style({
    $debugName: 'backgroundsizeContain',
    backgroundSize: 'contain'
});
export const backgroundpositionCenter = typestyle.style({
    $debugName: 'backgroundpositionCenter',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
});
export const backgroundpositionTop = typestyle.style({
    $debugName: 'backgroundpositionTop',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center'
});
export const backgroundpositionRight = typestyle.style({
    $debugName: 'backgroundpositionRight',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right'
});
export const backgroundpositionBottom = typestyle.style({
    $debugName: 'backgroundpositionBottom',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center'
});
export const backgroundpositionLeft = typestyle.style({
    $debugName: 'backgroundpositionLeft',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center left'
});
export const outline = typestyle.style({
    $debugName: 'outline',
    outline: '1px solid'
});
export const outlineTransparent = typestyle.style({
    $debugName: 'outlineTransparent',
    outline: '1px solid transparent'
});
export const outline0 = typestyle.style({ $debugName: 'outline0', outline: 0 });
export const border = typestyle.style({
    $debugName: 'border',
    borderStyle: 'solid',
    borderWidth: '1px'
});
export const borderAll = typestyle.style({
    $debugName: 'borderAll',
    borderStyle: 'solid',
    borderWidth: '1px'
});
export const borderTop = typestyle.style({
    $debugName: 'borderTop',
    borderTopStyle: 'solid',
    borderTopWidth: '1px'
});
export const borderRight = typestyle.style({
    $debugName: 'borderRight',
    borderRightStyle: 'solid',
    borderRightWidth: '1px'
});
export const borderBottom = typestyle.style({
    $debugName: 'borderBottom',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px'
});
export const borderLeft = typestyle.style({
    $debugName: 'borderLeft',
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px'
});
export const borderNone = typestyle.style({
    $debugName: 'borderNone',
    borderStyle: 'solid',
    borderWidth: 0
});
export const bordercolorBlack = typestyle.style({
    $debugName: 'bordercolorBlack',
    borderColor: '#000'
});
export const bordercolorNearblack = typestyle.style({
    $debugName: 'bordercolorNearblack',
    borderColor: '#111'
});
export const bordercolorDarkgray = typestyle.style({
    $debugName: 'bordercolorDarkgray',
    borderColor: '#333'
});
export const bordercolorDarkgrey = typestyle.style({
    $debugName: 'bordercolorDarkgrey',
    borderColor: '#333'
});
export const bordercolorMidgray = typestyle.style({
    $debugName: 'bordercolorMidgray',
    borderColor: '#555'
});
export const bordercolorMidgrey = typestyle.style({
    $debugName: 'bordercolorMidgrey',
    borderColor: '#555'
});
export const bordercolorGray = typestyle.style({
    $debugName: 'bordercolorGray',
    borderColor: '#777'
});
export const bordercolorGrey = typestyle.style({
    $debugName: 'bordercolorGrey',
    borderColor: '#777'
});
export const bordercolorSilver = typestyle.style({
    $debugName: 'bordercolorSilver',
    borderColor: '#999'
});
export const bordercolorMoongray = typestyle.style({
    $debugName: 'bordercolorMoongray',
    borderColor: '#ccc'
});
export const bordercolorMoongrey = typestyle.style({
    $debugName: 'bordercolorMoongrey',
    borderColor: '#ccc'
});
export const bordercolorLightsilver = typestyle.style({
    $debugName: 'bordercolorLightsilver',
    borderColor: '#aaa'
});
export const bordercolorLightgray = typestyle.style({
    $debugName: 'bordercolorLightgray',
    borderColor: '#eee'
});
export const bordercolorLightgrey = typestyle.style({
    $debugName: 'bordercolorLightgrey',
    borderColor: '#eee'
});
export const bordercolorNearwhite = typestyle.style({
    $debugName: 'bordercolorNearwhite',
    borderColor: '#f4f4f4'
});
export const bordercolorWhite = typestyle.style({
    $debugName: 'bordercolorWhite',
    borderColor: '#fff'
});
export const bordercolorWhite90 = typestyle.style({
    $debugName: 'bordercolorWhite90',
    borderColor: 'rgba( 255, 255, 255, .9 )'
});
export const bordercolorWhite80 = typestyle.style({
    $debugName: 'bordercolorWhite80',
    borderColor: 'rgba( 255, 255, 255, .8 )'
});
export const bordercolorWhite70 = typestyle.style({
    $debugName: 'bordercolorWhite70',
    borderColor: 'rgba( 255, 255, 255, .7 )'
});
export const bordercolorWhite60 = typestyle.style({
    $debugName: 'bordercolorWhite60',
    borderColor: 'rgba( 255, 255, 255, .6 )'
});
export const bordercolorWhite50 = typestyle.style({
    $debugName: 'bordercolorWhite50',
    borderColor: 'rgba( 255, 255, 255, .5 )'
});
export const bordercolorWhite40 = typestyle.style({
    $debugName: 'bordercolorWhite40',
    borderColor: 'rgba( 255, 255, 255, .4 )'
});
export const bordercolorWhite30 = typestyle.style({
    $debugName: 'bordercolorWhite30',
    borderColor: 'rgba( 255, 255, 255, .3 )'
});
export const bordercolorWhite20 = typestyle.style({
    $debugName: 'bordercolorWhite20',
    borderColor: 'rgba( 255, 255, 255, .2 )'
});
export const bordercolorWhite10 = typestyle.style({
    $debugName: 'bordercolorWhite10',
    borderColor: 'rgba( 255, 255, 255, .1 )'
});
export const bordercolorWhite05 = typestyle.style({
    $debugName: 'bordercolorWhite05',
    borderColor: 'rgba( 255, 255, 255, .05 )'
});
export const bordercolorWhite025 = typestyle.style({
    $debugName: 'bordercolorWhite025',
    borderColor: 'rgba( 255, 255, 255, .025 )'
});
export const bordercolorWhite0125 = typestyle.style({
    $debugName: 'bordercolorWhite0125',
    borderColor: 'rgba( 255, 255, 255, .0125 )'
});
export const bordercolorBlack90 = typestyle.style({
    $debugName: 'bordercolorBlack90',
    borderColor: 'rgba( 0, 0, 0, .9 )'
});
export const bordercolorBlack80 = typestyle.style({
    $debugName: 'bordercolorBlack80',
    borderColor: 'rgba( 0, 0, 0, .8 )'
});
export const bordercolorBlack70 = typestyle.style({
    $debugName: 'bordercolorBlack70',
    borderColor: 'rgba( 0, 0, 0, .7 )'
});
export const bordercolorBlack60 = typestyle.style({
    $debugName: 'bordercolorBlack60',
    borderColor: 'rgba( 0, 0, 0, .6 )'
});
export const bordercolorBlack50 = typestyle.style({
    $debugName: 'bordercolorBlack50',
    borderColor: 'rgba( 0, 0, 0, .5 )'
});
export const bordercolorBlack40 = typestyle.style({
    $debugName: 'bordercolorBlack40',
    borderColor: 'rgba( 0, 0, 0, .4 )'
});
export const bordercolorBlack30 = typestyle.style({
    $debugName: 'bordercolorBlack30',
    borderColor: 'rgba( 0, 0, 0, .3 )'
});
export const bordercolorBlack20 = typestyle.style({
    $debugName: 'bordercolorBlack20',
    borderColor: 'rgba( 0, 0, 0, .2 )'
});
export const bordercolorBlack10 = typestyle.style({
    $debugName: 'bordercolorBlack10',
    borderColor: 'rgba( 0, 0, 0, .1 )'
});
export const bordercolorBlack05 = typestyle.style({
    $debugName: 'bordercolorBlack05',
    borderColor: 'rgba( 0, 0, 0, .05 )'
});
export const bordercolorBlack025 = typestyle.style({
    $debugName: 'bordercolorBlack025',
    borderColor: 'rgba( 0, 0, 0, .025 )'
});
export const bordercolorBlack0125 = typestyle.style({
    $debugName: 'bordercolorBlack0125',
    borderColor: 'rgba( 0, 0, 0, .0125 )'
});
export const bordercolorDarkred = typestyle.style({
    $debugName: 'bordercolorDarkred',
    borderColor: '#e7040f'
});
export const bordercolorRed = typestyle.style({
    $debugName: 'bordercolorRed',
    borderColor: '#ff4136'
});
export const bordercolorLightred = typestyle.style({
    $debugName: 'bordercolorLightred',
    borderColor: '#ff725c'
});
export const bordercolorOrange = typestyle.style({
    $debugName: 'bordercolorOrange',
    borderColor: '#ff6300'
});
export const bordercolorGold = typestyle.style({
    $debugName: 'bordercolorGold',
    borderColor: '#ffb700'
});
export const bordercolorYellow = typestyle.style({
    $debugName: 'bordercolorYellow',
    borderColor: '#ffd700'
});
export const bordercolorLightyellow = typestyle.style({
    $debugName: 'bordercolorLightyellow',
    borderColor: '#fbf1a9'
});
export const bordercolorPurple = typestyle.style({
    $debugName: 'bordercolorPurple',
    borderColor: '#5e2ca5'
});
export const bordercolorLightpurple = typestyle.style({
    $debugName: 'bordercolorLightpurple',
    borderColor: '#a463f2'
});
export const bordercolorDarkpink = typestyle.style({
    $debugName: 'bordercolorDarkpink',
    borderColor: '#d5008f'
});
export const bordercolorHotpink = typestyle.style({
    $debugName: 'bordercolorHotpink',
    borderColor: '#ff41b4'
});
export const bordercolorPink = typestyle.style({
    $debugName: 'bordercolorPink',
    borderColor: '#ff80cc'
});
export const bordercolorLightpink = typestyle.style({
    $debugName: 'bordercolorLightpink',
    borderColor: '#ffa3d7'
});
export const bordercolorDarkgreen = typestyle.style({
    $debugName: 'bordercolorDarkgreen',
    borderColor: '#137752'
});
export const bordercolorGreen = typestyle.style({
    $debugName: 'bordercolorGreen',
    borderColor: '#19a974'
});
export const bordercolorLightgreen = typestyle.style({
    $debugName: 'bordercolorLightgreen',
    borderColor: '#9eebcf'
});
export const bordercolorNavy = typestyle.style({
    $debugName: 'bordercolorNavy',
    borderColor: '#001b44'
});
export const bordercolorDarkblue = typestyle.style({
    $debugName: 'bordercolorDarkblue',
    borderColor: '#00449e'
});
export const bordercolorBlue = typestyle.style({
    $debugName: 'bordercolorBlue',
    borderColor: '#357edd'
});
export const bordercolorLightblue = typestyle.style({
    $debugName: 'bordercolorLightblue',
    borderColor: '#96ccff'
});
export const bordercolorLightestblue = typestyle.style({
    $debugName: 'bordercolorLightestblue',
    borderColor: '#cdecff'
});
export const bordercolorWashedblue = typestyle.style({
    $debugName: 'bordercolorWashedblue',
    borderColor: '#f6fffe'
});
export const bordercolorWashedgreen = typestyle.style({
    $debugName: 'bordercolorWashedgreen',
    borderColor: '#e8fdf5'
});
export const bordercolorWashedyellow = typestyle.style({
    $debugName: 'bordercolorWashedyellow',
    borderColor: '#fffceb'
});
export const bordercolorWashedred = typestyle.style({
    $debugName: 'bordercolorWashedred',
    borderColor: '#ffdfdf'
});
export const bordercolorTransparent = typestyle.style({
    $debugName: 'bordercolorTransparent',
    borderColor: 'transparent'
});
export const bordercolorInherit = typestyle.style({
    $debugName: 'bordercolorInherit',
    borderColor: 'inherit'
});
export const borderradiusNone = typestyle.style({
    $debugName: 'borderradiusNone',
    borderRadius: 0
});
export const borderradius0 = typestyle.style({
    $debugName: 'borderradius0',
    borderRadius: 0
});
export const borderradius1 = typestyle.style({
    $debugName: 'borderradius1',
    borderRadius: '.125rem'
});
export const borderradius2 = typestyle.style({
    $debugName: 'borderradius2',
    borderRadius: '.25rem'
});
export const borderradius3 = typestyle.style({
    $debugName: 'borderradius3',
    borderRadius: '.5rem'
});
export const borderradius4 = typestyle.style({
    $debugName: 'borderradius4',
    borderRadius: '1rem'
});
export const borderradius5 = typestyle.style({
    $debugName: 'borderradius5',
    borderRadius: '2rem'
});
export const borderradius100p = typestyle.style({
    $debugName: 'borderradius100p',
    borderRadius: '100%'
});
export const borderradiusPill = typestyle.style({
    $debugName: 'borderradiusPill',
    borderRadius: '9999px'
});
export const borderradiusBottom = typestyle.style({
    $debugName: 'borderradiusBottom',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
});
export const borderradiusTop = typestyle.style({
    $debugName: 'borderradiusTop',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
});
export const borderradiusRight = typestyle.style({
    $debugName: 'borderradiusRight',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
});
export const borderradiusLeft = typestyle.style({
    $debugName: 'borderradiusLeft',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
});
export const borderstyleDotted = typestyle.style({
    $debugName: 'borderstyleDotted',
    borderStyle: 'dotted'
});
export const borderstyleDashed = typestyle.style({
    $debugName: 'borderstyleDashed',
    borderStyle: 'dashed'
});
export const borderstyleSolid = typestyle.style({
    $debugName: 'borderstyleSolid',
    borderStyle: 'solid'
});
export const borderstyleNone = typestyle.style({
    $debugName: 'borderstyleNone',
    borderStyle: 'none'
});
export const borderwidth0 = typestyle.style({
    $debugName: 'borderwidth0',
    borderWidth: 0
});
export const borderwidth1 = typestyle.style({
    $debugName: 'borderwidth1',
    borderWidth: '.125rem'
});
export const borderwidth2 = typestyle.style({
    $debugName: 'borderwidth2',
    borderWidth: '.25rem'
});
export const borderwidth3 = typestyle.style({
    $debugName: 'borderwidth3',
    borderWidth: '.5rem'
});
export const borderwidth4 = typestyle.style({
    $debugName: 'borderwidth4',
    borderWidth: '.75rem'
});
export const borderwidth5 = typestyle.style({
    $debugName: 'borderwidth5',
    borderWidth: '1rem'
});
export const bordertopwidth0 = typestyle.style({
    $debugName: 'bordertopwidth0',
    borderTopWidth: 0
});
export const borderrightwidth0 = typestyle.style({
    $debugName: 'borderrightwidth0',
    borderRightWidth: 0
});
export const borderbottomwidth0 = typestyle.style({
    $debugName: 'borderbottomwidth0',
    borderBottomWidth: 0
});
export const borderleftwidth0 = typestyle.style({
    $debugName: 'borderleftwidth0',
    borderLeftWidth: 0
});
export const boxshadow1 = typestyle.style({
    $debugName: 'boxshadow1',
    boxShadow: '0 0 4px 2px rgba( 0, 0, 0, .2 )'
});
export const boxshadow2 = typestyle.style({
    $debugName: 'boxshadow2',
    boxShadow: '0 0 8px 2px rgba( 0, 0, 0, .2 )'
});
export const boxshadow3 = typestyle.style({
    $debugName: 'boxshadow3',
    boxShadow: '2px 2px 4px 2px rgba( 0, 0, 0, .2 )'
});
export const boxshadow4 = typestyle.style({
    $debugName: 'boxshadow4',
    boxShadow: '2px 2px 8px 0 rgba( 0, 0, 0, .2 )'
});
export const boxshadow5 = typestyle.style({
    $debugName: 'boxshadow5',
    boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )'
});
export const top0 = typestyle.style({ $debugName: 'top0', top: 0 });
export const right0 = typestyle.style({ $debugName: 'right0', right: 0 });
export const bottom0 = typestyle.style({ $debugName: 'bottom0', bottom: 0 });
export const left0 = typestyle.style({ $debugName: 'left0', left: 0 });
export const top1 = typestyle.style({ $debugName: 'top1', top: '1rem' });
export const right1 = typestyle.style({ $debugName: 'right1', right: '1rem' });
export const bottom1 = typestyle.style({
    $debugName: 'bottom1',
    bottom: '1rem'
});
export const left1 = typestyle.style({ $debugName: 'left1', left: '1rem' });
export const top2 = typestyle.style({ $debugName: 'top2', top: '2rem' });
export const right2 = typestyle.style({ $debugName: 'right2', right: '2rem' });
export const bottom2 = typestyle.style({
    $debugName: 'bottom2',
    bottom: '2rem'
});
export const left2 = typestyle.style({ $debugName: 'left2', left: '2rem' });
export const topNeg1 = typestyle.style({ $debugName: 'topNeg1', top: '-1rem' });
export const rightNeg1 = typestyle.style({
    $debugName: 'rightNeg1',
    right: '-1rem'
});
export const bottomNeg1 = typestyle.style({
    $debugName: 'bottomNeg1',
    bottom: '-1rem'
});
export const leftNeg1 = typestyle.style({
    $debugName: 'leftNeg1',
    left: '-1rem'
});
export const topNeg2 = typestyle.style({ $debugName: 'topNeg2', top: '-2rem' });
export const rightNeg2 = typestyle.style({
    $debugName: 'rightNeg2',
    right: '-2rem'
});
export const bottomNeg2 = typestyle.style({
    $debugName: 'bottomNeg2',
    bottom: '-2rem'
});
export const leftNeg2 = typestyle.style({
    $debugName: 'leftNeg2',
    left: '-2rem'
});
export const absoluteNegFill = typestyle.style({
    $debugName: 'absoluteNegFill',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
});
export const clearfix = typestyle.style({
    $debugName: 'clearfix',
    $nest: { '&:after': { clear: 'both' } },
    zoom: 1
});
export const clearLeft = typestyle.style({
    $debugName: 'clearLeft',
    clear: 'left'
});
export const clearRight = typestyle.style({
    $debugName: 'clearRight',
    clear: 'right'
});
export const clearBoth = typestyle.style({
    $debugName: 'clearBoth',
    clear: 'both'
});
export const clearNone = typestyle.style({
    $debugName: 'clearNone',
    clear: 'none'
});
export const displayNone = typestyle.style({
    $debugName: 'displayNone',
    display: 'none'
});
export const displayInline = typestyle.style({
    $debugName: 'displayInline',
    display: 'inline'
});
export const displayBlock = typestyle.style({
    $debugName: 'displayBlock',
    display: 'block'
});
export const displayInlineblock = typestyle.style({
    $debugName: 'displayInlineblock',
    display: 'inline-block'
});
export const displayInlinetable = typestyle.style({
    $debugName: 'displayInlinetable',
    display: 'inline-table'
});
export const displayTable = typestyle.style({
    $debugName: 'displayTable',
    display: 'table'
});
export const displayTablecell = typestyle.style({
    $debugName: 'displayTablecell',
    display: 'table-cell'
});
export const displayTablerow = typestyle.style({
    $debugName: 'displayTablerow',
    display: 'table-row'
});
export const displayTablerowgroup = typestyle.style({
    $debugName: 'displayTablerowgroup',
    display: 'table-row-group'
});
export const displayTablecolumn = typestyle.style({
    $debugName: 'displayTablecolumn',
    display: 'table-column'
});
export const displayTablecolumngroup = typestyle.style({
    $debugName: 'displayTablecolumngroup',
    display: 'table-column-group'
});
export const displaytableFixed = typestyle.style({
    $debugName: 'displaytableFixed',
    tableLayout: 'fixed',
    width: '100%'
});
export const tablelayoutFixed = typestyle.style({
    $debugName: 'tablelayoutFixed',
    tableLayout: 'fixed',
    width: '100%'
});
export const displayFlex = typestyle.style({
    $debugName: 'displayFlex',
    display: 'flex'
});
export const displayInlineflex = typestyle.style({
    $debugName: 'displayInlineflex',
    display: 'inline-flex'
});
export const flexauto = typestyle.style({
    $debugName: 'flexauto',
    '-webkit-box-flex': 1,
    '-ms-flex': '1 1 auto',
    flex: '1 1 auto',
    minWidth: 0,
    minHeight: 0
});
export const flexNone = typestyle.style({
    $debugName: 'flexNone',
    '-webkit-box-flex': 0,
    '-ms-flex': 'none',
    flex: 'none'
});
export const flexdirectionColumn = typestyle.style({
    $debugName: 'flexdirectionColumn',
    '-webkit-box-orient': 'vertical',
    '-webkit-box-direction': 'normal',
    '-ms-flex-direction': 'column',
    flexDirection: 'column'
});
export const flexdirectionRow = typestyle.style({
    $debugName: 'flexdirectionRow',
    '-webkit-box-orient': 'horizontal',
    '-webkit-box-direction': 'normal',
    '-ms-flex-direction': 'row',
    flexDirection: 'row'
});
export const flexwrapWrap = typestyle.style({
    $debugName: 'flexwrapWrap',
    '-ms-flex-wrap': 'wrap',
    flexWrap: 'wrap'
});
export const flexwrapNowrap = typestyle.style({
    $debugName: 'flexwrapNowrap',
    '-ms-flex-wrap': 'nowrap',
    flexWrap: 'nowrap'
});
export const flexwrapWrapreverse = typestyle.style({
    $debugName: 'flexwrapWrapreverse',
    '-ms-flex-wrap': 'wrap-reverse',
    flexWrap: 'wrap-reverse'
});
export const flexdirectionColumnreverse = typestyle.style({
    $debugName: 'flexdirectionColumnreverse',
    '-webkit-box-orient': 'vertical',
    '-webkit-box-direction': 'reverse',
    '-ms-flex-direction': 'column-reverse',
    flexDirection: 'column-reverse'
});
export const flexdirectionRowreverse = typestyle.style({
    $debugName: 'flexdirectionRowreverse',
    '-webkit-box-orient': 'horizontal',
    '-webkit-box-direction': 'reverse',
    '-ms-flex-direction': 'row-reverse',
    flexDirection: 'row-reverse'
});
export const alignitemsFlexstart = typestyle.style({
    $debugName: 'alignitemsFlexstart',
    '-webkit-box-align': 'start',
    '-ms-flex-align': 'start',
    alignItems: 'flex-start'
});
export const alignitemsFlexend = typestyle.style({
    $debugName: 'alignitemsFlexend',
    '-webkit-box-align': 'end',
    '-ms-flex-align': 'end',
    alignItems: 'flex-end'
});
export const alignitemsCenter = typestyle.style({
    $debugName: 'alignitemsCenter',
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    alignItems: 'center'
});
export const alignitemsBaseline = typestyle.style({
    $debugName: 'alignitemsBaseline',
    '-webkit-box-align': 'baseline',
    '-ms-flex-align': 'baseline',
    alignItems: 'baseline'
});
export const alignitemsStretch = typestyle.style({
    $debugName: 'alignitemsStretch',
    '-webkit-box-align': 'stretch',
    '-ms-flex-align': 'stretch',
    alignItems: 'stretch'
});
export const alignselfFlexstart = typestyle.style({
    $debugName: 'alignselfFlexstart',
    '-ms-flex-item-align': 'start',
    alignSelf: 'flex-start'
});
export const alignselfFlexend = typestyle.style({
    $debugName: 'alignselfFlexend',
    '-ms-flex-item-align': 'end',
    alignSelf: 'flex-end'
});
export const alignselfCenter = typestyle.style({
    $debugName: 'alignselfCenter',
    '-ms-flex-item-align': 'center',
    '-ms-grid-row-align': 'center',
    alignSelf: 'center'
});
export const alignselfBaseline = typestyle.style({
    $debugName: 'alignselfBaseline',
    '-ms-flex-item-align': 'baseline',
    alignSelf: 'baseline'
});
export const alignselfStretch = typestyle.style({
    $debugName: 'alignselfStretch',
    '-ms-flex-item-align': 'stretch',
    '-ms-grid-row-align': 'stretch',
    alignSelf: 'stretch'
});
export const justifycontentFlexstart = typestyle.style({
    $debugName: 'justifycontentFlexstart',
    '-webkit-box-pack': 'start',
    '-ms-flex-pack': 'start',
    justifyContent: 'flex-start'
});
export const justifycontentFlexend = typestyle.style({
    $debugName: 'justifycontentFlexend',
    '-webkit-box-pack': 'end',
    '-ms-flex-pack': 'end',
    justifyContent: 'flex-end'
});
export const justifycontentCenter = typestyle.style({
    $debugName: 'justifycontentCenter',
    '-webkit-box-pack': 'center',
    '-ms-flex-pack': 'center',
    justifyContent: 'center'
});
export const justifycontentSpacebetween = typestyle.style({
    $debugName: 'justifycontentSpacebetween',
    '-webkit-box-pack': 'justify',
    '-ms-flex-pack': 'justify',
    justifyContent: 'space-between'
});
export const justifycontentSpaceround = typestyle.style({
    $debugName: 'justifycontentSpaceround',
    '-ms-flex-pack': 'distribute',
    justifyContent: 'space-around'
});
export const aligncontentFlexstart = typestyle.style({
    $debugName: 'aligncontentFlexstart',
    '-ms-flex-line-pack': 'start',
    alignContent: 'flex-start'
});
export const aligncontentFlexend = typestyle.style({
    $debugName: 'aligncontentFlexend',
    '-ms-flex-line-pack': 'end',
    alignContent: 'flex-end'
});
export const aligncontentCenter = typestyle.style({
    $debugName: 'aligncontentCenter',
    '-ms-flex-line-pack': 'center',
    alignContent: 'center'
});
export const aligncontentSpacebetween = typestyle.style({
    $debugName: 'aligncontentSpacebetween',
    '-ms-flex-line-pack': 'justify',
    alignContent: 'space-between'
});
export const aligncontentSpacearound = typestyle.style({
    $debugName: 'aligncontentSpacearound',
    '-ms-flex-line-pack': 'distribute',
    alignContent: 'space-around'
});
export const aligncontentStretch = typestyle.style({
    $debugName: 'aligncontentStretch',
    '-ms-flex-line-pack': 'stretch',
    alignContent: 'stretch'
});
export const order0 = typestyle.style({
    $debugName: 'order0',
    '-webkit-box-ordinal-group': 1,
    '-ms-flex-order': 0,
    order: 0
});
export const order1 = typestyle.style({
    $debugName: 'order1',
    '-webkit-box-ordinal-group': 2,
    '-ms-flex-order': 1,
    order: 1
});
export const order2 = typestyle.style({
    $debugName: 'order2',
    '-webkit-box-ordinal-group': 3,
    '-ms-flex-order': 2,
    order: 2
});
export const order3 = typestyle.style({
    $debugName: 'order3',
    '-webkit-box-ordinal-group': 4,
    '-ms-flex-order': 3,
    order: 3
});
export const order4 = typestyle.style({
    $debugName: 'order4',
    '-webkit-box-ordinal-group': 5,
    '-ms-flex-order': 4,
    order: 4
});
export const order5 = typestyle.style({
    $debugName: 'order5',
    '-webkit-box-ordinal-group': 6,
    '-ms-flex-order': 5,
    order: 5
});
export const order6 = typestyle.style({
    $debugName: 'order6',
    '-webkit-box-ordinal-group': 7,
    '-ms-flex-order': 6,
    order: 6
});
export const order7 = typestyle.style({
    $debugName: 'order7',
    '-webkit-box-ordinal-group': 8,
    '-ms-flex-order': 7,
    order: 7
});
export const order8 = typestyle.style({
    $debugName: 'order8',
    '-webkit-box-ordinal-group': 9,
    '-ms-flex-order': 8,
    order: 8
});
export const orderLast = typestyle.style({
    $debugName: 'orderLast',
    '-webkit-box-ordinal-group': 100000,
    '-ms-flex-order': 99999,
    order: 99999
});
export const floatLeft = typestyle.style({
    $debugName: 'floatLeft',
    float: 'left',
    display: 'inline'
});
export const floatRight = typestyle.style({
    $debugName: 'floatRight',
    float: 'right',
    display: 'inline'
});
export const floatNone = typestyle.style({
    $debugName: 'floatNone',
    float: 'none'
});
export const sansSerif = typestyle.style({
    $debugName: 'sansSerif',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif"
});
export const sansserif = typestyle.style({
    $debugName: 'sansserif',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif"
});
export const serif = typestyle.style({
    $debugName: 'serif',
    fontFamily: 'georgia, times, serif'
});
export const systemSansSerif = typestyle.style({
    $debugName: 'systemSansSerif',
    fontFamily: 'sans-serif'
});
export const systemsansserif = typestyle.style({
    $debugName: 'systemsansserif',
    fontFamily: 'sans-serif'
});
export const systemSerif = typestyle.style({
    $debugName: 'systemSerif',
    fontFamily: 'serif'
});
export const systemserif = typestyle.style({
    $debugName: 'systemserif',
    fontFamily: 'serif'
});
export const courier = typestyle.style({
    $debugName: 'courier',
    fontFamily: "'Courier Next', courier, monospace"
});
export const helvetica = typestyle.style({
    $debugName: 'helvetica',
    fontFamily: "'helvetica neue', helvetica, sans-serif"
});
export const avenir = typestyle.style({
    $debugName: 'avenir',
    fontFamily: "'avenir next', avenir, sans-serif"
});
export const athelas = typestyle.style({
    $debugName: 'athelas',
    fontFamily: 'athelas, georgia, serif'
});
export const georgia = typestyle.style({
    $debugName: 'georgia',
    fontFamily: 'georgia, serif'
});
export const times = typestyle.style({
    $debugName: 'times',
    fontFamily: 'times, serif'
});
export const bodoni = typestyle.style({
    $debugName: 'bodoni',
    fontFamily: '"Bodoni MT", serif'
});
export const calisto = typestyle.style({
    $debugName: 'calisto',
    fontFamily: '"Calisto MT", serif'
});
export const garamond = typestyle.style({
    $debugName: 'garamond',
    fontFamily: 'garamond, serif'
});
export const baskerville = typestyle.style({
    $debugName: 'baskerville',
    fontFamily: 'baskerville, serif'
});
export const fontstyleItalic = typestyle.style({
    $debugName: 'fontstyleItalic',
    fontStyle: 'italic'
});
export const i = typestyle.style({ $debugName: 'i', fontStyle: 'italic' });
export const fontstyleNormal = typestyle.style({
    $debugName: 'fontstyleNormal',
    fontStyle: 'normal'
});
export const normal = typestyle.style({
    $debugName: 'normal',
    fontWeight: 'normal'
});
export const fontweightNormal = typestyle.style({
    $debugName: 'fontweightNormal',
    fontWeight: 'normal'
});
export const fontweightBold = typestyle.style({
    $debugName: 'fontweightBold',
    fontWeight: 'bold'
});
export const fontweight100 = typestyle.style({
    $debugName: 'fontweight100',
    fontWeight: 100
});
export const fontweight200 = typestyle.style({
    $debugName: 'fontweight200',
    fontWeight: 200
});
export const fontweight300 = typestyle.style({
    $debugName: 'fontweight300',
    fontWeight: 300
});
export const fontweight400 = typestyle.style({
    $debugName: 'fontweight400',
    fontWeight: 400
});
export const fontweight500 = typestyle.style({
    $debugName: 'fontweight500',
    fontWeight: 500
});
export const fontweight600 = typestyle.style({
    $debugName: 'fontweight600',
    fontWeight: 600
});
export const fontweight700 = typestyle.style({
    $debugName: 'fontweight700',
    fontWeight: 700
});
export const fontweight800 = typestyle.style({
    $debugName: 'fontweight800',
    fontWeight: 800
});
export const fontweight900 = typestyle.style({
    $debugName: 'fontweight900',
    fontWeight: 900
});
export const inputReset = typestyle.style({
    $debugName: 'inputReset',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    $nest: {
        '&:': { border: 0, padding: 0 },
        '&:-moz-focus-inner': { border: 0, padding: 0 }
    }
});
export const inputreset = typestyle.style({
    $debugName: 'inputreset',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none'
});
export const buttonReset = typestyle.style({
    $debugName: 'buttonReset',
    $nest: {
        '&:': { border: 0, padding: 0 },
        '&:-moz-focus-inner': { border: 0, padding: 0 }
    }
});
export const heightXxxsmall = typestyle.style({
    $debugName: 'heightXxxsmall',
    height: '.0625rem'
});
export const heightXxsmall = typestyle.style({
    $debugName: 'heightXxsmall',
    height: '.125rem'
});
export const heightXsmall = typestyle.style({
    $debugName: 'heightXsmall',
    height: '.25rem'
});
export const heightSmall = typestyle.style({
    $debugName: 'heightSmall',
    height: '.5rem'
});
export const heightMedium = typestyle.style({
    $debugName: 'heightMedium',
    height: '1rem'
});
export const heightLarge = typestyle.style({
    $debugName: 'heightLarge',
    height: '2rem'
});
export const heightXlarge = typestyle.style({
    $debugName: 'heightXlarge',
    height: '4rem'
});
export const heightXxlarge = typestyle.style({
    $debugName: 'heightXxlarge',
    height: '8rem'
});
export const heightXxxlarge = typestyle.style({
    $debugName: 'heightXxxlarge',
    height: '16rem'
});
export const height25p = typestyle.style({
    $debugName: 'height25p',
    height: '25%'
});
export const height50p = typestyle.style({
    $debugName: 'height50p',
    height: '50%'
});
export const height75p = typestyle.style({
    $debugName: 'height75p',
    height: '75%'
});
export const height100p = typestyle.style({
    $debugName: 'height100p',
    height: '100%'
});
export const minheight100p = typestyle.style({
    $debugName: 'minheight100p',
    minHeight: '100%'
});
export const height25vh = typestyle.style({
    $debugName: 'height25vh',
    height: '25vh'
});
export const height50vh = typestyle.style({
    $debugName: 'height50vh',
    height: '50vh'
});
export const height75vh = typestyle.style({
    $debugName: 'height75vh',
    height: '75vh'
});
export const height100vh = typestyle.style({
    $debugName: 'height100vh',
    height: '100vh'
});
export const minheight100vh = typestyle.style({
    $debugName: 'minheight100vh',
    minHeight: '100vh'
});
export const heightAuto = typestyle.style({
    $debugName: 'heightAuto',
    height: 'auto'
});
export const heightInherit = typestyle.style({
    $debugName: 'heightInherit',
    height: 'inherit'
});
export const tracked = typestyle.style({
    $debugName: 'tracked',
    letterSpacing: '.1em'
});
export const letterspacingTracked = typestyle.style({
    $debugName: 'letterspacingTracked',
    letterSpacing: '.1em'
});
export const trackedtight = typestyle.style({
    $debugName: 'trackedtight',
    letterSpacing: '-.0.05em'
});
export const letterspacingTight = typestyle.style({
    $debugName: 'letterspacingTight',
    letterSpacing: '-.0.05em'
});
export const megatracked = typestyle.style({
    $debugName: 'megatracked',
    letterSpacing: '.25em'
});
export const letterspacingMegatracked = typestyle.style({
    $debugName: 'letterspacingMegatracked',
    letterSpacing: '.25em'
});
export const lineheightSolid = typestyle.style({ $debugName: 'lineheightSolid', lineHeight: 1 }, typestyle.media({ type: 'screen', minWidth: '30em' }, { lineHeight: 1 }), typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { lineHeight: 1 }), typestyle.media({ type: 'screen', minWidth: '60em' }, { lineHeight: 1 }));
export const lineheight1 = typestyle.style({
    $debugName: 'lineheight1',
    lineHeight: 1
});
export const lineheightTitle = typestyle.style({
    $debugName: 'lineheightTitle',
    lineHeight: 1.25
});
export const lineheight1p25 = typestyle.style({
    $debugName: 'lineheight1p25',
    lineHeight: 1.25
});
export const lineheightCopy = typestyle.style({
    $debugName: 'lineheightCopy',
    lineHeight: 1.5
});
export const lineheight1p5 = typestyle.style({
    $debugName: 'lineheight1p5',
    lineHeight: 1.5
});
export const link = typestyle.style({
    $debugName: 'link',
    textDecoration: 'none',
    transition: 'color .15s ease-in',
    $nest: {
        '&:focus': {
            transition: 'color .15s ease-in',
            outline: '1px dotted currentColor'
        }
    }
});
export const list = typestyle.style({
    $debugName: 'list',
    listStyleType: 'none'
});
export const maxwidth100p = typestyle.style({
    $debugName: 'maxwidth100p',
    maxWidth: '100%'
});
export const maxwidthMedium = typestyle.style({
    $debugName: 'maxwidthMedium',
    maxWidth: '1rem'
});
export const maxwidthLarge = typestyle.style({
    $debugName: 'maxwidthLarge',
    maxWidth: '2rem'
});
export const maxwidthXlarge = typestyle.style({
    $debugName: 'maxwidthXlarge',
    maxWidth: '4rem'
});
export const maxwidthXxlarge = typestyle.style({
    $debugName: 'maxwidthXxlarge',
    maxWidth: '8rem'
});
export const maxwidthXxxlarge = typestyle.style({
    $debugName: 'maxwidthXxxlarge',
    maxWidth: '16rem'
});
export const maxwidthXxxxlarge = typestyle.style({
    $debugName: 'maxwidthXxxxlarge',
    maxWidth: '32rem'
});
export const maxwidthXxxxxlarge = typestyle.style({
    $debugName: 'maxwidthXxxxxlarge',
    maxWidth: '48rem'
});
export const maxwidthXxxxxxlarge = typestyle.style({
    $debugName: 'maxwidthXxxxxxlarge',
    maxWidth: '64rem'
});
export const maxwidthXxxxxxxlarge = typestyle.style({
    $debugName: 'maxwidthXxxxxxxlarge',
    maxWidth: '96rem'
});
export const maxwidthNone = typestyle.style({
    $debugName: 'maxwidthNone',
    maxWidth: 'none'
});
export const widthXxxsmall = typestyle.style({
    $debugName: 'widthXxxsmall',
    width: '.0625rem'
});
export const widthXxsmall = typestyle.style({
    $debugName: 'widthXxsmall',
    width: '.125rem'
});
export const widthXsmall = typestyle.style({
    $debugName: 'widthXsmall',
    width: '.25rem'
});
export const widthSmall = typestyle.style({
    $debugName: 'widthSmall',
    width: '.5rem'
});
export const widthMedium = typestyle.style({
    $debugName: 'widthMedium',
    width: '1rem'
});
export const widthLarge = typestyle.style({
    $debugName: 'widthLarge',
    width: '2rem'
});
export const widthXlarge = typestyle.style({
    $debugName: 'widthXlarge',
    width: '4rem'
});
export const widthXxlarge = typestyle.style({
    $debugName: 'widthXxlarge',
    width: '8rem'
});
export const widthXxxlarge = typestyle.style({
    $debugName: 'widthXxxlarge',
    width: '16rem'
});
export const widthThird = typestyle.style({
    $debugName: 'widthThird',
    width: 'calc( 100% / 3 )'
});
export const widthTwothirds = typestyle.style({
    $debugName: 'widthTwothirds',
    width: 'calc( 100% / 1.5 )'
});
export const widthAuto = typestyle.style({
    $debugName: 'widthAuto',
    width: 'auto'
});
export const width10p = typestyle.style({
    $debugName: 'width10p',
    width: '10%'
});
export const width20p = typestyle.style({
    $debugName: 'width20p',
    width: '20%'
});
export const width25p = typestyle.style({
    $debugName: 'width25p',
    width: '25%'
});
export const width30p = typestyle.style({
    $debugName: 'width30p',
    width: '30%'
});
export const width33p = typestyle.style({
    $debugName: 'width33p',
    width: '33%'
});
export const width34p = typestyle.style({
    $debugName: 'width34p',
    width: '34%'
});
export const width40p = typestyle.style({
    $debugName: 'width40p',
    width: '40%'
});
export const width50p = typestyle.style({
    $debugName: 'width50p',
    width: '50%'
});
export const width60p = typestyle.style({
    $debugName: 'width60p',
    width: '60%'
});
export const width70p = typestyle.style({
    $debugName: 'width70p',
    width: '70%'
});
export const width75p = typestyle.style({
    $debugName: 'width75p',
    width: '75%'
});
export const width80p = typestyle.style({
    $debugName: 'width80p',
    width: '80%'
});
export const width90p = typestyle.style({
    $debugName: 'width90p',
    width: '90%'
});
export const width100p = typestyle.style({
    $debugName: 'width100p',
    width: '100%'
});
export const overflowVisible = typestyle.style({
    $debugName: 'overflowVisible',
    overflow: 'visible'
});
export const overflowHidden = typestyle.style({
    $debugName: 'overflowHidden',
    overflow: 'hidden'
});
export const overflowScroll = typestyle.style({
    $debugName: 'overflowScroll',
    overflow: 'scroll'
});
export const overflowAuto = typestyle.style({
    $debugName: 'overflowAuto',
    overflow: 'auto'
});
export const overflowxVisible = typestyle.style({
    $debugName: 'overflowxVisible',
    overflowX: 'visible'
});
export const overflowxHidden = typestyle.style({
    $debugName: 'overflowxHidden',
    overflowX: 'hidden'
});
export const overflowxScroll = typestyle.style({
    $debugName: 'overflowxScroll',
    overflowX: 'scroll'
});
export const overflowxAuto = typestyle.style({
    $debugName: 'overflowxAuto',
    overflowX: 'auto'
});
export const overflowyVisible = typestyle.style({
    $debugName: 'overflowyVisible',
    overflowY: 'visible'
});
export const overflowyHidden = typestyle.style({
    $debugName: 'overflowyHidden',
    overflowY: 'hidden'
});
export const overflowyScroll = typestyle.style({
    $debugName: 'overflowyScroll',
    overflowY: 'scroll'
});
export const overflowyAuto = typestyle.style({
    $debugName: 'overflowyAuto',
    overflowY: 'auto'
});
export const positionStatic = typestyle.style({
    $debugName: 'positionStatic',
    position: 'static'
});
export const positionRelative = typestyle.style({
    $debugName: 'positionRelative',
    position: 'relative'
});
export const positionAbsolute = typestyle.style({
    $debugName: 'positionAbsolute',
    position: 'absolute'
});
export const positionFixed = typestyle.style({
    $debugName: 'positionFixed',
    position: 'fixed'
});
export const opacity100p = typestyle.style({
    $debugName: 'opacity100p',
    opacity: 1
});
export const opacity90p = typestyle.style({
    $debugName: 'opacity90p',
    opacity: 0.9
});
export const opacity80p = typestyle.style({
    $debugName: 'opacity80p',
    opacity: 0.8
});
export const opacity70p = typestyle.style({
    $debugName: 'opacity70p',
    opacity: 0.7
});
export const opacity60p = typestyle.style({
    $debugName: 'opacity60p',
    opacity: 0.6
});
export const opacity50p = typestyle.style({
    $debugName: 'opacity50p',
    opacity: 0.5
});
export const opacity40p = typestyle.style({
    $debugName: 'opacity40p',
    opacity: 0.4
});
export const opacity30p = typestyle.style({
    $debugName: 'opacity30p',
    opacity: 0.3
});
export const opacity20p = typestyle.style({
    $debugName: 'opacity20p',
    opacity: 0.2
});
export const opacity10p = typestyle.style({
    $debugName: 'opacity10p',
    opacity: 0.1
});
export const opacity5p = typestyle.style({
    $debugName: 'opacity5p',
    opacity: 0.05
});
export const opacity2p5p = typestyle.style({
    $debugName: 'opacity2p5p',
    opacity: 0.025
});
export const opacity0 = typestyle.style({ $debugName: 'opacity0', opacity: 0 });
export const opacity0p = typestyle.style({
    $debugName: 'opacity0p',
    opacity: 0
});
export const transformRotate45 = typestyle.style({
    $debugName: 'transformRotate45',
    '-webkit-transform': 'rotate( 45deg )',
    transform: 'rotate( 45deg )'
});
export const transformRotate90 = typestyle.style({
    $debugName: 'transformRotate90',
    '-webkit-transform': 'rotate( 90deg )',
    transform: 'rotate( 90deg )'
});
export const transformRotate135 = typestyle.style({
    $debugName: 'transformRotate135',
    '-webkit-transform': 'rotate( 135deg )',
    transform: 'rotate( 135deg )'
});
export const transformRotate180 = typestyle.style({
    $debugName: 'transformRotate180',
    '-webkit-transform': 'rotate( 180deg )',
    transform: 'rotate( 180deg )'
});
export const transformRotate225 = typestyle.style({
    $debugName: 'transformRotate225',
    '-webkit-transform': 'rotate( 225deg )',
    transform: 'rotate( 225deg )'
});
export const transformRotate270 = typestyle.style({
    $debugName: 'transformRotate270',
    '-webkit-transform': 'rotate( 270deg )',
    transform: 'rotate( 270deg )'
});
export const transformRotate315 = typestyle.style({
    $debugName: 'transformRotate315',
    '-webkit-transform': 'rotate( 315deg )',
    transform: 'rotate( 315deg )'
});
export const black90 = typestyle.style({
    $debugName: 'black90',
    color: 'rgba( 0, 0, 0, .9 )'
});
export const black80 = typestyle.style({
    $debugName: 'black80',
    color: 'rgba( 0, 0, 0, .8 )'
});
export const black70 = typestyle.style({
    $debugName: 'black70',
    color: 'rgba( 0, 0, 0, .7 )'
});
export const black60 = typestyle.style({
    $debugName: 'black60',
    color: 'rgba( 0, 0, 0, .6 )'
});
export const black50 = typestyle.style({
    $debugName: 'black50',
    color: 'rgba( 0, 0, 0, .5 )'
});
export const black40 = typestyle.style({
    $debugName: 'black40',
    color: 'rgba( 0, 0, 0, .4 )'
});
export const black30 = typestyle.style({
    $debugName: 'black30',
    color: 'rgba( 0, 0, 0, .3 )'
});
export const black20 = typestyle.style({
    $debugName: 'black20',
    color: 'rgba( 0, 0, 0, .2 )'
});
export const black10 = typestyle.style({
    $debugName: 'black10',
    color: 'rgba( 0, 0, 0, .1 )'
});
export const black05 = typestyle.style({
    $debugName: 'black05',
    color: 'rgba( 0, 0, 0, .05 )'
});
export const white90 = typestyle.style({
    $debugName: 'white90',
    color: 'rgba( 255, 255, 255, .9 )'
});
export const white80 = typestyle.style({
    $debugName: 'white80',
    color: 'rgba( 255, 255, 255, .8 )'
});
export const white70 = typestyle.style({
    $debugName: 'white70',
    color: 'rgba( 255, 255, 255, .7 )'
});
export const white60 = typestyle.style({
    $debugName: 'white60',
    color: 'rgba( 255, 255, 255, .6 )'
});
export const white50 = typestyle.style({
    $debugName: 'white50',
    color: 'rgba( 255, 255, 255, .5 )'
});
export const white40 = typestyle.style({
    $debugName: 'white40',
    color: 'rgba( 255, 255, 255, .4 )'
});
export const white30 = typestyle.style({
    $debugName: 'white30',
    color: 'rgba( 255, 255, 255, .3 )'
});
export const white20 = typestyle.style({
    $debugName: 'white20',
    color: 'rgba( 255, 255, 255, .2 )'
});
export const white10 = typestyle.style({
    $debugName: 'white10',
    color: 'rgba( 255, 255, 255, .1 )'
});
export const black = typestyle.style({ $debugName: 'black', color: '#000' });
export const nearblack = typestyle.style({
    $debugName: 'nearblack',
    color: '#111'
});
export const darkgray = typestyle.style({
    $debugName: 'darkgray',
    color: '#333'
});
export const darkgrey = typestyle.style({
    $debugName: 'darkgrey',
    color: '#333'
});
export const midgray = typestyle.style({
    $debugName: 'midgray',
    color: '#555'
});
export const midgrey = typestyle.style({
    $debugName: 'midgrey',
    color: '#555'
});
export const gray = typestyle.style({ $debugName: 'gray', color: '#777' });
export const grey = typestyle.style({ $debugName: 'grey', color: '#777' });
export const silver = typestyle.style({ $debugName: 'silver', color: '#999' });
export const lightsilver = typestyle.style({
    $debugName: 'lightsilver',
    color: '#aaa'
});
export const lightgray = typestyle.style({
    $debugName: 'lightgray',
    color: '#eee'
});
export const lightgrey = typestyle.style({
    $debugName: 'lightgrey',
    color: '#eee'
});
export const moongray = typestyle.style({
    $debugName: 'moongray',
    color: '#ccc'
});
export const moongrey = typestyle.style({
    $debugName: 'moongrey',
    color: '#ccc'
});
export const nearwhite = typestyle.style({
    $debugName: 'nearwhite',
    color: '#f4f4f4'
});
export const white = typestyle.style({ $debugName: 'white', color: '#fff' });
export const darkred = typestyle.style({
    $debugName: 'darkred',
    color: '#e7040f'
});
export const red = typestyle.style({ $debugName: 'red', color: '#ff4136' });
export const lightred = typestyle.style({
    $debugName: 'lightred',
    color: '#ff725c'
});
export const orange = typestyle.style({
    $debugName: 'orange',
    color: '#ff6300'
});
export const gold = typestyle.style({ $debugName: 'gold', color: '#ffb700' });
export const yellow = typestyle.style({
    $debugName: 'yellow',
    color: '#ffd700'
});
export const lightyellow = typestyle.style({
    $debugName: 'lightyellow',
    color: '#fbf1a9'
});
export const purple = typestyle.style({
    $debugName: 'purple',
    color: '#5e2ca5'
});
export const lightpurple = typestyle.style({
    $debugName: 'lightpurple',
    color: '#a463f2'
});
export const darkpink = typestyle.style({
    $debugName: 'darkpink',
    color: '#d5008f'
});
export const hotpink = typestyle.style({
    $debugName: 'hotpink',
    color: '#ff41b4'
});
export const pink = typestyle.style({ $debugName: 'pink', color: '#ff80cc' });
export const lightpink = typestyle.style({
    $debugName: 'lightpink',
    color: '#ffa3d7'
});
export const darkgreen = typestyle.style({
    $debugName: 'darkgreen',
    color: '#137752'
});
export const green = typestyle.style({ $debugName: 'green', color: '#19a974' });
export const lightgreen = typestyle.style({
    $debugName: 'lightgreen',
    color: '#9eebcf'
});
export const navy = typestyle.style({ $debugName: 'navy', color: '#001b44' });
export const darkblue = typestyle.style({
    $debugName: 'darkblue',
    color: '#00449e'
});
export const blue = typestyle.style({ $debugName: 'blue', color: '#357edd' });
export const lightblue = typestyle.style({
    $debugName: 'lightblue',
    color: '#96ccff'
});
export const lightestblue = typestyle.style({
    $debugName: 'lightestblue',
    color: '#cdecff'
});
export const washedblue = typestyle.style({
    $debugName: 'washedblue',
    color: '#f6fffe'
});
export const washedgreen = typestyle.style({
    $debugName: 'washedgreen',
    color: '#e8fdf5'
});
export const washedyellow = typestyle.style({
    $debugName: 'washedyellow',
    color: '#fffceb'
});
export const washedred = typestyle.style({
    $debugName: 'washedred',
    color: '#ffdfdf'
});
export const colorInherit = typestyle.style({
    $debugName: 'colorInherit',
    color: 'inherit'
});
export const backgroundcolorBlack90 = typestyle.style({
    $debugName: 'backgroundcolorBlack90',
    backgroundColor: 'rgba( 0, 0, 0, .9 )'
});
export const backgroundcolorBlack80 = typestyle.style({
    $debugName: 'backgroundcolorBlack80',
    backgroundColor: 'rgba( 0, 0, 0, .8 )'
});
export const backgroundcolorBlack70 = typestyle.style({
    $debugName: 'backgroundcolorBlack70',
    backgroundColor: 'rgba( 0, 0, 0, .7 )'
});
export const backgroundcolorBlack60 = typestyle.style({
    $debugName: 'backgroundcolorBlack60',
    backgroundColor: 'rgba( 0, 0, 0, .6 )'
});
export const backgroundcolorBlack50 = typestyle.style({
    $debugName: 'backgroundcolorBlack50',
    backgroundColor: 'rgba( 0, 0, 0, .5 )'
});
export const backgroundcolorBlack40 = typestyle.style({
    $debugName: 'backgroundcolorBlack40',
    backgroundColor: 'rgba( 0, 0, 0, .4 )'
});
export const backgroundcolorBlack30 = typestyle.style({
    $debugName: 'backgroundcolorBlack30',
    backgroundColor: 'rgba( 0, 0, 0, .3 )'
});
export const backgroundcolorBlack20 = typestyle.style({
    $debugName: 'backgroundcolorBlack20',
    backgroundColor: 'rgba( 0, 0, 0, .2 )'
});
export const backgroundcolorBlack10 = typestyle.style({
    $debugName: 'backgroundcolorBlack10',
    backgroundColor: 'rgba( 0, 0, 0, .1 )'
});
export const backgroundcolorBlack05 = typestyle.style({
    $debugName: 'backgroundcolorBlack05',
    backgroundColor: 'rgba( 0, 0, 0, .05 )'
});
export const backgroundcolorWhite90 = typestyle.style({
    $debugName: 'backgroundcolorWhite90',
    backgroundColor: 'rgba( 255, 255, 255, .9 )'
});
export const backgroundcolorWhite80 = typestyle.style({
    $debugName: 'backgroundcolorWhite80',
    backgroundColor: 'rgba( 255, 255, 255, .8 )'
});
export const backgroundcolorWhite70 = typestyle.style({
    $debugName: 'backgroundcolorWhite70',
    backgroundColor: 'rgba( 255, 255, 255, .7 )'
});
export const backgroundcolorWhite60 = typestyle.style({
    $debugName: 'backgroundcolorWhite60',
    backgroundColor: 'rgba( 255, 255, 255, .6 )'
});
export const backgroundcolorWhite50 = typestyle.style({
    $debugName: 'backgroundcolorWhite50',
    backgroundColor: 'rgba( 255, 255, 255, .5 )'
});
export const backgroundcolorWhite40 = typestyle.style({
    $debugName: 'backgroundcolorWhite40',
    backgroundColor: 'rgba( 255, 255, 255, .4 )'
});
export const backgroundcolorWhite30 = typestyle.style({
    $debugName: 'backgroundcolorWhite30',
    backgroundColor: 'rgba( 255, 255, 255, .3 )'
});
export const backgroundcolorWhite20 = typestyle.style({
    $debugName: 'backgroundcolorWhite20',
    backgroundColor: 'rgba( 255, 255, 255, .2 )'
});
export const backgroundcolorWhite10 = typestyle.style({
    $debugName: 'backgroundcolorWhite10',
    backgroundColor: 'rgba( 255, 255, 255, .1 )'
});
export const backgroundcolorBlack = typestyle.style({
    $debugName: 'backgroundcolorBlack',
    backgroundColor: '#000'
});
export const backgroundcolorNearblack = typestyle.style({
    $debugName: 'backgroundcolorNearblack',
    backgroundColor: '#111'
});
export const backgroundcolorDarkgray = typestyle.style({
    $debugName: 'backgroundcolorDarkgray',
    backgroundColor: '#333'
});
export const backgroundcolorDarkgrey = typestyle.style({
    $debugName: 'backgroundcolorDarkgrey',
    backgroundColor: '#333'
});
export const backgroundcolorMidgray = typestyle.style({
    $debugName: 'backgroundcolorMidgray',
    backgroundColor: '#555'
});
export const backgroundcolorMidgrey = typestyle.style({
    $debugName: 'backgroundcolorMidgrey',
    backgroundColor: '#555'
});
export const backgroundcolorGray = typestyle.style({
    $debugName: 'backgroundcolorGray',
    backgroundColor: '#777'
});
export const backgroundcolorGrey = typestyle.style({
    $debugName: 'backgroundcolorGrey',
    backgroundColor: '#777'
});
export const backgroundcolorSilver = typestyle.style({
    $debugName: 'backgroundcolorSilver',
    backgroundColor: '#999'
});
export const backgroundcolorLightsilver = typestyle.style({
    $debugName: 'backgroundcolorLightsilver',
    backgroundColor: '#aaa'
});
export const backgroundcolorLightgray = typestyle.style({
    $debugName: 'backgroundcolorLightgray',
    backgroundColor: '#eee'
});
export const backgroundcolorLightgrey = typestyle.style({
    $debugName: 'backgroundcolorLightgrey',
    backgroundColor: '#eee'
});
export const backgroundcolorNearwhite = typestyle.style({
    $debugName: 'backgroundcolorNearwhite',
    backgroundColor: '#f4f4f4'
});
export const backgroundcolorWhite = typestyle.style({
    $debugName: 'backgroundcolorWhite',
    backgroundColor: '#fff'
});
export const backgroundcolorTransparent = typestyle.style({
    $debugName: 'backgroundcolorTransparent',
    backgroundColor: 'transparent'
});
export const backgroundcolorDarkred = typestyle.style({
    $debugName: 'backgroundcolorDarkred',
    backgroundColor: '#e7040f'
});
export const backgroundcolorRed = typestyle.style({
    $debugName: 'backgroundcolorRed',
    backgroundColor: '#ff4136'
});
export const backgroundcolorLightred = typestyle.style({
    $debugName: 'backgroundcolorLightred',
    backgroundColor: '#ff725c'
});
export const backgroundcolorOrange = typestyle.style({
    $debugName: 'backgroundcolorOrange',
    backgroundColor: '#ff6300'
});
export const backgroundcolorGold = typestyle.style({
    $debugName: 'backgroundcolorGold',
    backgroundColor: '#ffb700'
});
export const backgroundcolorYellow = typestyle.style({
    $debugName: 'backgroundcolorYellow',
    backgroundColor: '#ffd700'
});
export const backgroundcolorLightyellow = typestyle.style({
    $debugName: 'backgroundcolorLightyellow',
    backgroundColor: '#fbf1a9'
});
export const backgroundcolorPurple = typestyle.style({
    $debugName: 'backgroundcolorPurple',
    backgroundColor: '#5e2ca5'
});
export const backgroundcolorLightpurple = typestyle.style({
    $debugName: 'backgroundcolorLightpurple',
    backgroundColor: '#a463f2'
});
export const backgroundcolorDarkpink = typestyle.style({
    $debugName: 'backgroundcolorDarkpink',
    backgroundColor: '#d5008f'
});
export const backgroundcolorHotpink = typestyle.style({
    $debugName: 'backgroundcolorHotpink',
    backgroundColor: '#ff41b4'
});
export const backgroundcolorPink = typestyle.style({
    $debugName: 'backgroundcolorPink',
    backgroundColor: '#ff80cc'
});
export const backgroundcolorLightpink = typestyle.style({
    $debugName: 'backgroundcolorLightpink',
    backgroundColor: '#ffa3d7'
});
export const backgroundcolorDarkgreen = typestyle.style({
    $debugName: 'backgroundcolorDarkgreen',
    backgroundColor: '#137752'
});
export const backgroundcolorGreen = typestyle.style({
    $debugName: 'backgroundcolorGreen',
    backgroundColor: '#19a974'
});
export const backgroundcolorLightgreen = typestyle.style({
    $debugName: 'backgroundcolorLightgreen',
    backgroundColor: '#9eebcf'
});
export const backgroundcolorNavy = typestyle.style({
    $debugName: 'backgroundcolorNavy',
    backgroundColor: '#001b44'
});
export const backgroundcolorDarkblue = typestyle.style({
    $debugName: 'backgroundcolorDarkblue',
    backgroundColor: '#00449e'
});
export const backgroundcolorBlue = typestyle.style({
    $debugName: 'backgroundcolorBlue',
    backgroundColor: '#357edd'
});
export const backgroundcolorLightblue = typestyle.style({
    $debugName: 'backgroundcolorLightblue',
    backgroundColor: '#96ccff'
});
export const backgroundcolorLightestblue = typestyle.style({
    $debugName: 'backgroundcolorLightestblue',
    backgroundColor: '#cdecff'
});
export const backgroundcolorWashedblue = typestyle.style({
    $debugName: 'backgroundcolorWashedblue',
    backgroundColor: '#f6fffe'
});
export const backgroundcolorWashedgreen = typestyle.style({
    $debugName: 'backgroundcolorWashedgreen',
    backgroundColor: '#e8fdf5'
});
export const backgroundcolorWashedyellow = typestyle.style({
    $debugName: 'backgroundcolorWashedyellow',
    backgroundColor: '#fffceb'
});
export const backgroundcolorWashedred = typestyle.style({
    $debugName: 'backgroundcolorWashedred',
    backgroundColor: '#ffdfdf'
});
export const backgroundcolorInherit = typestyle.style({
    $debugName: 'backgroundcolorInherit',
    backgroundColor: 'inherit'
});
export const hoverBlack = typestyle.style({
    $debugName: 'hoverBlack',
    $nest: { '&:focus': { color: '#000' } }
});
export const hoverNearblack = typestyle.style({
    $debugName: 'hoverNearblack',
    $nest: { '&:focus': { color: '#111' } }
});
export const hoverDarkgray = typestyle.style({
    $debugName: 'hoverDarkgray',
    $nest: { '&:focus': { color: '#333' } }
});
export const hoverDarkgrey = typestyle.style({
    $debugName: 'hoverDarkgrey',
    $nest: { '&:focus': { color: '#333' } }
});
export const hoverMidgray = typestyle.style({
    $debugName: 'hoverMidgray',
    $nest: { '&:focus': { color: '#555' } }
});
export const hoverMidgrey = typestyle.style({
    $debugName: 'hoverMidgrey',
    $nest: { '&:focus': { color: '#555' } }
});
export const hoverGray = typestyle.style({
    $debugName: 'hoverGray',
    $nest: { '&:focus': { color: '#777' } }
});
export const hoverGrey = typestyle.style({
    $debugName: 'hoverGrey',
    $nest: { '&:focus': { color: '#777' } }
});
export const hoverSilver = typestyle.style({
    $debugName: 'hoverSilver',
    $nest: { '&:focus': { color: '#999' } }
});
export const hoverLightsilver = typestyle.style({
    $debugName: 'hoverLightsilver',
    $nest: { '&:focus': { color: '#aaa' } }
});
export const hoverMoongray = typestyle.style({
    $debugName: 'hoverMoongray',
    $nest: { '&:focus': { color: '#ccc' } }
});
export const hoverMoongrey = typestyle.style({
    $debugName: 'hoverMoongrey',
    $nest: { '&:focus': { color: '#ccc' } }
});
export const hoverLightgray = typestyle.style({
    $debugName: 'hoverLightgray',
    $nest: { '&:focus': { color: '#eee' } }
});
export const hoverLightgrey = typestyle.style({
    $debugName: 'hoverLightgrey',
    $nest: { '&:focus': { color: '#eee' } }
});
export const hoverNearwhite = typestyle.style({
    $debugName: 'hoverNearwhite',
    $nest: { '&:focus': { color: '#f4f4f4' } }
});
export const hoverWhite = typestyle.style({
    $debugName: 'hoverWhite',
    $nest: { '&:focus': { color: '#fff' } }
});
export const hoverInherit = typestyle.style({
    $debugName: 'hoverInherit',
    $nest: { '&:focus': { color: 'inherit' } }
});
export const hoverBlack90 = typestyle.style({
    $debugName: 'hoverBlack90',
    $nest: { '&:focus': { color: 'rgba( 0, 0, 0, .9 )' } }
});
export const hoverBlack80 = typestyle.style({
    $debugName: 'hoverBlack80',
    $nest: { '&:focus': { color: 'rgba( 0, 0, 0, .8 )' } }
});
export const hoverBlack70 = typestyle.style({
    $debugName: 'hoverBlack70',
    $nest: { '&:focus': { color: 'rgba( 0, 0, 0, .7 )' } }
});
export const hoverBlack60 = typestyle.style({
    $debugName: 'hoverBlack60',
    $nest: { '&:focus': { color: 'rgba( 0, 0, 0, .6 )' } }
});
export const hoverBlack50 = typestyle.style({
    $debugName: 'hoverBlack50',
    $nest: { '&:focus': { color: 'rgba( 0, 0, 0, .5 )' } }
});
export const hoverBlack40 = typestyle.style({
    $debugName: 'hoverBlack40',
    $nest: { '&:focus': { color: 'rgba( 0, 0, 0, .4 )' } }
});
export const hoverBlack30 = typestyle.style({
    $debugName: 'hoverBlack30',
    $nest: { '&:focus': { color: 'rgba( 0, 0, 0, .3 )' } }
});
export const hoverBlack20 = typestyle.style({
    $debugName: 'hoverBlack20',
    $nest: { '&:focus': { color: 'rgba( 0, 0, 0, .2 )' } }
});
export const hoverBlack10 = typestyle.style({
    $debugName: 'hoverBlack10',
    $nest: { '&:focus': { color: 'rgba( 0, 0, 0, .1 )' } }
});
export const hoverWhite90 = typestyle.style({
    $debugName: 'hoverWhite90',
    $nest: { '&:focus': { color: 'rgba( 255, 255, 255, .9 )' } }
});
export const hoverWhite80 = typestyle.style({
    $debugName: 'hoverWhite80',
    $nest: { '&:focus': { color: 'rgba( 255, 255, 255, .8 )' } }
});
export const hoverWhite70 = typestyle.style({
    $debugName: 'hoverWhite70',
    $nest: { '&:focus': { color: 'rgba( 255, 255, 255, .7 )' } }
});
export const hoverWhite60 = typestyle.style({
    $debugName: 'hoverWhite60',
    $nest: { '&:focus': { color: 'rgba( 255, 255, 255, .6 )' } }
});
export const hoverWhite50 = typestyle.style({
    $debugName: 'hoverWhite50',
    $nest: { '&:focus': { color: 'rgba( 255, 255, 255, .5 )' } }
});
export const hoverWhite40 = typestyle.style({
    $debugName: 'hoverWhite40',
    $nest: { '&:focus': { color: 'rgba( 255, 255, 255, .4 )' } }
});
export const hoverWhite30 = typestyle.style({
    $debugName: 'hoverWhite30',
    $nest: { '&:focus': { color: 'rgba( 255, 255, 255, .3 )' } }
});
export const hoverWhite20 = typestyle.style({
    $debugName: 'hoverWhite20',
    $nest: { '&:focus': { color: 'rgba( 255, 255, 255, .2 )' } }
});
export const hoverWhite10 = typestyle.style({
    $debugName: 'hoverWhite10',
    $nest: { '&:focus': { color: 'rgba( 255, 255, 255, .1 )' } }
});
export const hoverBackgroundcolorBlack = typestyle.style({
    $debugName: 'hoverBackgroundcolorBlack',
    $nest: { '&:focus': { backgroundColor: '#000' } }
});
export const hoverBackgroundcolorNearblack = typestyle.style({
    $debugName: 'hoverBackgroundcolorNearblack',
    $nest: { '&:focus': { backgroundColor: '#111' } }
});
export const hoverBackgroundcolorDarkgray = typestyle.style({
    $debugName: 'hoverBackgroundcolorDarkgray',
    $nest: { '&:focus': { backgroundColor: '#333' } }
});
export const hoverBackgroundcolorDarkgrey = typestyle.style({
    $debugName: 'hoverBackgroundcolorDarkgrey',
    $nest: { '&:focus': { backgroundColor: '#333' } }
});
export const hoverBackgroundcolorMidgray = typestyle.style({
    $debugName: 'hoverBackgroundcolorMidgray',
    $nest: { '&:focus': { backgroundColor: '#555' } }
});
export const hoverBackgroundcolorMidgrey = typestyle.style({
    $debugName: 'hoverBackgroundcolorMidgrey',
    $nest: { '&:focus': { backgroundColor: '#555' } }
});
export const hoverBackgroundcolorGray = typestyle.style({
    $debugName: 'hoverBackgroundcolorGray',
    $nest: { '&:focus': { backgroundColor: '#777' } }
});
export const hoverBackgroundcolorGrey = typestyle.style({
    $debugName: 'hoverBackgroundcolorGrey',
    $nest: { '&:focus': { backgroundColor: '#777' } }
});
export const hoverBackgroundcolorSilver = typestyle.style({
    $debugName: 'hoverBackgroundcolorSilver',
    $nest: { '&:focus': { backgroundColor: '#999' } }
});
export const hoverBackgroundcolorLightsilver = typestyle.style({
    $debugName: 'hoverBackgroundcolorLightsilver',
    $nest: { '&:focus': { backgroundColor: '#aaa' } }
});
export const hoverBackgroundcolorMoongray = typestyle.style({
    $debugName: 'hoverBackgroundcolorMoongray',
    $nest: { '&:focus': { backgroundColor: '#ccc' } }
});
export const hoverBackgroundcolorMoongrey = typestyle.style({
    $debugName: 'hoverBackgroundcolorMoongrey',
    $nest: { '&:focus': { backgroundColor: '#ccc' } }
});
export const hoverBackgroundcolorLightgray = typestyle.style({
    $debugName: 'hoverBackgroundcolorLightgray',
    $nest: { '&:focus': { backgroundColor: '#eee' } }
});
export const hoverBackgroundcolorLightgrey = typestyle.style({
    $debugName: 'hoverBackgroundcolorLightgrey',
    $nest: { '&:focus': { backgroundColor: '#eee' } }
});
export const hoverBackgroundcolorNearwhite = typestyle.style({
    $debugName: 'hoverBackgroundcolorNearwhite',
    $nest: { '&:focus': { backgroundColor: '#f4f4f4' } }
});
export const hoverBackgroundcolorWhite = typestyle.style({
    $debugName: 'hoverBackgroundcolorWhite',
    $nest: { '&:focus': { backgroundColor: '#fff' } }
});
export const hoverBackgroundcolorTransparent = typestyle.style({
    $debugName: 'hoverBackgroundcolorTransparent',
    $nest: { '&:focus': { backgroundColor: 'transparent' } }
});
export const hoverBackgroundcolorBlack90 = typestyle.style({
    $debugName: 'hoverBackgroundcolorBlack90',
    $nest: { '&:focus': { backgroundColor: 'rgba( 0, 0, 0, .9 )' } }
});
export const hoverBackgroundcolorBlack80 = typestyle.style({
    $debugName: 'hoverBackgroundcolorBlack80',
    $nest: { '&:focus': { backgroundColor: 'rgba( 0, 0, 0, .8 )' } }
});
export const hoverBackgroundcolorBlack70 = typestyle.style({
    $debugName: 'hoverBackgroundcolorBlack70',
    $nest: { '&:focus': { backgroundColor: 'rgba( 0, 0, 0, .7 )' } }
});
export const hoverBackgroundcolorBlack60 = typestyle.style({
    $debugName: 'hoverBackgroundcolorBlack60',
    $nest: { '&:focus': { backgroundColor: 'rgba( 0, 0, 0, .6 )' } }
});
export const hoverBackgroundcolorBlack50 = typestyle.style({
    $debugName: 'hoverBackgroundcolorBlack50',
    $nest: { '&:focus': { backgroundColor: 'rgba( 0, 0, 0, .5 )' } }
});
export const hoverBackgroundcolorBlack40 = typestyle.style({
    $debugName: 'hoverBackgroundcolorBlack40',
    $nest: { '&:focus': { backgroundColor: 'rgba( 0, 0, 0, .4 )' } }
});
export const hoverBackgroundcolorBlack30 = typestyle.style({
    $debugName: 'hoverBackgroundcolorBlack30',
    $nest: { '&:focus': { backgroundColor: 'rgba( 0, 0, 0, .3 )' } }
});
export const hoverBackgroundcolorBlack20 = typestyle.style({
    $debugName: 'hoverBackgroundcolorBlack20',
    $nest: { '&:focus': { backgroundColor: 'rgba( 0, 0, 0, .2 )' } }
});
export const hoverBackgroundcolorBlack10 = typestyle.style({
    $debugName: 'hoverBackgroundcolorBlack10',
    $nest: { '&:focus': { backgroundColor: 'rgba( 0, 0, 0, .1 )' } }
});
export const hoverBackgroundcolorWhite90 = typestyle.style({
    $debugName: 'hoverBackgroundcolorWhite90',
    $nest: { '&:focus': { backgroundColor: 'rgba( 255, 255, 255, .9 )' } }
});
export const hoverBackgroundcolorWhite80 = typestyle.style({
    $debugName: 'hoverBackgroundcolorWhite80',
    $nest: { '&:focus': { backgroundColor: 'rgba( 255, 255, 255, .8 )' } }
});
export const hoverBackgroundcolorWhite70 = typestyle.style({
    $debugName: 'hoverBackgroundcolorWhite70',
    $nest: { '&:focus': { backgroundColor: 'rgba( 255, 255, 255, .7 )' } }
});
export const hoverBackgroundcolorWhite60 = typestyle.style({
    $debugName: 'hoverBackgroundcolorWhite60',
    $nest: { '&:focus': { backgroundColor: 'rgba( 255, 255, 255, .6 )' } }
});
export const hoverBackgroundcolorWhite50 = typestyle.style({
    $debugName: 'hoverBackgroundcolorWhite50',
    $nest: { '&:focus': { backgroundColor: 'rgba( 255, 255, 255, .5 )' } }
});
export const hoverBackgroundcolorWhite40 = typestyle.style({
    $debugName: 'hoverBackgroundcolorWhite40',
    $nest: { '&:focus': { backgroundColor: 'rgba( 255, 255, 255, .4 )' } }
});
export const hoverBackgroundcolorWhite30 = typestyle.style({
    $debugName: 'hoverBackgroundcolorWhite30',
    $nest: { '&:focus': { backgroundColor: 'rgba( 255, 255, 255, .3 )' } }
});
export const hoverBackgroundcolorWhite20 = typestyle.style({
    $debugName: 'hoverBackgroundcolorWhite20',
    $nest: { '&:focus': { backgroundColor: 'rgba( 255, 255, 255, .2 )' } }
});
export const hoverBackgroundcolorWhite10 = typestyle.style({
    $debugName: 'hoverBackgroundcolorWhite10',
    $nest: { '&:focus': { backgroundColor: 'rgba( 255, 255, 255, .1 )' } }
});
export const hoverBackgroundcolorDarkred = typestyle.style({
    $debugName: 'hoverBackgroundcolorDarkred',
    $nest: { '&:focus': { backgroundColor: '#e7040f' } }
});
export const hoverBackgroundcolorRed = typestyle.style({
    $debugName: 'hoverBackgroundcolorRed',
    $nest: { '&:focus': { backgroundColor: '#ff4136' } }
});
export const hoverBackgroundcolorLightred = typestyle.style({
    $debugName: 'hoverBackgroundcolorLightred',
    $nest: { '&:focus': { backgroundColor: '#ff725c' } }
});
export const hoverBackgroundcolorOrange = typestyle.style({
    $debugName: 'hoverBackgroundcolorOrange',
    $nest: { '&:focus': { backgroundColor: '#ff6300' } }
});
export const hoverBackgroundcolorGold = typestyle.style({
    $debugName: 'hoverBackgroundcolorGold',
    $nest: { '&:focus': { backgroundColor: '#ffb700' } }
});
export const hoverBackgroundcolorYellow = typestyle.style({
    $debugName: 'hoverBackgroundcolorYellow',
    $nest: { '&:focus': { backgroundColor: '#ffd700' } }
});
export const hoverBackgroundcolorLightyellow = typestyle.style({
    $debugName: 'hoverBackgroundcolorLightyellow',
    $nest: { '&:focus': { backgroundColor: '#fbf1a9' } }
});
export const hoverBackgroundcolorPurple = typestyle.style({
    $debugName: 'hoverBackgroundcolorPurple',
    $nest: { '&:focus': { backgroundColor: '#5e2ca5' } }
});
export const hoverBackgroundcolorLightpurple = typestyle.style({
    $debugName: 'hoverBackgroundcolorLightpurple',
    $nest: { '&:focus': { backgroundColor: '#a463f2' } }
});
export const hoverBackgroundcolorDarkpink = typestyle.style({
    $debugName: 'hoverBackgroundcolorDarkpink',
    $nest: { '&:focus': { backgroundColor: '#d5008f' } }
});
export const hoverBackgroundcolorHotpink = typestyle.style({
    $debugName: 'hoverBackgroundcolorHotpink',
    $nest: { '&:focus': { backgroundColor: '#ff41b4' } }
});
export const hoverBackgroundcolorPink = typestyle.style({
    $debugName: 'hoverBackgroundcolorPink',
    $nest: { '&:focus': { backgroundColor: '#ff80cc' } }
});
export const hoverBackgroundcolorLightpink = typestyle.style({
    $debugName: 'hoverBackgroundcolorLightpink',
    $nest: { '&:focus': { backgroundColor: '#ffa3d7' } }
});
export const hoverBackgroundcolorDarkgreen = typestyle.style({
    $debugName: 'hoverBackgroundcolorDarkgreen',
    $nest: { '&:focus': { backgroundColor: '#137752' } }
});
export const hoverBackgroundcolorGreen = typestyle.style({
    $debugName: 'hoverBackgroundcolorGreen',
    $nest: { '&:focus': { backgroundColor: '#19a974' } }
});
export const hoverBackgroundcolorLightgreen = typestyle.style({
    $debugName: 'hoverBackgroundcolorLightgreen',
    $nest: { '&:focus': { backgroundColor: '#9eebcf' } }
});
export const hoverBackgroundcolorNavy = typestyle.style({
    $debugName: 'hoverBackgroundcolorNavy',
    $nest: { '&:focus': { backgroundColor: '#001b44' } }
});
export const hoverBackgroundcolorDarkblue = typestyle.style({
    $debugName: 'hoverBackgroundcolorDarkblue',
    $nest: { '&:focus': { backgroundColor: '#00449e' } }
});
export const hoverBackgroundcolorBlue = typestyle.style({
    $debugName: 'hoverBackgroundcolorBlue',
    $nest: { '&:focus': { backgroundColor: '#357edd' } }
});
export const hoverBackgroundcolorLightblue = typestyle.style({
    $debugName: 'hoverBackgroundcolorLightblue',
    $nest: { '&:focus': { backgroundColor: '#96ccff' } }
});
export const hoverBackgroundcolorLightestblue = typestyle.style({
    $debugName: 'hoverBackgroundcolorLightestblue',
    $nest: { '&:focus': { backgroundColor: '#cdecff' } }
});
export const hoverBackgroundcolorWashedblue = typestyle.style({
    $debugName: 'hoverBackgroundcolorWashedblue',
    $nest: { '&:focus': { backgroundColor: '#f6fffe' } }
});
export const hoverBackgroundcolorWashedgreen = typestyle.style({
    $debugName: 'hoverBackgroundcolorWashedgreen',
    $nest: { '&:focus': { backgroundColor: '#e8fdf5' } }
});
export const hoverBackgroundcolorWashedyellow = typestyle.style({
    $debugName: 'hoverBackgroundcolorWashedyellow',
    $nest: { '&:focus': { backgroundColor: '#fffceb' } }
});
export const hoverBackgroundcolorWashedred = typestyle.style({
    $debugName: 'hoverBackgroundcolorWashedred',
    $nest: { '&:focus': { backgroundColor: '#ffdfdf' } }
});
export const hoverBackgroundcolorInherit = typestyle.style({
    $debugName: 'hoverBackgroundcolorInherit',
    $nest: { '&:focus': { backgroundColor: 'inherit' } }
});
export const paddingNone = typestyle.style({
    $debugName: 'paddingNone',
    padding: 0
});
export const padding0 = typestyle.style({ $debugName: 'padding0', padding: 0 });
export const paddingXxxsmall = typestyle.style({
    $debugName: 'paddingXxxsmall',
    padding: '.0625rem'
});
export const paddingXxsmall = typestyle.style({
    $debugName: 'paddingXxsmall',
    padding: '.125rem'
});
export const paddingXsmall = typestyle.style({
    $debugName: 'paddingXsmall',
    padding: '.25rem'
});
export const paddingSmall = typestyle.style({
    $debugName: 'paddingSmall',
    padding: '.5rem'
});
export const paddingMedium = typestyle.style({
    $debugName: 'paddingMedium',
    padding: '1rem'
});
export const paddingLarge = typestyle.style({
    $debugName: 'paddingLarge',
    padding: '2rem'
});
export const paddingXlarge = typestyle.style({
    $debugName: 'paddingXlarge',
    padding: '4rem'
});
export const paddingXxlarge = typestyle.style({
    $debugName: 'paddingXxlarge',
    padding: '8rem'
});
export const paddingXxxlarge = typestyle.style({
    $debugName: 'paddingXxxlarge',
    padding: '16rem'
});
export const paddingleftNone = typestyle.style({
    $debugName: 'paddingleftNone',
    paddingLeft: 0
});
export const paddingleft0 = typestyle.style({
    $debugName: 'paddingleft0',
    paddingLeft: 0
});
export const paddingleftXxxsmall = typestyle.style({
    $debugName: 'paddingleftXxxsmall',
    paddingLeft: '.0625rem'
});
export const paddingleftXxsmall = typestyle.style({
    $debugName: 'paddingleftXxsmall',
    paddingLeft: '.125rem'
});
export const paddingleftXsmall = typestyle.style({
    $debugName: 'paddingleftXsmall',
    paddingLeft: '.25rem'
});
export const paddingleftSmall = typestyle.style({
    $debugName: 'paddingleftSmall',
    paddingLeft: '.5rem'
});
export const paddingleftMedium = typestyle.style({
    $debugName: 'paddingleftMedium',
    paddingLeft: '1rem'
});
export const paddingleftLarge = typestyle.style({
    $debugName: 'paddingleftLarge',
    paddingLeft: '2rem'
});
export const paddingleftXlarge = typestyle.style({
    $debugName: 'paddingleftXlarge',
    paddingLeft: '4rem'
});
export const paddingleftXxlarge = typestyle.style({
    $debugName: 'paddingleftXxlarge',
    paddingLeft: '8rem'
});
export const paddingleftXxxlarge = typestyle.style({
    $debugName: 'paddingleftXxxlarge',
    paddingLeft: '16rem'
});
export const paddingrightNone = typestyle.style({
    $debugName: 'paddingrightNone',
    paddingRight: 0
});
export const paddingright0 = typestyle.style({
    $debugName: 'paddingright0',
    paddingRight: 0
});
export const paddingrightXxxsmall = typestyle.style({
    $debugName: 'paddingrightXxxsmall',
    paddingRight: '.0625rem'
});
export const paddingrightXxsmall = typestyle.style({
    $debugName: 'paddingrightXxsmall',
    paddingRight: '.125rem'
});
export const paddingrightXsmall = typestyle.style({
    $debugName: 'paddingrightXsmall',
    paddingRight: '.25rem'
});
export const paddingrightSmall = typestyle.style({
    $debugName: 'paddingrightSmall',
    paddingRight: '.5rem'
});
export const paddingrightMedium = typestyle.style({
    $debugName: 'paddingrightMedium',
    paddingRight: '1rem'
});
export const paddingrightLarge = typestyle.style({
    $debugName: 'paddingrightLarge',
    paddingRight: '2rem'
});
export const paddingrightXlarge = typestyle.style({
    $debugName: 'paddingrightXlarge',
    paddingRight: '4rem'
});
export const paddingrightXxlarge = typestyle.style({
    $debugName: 'paddingrightXxlarge',
    paddingRight: '8rem'
});
export const paddingrightXxxlarge = typestyle.style({
    $debugName: 'paddingrightXxxlarge',
    paddingRight: '16rem'
});
export const paddingbottomNone = typestyle.style({
    $debugName: 'paddingbottomNone',
    paddingBottom: 0
});
export const paddingbottom0 = typestyle.style({
    $debugName: 'paddingbottom0',
    paddingBottom: 0
});
export const paddingbottomXxxsmall = typestyle.style({
    $debugName: 'paddingbottomXxxsmall',
    paddingBottom: '.0625rem'
});
export const paddingbottomXxsmall = typestyle.style({
    $debugName: 'paddingbottomXxsmall',
    paddingBottom: '.125rem'
});
export const paddingbottomXsmall = typestyle.style({
    $debugName: 'paddingbottomXsmall',
    paddingBottom: '.25rem'
});
export const paddingbottomSmall = typestyle.style({
    $debugName: 'paddingbottomSmall',
    paddingBottom: '.5rem'
});
export const paddingbottomMedium = typestyle.style({
    $debugName: 'paddingbottomMedium',
    paddingBottom: '1rem'
});
export const paddingbottomLarge = typestyle.style({
    $debugName: 'paddingbottomLarge',
    paddingBottom: '2rem'
});
export const paddingbottomXlarge = typestyle.style({
    $debugName: 'paddingbottomXlarge',
    paddingBottom: '4rem'
});
export const paddingbottomXxlarge = typestyle.style({
    $debugName: 'paddingbottomXxlarge',
    paddingBottom: '8rem'
});
export const paddingbottomXxxlarge = typestyle.style({
    $debugName: 'paddingbottomXxxlarge',
    paddingBottom: '16rem'
});
export const paddingtopNone = typestyle.style({
    $debugName: 'paddingtopNone',
    paddingTop: 0
});
export const paddingtop0 = typestyle.style({
    $debugName: 'paddingtop0',
    paddingTop: 0
});
export const paddingtopXxxsmall = typestyle.style({
    $debugName: 'paddingtopXxxsmall',
    paddingTop: '.0625rem'
});
export const paddingtopXxsmall = typestyle.style({
    $debugName: 'paddingtopXxsmall',
    paddingTop: '.125rem'
});
export const paddingtopXsmall = typestyle.style({
    $debugName: 'paddingtopXsmall',
    paddingTop: '.25rem'
});
export const paddingtopSmall = typestyle.style({
    $debugName: 'paddingtopSmall',
    paddingTop: '.5rem'
});
export const paddingtopMedium = typestyle.style({
    $debugName: 'paddingtopMedium',
    paddingTop: '1rem'
});
export const paddingtopLarge = typestyle.style({
    $debugName: 'paddingtopLarge',
    paddingTop: '2rem'
});
export const paddingtopXlarge = typestyle.style({
    $debugName: 'paddingtopXlarge',
    paddingTop: '4rem'
});
export const paddingtopXxlarge = typestyle.style({
    $debugName: 'paddingtopXxlarge',
    paddingTop: '8rem'
});
export const paddingtopXxxlarge = typestyle.style({
    $debugName: 'paddingtopXxxlarge',
    paddingTop: '16rem'
});
export const paddingverticalNone = typestyle.style({
    $debugName: 'paddingverticalNone',
    paddingTop: 0,
    paddingBottom: 0
});
export const paddingvertical0 = typestyle.style({
    $debugName: 'paddingvertical0',
    paddingTop: 0,
    paddingBottom: 0
});
export const paddingverticalXxxsmall = typestyle.style({
    $debugName: 'paddingverticalXxxsmall',
    paddingTop: '.0625rem',
    paddingBottom: '.0625rem'
});
export const paddingverticalXxsmall = typestyle.style({
    $debugName: 'paddingverticalXxsmall',
    paddingTop: '.125rem',
    paddingBottom: '.0625rem'
});
export const paddingverticalXsmall = typestyle.style({
    $debugName: 'paddingverticalXsmall',
    paddingTop: '.25rem',
    paddingBottom: '.25rem'
});
export const paddingverticalSmall = typestyle.style({
    $debugName: 'paddingverticalSmall',
    paddingTop: '.5rem',
    paddingBottom: '.5rem'
});
export const paddingverticalMedium = typestyle.style({
    $debugName: 'paddingverticalMedium',
    paddingTop: '1rem',
    paddingBottom: '1rem'
});
export const paddingverticalLarge = typestyle.style({
    $debugName: 'paddingverticalLarge',
    paddingTop: '2rem',
    paddingBottom: '2rem'
});
export const paddingverticalXlarge = typestyle.style({
    $debugName: 'paddingverticalXlarge',
    paddingTop: '4rem',
    paddingBottom: '4rem'
});
export const paddingverticalXxlarge = typestyle.style({
    $debugName: 'paddingverticalXxlarge',
    paddingTop: '8rem',
    paddingBottom: '8rem'
});
export const paddingverticalXxxlarge = typestyle.style({
    $debugName: 'paddingverticalXxxlarge',
    paddingTop: '16rem',
    paddingBottom: '16rem'
});
export const paddinghorizontalNone = typestyle.style({
    $debugName: 'paddinghorizontalNone',
    paddingLeft: 0,
    paddingRight: 0
});
export const paddinghorizontal0 = typestyle.style({
    $debugName: 'paddinghorizontal0',
    paddingLeft: 0,
    paddingRight: 0
});
export const paddinghorizontalXxxsmall = typestyle.style({
    $debugName: 'paddinghorizontalXxxsmall',
    paddingLeft: '.0625rem',
    paddingRight: '.0625rem'
});
export const paddinghorizontalXxsmall = typestyle.style({
    $debugName: 'paddinghorizontalXxsmall',
    paddingLeft: '.125rem',
    paddingRight: '.125rem'
});
export const paddinghorizontalXsmall = typestyle.style({
    $debugName: 'paddinghorizontalXsmall',
    paddingLeft: '.25rem',
    paddingRight: '.25rem'
});
export const paddinghorizontalSmall = typestyle.style({
    $debugName: 'paddinghorizontalSmall',
    paddingLeft: '.5rem',
    paddingRight: '.5rem'
});
export const paddinghorizontalMedium = typestyle.style({
    $debugName: 'paddinghorizontalMedium',
    paddingLeft: '1rem',
    paddingRight: '1rem'
});
export const paddinghorizontalLarge = typestyle.style({
    $debugName: 'paddinghorizontalLarge',
    paddingLeft: '2rem',
    paddingRight: '2rem'
});
export const paddinghorizontalXlarge = typestyle.style({
    $debugName: 'paddinghorizontalXlarge',
    paddingLeft: '4rem',
    paddingRight: '4rem'
});
export const paddinghorizontalXxlarge = typestyle.style({
    $debugName: 'paddinghorizontalXxlarge',
    paddingLeft: '8rem',
    paddingRight: '8rem'
});
export const paddinghorizontalXxxlarge = typestyle.style({
    $debugName: 'paddinghorizontalXxxlarge',
    paddingLeft: '16rem',
    paddingRight: '16rem'
});
export const marginNone = typestyle.style({
    $debugName: 'marginNone',
    margin: 0
});
export const margin0 = typestyle.style({ $debugName: 'margin0', margin: 0 });
export const marginXxxsmall = typestyle.style({
    $debugName: 'marginXxxsmall',
    margin: '.0625rem'
});
export const marginXxsmall = typestyle.style({
    $debugName: 'marginXxsmall',
    margin: '.125rem'
});
export const marginXsmall = typestyle.style({
    $debugName: 'marginXsmall',
    margin: '.25rem'
});
export const marginSmall = typestyle.style({
    $debugName: 'marginSmall',
    margin: '.5rem'
});
export const marginMedium = typestyle.style({
    $debugName: 'marginMedium',
    margin: '1rem'
});
export const marginLarge = typestyle.style({
    $debugName: 'marginLarge',
    margin: '2rem'
});
export const marginXlarge = typestyle.style({
    $debugName: 'marginXlarge',
    margin: '4rem'
});
export const marginXxlarge = typestyle.style({
    $debugName: 'marginXxlarge',
    margin: '8rem'
});
export const marginXxxlarge = typestyle.style({
    $debugName: 'marginXxxlarge',
    margin: '16rem'
});
export const marginleftNone = typestyle.style({
    $debugName: 'marginleftNone',
    marginLeft: 0
});
export const marginleft0 = typestyle.style({
    $debugName: 'marginleft0',
    marginLeft: 0
});
export const marginleftXxxsmall = typestyle.style({
    $debugName: 'marginleftXxxsmall',
    marginLeft: '.0625rem'
});
export const marginleftXxsmall = typestyle.style({
    $debugName: 'marginleftXxsmall',
    marginLeft: '.125rem'
});
export const marginleftXsmall = typestyle.style({
    $debugName: 'marginleftXsmall',
    marginLeft: '.25rem'
});
export const marginleftSmall = typestyle.style({
    $debugName: 'marginleftSmall',
    marginLeft: '.5rem'
});
export const marginleftMedium = typestyle.style({
    $debugName: 'marginleftMedium',
    marginLeft: '1rem'
});
export const marginleftLarge = typestyle.style({
    $debugName: 'marginleftLarge',
    marginLeft: '2rem'
});
export const marginleftXlarge = typestyle.style({
    $debugName: 'marginleftXlarge',
    marginLeft: '4rem'
});
export const marginleftXxlarge = typestyle.style({
    $debugName: 'marginleftXxlarge',
    marginLeft: '8rem'
});
export const marginleftXxxlarge = typestyle.style({
    $debugName: 'marginleftXxxlarge',
    marginLeft: '16rem'
});
export const marginrightNone = typestyle.style({
    $debugName: 'marginrightNone',
    marginRight: 0
});
export const marginright0 = typestyle.style({
    $debugName: 'marginright0',
    marginRight: 0
});
export const marginrightXxxsmall = typestyle.style({
    $debugName: 'marginrightXxxsmall',
    marginRight: '.0625rem'
});
export const marginrightXxsmall = typestyle.style({
    $debugName: 'marginrightXxsmall',
    marginRight: '.125rem'
});
export const marginrightXsmall = typestyle.style({
    $debugName: 'marginrightXsmall',
    marginRight: '.25rem'
});
export const marginrightSmall = typestyle.style({
    $debugName: 'marginrightSmall',
    marginRight: '.5rem'
});
export const marginrightMedium = typestyle.style({
    $debugName: 'marginrightMedium',
    marginRight: '1rem'
});
export const marginrightLarge = typestyle.style({
    $debugName: 'marginrightLarge',
    marginRight: '2rem'
});
export const marginrightXlarge = typestyle.style({
    $debugName: 'marginrightXlarge',
    marginRight: '4rem'
});
export const marginrightXxlarge = typestyle.style({
    $debugName: 'marginrightXxlarge',
    marginRight: '8rem'
});
export const marginrightXxxlarge = typestyle.style({
    $debugName: 'marginrightXxxlarge',
    marginRight: '16rem'
});
export const marginbottomNone = typestyle.style({
    $debugName: 'marginbottomNone',
    marginBottom: 0
});
export const marginbottom0 = typestyle.style({
    $debugName: 'marginbottom0',
    marginBottom: 0
});
export const marginbottomXxxsmall = typestyle.style({
    $debugName: 'marginbottomXxxsmall',
    marginBottom: '.0625rem'
});
export const marginbottomXxsmall = typestyle.style({
    $debugName: 'marginbottomXxsmall',
    marginBottom: '.125rem'
});
export const marginbottomXsmall = typestyle.style({
    $debugName: 'marginbottomXsmall',
    marginBottom: '.25rem'
});
export const marginbottomSmall = typestyle.style({
    $debugName: 'marginbottomSmall',
    marginBottom: '.5rem'
});
export const marginbottomMedium = typestyle.style({
    $debugName: 'marginbottomMedium',
    marginBottom: '1rem'
});
export const marginbottomLarge = typestyle.style({
    $debugName: 'marginbottomLarge',
    marginBottom: '2rem'
});
export const marginbottomXlarge = typestyle.style({
    $debugName: 'marginbottomXlarge',
    marginBottom: '4rem'
});
export const marginbottomXxlarge = typestyle.style({
    $debugName: 'marginbottomXxlarge',
    marginBottom: '8rem'
});
export const marginbottomXxxlarge = typestyle.style({
    $debugName: 'marginbottomXxxlarge',
    marginBottom: '16rem'
});
export const margintopNone = typestyle.style({
    $debugName: 'margintopNone',
    marginTop: 0
});
export const margintop0 = typestyle.style({
    $debugName: 'margintop0',
    marginTop: 0
});
export const margintopXxxsmall = typestyle.style({
    $debugName: 'margintopXxxsmall',
    marginTop: '.0625rem'
});
export const margintopXxsmall = typestyle.style({
    $debugName: 'margintopXxsmall',
    marginTop: '.125rem'
});
export const margintopXsmall = typestyle.style({
    $debugName: 'margintopXsmall',
    marginTop: '.25rem'
});
export const margintopSmall = typestyle.style({
    $debugName: 'margintopSmall',
    marginTop: '.5rem'
});
export const margintopMedium = typestyle.style({
    $debugName: 'margintopMedium',
    marginTop: '1rem'
});
export const margintopLarge = typestyle.style({
    $debugName: 'margintopLarge',
    marginTop: '2rem'
});
export const margintopXlarge = typestyle.style({
    $debugName: 'margintopXlarge',
    marginTop: '4rem'
});
export const margintopXxlarge = typestyle.style({
    $debugName: 'margintopXxlarge',
    marginTop: '8rem'
});
export const margintopXxxlarge = typestyle.style({
    $debugName: 'margintopXxxlarge',
    marginTop: '16rem'
});
export const marginverticalNone = typestyle.style({
    $debugName: 'marginverticalNone',
    marginTop: 0,
    marginBottom: 0
});
export const marginvertical0 = typestyle.style({
    $debugName: 'marginvertical0',
    marginTop: 0,
    marginBottom: 0
});
export const marginverticalXxxsmall = typestyle.style({
    $debugName: 'marginverticalXxxsmall',
    marginTop: '.0625rem',
    marginBottom: '.0625rem'
});
export const marginverticalXxsmall = typestyle.style({
    $debugName: 'marginverticalXxsmall',
    marginTop: '.125rem',
    marginBottom: '.125rem'
});
export const marginverticalXsmall = typestyle.style({
    $debugName: 'marginverticalXsmall',
    marginTop: '.25rem',
    marginBottom: '.25rem'
});
export const marginverticalSmall = typestyle.style({
    $debugName: 'marginverticalSmall',
    marginTop: '.5rem',
    marginBottom: '.5rem'
});
export const marginverticalMedium = typestyle.style({
    $debugName: 'marginverticalMedium',
    marginTop: '1rem',
    marginBottom: '1rem'
});
export const marginverticalLarge = typestyle.style({
    $debugName: 'marginverticalLarge',
    marginTop: '2rem',
    marginBottom: '2rem'
});
export const marginverticalXlarge = typestyle.style({
    $debugName: 'marginverticalXlarge',
    marginTop: '4rem',
    marginBottom: '4rem'
});
export const marginverticalXxlarge = typestyle.style({
    $debugName: 'marginverticalXxlarge',
    marginTop: '8rem',
    marginBottom: '8rem'
});
export const marginverticalXxxlarge = typestyle.style({
    $debugName: 'marginverticalXxxlarge',
    marginTop: '16rem',
    marginBottom: '16rem'
});
export const marginhorizontalNone = typestyle.style({
    $debugName: 'marginhorizontalNone',
    marginLeft: 0,
    marginRight: 0
});
export const marginhorizontal0 = typestyle.style({
    $debugName: 'marginhorizontal0',
    marginLeft: 0,
    marginRight: 0
});
export const marginhorizontalXxxsmall = typestyle.style({
    $debugName: 'marginhorizontalXxxsmall',
    marginLeft: '.0625rem',
    marginRight: '.0625rem'
});
export const marginhorizontalXxsmall = typestyle.style({
    $debugName: 'marginhorizontalXxsmall',
    marginLeft: '.125rem',
    marginRight: '.125rem'
});
export const marginhorizontalXsmall = typestyle.style({
    $debugName: 'marginhorizontalXsmall',
    marginLeft: '.25rem',
    marginRight: '.25rem'
});
export const marginhorizontalSmall = typestyle.style({
    $debugName: 'marginhorizontalSmall',
    marginLeft: '.5rem',
    marginRight: '.5rem'
});
export const marginhorizontalMedium = typestyle.style({
    $debugName: 'marginhorizontalMedium',
    marginLeft: '1rem',
    marginRight: '1rem'
});
export const marginhorizontalLarge = typestyle.style({
    $debugName: 'marginhorizontalLarge',
    marginLeft: '2rem',
    marginRight: '2rem'
});
export const marginhorizontalXlarge = typestyle.style({
    $debugName: 'marginhorizontalXlarge',
    marginLeft: '4rem',
    marginRight: '4rem'
});
export const marginhorizontalXxlarge = typestyle.style({
    $debugName: 'marginhorizontalXxlarge',
    marginLeft: '8rem',
    marginRight: '8rem'
});
export const marginhorizontalXxxlarge = typestyle.style({
    $debugName: 'marginhorizontalXxxlarge',
    marginLeft: '16rem',
    marginRight: '16rem'
});
export const marginNegXxxsmall = typestyle.style({
    $debugName: 'marginNegXxxsmall',
    margin: '-0.0625rem'
});
export const marginNegXxsmall = typestyle.style({
    $debugName: 'marginNegXxsmall',
    margin: '-0.125rem'
});
export const marginNegXsmall = typestyle.style({
    $debugName: 'marginNegXsmall',
    margin: '-0.25rem'
});
export const marginNegSmall = typestyle.style({
    $debugName: 'marginNegSmall',
    margin: '-0.5rem'
});
export const marginNegMedium = typestyle.style({
    $debugName: 'marginNegMedium',
    margin: '-1rem'
});
export const marginNegLarge = typestyle.style({
    $debugName: 'marginNegLarge',
    margin: '-2rem'
});
export const marginNegXlarge = typestyle.style({
    $debugName: 'marginNegXlarge',
    margin: '-4rem'
});
export const marginNegXxlarge = typestyle.style({
    $debugName: 'marginNegXxlarge',
    margin: '-8rem'
});
export const marginNegXxxlarge = typestyle.style({
    $debugName: 'marginNegXxxlarge',
    margin: '-16rem'
});
export const marginleftNegXxxsmall = typestyle.style({
    $debugName: 'marginleftNegXxxsmall',
    marginLeft: '-0.0625rem'
});
export const marginleftNegXxsmall = typestyle.style({
    $debugName: 'marginleftNegXxsmall',
    marginLeft: '-0.125rem'
});
export const marginleftNegXsmall = typestyle.style({
    $debugName: 'marginleftNegXsmall',
    marginLeft: '-0.25rem'
});
export const marginleftNegSmall = typestyle.style({
    $debugName: 'marginleftNegSmall',
    marginLeft: '-0.5rem'
});
export const marginleftNegMedium = typestyle.style({
    $debugName: 'marginleftNegMedium',
    marginLeft: '-1rem'
});
export const marginleftNegLarge = typestyle.style({
    $debugName: 'marginleftNegLarge',
    marginLeft: '-2rem'
});
export const marginleftNegXlarge = typestyle.style({
    $debugName: 'marginleftNegXlarge',
    marginLeft: '-4rem'
});
export const marginleftNegXxlarge = typestyle.style({
    $debugName: 'marginleftNegXxlarge',
    marginLeft: '-8rem'
});
export const marginleftNegXxxlarge = typestyle.style({
    $debugName: 'marginleftNegXxxlarge',
    marginLeft: '-16rem'
});
export const marginrightNegXxxsmall = typestyle.style({
    $debugName: 'marginrightNegXxxsmall',
    marginRight: '-0.0625rem'
});
export const marginrightNegXxsmall = typestyle.style({
    $debugName: 'marginrightNegXxsmall',
    marginRight: '-0.125rem'
});
export const marginrightNegXsmall = typestyle.style({
    $debugName: 'marginrightNegXsmall',
    marginRight: '-0.25rem'
});
export const marginrightNegSmall = typestyle.style({
    $debugName: 'marginrightNegSmall',
    marginRight: '-0.5rem'
});
export const marginrightNegMedium = typestyle.style({
    $debugName: 'marginrightNegMedium',
    marginRight: '-1rem'
});
export const marginrightNegLarge = typestyle.style({
    $debugName: 'marginrightNegLarge',
    marginRight: '-2rem'
});
export const marginrightNegXlarge = typestyle.style({
    $debugName: 'marginrightNegXlarge',
    marginRight: '-4rem'
});
export const marginrightNegXxlarge = typestyle.style({
    $debugName: 'marginrightNegXxlarge',
    marginRight: '-8rem'
});
export const marginrightNegXxxlarge = typestyle.style({
    $debugName: 'marginrightNegXxxlarge',
    marginRight: '-16rem'
});
export const marginbottomNegXxxsmall = typestyle.style({
    $debugName: 'marginbottomNegXxxsmall',
    marginBottom: '-0.0625rem'
});
export const marginbottomNegXxsmall = typestyle.style({
    $debugName: 'marginbottomNegXxsmall',
    marginBottom: '-0.125rem'
});
export const marginbottomNegXsmall = typestyle.style({
    $debugName: 'marginbottomNegXsmall',
    marginBottom: '-0.25rem'
});
export const marginbottomNegSmall = typestyle.style({
    $debugName: 'marginbottomNegSmall',
    marginBottom: '-0.5rem'
});
export const marginbottomNegMedium = typestyle.style({
    $debugName: 'marginbottomNegMedium',
    marginBottom: '-1rem'
});
export const marginbottomNegLarge = typestyle.style({
    $debugName: 'marginbottomNegLarge',
    marginBottom: '-2rem'
});
export const marginbottomNegXlarge = typestyle.style({
    $debugName: 'marginbottomNegXlarge',
    marginBottom: '-4rem'
});
export const marginbottomNegXxlarge = typestyle.style({
    $debugName: 'marginbottomNegXxlarge',
    marginBottom: '-8rem'
});
export const marginbottomNegXxxlarge = typestyle.style({
    $debugName: 'marginbottomNegXxxlarge',
    marginBottom: '-16rem'
});
export const margintopNegXxxsmall = typestyle.style({
    $debugName: 'margintopNegXxxsmall',
    marginTop: '-0.0625rem'
});
export const margintopNegXxsmall = typestyle.style({
    $debugName: 'margintopNegXxsmall',
    marginTop: '-0.125rem'
});
export const margintopNegXsmall = typestyle.style({
    $debugName: 'margintopNegXsmall',
    marginTop: '-0.25rem'
});
export const margintopNegSmall = typestyle.style({
    $debugName: 'margintopNegSmall',
    marginTop: '-0.5rem'
});
export const margintopNegMedium = typestyle.style({
    $debugName: 'margintopNegMedium',
    marginTop: '-1rem'
});
export const margintopNegLarge = typestyle.style({
    $debugName: 'margintopNegLarge',
    marginTop: '-2rem'
});
export const margintopNegXlarge = typestyle.style({
    $debugName: 'margintopNegXlarge',
    marginTop: '-4rem'
});
export const margintopNegXxlarge = typestyle.style({
    $debugName: 'margintopNegXxlarge',
    marginTop: '-8rem'
});
export const margintopNegXxxlarge = typestyle.style({
    $debugName: 'margintopNegXxxlarge',
    marginTop: '-16rem'
});
export const collapse = typestyle.style({
    $debugName: 'collapse',
    borderCollapse: 'collapse',
    borderSpacing: 0
});
export const stripedMoongray = typestyle.style({
    $debugName: 'stripedMoongray',
    $nest: { '&:nth-child(odd)': { backgroundColor: '#ccc' } }
});
export const stripedLightgray = typestyle.style({
    $debugName: 'stripedLightgray',
    $nest: { '&:nth-child(odd)': { backgroundColor: '#eee' } }
});
export const stripedNearwhite = typestyle.style({
    $debugName: 'stripedNearwhite',
    $nest: { '&:nth-child(odd)': { backgroundColor: '#f4f4f4' } }
});
export const stripeLight = typestyle.style({
    $debugName: 'stripeLight',
    $nest: {
        '&:nth-child(odd)': { backgroundColor: 'rgba( 255, 255, 255, .1 )' }
    }
});
export const stripeDark = typestyle.style({
    $debugName: 'stripeDark',
    $nest: { '&:nth-child(odd)': { backgroundColor: 'rgba( 0, 0, 0, .1 )' } }
});
export const strike = typestyle.style({
    $debugName: 'strike',
    textDecoration: 'line-through'
});
export const strikethrough = typestyle.style({
    $debugName: 'strikethrough',
    textDecoration: 'line-through'
});
export const linethrough = typestyle.style({
    $debugName: 'linethrough',
    textDecoration: 'line-through'
});
export const textdecorationLinethrough = typestyle.style({
    $debugName: 'textdecorationLinethrough',
    textDecoration: 'line-through'
});
export const underline = typestyle.style({
    $debugName: 'underline',
    textDecoration: 'underline'
});
export const textdecorationUnderline = typestyle.style({
    $debugName: 'textdecorationUnderline',
    textDecoration: 'underline'
});
export const nounderline = typestyle.style({
    $debugName: 'nounderline',
    textDecoration: 'none'
});
export const textdecorationNone = typestyle.style({
    $debugName: 'textdecorationNone',
    textDecoration: 'none'
});
export const textalignLeft = typestyle.style({
    $debugName: 'textalignLeft',
    textAlign: 'left'
});
export const textalignRight = typestyle.style({
    $debugName: 'textalignRight',
    textAlign: 'right'
});
export const textalignCenter = typestyle.style({
    $debugName: 'textalignCenter',
    textAlign: 'center'
});
export const textalignJustify = typestyle.style({
    $debugName: 'textalignJustify',
    textAlign: 'justify'
});
export const texttransformCapitalize = typestyle.style({
    $debugName: 'texttransformCapitalize',
    textTransform: 'capitalize'
});
export const texttransformLowercase = typestyle.style({
    $debugName: 'texttransformLowercase',
    textTransform: 'lowercase'
});
export const texttransformUppercase = typestyle.style({
    $debugName: 'texttransformUppercase',
    textTransform: 'uppercase'
});
export const texttransformNone = typestyle.style({
    $debugName: 'texttransformNone',
    textTransform: 'none'
});
export const f6 = typestyle.style({ $debugName: 'f6', fontSize: '.875rem' });
export const fHeadline = typestyle.style({
    $debugName: 'fHeadline',
    fontSize: '6rem'
});
export const f5 = typestyle.style({ $debugName: 'f5', fontSize: '1rem' });
export const fSubheadline = typestyle.style({
    $debugName: 'fSubheadline',
    fontSize: '5rem'
});
export const f1 = typestyle.style({ $debugName: 'f1', fontSize: '3rem' });
export const f2 = typestyle.style({ $debugName: 'f2', fontSize: '2.25rem' });
export const f3 = typestyle.style({ $debugName: 'f3', fontSize: '1.5rem' });
export const f4 = typestyle.style({ $debugName: 'f4', fontSize: '1.25rem' });
export const f7 = typestyle.style({ $debugName: 'f7', fontSize: '.75rem' });
export const measure = typestyle.style({
    $debugName: 'measure',
    maxWidth: '30em'
});
export const measureWide = typestyle.style({
    $debugName: 'measureWide',
    maxWidth: '34em'
});
export const measurewide = typestyle.style({
    $debugName: 'measurewide',
    maxWidth: '34em'
});
export const measureNarrow = typestyle.style({
    $debugName: 'measureNarrow',
    maxWidth: '20em'
});
export const measurenarrow = typestyle.style({
    $debugName: 'measurenarrow',
    maxWidth: '20em'
});
export const indent = typestyle.style({
    $debugName: 'indent',
    textIndent: '1em',
    marginTop: 0,
    marginBottom: 0
});
export const smallCaps = typestyle.style({
    $debugName: 'smallCaps',
    fontVariant: 'small-caps'
});
export const smallcaps = typestyle.style({
    $debugName: 'smallcaps',
    fontVariant: 'small-caps'
});
export const fontvariantSmallcaps = typestyle.style({
    $debugName: 'fontvariantSmallcaps',
    fontVariant: 'small-caps'
});
export const truncate = typestyle.style({
    $debugName: 'truncate',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
});
export const overflowContainer = typestyle.style({
    $debugName: 'overflowContainer',
    overflowY: 'scroll'
});
export const center = typestyle.style({
    $debugName: 'center',
    marginRight: 'auto',
    marginLeft: 'auto'
});
export const marginhorizontalAuto = typestyle.style({
    $debugName: 'marginhorizontalAuto',
    marginRight: 'auto',
    marginLeft: 'auto'
});
export const marginrightAuto = typestyle.style({
    $debugName: 'marginrightAuto',
    marginRight: 'auto'
});
export const marginleftAuto = typestyle.style({
    $debugName: 'marginleftAuto',
    marginLeft: 'auto'
});
export const clip = typestyle.style({
    $debugName: 'clip',
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
});
export const says = typestyle.style({
    $debugName: 'says',
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
});
export const screenReaderText = typestyle.style({
    $debugName: 'screenReaderText',
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
});
export const whitespaceNormal = typestyle.style({
    $debugName: 'whitespaceNormal',
    whiteSpace: 'normal'
});
export const whitespaceNowrap = typestyle.style({
    $debugName: 'whitespaceNowrap',
    whiteSpace: 'nowrap'
});
export const whitespacePre = typestyle.style({
    $debugName: 'whitespacePre',
    whiteSpace: 'pre'
});
export const verticalalignBaseline = typestyle.style({
    $debugName: 'verticalalignBaseline',
    verticalAlign: 'baseline'
});
export const verticalalignMiddle = typestyle.style({
    $debugName: 'verticalalignMiddle',
    verticalAlign: 'middle'
});
export const verticalalignTop = typestyle.style({
    $debugName: 'verticalalignTop',
    verticalAlign: 'top'
});
export const verticalalignBottom = typestyle.style({
    $debugName: 'verticalalignBottom',
    verticalAlign: 'bottom'
});
export const hoverDim = typestyle.style({
    $debugName: 'hoverDim',
    opacity: 1,
    transition: 'opacity .15s ease-in',
    $nest: { '&:active': { opacity: 0.8, transition: 'opacity .15s ease-out' } }
});
export const hoverGlow = typestyle.style({
    $debugName: 'hoverGlow',
    transition: 'opacity .15s ease-in',
    $nest: { '&:focus': { opacity: 1, transition: 'opacity .15s ease-in' } }
});
export const hoverHidechildChild = typestyle.style({
    $debugName: 'hoverHidechildChild',
    opacity: 0,
    transition: 'opacity .15s ease-in'
});
export const hoverHidechild = typestyle.style({
    $debugName: 'hoverHidechild',
    $nest: {
        '&:active .child': { opacity: 1, transition: 'opacity .15s ease-in' }
    }
});
export const hoverUnderline = typestyle.style({
    $debugName: 'hoverUnderline',
    $nest: { '&:focus': { textDecoration: 'underline' } }
});
export const hoverGrow = typestyle.style({
    $debugName: 'hoverGrow',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-backface-visibility': 'hidden',
    backfaceVisibility: 'hidden',
    '-webkit-transform': 'translateZ( 0 )',
    transform: 'translateZ( 0 )',
    transition: [
        '-webkit-transform .25s ease-out',
        'transform .25s ease-out',
        'transform .25s ease-out, -webkit-transform .25s ease-out'
    ],
    $nest: {
        '&:active': {
            '-webkit-transform': 'scale( .90 )',
            transform: 'scale( .90 )'
        }
    }
});
export const hoverGrowlarge = typestyle.style({
    $debugName: 'hoverGrowlarge',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-backface-visibility': 'hidden',
    backfaceVisibility: 'hidden',
    '-webkit-transform': 'translateZ( 0 )',
    transform: 'translateZ( 0 )',
    transition: [
        '-webkit-transform .25s ease-in-out',
        'transform .25s ease-in-out',
        'transform .25s ease-in-out, -webkit-transform .25s ease-in-out'
    ],
    $nest: {
        '&:active': {
            '-webkit-transform': 'scale( .95 )',
            transform: 'scale( .95 )'
        }
    }
});
export const hoverPointer = typestyle.style({
    $debugName: 'hoverPointer',
    $nest: { '&:hover': { cursor: 'pointer' } }
});
export const hoverShadow = typestyle.style({
    $debugName: 'hoverShadow',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all .5s cubic-bezier( .165, .84, .44, 1 )',
    $nest: {
        '&:focus': { opacity: 1 },
        '&:': { opacity: 1 },
        '&:after': { opacity: 1 }
    }
});
export const hoverBackgroundanimate = typestyle.style({
    $debugName: 'hoverBackgroundanimate',
    transition: 'background-color .15s ease-in-out',
    $nest: { '&:focus': { transition: 'background-color .15s ease-in-out' } }
});
export const zindex0 = typestyle.style({ $debugName: 'zindex0', zIndex: 0 });
export const zindex1 = typestyle.style({ $debugName: 'zindex1', zIndex: 1 });
export const zindex2 = typestyle.style({ $debugName: 'zindex2', zIndex: 2 });
export const zindex3 = typestyle.style({ $debugName: 'zindex3', zIndex: 3 });
export const zindex4 = typestyle.style({ $debugName: 'zindex4', zIndex: 4 });
export const zindex5 = typestyle.style({ $debugName: 'zindex5', zIndex: 5 });
export const zindex999 = typestyle.style({
    $debugName: 'zindex999',
    zIndex: 999
});
export const zindex9999 = typestyle.style({
    $debugName: 'zindex9999',
    zIndex: 9999
});
export const zindexMax = typestyle.style({
    $debugName: 'zindexMax',
    zIndex: 2147483647
});
export const zindexInherit = typestyle.style({
    $debugName: 'zindexInherit',
    zIndex: 'inherit'
});
export const zindexInitial = typestyle.style({
    $debugName: 'zindexInitial',
    zIndex: 'initial'
});
export const zindexUnset = typestyle.style({
    $debugName: 'zindexUnset',
    zIndex: 'unset'
});
export const nestedCopyLineHeightP = typestyle.style({
    $debugName: 'nestedCopyLineHeightP',
    lineHeight: 1.5
});
export const nestedCopyLineheightP = typestyle.style({
    $debugName: 'nestedCopyLineheightP',
    lineHeight: 1.5
});
export const nestedCopyLineHeightUl = typestyle.style({
    $debugName: 'nestedCopyLineHeightUl',
    lineHeight: 1.5
});
export const nestedCopyLineheightUl = typestyle.style({
    $debugName: 'nestedCopyLineheightUl',
    lineHeight: 1.5
});
export const nestedCopyLineHeightOl = typestyle.style({
    $debugName: 'nestedCopyLineHeightOl',
    lineHeight: 1.5
});
export const nestedCopyLineheightOl = typestyle.style({
    $debugName: 'nestedCopyLineheightOl',
    lineHeight: 1.5
});
export const nestedHeadlineLineHeightH1 = typestyle.style({
    $debugName: 'nestedHeadlineLineHeightH1',
    lineHeight: 1.25
});
export const nestedHeadlineLineheightH1 = typestyle.style({
    $debugName: 'nestedHeadlineLineheightH1',
    lineHeight: 1.25
});
export const nestedHeadlineLineHeightH2 = typestyle.style({
    $debugName: 'nestedHeadlineLineHeightH2',
    lineHeight: 1.25
});
export const nestedHeadlineLineheightH2 = typestyle.style({
    $debugName: 'nestedHeadlineLineheightH2',
    lineHeight: 1.25
});
export const nestedHeadlineLineHeightH3 = typestyle.style({
    $debugName: 'nestedHeadlineLineHeightH3',
    lineHeight: 1.25
});
export const nestedHeadlineLineheightH3 = typestyle.style({
    $debugName: 'nestedHeadlineLineheightH3',
    lineHeight: 1.25
});
export const nestedHeadlineLineHeightH4 = typestyle.style({
    $debugName: 'nestedHeadlineLineHeightH4',
    lineHeight: 1.25
});
export const nestedHeadlineLineheightH4 = typestyle.style({
    $debugName: 'nestedHeadlineLineheightH4',
    lineHeight: 1.25
});
export const nestedHeadlineLineHeightH5 = typestyle.style({
    $debugName: 'nestedHeadlineLineHeightH5',
    lineHeight: 1.25
});
export const nestedHeadlineLineheightH5 = typestyle.style({
    $debugName: 'nestedHeadlineLineheightH5',
    lineHeight: 1.25
});
export const nestedHeadlineLineHeightH6 = typestyle.style({
    $debugName: 'nestedHeadlineLineHeightH6',
    lineHeight: 1.25
});
export const nestedHeadlineLineheightH6 = typestyle.style({
    $debugName: 'nestedHeadlineLineheightH6',
    lineHeight: 1.25
});
export const nestedListResetUl = typestyle.style({
    $debugName: 'nestedListResetUl',
    paddingLeft: 0,
    marginLeft: 0,
    listStyleType: 'none'
});
export const nestedListResetOl = typestyle.style({
    $debugName: 'nestedListResetOl',
    paddingLeft: 0,
    marginLeft: 0,
    listStyleType: 'none'
});
export const nestedCopyIndentPP = typestyle.style({
    $debugName: 'nestedCopyIndentPP',
    textIndent: '1em',
    marginTop: 0,
    marginBottom: 0
});
export const nestedCopySeperatorPP = typestyle.style({
    $debugName: 'nestedCopySeperatorPP',
    marginTop: '1.5em'
});
export const nestedImgImg = typestyle.style({
    $debugName: 'nestedImgImg',
    width: '100%',
    maxWidth: '100%',
    display: 'block'
});
export const nestedLinksA = typestyle.style({
    $debugName: 'nestedLinksA',
    color: '#357edd',
    transition: 'color .15s ease-in',
    $nest: { '&:focus': { color: '#96ccff', transition: 'color .15s ease-in' } }
});
export const debug = typestyle.style({
    $debugName: 'debug',
    outline: '1px solid gold'
});
export const debugWhite = typestyle.style({
    $debugName: 'debugWhite',
    outline: '1px solid white'
});
export const debugBlack = typestyle.style({
    $debugName: 'debugBlack',
    outline: '1px solid black'
});
export const debugGrid = typestyle.style({
    $debugName: 'debugGrid',
    background: 'transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII= ) repeat top left'
});
export const debuggrid = typestyle.style({
    $debugName: 'debuggrid',
    background: 'transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII= ) repeat top left'
});
export const debugGrid16 = typestyle.style({
    $debugName: 'debugGrid16',
    background: 'transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4AWOgCLz/b0epAa6UGuBOqQHOQHLUgFEDnAbcBZ4UGwDOkiCnkIhdgNgNxAYAiYlD+8sEuo8AAAAASUVORK5CYII= ) repeat top left'
});
export const debuggrid16 = typestyle.style({
    $debugName: 'debuggrid16',
    background: 'transparent url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4AWOgCLz/b0epAa6UGuBOqQHOQHLUgFEDnAbcBZ4UGwDOkiCnkIhdgNgNxAYAiYlD+8sEuo8AAAAASUVORK5CYII= ) repeat top left'
});
export const debugGrid8Solid = typestyle.style({
    $debugName: 'debugGrid8Solid',
    background: 'white url( data:image/gif;base64,R0lGODdhCAAIAPEAAADw/wDx/////wAAACwAAAAACAAIAAACDZQvgaeb/lxbAIKA8y0AOw== ) repeat top left'
});
export const debuggrid8solid = typestyle.style({
    $debugName: 'debuggrid8solid',
    background: 'white url( data:image/gif;base64,R0lGODdhCAAIAPEAAADw/wDx/////wAAACwAAAAACAAIAAACDZQvgaeb/lxbAIKA8y0AOw== ) repeat top left'
});
export const debugGrid16Solid = typestyle.style({
    $debugName: 'debugGrid16Solid',
    background: 'white url( data:image/gif;base64,R0lGODdhEAAQAPEAAADw/wDx/xXy/////ywAAAAAEAAQAAACIZyPKckYDQFsb6ZqD85jZ2+BkwiRFKehhqQCQgDHcgwEBQA7 ) repeat top left'
});
export const debuggrid16solid = typestyle.style({
    $debugName: 'debuggrid16solid',
    background: 'white url( data:image/gif;base64,R0lGODdhEAAQAPEAAADw/wDx/xXy/////ywAAAAAEAAQAAACIZyPKckYDQFsb6ZqD85jZ2+BkwiRFKehhqQCQgDHcgwEBQA7 ) repeat top left'
});
export const aspectratioNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: 0, position: 'relative' }));
export const aspectratio16x9Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '56.25%' }));
export const aspectratio9x16Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '177.77%' }));
export const aspectratio4x3Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '75%' }));
export const aspectratio3x4Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '133.33%' }));
export const aspectratio6x4Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '66.6%' }));
export const aspectratio4x6Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '150%' }));
export const aspectratio8x5Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '62.5%' }));
export const aspectratio5x8Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '160%' }));
export const aspectratio7x5Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '71.42%' }));
export const aspectratio5x7Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '140%' }));
export const aspectratio1x1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '100%' }));
export const aspectratioObjectNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100
}));
export const backgroundsizeCoverNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { backgroundSize: 'cover' }));
export const backgroundsizeContainNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { backgroundSize: 'contain' }));
export const backgroundpositionCenterNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
}));
export const backgroundpositionTopNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center'
}));
export const backgroundpositionRightNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right'
}));
export const backgroundpositionBottomNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center'
}));
export const backgroundpositionLeftNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center left'
}));
export const outlineNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { outline: '1px solid' }));
export const outlineTransparentNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { outline: '1px solid transparent' }));
export const outline0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { outline: 0 }));
export const borderNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderStyle: 'solid', borderWidth: '1px' }));
export const borderAllNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderStyle: 'solid', borderWidth: '1px' }));
export const borderTopNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderTopStyle: 'solid', borderTopWidth: '1px' }));
export const borderRightNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderRightStyle: 'solid', borderRightWidth: '1px' }));
export const borderBottomNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderBottomStyle: 'solid', borderBottomWidth: '1px' }));
export const borderLeftNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderLeftStyle: 'solid', borderLeftWidth: '1px' }));
export const borderNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderStyle: 'solid', borderWidth: 0 }));
export const borderradiusNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderRadius: 0 }));
export const borderradius0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderRadius: 0 }));
export const borderradius1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderRadius: '.125rem' }));
export const borderradius2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderRadius: '.25rem' }));
export const borderradius3Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderRadius: '.5rem' }));
export const borderradius4Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderRadius: '1rem' }));
export const borderradius5Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderRadius: '2rem' }));
export const borderradius100pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderRadius: '100%' }));
export const borderradiusPillNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderRadius: '9999px' }));
export const borderradiusBottomNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderTopLeftRadius: 0, borderTopRightRadius: 0 }));
export const borderradiusTopNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }));
export const borderradiusRightNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }));
export const borderradiusLeftNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderTopRightRadius: 0, borderBottomRightRadius: 0 }));
export const borderstyleDottedNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderStyle: 'dotted' }));
export const borderstyleDashedNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderStyle: 'dashed' }));
export const borderstyleSolidNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderStyle: 'solid' }));
export const borderstyleNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderStyle: 'none' }));
export const borderwidth0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderWidth: 0 }));
export const borderwidth1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderWidth: '.125rem' }));
export const borderwidth2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderWidth: '.25rem' }));
export const borderwidth3Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderWidth: '.5rem' }));
export const borderwidth4Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderWidth: '.75rem' }));
export const borderwidth5Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderWidth: '1rem' }));
export const bordertopwidth0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderTopWidth: 0 }));
export const borderrightwidth0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderRightWidth: 0 }));
export const borderbottomwidth0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderBottomWidth: 0 }));
export const borderleftwidth0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { borderLeftWidth: 0 }));
export const boxshadow1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { boxShadow: '0 0 4px 2px rgba( 0, 0, 0, .2 )' }));
export const boxshadow2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { boxShadow: '0 0 8px 2px rgba( 0, 0, 0, .2 )' }));
export const boxshadow3Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { boxShadow: '2px 2px 4px 2px rgba( 0, 0, 0, .2 )' }));
export const boxshadow4Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { boxShadow: '2px 2px 8px 0 rgba( 0, 0, 0, .2 )' }));
export const boxshadow5Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )' }));
export const top0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { top: 0 }));
export const left0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { left: 0 }));
export const right0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { right: 0 }));
export const bottom0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { bottom: 0 }));
export const top1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { top: '1rem' }));
export const left1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { left: '1rem' }));
export const right1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { right: '1rem' }));
export const bottom1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { bottom: '1rem' }));
export const top2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { top: '2rem' }));
export const left2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { left: '2rem' }));
export const right2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { right: '2rem' }));
export const bottom2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { bottom: '2rem' }));
export const topNeg1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { top: '-1rem' }));
export const rightNeg1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { right: '-1rem' }));
export const bottomNeg1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { bottom: '-1rem' }));
export const leftNeg1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { left: '-1rem' }));
export const topNeg2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { top: '-2rem' }));
export const rightNeg2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { right: '-2rem' }));
export const bottomNeg2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { bottom: '-2rem' }));
export const leftNeg2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { left: '-2rem' }));
export const absoluteNegFillNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { top: 0, right: 0, bottom: 0, left: 0 }));
export const clearLeftNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { clear: 'left' }));
export const clearRightNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { clear: 'right' }));
export const clearBothNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { clear: 'both' }));
export const clearNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { clear: 'none' }));
export const displayNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'none' }));
export const displayInlineNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'inline' }));
export const displayBlockNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'block' }));
export const displayInlineblockNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'inline-block' }));
export const displayInlinetableNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'inline-table' }));
export const displayTableNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'table' }));
export const displayTablecellNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'table-cell' }));
export const displayTablerowNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'table-row' }));
export const displayTablerowgroupNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'table-row-group' }));
export const displayTablecolumnNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'table-column' }));
export const displayTablecolumngroupNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'table-column-group' }));
export const displaytableFixedNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { tableLayout: 'fixed', width: '100%' }));
export const tablelayoutFixedNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { tableLayout: 'fixed', width: '100%' }));
export const displayFlexNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'flex' }));
export const displayInlineflexNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { display: 'inline-flex' }));
export const flexautoNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-flex': 1,
    '-ms-flex': '1 1 auto',
    flex: '1 1 auto',
    minWidth: 0,
    minHeight: 0
}));
export const flexNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-webkit-box-flex': 0, '-ms-flex': 'none', flex: 'none' }));
export const flexdirectionColumnNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-orient': 'vertical',
    '-webkit-box-direction': 'normal',
    '-ms-flex-direction': 'column',
    flexDirection: 'column'
}));
export const flexdirectionRowNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-orient': 'horizontal',
    '-webkit-box-direction': 'normal',
    '-ms-flex-direction': 'row',
    flexDirection: 'row'
}));
export const flexwrapWrapNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-ms-flex-wrap': 'wrap', flexWrap: 'wrap' }));
export const flexwrapNowrapNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-ms-flex-wrap': 'nowrap', flexWrap: 'nowrap' }));
export const flexwrapWrapreverseNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-ms-flex-wrap': 'wrap-reverse', flexWrap: 'wrap-reverse' }));
export const flexdirectionColumnreverseNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-orient': 'vertical',
    '-webkit-box-direction': 'reverse',
    '-ms-flex-direction': 'column-reverse',
    flexDirection: 'column-reverse'
}));
export const flexdirectionRowreverseNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-orient': 'horizontal',
    '-webkit-box-direction': 'reverse',
    '-ms-flex-direction': 'row-reverse',
    flexDirection: 'row-reverse'
}));
export const alignitemsFlexstartNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-align': 'start',
    '-ms-flex-align': 'start',
    alignItems: 'flex-start'
}));
export const alignitemsFlexendNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-align': 'end',
    '-ms-flex-align': 'end',
    alignItems: 'flex-end'
}));
export const alignitemsCenterNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    alignItems: 'center'
}));
export const alignitemsBaselineNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-align': 'baseline',
    '-ms-flex-align': 'baseline',
    alignItems: 'baseline'
}));
export const alignitemsStretchNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-align': 'stretch',
    '-ms-flex-align': 'stretch',
    alignItems: 'stretch'
}));
export const alignselfFlexstartNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-ms-flex-item-align': 'start', alignSelf: 'flex-start' }));
export const alignselfFlexendNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-ms-flex-item-align': 'end', alignSelf: 'flex-end' }));
export const alignselfCenterNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-ms-flex-item-align': 'center',
    '-ms-grid-row-align': 'center',
    alignSelf: 'center'
}));
export const alignselfBaselineNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-ms-flex-item-align': 'baseline', alignSelf: 'baseline' }));
export const alignselfStretchNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-ms-flex-item-align': 'stretch',
    '-ms-grid-row-align': 'stretch',
    alignSelf: 'stretch'
}));
export const justifycontentFlexstartNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-pack': 'start',
    '-ms-flex-pack': 'start',
    justifyContent: 'flex-start'
}));
export const justifycontentFlexendNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-pack': 'end',
    '-ms-flex-pack': 'end',
    justifyContent: 'flex-end'
}));
export const justifycontentCenterNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-pack': 'center',
    '-ms-flex-pack': 'center',
    justifyContent: 'center'
}));
export const justifycontentSpacebetweenNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-pack': 'justify',
    '-ms-flex-pack': 'justify',
    justifyContent: 'space-between'
}));
export const justifycontentSpaceroundNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-ms-flex-pack': 'distribute',
    justifyContent: 'space-around'
}));
export const aligncontentFlexstartNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-ms-flex-line-pack': 'start', alignContent: 'flex-start' }));
export const aligncontentFlexendNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-ms-flex-line-pack': 'end', alignContent: 'flex-end' }));
export const aligncontentCenterNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-ms-flex-line-pack': 'center', alignContent: 'center' }));
export const aligncontentSpacebetweenNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-ms-flex-line-pack': 'justify',
    alignContent: 'space-between'
}));
export const aligncontentSpacearoundNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-ms-flex-line-pack': 'distribute',
    alignContent: 'space-around'
}));
export const aligncontentStretchNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-ms-flex-line-pack': 'stretch', alignContent: 'stretch' }));
export const order0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-webkit-box-ordinal-group': 1, '-ms-flex-order': 0, order: 0 }));
export const order1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-webkit-box-ordinal-group': 2, '-ms-flex-order': 1, order: 1 }));
export const order2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-webkit-box-ordinal-group': 3, '-ms-flex-order': 2, order: 2 }));
export const order3Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-webkit-box-ordinal-group': 4, '-ms-flex-order': 3, order: 3 }));
export const order4Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-webkit-box-ordinal-group': 5, '-ms-flex-order': 4, order: 4 }));
export const order5Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-webkit-box-ordinal-group': 6, '-ms-flex-order': 5, order: 5 }));
export const order6Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-webkit-box-ordinal-group': 7, '-ms-flex-order': 6, order: 6 }));
export const order7Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-webkit-box-ordinal-group': 8, '-ms-flex-order': 7, order: 7 }));
export const order8Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { '-webkit-box-ordinal-group': 9, '-ms-flex-order': 8, order: 8 }));
export const orderLastNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-box-ordinal-group': 100000,
    '-ms-flex-order': 99999,
    order: 99999
}));
export const floatLeftNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { float: 'left', display: 'inline' }));
export const floatRightNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { float: 'right', display: 'inline' }));
export const floatNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { float: 'none' }));
export const fontstyleItalicNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontStyle: 'italic' }));
export const iNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontStyle: 'italic' }));
export const fontstyleNormalNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontStyle: 'normal' }));
export const normalNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 'normal' }));
export const fontweightNormalNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 'normal' }));
export const bNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 'bold' }));
export const fontweightBoldNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 'bold' }));
export const fontweight100Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 100 }));
export const fontweight200Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 200 }));
export const fontweight300Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 300 }));
export const fontweight400Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 400 }));
export const fontweight500Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 500 }));
export const fontweight600Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 600 }));
export const fontweight700Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 700 }));
export const fontweight800Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 800 }));
export const fontweight900Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontWeight: 900 }));
export const heightXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '.0625rem' }));
export const heightXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '.125rem' }));
export const heightXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '.25rem' }));
export const heightSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '.5rem' }));
export const heightMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '1rem' }));
export const heightLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '2rem' }));
export const heightXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '4rem' }));
export const heightXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '8rem' }));
export const heightXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '16rem' }));
export const height25pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '25%' }));
export const height50pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '50%' }));
export const height75pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '75%' }));
export const height100pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '100%' }));
export const minheight100pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { minHeight: '100%' }));
export const height25vhNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '25vh' }));
export const height50vhNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '50vh' }));
export const height75vhNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '75vh' }));
export const height100vhNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: '100vh' }));
export const minheight100vhNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { minHeight: '100vh' }));
export const heightAutoNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: 'auto' }));
export const heightInheritNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { height: 'inherit' }));
export const trackedNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { letterSpacing: '.1em' }));
export const letterspacingTrackedNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { letterSpacing: '.1em' }));
export const trackedtightNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { letterSpacing: '-.0.05em' }));
export const letterspacingTightNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { letterSpacing: '-.0.05em' }));
export const megatrackedNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { letterSpacing: '.25em' }));
export const letterspacingMegatrackedNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { letterSpacing: '.25em' }));
export const lineheight1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { lineHeight: 1 }));
export const lineheightTitleNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { lineHeight: 1.25 }));
export const lineheight1p25Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { lineHeight: 1.25 }));
export const lineheightCopyNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { lineHeight: 1.5 }));
export const lineheight1p5Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { lineHeight: 1.5 }));
export const maxwidth100pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '100%' }));
export const maxwidthMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '1rem' }));
export const maxwidthLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '2rem' }));
export const maxwidthXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '4rem' }));
export const maxwidthXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '8rem' }));
export const maxwidthXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '16rem' }));
export const maxwidthXxxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '32rem' }));
export const maxwidthXxxxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '48rem' }));
export const maxwidthXxxxxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '64rem' }));
export const maxwidthXxxxxxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '96rem' }));
export const maxwidthNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: 'none' }));
export const widthXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '.0625rem' }));
export const widthXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '.125rem' }));
export const widthXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '.25rem' }));
export const widthSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '.5rem' }));
export const widthMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '1rem' }));
export const widthLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '2rem' }));
export const widthXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '4rem' }));
export const widthXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '8rem' }));
export const widthXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '16rem' }));
export const width10pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '10%' }));
export const width20pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '20%' }));
export const width25pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '25%' }));
export const width30pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '30%' }));
export const width33pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '33%' }));
export const width34pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '34%' }));
export const width40pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '40%' }));
export const width50pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '50%' }));
export const width60pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '60%' }));
export const width70pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '70%' }));
export const width75pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '75%' }));
export const width80pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '80%' }));
export const width90pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '90%' }));
export const width100pNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: '100%' }));
export const widthThirdNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: 'calc( 100% / 3 )' }));
export const widthTwothirdsNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: 'calc( 100% / 1.5 )' }));
export const widthAutoNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { width: 'auto' }));
export const overflowVisibleNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflow: 'visible' }));
export const overflowHiddenNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflow: 'hidden' }));
export const overflowScrollNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflow: 'scroll' }));
export const overflowAutoNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflow: 'auto' }));
export const overflowxVisibleNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflowX: 'visible' }));
export const overflowxHiddenNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflowX: 'hidden' }));
export const overflowxScrollNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflowX: 'scroll' }));
export const overflowxAutoNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflowX: 'auto' }));
export const overflowyVisibleNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflowY: 'visible' }));
export const overflowyHiddenNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflowY: 'hidden' }));
export const overflowyScrollNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflowY: 'scroll' }));
export const overflowyAutoNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { overflowY: 'auto' }));
export const positionStaticNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { position: 'static' }));
export const positionRelativeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { position: 'relative' }));
export const positionAbsoluteNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { position: 'absolute' }));
export const positionFixedNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { position: 'fixed' }));
export const transformRotate45Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-transform': 'rotate( 45deg )',
    transform: 'rotate( 45deg )'
}));
export const transformRotate90Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-transform': 'rotate( 90deg )',
    transform: 'rotate( 90deg )'
}));
export const transformRotate135Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-transform': 'rotate( 135deg )',
    transform: 'rotate( 135deg )'
}));
export const transformRotate180Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-transform': 'rotate( 180deg )',
    transform: 'rotate( 180deg )'
}));
export const transformRotate225Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-transform': 'rotate( 225deg )',
    transform: 'rotate( 225deg )'
}));
export const transformRotate270Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-transform': 'rotate( 270deg )',
    transform: 'rotate( 270deg )'
}));
export const transformRotate315Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    '-webkit-transform': 'rotate( 315deg )',
    transform: 'rotate( 315deg )'
}));
export const paddingNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { padding: 0 }));
export const padding0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { padding: 0 }));
export const paddingXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { padding: '.0625rem' }));
export const paddingXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { padding: '.125rem' }));
export const paddingXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { padding: '.25rem' }));
export const paddingSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { padding: '.5rem' }));
export const paddingMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { padding: '1rem' }));
export const paddingLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { padding: '2rem' }));
export const paddingXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { padding: '4rem' }));
export const paddingXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { padding: '8rem' }));
export const paddingXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { padding: '16rem' }));
export const paddingleftNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: 0 }));
export const paddingleft0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: 0 }));
export const paddingleftXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '.0625rem' }));
export const paddingleftXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '.125rem' }));
export const paddingleftXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '.25rem' }));
export const paddingleftSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '.5rem' }));
export const paddingleftMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '1rem' }));
export const paddingleftLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '2rem' }));
export const paddingleftXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '4rem' }));
export const paddingleftXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '8rem' }));
export const paddingleftXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '16rem' }));
export const paddingrightNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingRight: 0 }));
export const paddingright0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingRight: 0 }));
export const paddingrightXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingRight: '.0625rem' }));
export const paddingrightXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingRight: '.125rem' }));
export const paddingrightXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingRight: '.25rem' }));
export const paddingrightSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingRight: '.5rem' }));
export const paddingrightMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingRight: '1rem' }));
export const paddingrightLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingRight: '2rem' }));
export const paddingrightXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingRight: '4rem' }));
export const paddingrightXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingRight: '8rem' }));
export const paddingrightXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingRight: '16rem' }));
export const paddingbottomNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: 0 }));
export const paddingbottom0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: 0 }));
export const paddingbottomXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '.0625rem' }));
export const paddingbottomXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '.125rem' }));
export const paddingbottomXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '.25rem' }));
export const paddingbottomSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '.5rem' }));
export const paddingbottomMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '1rem' }));
export const paddingbottomLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '2rem' }));
export const paddingbottomXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '4rem' }));
export const paddingbottomXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '8rem' }));
export const paddingbottomXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingBottom: '16rem' }));
export const paddingtopNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: 0 }));
export const paddingtop0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: 0 }));
export const paddingtopXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '.0625rem' }));
export const paddingtopXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '.125rem' }));
export const paddingtopXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '.25rem' }));
export const paddingtopSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '.5rem' }));
export const paddingtopMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '1rem' }));
export const paddingtopLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '2rem' }));
export const paddingtopXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '4rem' }));
export const paddingtopXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '8rem' }));
export const paddingtopXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '16rem' }));
export const paddingverticalNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: 0, paddingBottom: 0 }));
export const paddingvertical0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: 0, paddingBottom: 0 }));
export const paddingverticalXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '.0625rem', paddingBottom: '.0625rem' }));
export const paddingverticalXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '.125rem', paddingBottom: '.0625rem' }));
export const paddingverticalXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '.25rem', paddingBottom: '.25rem' }));
export const paddingverticalSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '.5rem', paddingBottom: '.5rem' }));
export const paddingverticalMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '1rem', paddingBottom: '1rem' }));
export const paddingverticalLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '2rem', paddingBottom: '2rem' }));
export const paddingverticalXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '4rem', paddingBottom: '4rem' }));
export const paddingverticalXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '8rem', paddingBottom: '8rem' }));
export const paddingverticalXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingTop: '16rem', paddingBottom: '16rem' }));
export const paddinghorizontalNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: 0, paddingRight: 0 }));
export const paddinghorizontal0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: 0, paddingRight: 0 }));
export const paddinghorizontalXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '.0625rem', paddingRight: '.0625rem' }));
export const paddinghorizontalXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '.125rem', paddingRight: '.125rem' }));
export const paddinghorizontalXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '.25rem', paddingRight: '.25rem' }));
export const paddinghorizontalSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '.5rem', paddingRight: '.5rem' }));
export const paddinghorizontalMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '1rem', paddingRight: '1rem' }));
export const paddinghorizontalLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '2rem', paddingRight: '2rem' }));
export const paddinghorizontalXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '4rem', paddingRight: '4rem' }));
export const paddinghorizontalXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '8rem', paddingRight: '8rem' }));
export const paddinghorizontalXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { paddingLeft: '16rem', paddingRight: '16rem' }));
export const marginNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: 0 }));
export const margin0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: 0 }));
export const marginXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '.0625rem' }));
export const marginXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '.125rem' }));
export const marginXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '.25rem' }));
export const marginSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '.5rem' }));
export const marginMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '1rem' }));
export const marginLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '2rem' }));
export const marginXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '4rem' }));
export const marginXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '8rem' }));
export const marginXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '16rem' }));
export const marginleftNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: 0 }));
export const marginleft0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: 0 }));
export const marginleftXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '.0625rem' }));
export const marginleftXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '.125rem' }));
export const marginleftXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '.25rem' }));
export const marginleftSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '.5rem' }));
export const marginleftMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '1rem' }));
export const marginleftLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '2rem' }));
export const marginleftXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '4rem' }));
export const marginleftXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '8rem' }));
export const marginleftXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '16rem' }));
export const marginrightNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: 0 }));
export const marginright0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: 0 }));
export const marginrightXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '.0625rem' }));
export const marginrightXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '.125rem' }));
export const marginrightXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '.25rem' }));
export const marginrightSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '.5rem' }));
export const marginrightMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '1rem' }));
export const marginrightLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '2rem' }));
export const marginrightXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '4rem' }));
export const marginrightXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '8rem' }));
export const marginrightXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '16rem' }));
export const marginbottomNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: 0 }));
export const marginbottom0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: 0 }));
export const marginbottomXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '.0625rem' }));
export const marginbottomXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '.125rem' }));
export const marginbottomXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '.25rem' }));
export const marginbottomSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '.5rem' }));
export const marginbottomMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '1rem' }));
export const marginbottomLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '2rem' }));
export const marginbottomXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '4rem' }));
export const marginbottomXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '8rem' }));
export const marginbottomXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '16rem' }));
export const margintopNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: 0 }));
export const margintop0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: 0 }));
export const margintopXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '.0625rem' }));
export const margintopXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '.125rem' }));
export const margintopXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '.25rem' }));
export const margintopSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '.5rem' }));
export const margintopMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '1rem' }));
export const margintopLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '2rem' }));
export const margintopXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '4rem' }));
export const margintopXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '8rem' }));
export const margintopXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '16rem' }));
export const marginverticalNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: 0, marginBottom: 0 }));
export const marginvertical0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: 0, marginBottom: 0 }));
export const marginverticalXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '.0625rem', marginBottom: '.0625rem' }));
export const marginverticalXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '.125rem', marginBottom: '.125rem' }));
export const marginverticalXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '.25rem', marginBottom: '.25rem' }));
export const marginverticalSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '.5rem', marginBottom: '.5rem' }));
export const marginverticalMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '1rem', marginBottom: '1rem' }));
export const marginverticalLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '2rem', marginBottom: '2rem' }));
export const marginverticalXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '4rem', marginBottom: '4rem' }));
export const marginverticalXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '8rem', marginBottom: '8rem' }));
export const marginverticalXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '16rem', marginBottom: '16rem' }));
export const marginhorizontalNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: 0, marginRight: 0 }));
export const marginhorizontal0Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: 0, marginRight: 0 }));
export const marginhorizontalXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '.0625rem', marginRight: '.0625rem' }));
export const marginhorizontalXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '.125rem', marginRight: '.125rem' }));
export const marginhorizontalXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '.25rem', marginRight: '.25rem' }));
export const marginhorizontalSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '.5rem', marginRight: '.5rem' }));
export const marginhorizontalMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '1rem', marginRight: '1rem' }));
export const marginhorizontalLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '2rem', marginRight: '2rem' }));
export const marginhorizontalXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '4rem', marginRight: '4rem' }));
export const marginhorizontalXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '8rem', marginRight: '8rem' }));
export const marginhorizontalXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '16rem', marginRight: '16rem' }));
export const marginNegXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '-0.0625rem' }));
export const marginNegXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '-0.125rem' }));
export const marginNegXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '-0.25rem' }));
export const marginNegSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '-0.5rem' }));
export const marginNegMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '-1rem' }));
export const marginNegLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '-2rem' }));
export const marginNegXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '-4rem' }));
export const marginNegXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '-8rem' }));
export const marginNegXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { margin: '-16rem' }));
export const marginleftNegXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '-0.0625rem' }));
export const marginleftNegXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '-0.125rem' }));
export const marginleftNegXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '-0.25rem' }));
export const marginleftNegSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '-0.5rem' }));
export const marginleftNegMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '-1rem' }));
export const marginleftNegLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '-2rem' }));
export const marginleftNegXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '-4rem' }));
export const marginleftNegXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '-8rem' }));
export const marginleftNegXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: '-16rem' }));
export const marginrightNegXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '-0.0625rem' }));
export const marginrightNegXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '-0.125rem' }));
export const marginrightNegXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '-0.25rem' }));
export const marginrightNegSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '-0.5rem' }));
export const marginrightNegMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '-1rem' }));
export const marginrightNegLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '-2rem' }));
export const marginrightNegXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '-4rem' }));
export const marginrightNegXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '-8rem' }));
export const marginrightNegXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: '-16rem' }));
export const marginbottomNegXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '-0.0625rem' }));
export const marginbottomNegXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '-0.125rem' }));
export const marginbottomNegXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '-0.25rem' }));
export const marginbottomNegSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '-0.5rem' }));
export const marginbottomNegMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '-1rem' }));
export const marginbottomNegLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '-2rem' }));
export const marginbottomNegXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '-4rem' }));
export const marginbottomNegXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '-8rem' }));
export const marginbottomNegXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginBottom: '-16rem' }));
export const margintopNegXxxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '-0.0625rem' }));
export const margintopNegXxsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '-0.125rem' }));
export const margintopNegXsmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '-0.25rem' }));
export const margintopNegSmallNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '-0.5rem' }));
export const margintopNegMediumNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '-1rem' }));
export const margintopNegLargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '-2rem' }));
export const margintopNegXlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '-4rem' }));
export const margintopNegXxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '-8rem' }));
export const margintopNegXxxlargeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginTop: '-16rem' }));
export const strikeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textDecoration: 'line-through' }));
export const strikethroughNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textDecoration: 'line-through' }));
export const linethroughNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textDecoration: 'line-through' }));
export const textdecorationLinethroughNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textDecoration: 'line-through' }));
export const underlineNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textDecoration: 'underline' }));
export const textdecorationUnderlineNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textDecoration: 'underline' }));
export const nounderlineNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textDecoration: 'none' }));
export const textdecorationNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textDecoration: 'none' }));
export const textalignLeftNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textAlign: 'left' }));
export const textalignRightNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textAlign: 'right' }));
export const textalignCenterNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textAlign: 'center' }));
export const textalignJustifyNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textAlign: 'justify' }));
export const texttransformCapitalizeNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textTransform: 'capitalize' }));
export const texttransformLowercaseNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textTransform: 'lowercase' }));
export const texttransformUppercaseNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textTransform: 'uppercase' }));
export const texttransformNoneNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textTransform: 'none' }));
export const f6Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontSize: '6rem' }), typestyle.media({ type: 'screen', minWidth: '30em' }, { fontSize: '.875rem' }));
export const fHeadlineNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontSize: '6rem' }));
export const f5Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontSize: '5rem' }), typestyle.media({ type: 'screen', minWidth: '30em' }, { fontSize: '1rem' }));
export const fSubheadlineNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontSize: '5rem' }));
export const f1Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontSize: '3rem' }));
export const f2Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontSize: '2.25rem' }));
export const f3Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontSize: '1.5rem' }));
export const f4Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontSize: '1.25rem' }));
export const f7Ns = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontSize: '.75rem' }));
export const measureNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '30em' }));
export const measureWideNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '34em' }));
export const measurewideNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '34em' }));
export const measureNarrowNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '20em' }));
export const measurenarrowNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { maxWidth: '20em' }));
export const indentNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { textIndent: '1em', marginTop: 0, marginBottom: 0 }));
export const smallCapsNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontVariant: 'small-caps' }));
export const smallcapsNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontVariant: 'small-caps' }));
export const fontvariantSmallcapsNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { fontVariant: 'small-caps' }));
export const truncateNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}));
export const centerNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: 'auto', marginLeft: 'auto' }));
export const marginhorizontalAutoNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: 'auto', marginLeft: 'auto' }));
export const marginrightAutoNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginRight: 'auto' }));
export const marginleftAutoNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { marginLeft: 'auto' }));
export const clipNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
}));
export const saysNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
}));
export const screenReaderTextNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, {
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
}));
export const whitespaceNormalNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { whiteSpace: 'normal' }));
export const whitespaceNowrapNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { whiteSpace: 'nowrap' }));
export const whitespacePreNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { whiteSpace: 'pre' }));
export const verticalalignBaselineNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { verticalAlign: 'baseline' }));
export const verticalalignMiddleNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { verticalAlign: 'middle' }));
export const verticalalignTopNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { verticalAlign: 'top' }));
export const verticalalignBottomNs = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em' }, { verticalAlign: 'bottom' }));
export const aspectratioM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: 0, position: 'relative' }));
export const aspectratio16x9M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '56.25%' }));
export const aspectratio9x16M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '177.77%' }));
export const aspectratio4x3M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '75%' }));
export const aspectratio3x4M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '133.33%' }));
export const aspectratio6x4M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '66.6%' }));
export const aspectratio4x6M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '150%' }));
export const aspectratio8x5M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '62.5%' }));
export const aspectratio5x8M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '160%' }));
export const aspectratio7x5M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '71.42%' }));
export const aspectratio5x7M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '140%' }));
export const aspectratio1x1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '100%' }));
export const aspectratioObjectM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100
}));
export const backgroundsizeCoverM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { backgroundSize: 'cover' }));
export const backgroundsizeContainM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { backgroundSize: 'contain' }));
export const backgroundpositionCenterM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
}));
export const backgroundpositionTopM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center'
}));
export const backgroundpositionRightM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right'
}));
export const backgroundpositionBottomM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center'
}));
export const backgroundpositionLeftM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center left'
}));
export const outlineM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { outline: '1px solid' }));
export const outlineTransparentM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { outline: '1px solid transparent' }));
export const outline0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { outline: 0 }));
export const borderM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderStyle: 'solid', borderWidth: '1px' }));
export const borderAllM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderStyle: 'solid', borderWidth: '1px' }));
export const borderTopM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderTopStyle: 'solid', borderTopWidth: '1px' }));
export const borderRightM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderRightStyle: 'solid', borderRightWidth: '1px' }));
export const borderBottomM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderBottomStyle: 'solid', borderBottomWidth: '1px' }));
export const borderLeftM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderLeftStyle: 'solid', borderLeftWidth: '1px' }));
export const borderNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderStyle: 'solid', borderWidth: 0 }));
export const borderradiusNoneMBorderradius0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderRadius: 0 }));
export const borderradius1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderRadius: '.125rem' }));
export const borderradius2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderRadius: '.25rem' }));
export const borderradius3M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderRadius: '.5rem' }));
export const borderradius4M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderRadius: '1rem' }));
export const borderradius5M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderRadius: '2rem' }));
export const borderradius100pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderRadius: '100%' }));
export const borderradiusPillM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderRadius: '9999px' }));
export const borderradiusBottomM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderTopLeftRadius: 0, borderTopRightRadius: 0 }));
export const borderradiusTopM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }));
export const borderradiusRightM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }));
export const borderradiusLeftM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderTopRightRadius: 0, borderBottomRightRadius: 0 }));
export const borderstyleDottedM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderStyle: 'dotted' }));
export const borderstyleDashedM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderStyle: 'dashed' }));
export const borderstyleSolidM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderStyle: 'solid' }));
export const borderstyleNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderStyle: 'none' }));
export const borderwidth0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderWidth: 0 }));
export const borderwidth1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderWidth: '.125rem' }));
export const borderwidth2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderWidth: '.25rem' }));
export const borderwidth3M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderWidth: '.5rem' }));
export const borderwidth4M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderWidth: '.75rem' }));
export const borderwidth5M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderWidth: '1rem' }));
export const bordertopwidth0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderTopWidth: 0 }));
export const borderrightwidth0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderRightWidth: 0 }));
export const borderbottomwidth0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderBottomWidth: 0 }));
export const borderleftwidth0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { borderLeftWidth: 0 }));
export const boxshadow1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { boxShadow: '0 0 4px 2px rgba( 0, 0, 0, .2 )' }));
export const boxshadow2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { boxShadow: '0 0 8px 2px rgba( 0, 0, 0, .2 )' }));
export const boxshadow3M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { boxShadow: '2px 2px 4px 2px rgba( 0, 0, 0, .2 )' }));
export const boxshadow4M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { boxShadow: '2px 2px 8px 0 rgba( 0, 0, 0, .2 )' }));
export const boxshadow5M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )' }));
export const top0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { top: 0 }));
export const left0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { left: 0 }));
export const right0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { right: 0 }));
export const bottom0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { bottom: 0 }));
export const top1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { top: '1rem' }));
export const left1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { left: '1rem' }));
export const right1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { right: '1rem' }));
export const bottom1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { bottom: '1rem' }));
export const top2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { top: '2rem' }));
export const left2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { left: '2rem' }));
export const right2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { right: '2rem' }));
export const bottom2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { bottom: '2rem' }));
export const topNeg1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { top: '-1rem' }));
export const rightNeg1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { right: '-1rem' }));
export const bottomNeg1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { bottom: '-1rem' }));
export const leftNeg1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { left: '-1rem' }));
export const topNeg2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { top: '-2rem' }));
export const rightNeg2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { right: '-2rem' }));
export const bottomNeg2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { bottom: '-2rem' }));
export const leftNeg2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { left: '-2rem' }));
export const absoluteNegFillM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { top: 0, right: 0, bottom: 0, left: 0 }));
export const clearLeftM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { clear: 'left' }));
export const clearRightM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { clear: 'right' }));
export const clearBothM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { clear: 'both' }));
export const clearNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { clear: 'none' }));
export const displayNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'none' }));
export const displayInlineM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'inline' }));
export const displayBlockM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'block' }));
export const displayInlineblockM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'inline-block' }));
export const displayInlinetableM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'inline-table' }));
export const displayTableM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'table' }));
export const displayTablecellM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'table-cell' }));
export const displayTablerowM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'table-row' }));
export const displayTablerowgroupM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'table-row-group' }));
export const displayTablecolumnM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'table-column' }));
export const displayTablecolumngroupM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'table-column-group' }));
export const displaytableFixedM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { tableLayout: 'fixed', width: '100%' }));
export const tablelayoutFixedM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { tableLayout: 'fixed', width: '100%' }));
export const displayFlexM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'flex' }));
export const displayInlineflexM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { display: 'inline-flex' }));
export const flexautoM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-flex': 1,
    '-ms-flex': '1 1 auto',
    flex: '1 1 auto',
    minWidth: 0,
    minHeight: 0
}));
export const flexNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-webkit-box-flex': 0, '-ms-flex': 'none', flex: 'none' }));
export const flexdirectionColumnM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-orient': 'vertical',
    '-webkit-box-direction': 'normal',
    '-ms-flex-direction': 'column',
    flexDirection: 'column'
}));
export const flexdirectionRowM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-orient': 'horizontal',
    '-webkit-box-direction': 'normal',
    '-ms-flex-direction': 'row',
    flexDirection: 'row'
}));
export const flexwrapWrapM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-ms-flex-wrap': 'wrap', flexWrap: 'wrap' }));
export const flexwrapNowrapM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-ms-flex-wrap': 'nowrap', flexWrap: 'nowrap' }));
export const flexwrapWrapreverseM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-ms-flex-wrap': 'wrap-reverse', flexWrap: 'wrap-reverse' }));
export const flexdirectionColumnreverseM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-orient': 'vertical',
    '-webkit-box-direction': 'reverse',
    '-ms-flex-direction': 'column-reverse',
    flexDirection: 'column-reverse'
}));
export const flexdirectionRowreverseM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-orient': 'horizontal',
    '-webkit-box-direction': 'reverse',
    '-ms-flex-direction': 'row-reverse',
    flexDirection: 'row-reverse'
}));
export const alignitemsFlexstartM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-align': 'start',
    '-ms-flex-align': 'start',
    alignItems: 'flex-start'
}));
export const alignitemsFlexendM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-align': 'end',
    '-ms-flex-align': 'end',
    alignItems: 'flex-end'
}));
export const alignitemsCenterM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    alignItems: 'center'
}));
export const alignitemsBaselineM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-align': 'baseline',
    '-ms-flex-align': 'baseline',
    alignItems: 'baseline'
}));
export const alignitemsStretchM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-align': 'stretch',
    '-ms-flex-align': 'stretch',
    alignItems: 'stretch'
}));
export const alignselfFlexstartM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-ms-flex-item-align': 'start', alignSelf: 'flex-start' }));
export const alignselfFlexendM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-ms-flex-item-align': 'end', alignSelf: 'flex-end' }));
export const alignselfCenterM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-ms-flex-item-align': 'center',
    '-ms-grid-row-align': 'center',
    alignSelf: 'center'
}));
export const alignselfBaselineM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-ms-flex-item-align': 'baseline', alignSelf: 'baseline' }));
export const alignselfStretchM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-ms-flex-item-align': 'stretch',
    '-ms-grid-row-align': 'stretch',
    alignSelf: 'stretch'
}));
export const justifycontentFlexstartM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-pack': 'start',
    '-ms-flex-pack': 'start',
    justifyContent: 'flex-start'
}));
export const justifycontentFlexendM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-pack': 'end',
    '-ms-flex-pack': 'end',
    justifyContent: 'flex-end'
}));
export const justifycontentCenterM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-pack': 'center',
    '-ms-flex-pack': 'center',
    justifyContent: 'center'
}));
export const justifycontentSpacebetweenM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-pack': 'justify',
    '-ms-flex-pack': 'justify',
    justifyContent: 'space-between'
}));
export const justifycontentSpaceroundM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-ms-flex-pack': 'distribute',
    justifyContent: 'space-around'
}));
export const aligncontentFlexstartM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-ms-flex-line-pack': 'start', alignContent: 'flex-start' }));
export const aligncontentFlexendM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-ms-flex-line-pack': 'end', alignContent: 'flex-end' }));
export const aligncontentCenterM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-ms-flex-line-pack': 'center', alignContent: 'center' }));
export const aligncontentSpacebetweenM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-ms-flex-line-pack': 'justify',
    alignContent: 'space-between'
}));
export const aligncontentSpacearoundM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-ms-flex-line-pack': 'distribute',
    alignContent: 'space-around'
}));
export const aligncontentStretchM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-ms-flex-line-pack': 'stretch', alignContent: 'stretch' }));
export const order0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-webkit-box-ordinal-group': 1, '-ms-flex-order': 0, order: 0 }));
export const order1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-webkit-box-ordinal-group': 2, '-ms-flex-order': 1, order: 1 }));
export const order2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-webkit-box-ordinal-group': 3, '-ms-flex-order': 2, order: 2 }));
export const order3M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-webkit-box-ordinal-group': 4, '-ms-flex-order': 3, order: 3 }));
export const order4M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-webkit-box-ordinal-group': 5, '-ms-flex-order': 4, order: 4 }));
export const order5M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-webkit-box-ordinal-group': 6, '-ms-flex-order': 5, order: 5 }));
export const order6M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-webkit-box-ordinal-group': 7, '-ms-flex-order': 6, order: 6 }));
export const order7M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-webkit-box-ordinal-group': 8, '-ms-flex-order': 7, order: 7 }));
export const order8M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { '-webkit-box-ordinal-group': 9, '-ms-flex-order': 8, order: 8 }));
export const orderLastM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-box-ordinal-group': 100000,
    '-ms-flex-order': 99999,
    order: 99999
}));
export const floatLeftM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { float: 'left', display: 'inline' }));
export const floatRightM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { float: 'right', display: 'inline' }));
export const floatNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { float: 'none' }));
export const fontstyleItalicM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontStyle: 'italic' }));
export const iM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontStyle: 'italic' }));
export const fontstyleNormalM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontStyle: 'normal' }));
export const normalM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 'normal' }));
export const fontweightNormalM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 'normal' }));
export const bM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 'bold' }));
export const fontweightBoldM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 'bold' }));
export const fontweight100M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 100 }));
export const fontweight200M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 200 }));
export const fontweight300M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 300 }));
export const fontweight400M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 400 }));
export const fontweight500M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 500 }));
export const fontweight600M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 600 }));
export const fontweight700M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 700 }));
export const fontweight800M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 800 }));
export const fontweight900M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontWeight: 900 }));
export const heightXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '.0625rem' }));
export const heightXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '.125rem' }));
export const heightXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '.25rem' }));
export const heightSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '.5rem' }));
export const heightMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '1rem' }));
export const heightLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '2rem' }));
export const heightXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '4rem' }));
export const heightXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '8rem' }));
export const heightXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '16rem' }));
export const height25pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '25%' }));
export const height50pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '50%' }));
export const height75pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '75%' }));
export const height100pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '100%' }));
export const minheight100pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { minHeight: '100%' }));
export const height25vhM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '25vh' }));
export const height50vhM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '50vh' }));
export const height75vhM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '75vh' }));
export const height100vhM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: '100vh' }));
export const minheight100vhM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { minHeight: '100vh' }));
export const heightAutoM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: 'auto' }));
export const heightInheritM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { height: 'inherit' }));
export const trackedM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { letterSpacing: '.1em' }));
export const letterspacingTrackedM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { letterSpacing: '.1em' }));
export const trackedtightM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { letterSpacing: '-.0.05em' }));
export const letterspacingTightM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { letterSpacing: '-.0.05em' }));
export const megatrackedM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { letterSpacing: '.25em' }));
export const letterspacingMegatrackedM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { letterSpacing: '.25em' }));
export const lineheight1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { lineHeight: 1 }));
export const lineheightTitleM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { lineHeight: 1.25 }));
export const lineheight1p25M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { lineHeight: 1.25 }));
export const lineheightCopyM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { lineHeight: 1.5 }));
export const lineheight1p5M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { lineHeight: 1.5 }));
export const maxwidth100pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '100%' }));
export const maxwidthMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '1rem' }));
export const maxwidthLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '2rem' }));
export const maxwidthXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '4rem' }));
export const maxwidthXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '8rem' }));
export const maxwidthXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '16rem' }));
export const maxwidthXxxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '32rem' }));
export const maxwidthXxxxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '48rem' }));
export const maxwidthXxxxxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '64rem' }));
export const maxwidthXxxxxxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '96rem' }));
export const maxwidthNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: 'none' }));
export const widthXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '.0625rem' }));
export const widthXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '.125rem' }));
export const widthXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '.25rem' }));
export const widthSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '.5rem' }));
export const widthMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '1rem' }));
export const widthLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '2rem' }));
export const widthXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '4rem' }));
export const widthXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '8rem' }));
export const widthXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '16rem' }));
export const width10pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '10%' }));
export const width20pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '20%' }));
export const width25pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '25%' }));
export const width30pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '30%' }));
export const width33pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '33%' }));
export const width34pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '34%' }));
export const width40pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '40%' }));
export const width50pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '50%' }));
export const width60pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '60%' }));
export const width70pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '70%' }));
export const width75pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '75%' }));
export const width80pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '80%' }));
export const width90pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '90%' }));
export const width100pM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: '100%' }));
export const widthThirdM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: 'calc( 100% / 3 )' }));
export const widthTwothirdsM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: 'calc( 100% / 1.5 )' }));
export const widthAutoM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { width: 'auto' }));
export const overflowVisibleM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflow: 'visible' }));
export const overflowHiddenM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflow: 'hidden' }));
export const overflowScrollM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflow: 'scroll' }));
export const overflowAutoM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflow: 'auto' }));
export const overflowxVisibleM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflowX: 'visible' }));
export const overflowxHiddenM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflowX: 'hidden' }));
export const overflowxScrollM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflowX: 'scroll' }));
export const overflowxAutoM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflowX: 'auto' }));
export const overflowyVisibleM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflowY: 'visible' }));
export const overflowyHiddenM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflowY: 'hidden' }));
export const overflowyScrollM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflowY: 'scroll' }));
export const overflowyAutoM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { overflowY: 'auto' }));
export const positionStaticM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { position: 'static' }));
export const positionRelativeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { position: 'relative' }));
export const positionAbsoluteM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { position: 'absolute' }));
export const positionFixedM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { position: 'fixed' }));
export const transformRotate45M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-transform': 'rotate( 45deg )',
    transform: 'rotate( 45deg )'
}));
export const transformRotate90M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-transform': 'rotate( 90deg )',
    transform: 'rotate( 90deg )'
}));
export const transformRotate135M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-transform': 'rotate( 135deg )',
    transform: 'rotate( 135deg )'
}));
export const transformRotate180M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-transform': 'rotate( 180deg )',
    transform: 'rotate( 180deg )'
}));
export const transformRotate225M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-transform': 'rotate( 225deg )',
    transform: 'rotate( 225deg )'
}));
export const transformRotate270M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-transform': 'rotate( 270deg )',
    transform: 'rotate( 270deg )'
}));
export const transformRotate315M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    '-webkit-transform': 'rotate( 315deg )',
    transform: 'rotate( 315deg )'
}));
export const paddingNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { padding: 0 }));
export const padding0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { padding: 0 }));
export const paddingXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { padding: '.0625rem' }));
export const paddingXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { padding: '.125rem' }));
export const paddingXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { padding: '.25rem' }));
export const paddingSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { padding: '.5rem' }));
export const paddingMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { padding: '1rem' }));
export const paddingLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { padding: '2rem' }));
export const paddingXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { padding: '4rem' }));
export const paddingXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { padding: '8rem' }));
export const paddingXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { padding: '16rem' }));
export const paddingleftNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: 0 }));
export const paddingleft0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: 0 }));
export const paddingleftXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '.0625rem' }));
export const paddingleftXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '.125rem' }));
export const paddingleftXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '.25rem' }));
export const paddingleftSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '.5rem' }));
export const paddingleftMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '1rem' }));
export const paddingleftLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '2rem' }));
export const paddingleftXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '4rem' }));
export const paddingleftXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '8rem' }));
export const paddingleftXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '16rem' }));
export const paddingrightNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingRight: 0 }));
export const paddingright0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingRight: 0 }));
export const paddingrightXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingRight: '.0625rem' }));
export const paddingrightXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingRight: '.125rem' }));
export const paddingrightXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingRight: '.25rem' }));
export const paddingrightSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingRight: '.5rem' }));
export const paddingrightMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingRight: '1rem' }));
export const paddingrightLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingRight: '2rem' }));
export const paddingrightXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingRight: '4rem' }));
export const paddingrightXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingRight: '8rem' }));
export const paddingrightXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingRight: '16rem' }));
export const paddingbottomNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: 0 }));
export const paddingbottom0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: 0 }));
export const paddingbottomXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '.0625rem' }));
export const paddingbottomXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '.125rem' }));
export const paddingbottomXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '.25rem' }));
export const paddingbottomSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '.5rem' }));
export const paddingbottomMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '1rem' }));
export const paddingbottomLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '2rem' }));
export const paddingbottomXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '4rem' }));
export const paddingbottomXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '8rem' }));
export const paddingbottomXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingBottom: '16rem' }));
export const paddingtopNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: 0 }));
export const paddingtop0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: 0 }));
export const paddingtopXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '.0625rem' }));
export const paddingtopXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '.125rem' }));
export const paddingtopXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '.25rem' }));
export const paddingtopSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '.5rem' }));
export const paddingtopMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '1rem' }));
export const paddingtopLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '2rem' }));
export const paddingtopXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '4rem' }));
export const paddingtopXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '8rem' }));
export const paddingtopXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '16rem' }));
export const paddingverticalNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: 0, paddingBottom: 0 }));
export const paddingvertical0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: 0, paddingBottom: 0 }));
export const paddingverticalXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '.0625rem', paddingBottom: '.0625rem' }));
export const paddingverticalXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '.125rem', paddingBottom: '.0625rem' }));
export const paddingverticalXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '.25rem', paddingBottom: '.25rem' }));
export const paddingverticalSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '.5rem', paddingBottom: '.5rem' }));
export const paddingverticalMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '1rem', paddingBottom: '1rem' }));
export const paddingverticalLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '2rem', paddingBottom: '2rem' }));
export const paddingverticalXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '4rem', paddingBottom: '4rem' }));
export const paddingverticalXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '8rem', paddingBottom: '8rem' }));
export const paddingverticalXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingTop: '16rem', paddingBottom: '16rem' }));
export const paddinghorizontalNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: 0, paddingRight: 0 }));
export const paddinghorizontal0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: 0, paddingRight: 0 }));
export const paddinghorizontalXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '.0625rem', paddingRight: '.0625rem' }));
export const paddinghorizontalXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '.125rem', paddingRight: '.125rem' }));
export const paddinghorizontalXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '.25rem', paddingRight: '.25rem' }));
export const paddinghorizontalSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '.5rem', paddingRight: '.5rem' }));
export const paddinghorizontalMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '1rem', paddingRight: '1rem' }));
export const paddinghorizontalLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '2rem', paddingRight: '2rem' }));
export const paddinghorizontalXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '4rem', paddingRight: '4rem' }));
export const paddinghorizontalXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '8rem', paddingRight: '8rem' }));
export const paddinghorizontalXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { paddingLeft: '16rem', paddingRight: '16rem' }));
export const marginNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: 0 }));
export const margin0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: 0 }));
export const marginXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '.0625rem' }));
export const marginXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '.125rem' }));
export const marginXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '.25rem' }));
export const marginSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '.5rem' }));
export const marginMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '1rem' }));
export const marginLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '2rem' }));
export const marginXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '4rem' }));
export const marginXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '8rem' }));
export const marginXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '16rem' }));
export const marginleftNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: 0 }));
export const marginleft0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: 0 }));
export const marginleftXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '.0625rem' }));
export const marginleftXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '.125rem' }));
export const marginleftXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '.25rem' }));
export const marginleftSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '.5rem' }));
export const marginleftMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '1rem' }));
export const marginleftLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '2rem' }));
export const marginleftXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '4rem' }));
export const marginleftXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '8rem' }));
export const marginleftXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '16rem' }));
export const marginrightNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: 0 }));
export const marginright0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: 0 }));
export const marginrightXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '.0625rem' }));
export const marginrightXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '.125rem' }));
export const marginrightXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '.25rem' }));
export const marginrightSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '.5rem' }));
export const marginrightMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '1rem' }));
export const marginrightLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '2rem' }));
export const marginrightXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '4rem' }));
export const marginrightXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '8rem' }));
export const marginrightXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '16rem' }));
export const marginbottomNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: 0 }));
export const marginbottom0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: 0 }));
export const marginbottomXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '.0625rem' }));
export const marginbottomXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '.125rem' }));
export const marginbottomXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '.25rem' }));
export const marginbottomSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '.5rem' }));
export const marginbottomMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '1rem' }));
export const marginbottomLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '2rem' }));
export const marginbottomXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '4rem' }));
export const marginbottomXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '8rem' }));
export const marginbottomXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '16rem' }));
export const margintopNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: 0 }));
export const margintop0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: 0 }));
export const margintopXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '.0625rem' }));
export const margintopXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '.125rem' }));
export const margintopXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '.25rem' }));
export const margintopSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '.5rem' }));
export const margintopMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '1rem' }));
export const margintopLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '2rem' }));
export const margintopXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '4rem' }));
export const margintopXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '8rem' }));
export const margintopXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '16rem' }));
export const marginverticalNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: 0, marginBottom: 0 }));
export const marginvertical0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: 0, marginBottom: 0 }));
export const marginverticalXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '.0625rem', marginBottom: '.0625rem' }));
export const marginverticalXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '.125rem', marginBottom: '.125rem' }));
export const marginverticalXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '.25rem', marginBottom: '.25rem' }));
export const marginverticalSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '.5rem', marginBottom: '.5rem' }));
export const marginverticalMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '1rem', marginBottom: '1rem' }));
export const marginverticalLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '2rem', marginBottom: '2rem' }));
export const marginverticalXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '4rem', marginBottom: '4rem' }));
export const marginverticalXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '8rem', marginBottom: '8rem' }));
export const marginverticalXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '16rem', marginBottom: '16rem' }));
export const marginhorizontalNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: 0, marginRight: 0 }));
export const marginhorizontal0M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: 0, marginRight: 0 }));
export const marginhorizontalXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '.0625rem', marginRight: '.0625rem' }));
export const marginhorizontalXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '.125rem', marginRight: '.125rem' }));
export const marginhorizontalXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '.25rem', marginRight: '.25rem' }));
export const marginhorizontalSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '.5rem', marginRight: '.5rem' }));
export const marginhorizontalMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '1rem', marginRight: '1rem' }));
export const marginhorizontalLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '2rem', marginRight: '2rem' }));
export const marginhorizontalXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '4rem', marginRight: '4rem' }));
export const marginhorizontalXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '8rem', marginRight: '8rem' }));
export const marginhorizontalXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '16rem', marginRight: '16rem' }));
export const marginNegXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '-0.0625rem' }));
export const marginNegXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '-0.125rem' }));
export const marginNegXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '-0.25rem' }));
export const marginNegSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '-0.5rem' }));
export const marginNegMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '-1rem' }));
export const marginNegLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '-2rem' }));
export const marginNegXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '-4rem' }));
export const marginNegXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '-8rem' }));
export const marginNegXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { margin: '-16rem' }));
export const marginleftNegXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '-0.0625rem' }));
export const marginleftNegXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '-0.125rem' }));
export const marginleftNegXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '-0.25rem' }));
export const marginleftNegSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '-0.5rem' }));
export const marginleftNegMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '-1rem' }));
export const marginleftNegLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '-2rem' }));
export const marginleftNegXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '-4rem' }));
export const marginleftNegXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '-8rem' }));
export const marginleftNegXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: '-16rem' }));
export const marginrightNegXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '-0.0625rem' }));
export const marginrightNegXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '-0.125rem' }));
export const marginrightNegXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '-0.25rem' }));
export const marginrightNegSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '-0.5rem' }));
export const marginrightNegMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '-1rem' }));
export const marginrightNegLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '-2rem' }));
export const marginrightNegXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '-4rem' }));
export const marginrightNegXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '-8rem' }));
export const marginrightNegXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: '-16rem' }));
export const marginbottomNegXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '-0.0625rem' }));
export const marginbottomNegXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '-0.125rem' }));
export const marginbottomNegXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '-0.25rem' }));
export const marginbottomNegSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '-0.5rem' }));
export const marginbottomNegMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '-1rem' }));
export const marginbottomNegLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '-2rem' }));
export const marginbottomNegXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '-4rem' }));
export const marginbottomNegXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '-8rem' }));
export const marginbottomNegXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginBottom: '-16rem' }));
export const margintopNegXxxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '-0.0625rem' }));
export const margintopNegXxsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '-0.125rem' }));
export const margintopNegXsmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '-0.25rem' }));
export const margintopNegSmallM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '-0.5rem' }));
export const margintopNegMediumM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '-1rem' }));
export const margintopNegLargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '-2rem' }));
export const margintopNegXlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '-4rem' }));
export const margintopNegXxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '-8rem' }));
export const margintopNegXxxlargeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginTop: '-16rem' }));
export const strikeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textDecoration: 'line-through' }));
export const strikethroughM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textDecoration: 'line-through' }));
export const linethroughM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textDecoration: 'line-through' }));
export const textdecorationLinethroughM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textDecoration: 'line-through' }));
export const underlineM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textDecoration: 'underline' }));
export const textdecorationUnderlineM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textDecoration: 'underline' }));
export const nounderlineM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textDecoration: 'none' }));
export const textdecorationNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textDecoration: 'none' }));
export const textalignLeftM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textAlign: 'left' }));
export const textalignRightM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textAlign: 'right' }));
export const textalignCenterM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textAlign: 'center' }));
export const textalignJustifyM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textAlign: 'justify' }));
export const texttransformCapitalizeM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textTransform: 'capitalize' }));
export const texttransformLowercaseM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textTransform: 'lowercase' }));
export const texttransformUppercaseM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textTransform: 'uppercase' }));
export const texttransformNoneM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textTransform: 'none' }));
export const f6M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontSize: '6rem' }), typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontSize: '.875rem' }));
export const fHeadlineM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontSize: '6rem' }));
export const f5M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontSize: '5rem' }), typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontSize: '1rem' }));
export const fSubheadlineM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontSize: '5rem' }));
export const f1M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontSize: '3rem' }));
export const f2M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontSize: '2.25rem' }));
export const f3M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontSize: '1.5rem' }));
export const f4M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontSize: '1.25rem' }));
export const f7M = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontSize: '.75rem' }));
export const measureM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '30em' }));
export const measureWideM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '34em' }));
export const measurewideM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '34em' }));
export const measureNarrowM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '20em' }));
export const measurenarrowM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { maxWidth: '20em' }));
export const indentM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { textIndent: '1em', marginTop: 0, marginBottom: 0 }));
export const smallCapsM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontVariant: 'small-caps' }));
export const smallcapsM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontVariant: 'small-caps' }));
export const fontvariantSmallcapsM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { fontVariant: 'small-caps' }));
export const truncateM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}));
export const centerM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: 'auto', marginLeft: 'auto' }));
export const marginhorizontalAutoM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: 'auto', marginLeft: 'auto' }));
export const marginrightAutoM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginRight: 'auto' }));
export const marginleftAutoM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { marginLeft: 'auto' }));
export const clipM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
}));
export const saysM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
}));
export const screenReaderTextM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, {
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
}));
export const whitespaceNormalM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { whiteSpace: 'normal' }));
export const whitespaceNowrapM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { whiteSpace: 'nowrap' }));
export const whitespacePreM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { whiteSpace: 'pre' }));
export const verticalalignBaselineM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { verticalAlign: 'baseline' }));
export const verticalalignMiddleM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { verticalAlign: 'middle' }));
export const verticalalignTopM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { verticalAlign: 'top' }));
export const verticalalignBottomM = typestyle.style(typestyle.media({ type: 'screen', minWidth: '30em', maxWidth: '60em' }, { verticalAlign: 'bottom' }));
export const aspectratioL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: 0, position: 'relative' }));
export const aspectratio16x9L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '56.25%' }));
export const aspectratio9x16L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '177.77%' }));
export const aspectratio4x3L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '75%' }));
export const aspectratio3x4L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '133.33%' }));
export const aspectratio6x4L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '66.6%' }));
export const aspectratio4x6L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '150%' }));
export const aspectratio8x5L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '62.5%' }));
export const aspectratio5x8L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '160%' }));
export const aspectratio7x5L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '71.42%' }));
export const aspectratio5x7L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '140%' }));
export const aspectratio1x1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '100%' }));
export const aspectratioObjectL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100
}));
export const backgroundsizeCoverL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { backgroundSize: 'cover' }));
export const backgroundsizeContainL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { backgroundSize: 'contain' }));
export const backgroundpositionCenterL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
}));
export const backgroundpositionTopL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center'
}));
export const backgroundpositionRightL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right'
}));
export const backgroundpositionBottomL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center'
}));
export const backgroundpositionLeftL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center left'
}));
export const outlineL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { outline: '1px solid' }));
export const outlineTransparentL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { outline: '1px solid transparent' }));
export const outline0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { outline: 0 }));
export const borderL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderStyle: 'solid', borderWidth: '1px' }));
export const borderAllL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderStyle: 'solid', borderWidth: '1px' }));
export const borderTopL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderTopStyle: 'solid', borderTopWidth: '1px' }));
export const borderRightL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderRightStyle: 'solid', borderRightWidth: '1px' }));
export const borderBottomL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderBottomStyle: 'solid', borderBottomWidth: '1px' }));
export const borderLeftL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderLeftStyle: 'solid', borderLeftWidth: '1px' }));
export const borderNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderStyle: 'solid', borderWidth: 0 }));
export const borderradiusNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderRadius: 0 }));
export const borderradius0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderRadius: 0 }));
export const borderradius1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderRadius: '.125rem' }));
export const borderradius2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderRadius: '.25rem' }));
export const borderradius3L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderRadius: '.5rem' }));
export const borderradius4L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderRadius: '1rem' }));
export const borderradius5L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderRadius: '2rem' }));
export const borderradius100pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderRadius: '100%' }));
export const borderradiusPillL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderRadius: '9999px' }));
export const borderradiusBottomL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderTopLeftRadius: 0, borderTopRightRadius: 0 }));
export const borderradiusTopL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }));
export const borderradiusRightL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }));
export const borderradiusLeftL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderTopRightRadius: 0, borderBottomRightRadius: 0 }));
export const borderstyleDottedL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderStyle: 'dotted' }));
export const borderstyleDashedL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderStyle: 'dashed' }));
export const borderstyleSolidL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderStyle: 'solid' }));
export const borderstyleNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderStyle: 'none' }));
export const borderwidth0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderWidth: 0 }));
export const borderwidth1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderWidth: '.125rem' }));
export const borderwidth2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderWidth: '.25rem' }));
export const borderwidth3L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderWidth: '.5rem' }));
export const borderwidth4L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderWidth: '.75rem' }));
export const borderwidth5L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderWidth: '1rem' }));
export const bordertopwidth0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderTopWidth: 0 }));
export const borderrightwidth0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderRightWidth: 0 }));
export const borderbottomwidth0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderBottomWidth: 0 }));
export const borderleftwidth0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { borderLeftWidth: 0 }));
export const boxshadow1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { boxShadow: '0 0 4px 2px rgba( 0, 0, 0, .2 )' }));
export const boxshadow2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { boxShadow: '0 0 8px 2px rgba( 0, 0, 0, .2 )' }));
export const boxshadow3L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { boxShadow: '2px 2px 4px 2px rgba( 0, 0, 0, .2 )' }));
export const boxshadow4L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { boxShadow: '2px 2px 8px 0 rgba( 0, 0, 0, .2 )' }));
export const boxshadow5L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )' }));
export const top0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { top: 0 }));
export const left0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { left: 0 }));
export const right0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { right: 0 }));
export const bottom0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { bottom: 0 }));
export const top1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { top: '1rem' }));
export const left1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { left: '1rem' }));
export const right1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { right: '1rem' }));
export const bottom1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { bottom: '1rem' }));
export const top2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { top: '2rem' }));
export const left2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { left: '2rem' }));
export const right2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { right: '2rem' }));
export const bottom2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { bottom: '2rem' }));
export const topNeg1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { top: '-1rem' }));
export const rightNeg1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { right: '-1rem' }));
export const bottomNeg1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { bottom: '-1rem' }));
export const leftNeg1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { left: '-1rem' }));
export const topNeg2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { top: '-2rem' }));
export const rightNeg2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { right: '-2rem' }));
export const bottomNeg2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { bottom: '-2rem' }));
export const leftNeg2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { left: '-2rem' }));
export const absoluteNegFillL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { top: 0, right: 0, bottom: 0, left: 0 }));
export const clearLeftL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { clear: 'left' }));
export const clearRightL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { clear: 'right' }));
export const clearBothL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { clear: 'both' }));
export const clearNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { clear: 'none' }));
export const displayNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'none' }));
export const displayInlineL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'inline' }));
export const displayBlockL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'block' }));
export const displayInlineblockL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'inline-block' }));
export const displayInlinetableL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'inline-table' }));
export const displayTableL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'table' }));
export const displayTablecellL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'table-cell' }));
export const displayTablerowL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'table-row' }));
export const displayTablerowgroupL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'table-row-group' }));
export const displayTablecolumnL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'table-column' }));
export const displayTablecolumngroupL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'table-column-group' }));
export const displaytableFixedL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { tableLayout: 'fixed', width: '100%' }));
export const tablelayoutFixedL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { tableLayout: 'fixed', width: '100%' }));
export const displayFlexL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'flex' }));
export const displayInlineflexL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { display: 'inline-flex' }));
export const flexautoL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-flex': 1,
    '-ms-flex': '1 1 auto',
    flex: '1 1 auto',
    minWidth: 0,
    minHeight: 0
}));
export const flexNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-webkit-box-flex': 0, '-ms-flex': 'none', flex: 'none' }));
export const flexdirectionColumnL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-orient': 'vertical',
    '-webkit-box-direction': 'normal',
    '-ms-flex-direction': 'column',
    flexDirection: 'column'
}));
export const flexdirectionRowL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-orient': 'horizontal',
    '-webkit-box-direction': 'normal',
    '-ms-flex-direction': 'row',
    flexDirection: 'row'
}));
export const flexwrapWrapL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-ms-flex-wrap': 'wrap', flexWrap: 'wrap' }));
export const flexwrapNowrapL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-ms-flex-wrap': 'nowrap', flexWrap: 'nowrap' }));
export const flexwrapWrapreverseL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-ms-flex-wrap': 'wrap-reverse', flexWrap: 'wrap-reverse' }));
export const flexdirectionColumnreverseL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-orient': 'vertical',
    '-webkit-box-direction': 'reverse',
    '-ms-flex-direction': 'column-reverse',
    flexDirection: 'column-reverse'
}));
export const flexdirectionRowreverseL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-orient': 'horizontal',
    '-webkit-box-direction': 'reverse',
    '-ms-flex-direction': 'row-reverse',
    flexDirection: 'row-reverse'
}));
export const alignitemsFlexstartL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-align': 'start',
    '-ms-flex-align': 'start',
    alignItems: 'flex-start'
}));
export const alignitemsFlexendL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-align': 'end',
    '-ms-flex-align': 'end',
    alignItems: 'flex-end'
}));
export const alignitemsCenterL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    alignItems: 'center'
}));
export const alignitemsBaselineL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-align': 'baseline',
    '-ms-flex-align': 'baseline',
    alignItems: 'baseline'
}));
export const alignitemsStretchL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-align': 'stretch',
    '-ms-flex-align': 'stretch',
    alignItems: 'stretch'
}));
export const alignselfFlexstartL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-ms-flex-item-align': 'start', alignSelf: 'flex-start' }));
export const alignselfFlexendL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-ms-flex-item-align': 'end', alignSelf: 'flex-end' }));
export const alignselfCenterL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-ms-flex-item-align': 'center',
    '-ms-grid-row-align': 'center',
    alignSelf: 'center'
}));
export const alignselfBaselineL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-ms-flex-item-align': 'baseline', alignSelf: 'baseline' }));
export const alignselfStretchL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-ms-flex-item-align': 'stretch',
    '-ms-grid-row-align': 'stretch',
    alignSelf: 'stretch'
}));
export const justifycontentFlexstartL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-pack': 'start',
    '-ms-flex-pack': 'start',
    justifyContent: 'flex-start'
}));
export const justifycontentFlexendL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-pack': 'end',
    '-ms-flex-pack': 'end',
    justifyContent: 'flex-end'
}));
export const justifycontentCenterL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-pack': 'center',
    '-ms-flex-pack': 'center',
    justifyContent: 'center'
}));
export const justifycontentSpacebetweenL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-pack': 'justify',
    '-ms-flex-pack': 'justify',
    justifyContent: 'space-between'
}));
export const justifycontentSpaceroundL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-ms-flex-pack': 'distribute',
    justifyContent: 'space-around'
}));
export const aligncontentFlexstartL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-ms-flex-line-pack': 'start', alignContent: 'flex-start' }));
export const aligncontentFlexendL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-ms-flex-line-pack': 'end', alignContent: 'flex-end' }));
export const aligncontentCenterL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-ms-flex-line-pack': 'center', alignContent: 'center' }));
export const aligncontentSpacebetweenL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-ms-flex-line-pack': 'justify',
    alignContent: 'space-between'
}));
export const aligncontentSpacearoundL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-ms-flex-line-pack': 'distribute',
    alignContent: 'space-around'
}));
export const aligncontentStretchL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-ms-flex-line-pack': 'stretch', alignContent: 'stretch' }));
export const order0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-webkit-box-ordinal-group': 1, '-ms-flex-order': 0, order: 0 }));
export const order1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-webkit-box-ordinal-group': 2, '-ms-flex-order': 1, order: 1 }));
export const order2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-webkit-box-ordinal-group': 3, '-ms-flex-order': 2, order: 2 }));
export const order3L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-webkit-box-ordinal-group': 4, '-ms-flex-order': 3, order: 3 }));
export const order4L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-webkit-box-ordinal-group': 5, '-ms-flex-order': 4, order: 4 }));
export const order5L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-webkit-box-ordinal-group': 6, '-ms-flex-order': 5, order: 5 }));
export const order6L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-webkit-box-ordinal-group': 7, '-ms-flex-order': 6, order: 6 }));
export const order7L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-webkit-box-ordinal-group': 8, '-ms-flex-order': 7, order: 7 }));
export const order8L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { '-webkit-box-ordinal-group': 9, '-ms-flex-order': 8, order: 8 }));
export const orderLastL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-box-ordinal-group': 100000,
    '-ms-flex-order': 99999,
    order: 99999
}));
export const floatLeftL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { float: 'left', display: 'inline' }));
export const floatRightL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { float: 'right', display: 'inline' }));
export const floatNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { float: 'none' }));
export const fontstyleItalicL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontStyle: 'italic' }));
export const iL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontStyle: 'italic' }));
export const fontstyleNormalL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontStyle: 'normal' }));
export const normalL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 'normal' }));
export const fontweightNormalL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 'normal' }));
export const bL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 'bold' }));
export const fontweightBoldL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 'bold' }));
export const fontweight100L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 100 }));
export const fontweight200L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 200 }));
export const fontweight300L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 300 }));
export const fontweight400L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 400 }));
export const fontweight500L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 500 }));
export const fontweight600L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 600 }));
export const fontweight700L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 700 }));
export const fontweight800L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 800 }));
export const fontweight900L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontWeight: 900 }));
export const heightXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '.0625rem' }));
export const heightXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '.125rem' }));
export const heightXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '.25rem' }));
export const heightSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '.5rem' }));
export const heightMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '1rem' }));
export const heightLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '2rem' }));
export const heightXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '4rem' }));
export const heightXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '8rem' }));
export const heightXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '16rem' }));
export const height25pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '25%' }));
export const height50pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '50%' }));
export const height75pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '75%' }));
export const height100pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '100%' }));
export const minheight100pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { minHeight: '100%' }));
export const height25vhL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '25vh' }));
export const height50vhL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '50vh' }));
export const height75vhL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '75vh' }));
export const height100vhL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: '100vh' }));
export const minheight100vhL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { minHeight: '100vh' }));
export const heightAutoL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: 'auto' }));
export const heightInheritL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { height: 'inherit' }));
export const trackedL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { letterSpacing: '.1em' }));
export const letterspacingTrackedL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { letterSpacing: '.1em' }));
export const trackedtightL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { letterSpacing: '-.0.05em' }));
export const letterspacingTightL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { letterSpacing: '-.0.05em' }));
export const megatrackedL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { letterSpacing: '.25em' }));
export const letterspacingMegatrackedL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { letterSpacing: '.25em' }));
export const lineheight1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { lineHeight: 1 }));
export const lineheightTitleL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { lineHeight: 1.25 }));
export const lineheight1p25L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { lineHeight: 1.25 }));
export const lineheightCopyL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { lineHeight: 1.5 }));
export const lineheight1p5L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { lineHeight: 1.5 }));
export const maxwidth100pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '100%' }));
export const maxwidthMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '1rem' }));
export const maxwidthLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '2rem' }));
export const maxwidthXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '4rem' }));
export const maxwidthXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '8rem' }));
export const maxwidthXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '16rem' }));
export const maxwidthXxxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '32rem' }));
export const maxwidthXxxxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '48rem' }));
export const maxwidthXxxxxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '64rem' }));
export const maxwidthXxxxxxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '96rem' }));
export const maxwidthNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: 'none' }));
export const widthXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '.0625rem' }));
export const widthXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '.125rem' }));
export const widthXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '.25rem' }));
export const widthSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '.5rem' }));
export const widthMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '1rem' }));
export const widthLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '2rem' }));
export const widthXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '4rem' }));
export const widthXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '8rem' }));
export const widthXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '16rem' }));
export const width10pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '10%' }));
export const width20pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '20%' }));
export const width25pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '25%' }));
export const width30pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '30%' }));
export const width33pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '33%' }));
export const width34pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '34%' }));
export const width40pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '40%' }));
export const width50pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '50%' }));
export const width60pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '60%' }));
export const width70pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '70%' }));
export const width75pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '75%' }));
export const width80pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '80%' }));
export const width90pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '90%' }));
export const width100pL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: '100%' }));
export const widthThirdL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: 'calc( 100% / 3 )' }));
export const widthTwothirdsL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: 'calc( 100% / 1.5 )' }));
export const widthAutoL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { width: 'auto' }));
export const overflowVisibleL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflow: 'visible' }));
export const overflowHiddenL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflow: 'hidden' }));
export const overflowScrollL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflow: 'scroll' }));
export const overflowAutoL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflow: 'auto' }));
export const overflowxVisibleL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflowX: 'visible' }));
export const overflowxHiddenL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflowX: 'hidden' }));
export const overflowxScrollL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflowX: 'scroll' }));
export const overflowxAutoL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflowX: 'auto' }));
export const overflowyVisibleL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflowY: 'visible' }));
export const overflowyHiddenL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflowY: 'hidden' }));
export const overflowyScrollL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflowY: 'scroll' }));
export const overflowyAutoL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { overflowY: 'auto' }));
export const positionStaticL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { position: 'static' }));
export const positionRelativeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { position: 'relative' }));
export const positionAbsoluteL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { position: 'absolute' }));
export const positionFixedL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { position: 'fixed' }));
export const transformRotate45L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-transform': 'rotate( 45deg )',
    transform: 'rotate( 45deg )'
}));
export const transformRotate90L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-transform': 'rotate( 90deg )',
    transform: 'rotate( 90deg )'
}));
export const transformRotate135L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-transform': 'rotate( 135deg )',
    transform: 'rotate( 135deg )'
}));
export const transformRotate180L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-transform': 'rotate( 180deg )',
    transform: 'rotate( 180deg )'
}));
export const transformRotate225L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-transform': 'rotate( 225deg )',
    transform: 'rotate( 225deg )'
}));
export const transformRotate270L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-transform': 'rotate( 270deg )',
    transform: 'rotate( 270deg )'
}));
export const transformRotate315L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    '-webkit-transform': 'rotate( 315deg )',
    transform: 'rotate( 315deg )'
}));
export const paddingNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { padding: 0 }));
export const padding0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { padding: 0 }));
export const paddingXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { padding: '.0625rem' }));
export const paddingXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { padding: '.125rem' }));
export const paddingXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { padding: '.25rem' }));
export const paddingSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { padding: '.5rem' }));
export const paddingMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { padding: '1rem' }));
export const paddingLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { padding: '2rem' }));
export const paddingXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { padding: '4rem' }));
export const paddingXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { padding: '8rem' }));
export const paddingXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { padding: '16rem' }));
export const paddingleftNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: 0 }));
export const paddingleft0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: 0 }));
export const paddingleftXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '.0625rem' }));
export const paddingleftXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '.125rem' }));
export const paddingleftXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '.25rem' }));
export const paddingleftSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '.5rem' }));
export const paddingleftMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '1rem' }));
export const paddingleftLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '2rem' }));
export const paddingleftXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '4rem' }));
export const paddingleftXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '8rem' }));
export const paddingleftXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '16rem' }));
export const paddingrightNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingRight: 0 }));
export const paddingright0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingRight: 0 }));
export const paddingrightXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingRight: '.0625rem' }));
export const paddingrightXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingRight: '.125rem' }));
export const paddingrightXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingRight: '.25rem' }));
export const paddingrightSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingRight: '.5rem' }));
export const paddingrightMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingRight: '1rem' }));
export const paddingrightLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingRight: '2rem' }));
export const paddingrightXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingRight: '4rem' }));
export const paddingrightXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingRight: '8rem' }));
export const paddingrightXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingRight: '16rem' }));
export const paddingbottomNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: 0 }));
export const paddingbottom0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: 0 }));
export const paddingbottomXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '.0625rem' }));
export const paddingbottomXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '.125rem' }));
export const paddingbottomXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '.25rem' }));
export const paddingbottomSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '.5rem' }));
export const paddingbottomMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '1rem' }));
export const paddingbottomLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '2rem' }));
export const paddingbottomXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '4rem' }));
export const paddingbottomXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '8rem' }));
export const paddingbottomXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingBottom: '16rem' }));
export const paddingtopNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: 0 }));
export const paddingtop0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: 0 }));
export const paddingtopXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '.0625rem' }));
export const paddingtopXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '.125rem' }));
export const paddingtopXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '.25rem' }));
export const paddingtopSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '.5rem' }));
export const paddingtopMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '1rem' }));
export const paddingtopLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '2rem' }));
export const paddingtopXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '4rem' }));
export const paddingtopXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '8rem' }));
export const paddingtopXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '16rem' }));
export const paddingverticalNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: 0, paddingBottom: 0 }));
export const paddingvertical0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: 0, paddingBottom: 0 }));
export const paddingverticalXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '.0625rem', paddingBottom: '.0625rem' }));
export const paddingverticalXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '.125rem', paddingBottom: '.0625rem' }));
export const paddingverticalXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '.25rem', paddingBottom: '.25rem' }));
export const paddingverticalSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '.5rem', paddingBottom: '.5rem' }));
export const paddingverticalMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '1rem', paddingBottom: '1rem' }));
export const paddingverticalLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '2rem', paddingBottom: '2rem' }));
export const paddingverticalXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '4rem', paddingBottom: '4rem' }));
export const paddingverticalXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '8rem', paddingBottom: '8rem' }));
export const paddingverticalXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingTop: '16rem', paddingBottom: '16rem' }));
export const paddinghorizontalNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: 0, paddingRight: 0 }));
export const paddinghorizontal0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: 0, paddingRight: 0 }));
export const paddinghorizontalXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '.0625rem', paddingRight: '.0625rem' }));
export const paddinghorizontalXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '.125rem', paddingRight: '.125rem' }));
export const paddinghorizontalXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '.25rem', paddingRight: '.25rem' }));
export const paddinghorizontalSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '.5rem', paddingRight: '.5rem' }));
export const paddinghorizontalMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '1rem', paddingRight: '1rem' }));
export const paddinghorizontalLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '2rem', paddingRight: '2rem' }));
export const paddinghorizontalXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '4rem', paddingRight: '4rem' }));
export const paddinghorizontalXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '8rem', paddingRight: '8rem' }));
export const paddinghorizontalXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { paddingLeft: '16rem', paddingRight: '16rem' }));
export const marginNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: 0 }));
export const margin0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: 0 }));
export const marginXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '.0625rem' }));
export const marginXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '.125rem' }));
export const marginXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '.25rem' }));
export const marginSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '.5rem' }));
export const marginMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '1rem' }));
export const marginLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '2rem' }));
export const marginXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '4rem' }));
export const marginXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '8rem' }));
export const marginXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '16rem' }));
export const marginleftNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: 0 }));
export const marginleft0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: 0 }));
export const marginleftXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '.0625rem' }));
export const marginleftXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '.125rem' }));
export const marginleftXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '.25rem' }));
export const marginleftSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '.5rem' }));
export const marginleftMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '1rem' }));
export const marginleftLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '2rem' }));
export const marginleftXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '4rem' }));
export const marginleftXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '8rem' }));
export const marginleftXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '16rem' }));
export const marginrightNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: 0 }));
export const marginright0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: 0 }));
export const marginrightXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '.0625rem' }));
export const marginrightXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '.125rem' }));
export const marginrightXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '.25rem' }));
export const marginrightSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '.5rem' }));
export const marginrightMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '1rem' }));
export const marginrightLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '2rem' }));
export const marginrightXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '4rem' }));
export const marginrightXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '8rem' }));
export const marginrightXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '16rem' }));
export const marginbottomNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: 0 }));
export const marginbottom0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: 0 }));
export const marginbottomXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '.0625rem' }));
export const marginbottomXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '.125rem' }));
export const marginbottomXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '.25rem' }));
export const marginbottomSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '.5rem' }));
export const marginbottomMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '1rem' }));
export const marginbottomLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '2rem' }));
export const marginbottomXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '4rem' }));
export const marginbottomXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '8rem' }));
export const marginbottomXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '16rem' }));
export const margintopNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: 0 }));
export const margintop0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: 0 }));
export const margintopXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '.0625rem' }));
export const margintopXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '.125rem' }));
export const margintopXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '.25rem' }));
export const margintopSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '.5rem' }));
export const margintopMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '1rem' }));
export const margintopLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '2rem' }));
export const margintopXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '4rem' }));
export const margintopXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '8rem' }));
export const margintopXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '16rem' }));
export const marginverticalNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: 0, marginBottom: 0 }));
export const marginvertical0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: 0, marginBottom: 0 }));
export const marginverticalXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '.0625rem', marginBottom: '.0625rem' }));
export const marginverticalXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '.125rem', marginBottom: '.125rem' }));
export const marginverticalXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '.25rem', marginBottom: '.25rem' }));
export const marginverticalSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '.5rem', marginBottom: '.5rem' }));
export const marginverticalMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '1rem', marginBottom: '1rem' }));
export const marginverticalLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '2rem', marginBottom: '2rem' }));
export const marginverticalXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '4rem', marginBottom: '4rem' }));
export const marginverticalXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '8rem', marginBottom: '8rem' }));
export const marginverticalXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '16rem', marginBottom: '16rem' }));
export const marginhorizontalNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: 0, marginRight: 0 }));
export const marginhorizontal0L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: 0, marginRight: 0 }));
export const marginhorizontalXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '.0625rem', marginRight: '.0625rem' }));
export const marginhorizontalXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '.125rem', marginRight: '.125rem' }));
export const marginhorizontalXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '.25rem', marginRight: '.25rem' }));
export const marginhorizontalSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '.5rem', marginRight: '.5rem' }));
export const marginhorizontalMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '1rem', marginRight: '1rem' }));
export const marginhorizontalLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '2rem', marginRight: '2rem' }));
export const marginhorizontalXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '4rem', marginRight: '4rem' }));
export const marginhorizontalXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '8rem', marginRight: '8rem' }));
export const marginhorizontalXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '16rem', marginRight: '16rem' }));
export const marginNegXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '-0.0625rem' }));
export const marginNegXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '-0.125rem' }));
export const marginNegXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '-0.25rem' }));
export const marginNegSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '-0.5rem' }));
export const marginNegMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '-1rem' }));
export const marginNegLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '-2rem' }));
export const marginNegXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '-4rem' }));
export const marginNegXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '-8rem' }));
export const marginNegXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { margin: '-16rem' }));
export const marginleftNegXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '-0.0625rem' }));
export const marginleftNegXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '-0.125rem' }));
export const marginleftNegXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '-0.25rem' }));
export const marginleftNegSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '-0.5rem' }));
export const marginleftNegMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '-1rem' }));
export const marginleftNegLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '-2rem' }));
export const marginleftNegXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '-4rem' }));
export const marginleftNegXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '-8rem' }));
export const marginleftNegXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: '-16rem' }));
export const marginrightNegXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '-0.0625rem' }));
export const marginrightNegXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '-0.125rem' }));
export const marginrightNegXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '-0.25rem' }));
export const marginrightNegSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '-0.5rem' }));
export const marginrightNegMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '-1rem' }));
export const marginrightNegLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '-2rem' }));
export const marginrightNegXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '-4rem' }));
export const marginrightNegXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '-8rem' }));
export const marginrightNegXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: '-16rem' }));
export const marginbottomNegXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '-0.0625rem' }));
export const marginbottomNegXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '-0.125rem' }));
export const marginbottomNegXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '-0.25rem' }));
export const marginbottomNegSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '-0.5rem' }));
export const marginbottomNegMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '-1rem' }));
export const marginbottomNegLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '-2rem' }));
export const marginbottomNegXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '-4rem' }));
export const marginbottomNegXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '-8rem' }));
export const marginbottomNegXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginBottom: '-16rem' }));
export const margintopNegXxxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '-0.0625rem' }));
export const margintopNegXxsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '-0.125rem' }));
export const margintopNegXsmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '-0.25rem' }));
export const margintopNegSmallL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '-0.5rem' }));
export const margintopNegMediumL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '-1rem' }));
export const margintopNegLargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '-2rem' }));
export const margintopNegXlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '-4rem' }));
export const margintopNegXxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '-8rem' }));
export const margintopNegXxxlargeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginTop: '-16rem' }));
export const strikeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textDecoration: 'line-through' }));
export const strikethroughL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textDecoration: 'line-through' }));
export const linethroughL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textDecoration: 'line-through' }));
export const textdecorationLinethroughL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textDecoration: 'line-through' }));
export const underlineL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textDecoration: 'underline' }));
export const textdecorationUnderlineL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textDecoration: 'underline' }));
export const nounderlineL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textDecoration: 'none' }));
export const textdecorationNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textDecoration: 'none' }));
export const textalignLeftL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textAlign: 'left' }));
export const textalignRightL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textAlign: 'right' }));
export const textalignCenterL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textAlign: 'center' }));
export const textalignJustifyL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textAlign: 'justify' }));
export const texttransformCapitalizeL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textTransform: 'capitalize' }));
export const texttransformLowercaseL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textTransform: 'lowercase' }));
export const texttransformUppercaseL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textTransform: 'uppercase' }));
export const texttransformNoneL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textTransform: 'none' }));
export const f6L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontSize: '6rem' }), typestyle.media({ type: 'screen', minWidth: '60em' }, { fontSize: '.875rem' }));
export const fHeadlineL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontSize: '6rem' }));
export const f5L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontSize: '5rem' }), typestyle.media({ type: 'screen', minWidth: '60em' }, { fontSize: '1rem' }));
export const fSubheadlineL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontSize: '5rem' }));
export const f1L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontSize: '3rem' }));
export const f2L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontSize: '2.25rem' }));
export const f3L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontSize: '1.5rem' }));
export const f4L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontSize: '1.25rem' }));
export const f7L = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontSize: '.75rem' }));
export const measureL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '30em' }));
export const measureWideL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '34em' }));
export const measurewideL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '34em' }));
export const measureNarrowL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '20em' }));
export const measurenarrowL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { maxWidth: '20em' }));
export const indentL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { textIndent: '1em', marginTop: 0, marginBottom: 0 }));
export const smallCapsL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontVariant: 'small-caps' }));
export const smallcapsL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontVariant: 'small-caps' }));
export const fontvariantSmallcapsL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { fontVariant: 'small-caps' }));
export const truncateL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}));
export const centerL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: 'auto', marginLeft: 'auto' }));
export const marginhorizontalAutoL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: 'auto', marginLeft: 'auto' }));
export const marginrightAutoL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginRight: 'auto' }));
export const marginleftAutoL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { marginLeft: 'auto' }));
export const clipL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
}));
export const saysL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
}));
export const screenReaderTextL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, {
    position: 'absolute',
    clip: ['rect( 1px 1px 1px 1px )', 'rect( 1px, 1px, 1px, 1px )']
}));
export const whitespaceNormalL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { whiteSpace: 'normal' }));
export const whitespaceNowrapL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { whiteSpace: 'nowrap' }));
export const whitespacePreL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { whiteSpace: 'pre' }));
export const verticalalignBaselineL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { verticalAlign: 'baseline' }));
export const verticalalignMiddleL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { verticalAlign: 'middle' }));
export const verticalalignTopL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { verticalAlign: 'top' }));
export const verticalalignBottomL = typestyle.style(typestyle.media({ type: 'screen', minWidth: '60em' }, { verticalAlign: 'bottom' }));
