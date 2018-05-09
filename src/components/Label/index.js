//
// Label
// Display a label for a form element
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// component
const Label = props => {

  const {
    children,
    className,
    hidden,
    htmlFor,
    optional,
    ...attributes
  } = props

  const classes = cx(
    hidden && "sr-only",
    className
  )

  return (
    <label
      htmlFor={htmlFor}
      className={classes}
      {...attributes}>
      {children} {optional && " — Optional"}
    </label>
  )
}

Label.propTypes = {
  hidden: PropTypes.bool,
  htmlFor: PropTypes.string,
  optional: PropTypes.bool
}

export default Label
