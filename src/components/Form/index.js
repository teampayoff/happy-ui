/*
 * Form
 * Form wrapper
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const Form = (props) => {

  const {
    children,
    className,
    id,
    inline,
    ...other
  } = props

  const classes = classNames(
    inline && "form-inline",
    className
  )

  return (
    <form id={id} className={classes} {...other}>
      {children}
    </form>
  )
}

Form.propTypes = {
  id: PropTypes.string,
  inline: PropTypes.bool
}

export default Form
