//
// Container
// Wrapper component for content
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// component
const Container = props => {

  const {
    children,
    className,
    fluid,
    ...attributes
  } = props

  const classes = cx(
    fluid ? "container-fluid" : "container",
    className
  )

  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  )
}

Container.propTypes = {
  fluid: PropTypes.bool
}

export default Container
