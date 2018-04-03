/*
 * ScrollGroup
 * Wrapper that allows content to scroll within it
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const ScrollGroup = (props) => {

  const {
    axis,
    children,
    className,
    id,
    ...other
  } = props

  const classes = classNames(
    "component--scrollgroup text-nowrap",
    "scroll-" + axis,
    className
  )

  return (
    <div id={id} className={classes} {...other}>
      {children}
    </div>
  )
}

ScrollGroup.propTypes = {
  axis: PropTypes.oneOf(["x", "y"]),
  id: PropTypes.string
}

ScrollGroup.defaultProps = {
  axis: "x"
}

export default ScrollGroup
