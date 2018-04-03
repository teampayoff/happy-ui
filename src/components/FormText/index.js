/*
 * FormText
 * Text element to display help text or error messages
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const FormText = (props) => {

  const {
    children,
    className,
    id,
    invalid,
    ...other
  } = props

  const classes = classNames(
    invalid ? "invalid-feedback" : "form-text",
    className
  )

  return (
    <div id={id} className={classes} {...other}>
      {children}
    </div>
  )
}

FormText.propTypes = {
  id: PropTypes.string,
  invalid: PropTypes.bool
}

export default FormText
