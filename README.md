# Introduction
Simple react component that transforms plain svg to usable icon.

### TL;DR
```javascript
import React from 'react';
import ReactShowSvg from 'react-show-svg';
import SvgIcon from 'path/to/icon.svg';

class App extends React.Component {
  render() {
    return (
      <ReactShowSvg
        size="30px"
        fill="#000000"
        icon={SvgIcon}
      />
    );
  }
}
```

### NPM
```bash
$ npm install react-show-svg --save
```

### Yarn
```bash
$ yarn add react-show-svg
```

### Usage
Import raw svg file with [svg-inline-loader](https://github.com/webpack-contrib/svg-inline-loader) and pass it
as `icon` property.

You can also pass `width & height` or `size` properties ( pass size if you want width & height to be equal ).

**IMPORTANT** - Update your webpack config file:

```javascript
const config = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader'
          }
        ]
      }
    ]
  }
}
```

### API
* icon: `string`
* width: `string`
* height: `string`
* size: `string` ( width & height )
* fill: `string`
* className: `string`
* onClick: `function`
* ref: `function`
* id: `string`

### Dependencies
* [svg-inline-loader](https://github.com/webpack-contrib/svg-inline-loader)
* [svg-to-jsx](https://github.com/reactor-studio/svg-to-jsx)