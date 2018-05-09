//
// Form
// Form tag with props
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// component
const Form = props => {

  const {
    children,
    className,
    inline,
    ...attributes
  } = props

  const classes = cx(
    inline && "form-inline",
    className
  )

  return (
    <form className={classes} {...attributes}>
      {children}
    </form>
  )
}

Form.propTypes = {
  inline: PropTypes.bool
}

export default Form
