//
// FormText
// Text element to display help text or error messages
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// component
const FormText = props => {

  const {
    children,
    className,
    invalid,
    ...attributes
  } = props

  const classes = cx(
    invalid ? "invalid-feedback" : "form-text",
    className
  )

  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  )
}

FormText.propTypes = {
  invalid: PropTypes.bool
}

export default FormText
