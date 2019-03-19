# happy-ui

> Shared UI components for building Happy Money products.

## Installing as a dependency

```bash
npm install --save git+ssh://git@stash.int.payoff.com:7999/fe/happy-ui.git
```

## Building project for production
```bash
npm run build
```

## Running Storybook for testing
```bash
cd example && npm i && npm run storybook
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from 'happy-ui'

class Example extends Component {
  render () {
    return (
      <Button />
    )
  }
}
```

## License

MIT © [Happy Money](https://www.happymoney.com/)
