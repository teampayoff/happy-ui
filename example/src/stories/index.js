import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import 'happy-ui/dist/css/bundle.min.css'
import '../index.css'

import {
  Button
} from 'happy-ui'

const CenterLayout = (storyFn) => (
  <div id="app-root" className="d-flex align-items-center justify-content-center h-100">
    { storyFn() }
  </div>
)

storiesOf('Button', module)
  .addDecorator(CenterLayout)
  .add('Primary', () => <Button>Continue</Button>)
  .add('Secondary', () => <Button outline>Cancel</Button>)
  .add('Link', () => <Button type="link">Learn More</Button>)
  .add('Primary Disabled', () => <Button disabled>Continue</Button>)
  .add('Secondary Disabled', () => <Button disabled outline>Cancel</Button>)

storiesOf('Typography', module)
  .addDecorator(CenterLayout)
  .add('Display Headings', () => (
    <span>
      <h1 className="display-1">Display One</h1>
      <h1 className="display-2">Display Two</h1>
      <h1 className="display-3">Display Three</h1>
      <h1 className="display-4">Display Four</h1>
    </span>
  ))
  .add('Headings', () => (
    <span>
      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <h4>Heading Four</h4>
      <h5>Heading Five</h5>
      <h6>Heading Six</h6>
    </span>
  ))
  .add('Highlights', () => (
    <span>
      <h1><span className="hl">Full Highlight</span></h1>
      <h1><span className="hl-ul">Underlined Highlight</span></h1>
    </span>
  ))
