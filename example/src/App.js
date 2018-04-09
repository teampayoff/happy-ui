import React, { Component } from 'react'

import { Button } from 'happy-ui'

export default class App extends Component {
  render () {
    return (
      <div id="app-root" className="d-flex align-items-center justify-content-center">
        <Button disabled>Continue</Button>
      </div>
    )
  }
}
