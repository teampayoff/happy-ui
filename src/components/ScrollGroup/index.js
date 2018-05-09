//
// ScrollGroup
// Wrapper that allows content to scroll within it
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// component
const ScrollGroup = props => {

  const {
    axis,
    children,
    className,
    ...attributes
  } = props

  const classes = cx(
    "component--scrollgroup text-nowrap",
    "scroll-" + axis,
    className
  )

  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  )
}

ScrollGroup.propTypes = {
  axis: PropTypes.oneOf(["x", "y"])
}

ScrollGroup.defaultProps = {
  axis: "x"
}

export default ScrollGroup
