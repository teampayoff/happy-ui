/*
 * FormGroup
 * Wrapper for form elements
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Label from 'components/Label'


const FormGroup = (props) => {

  const {
    check,
    children,
    className,
    id,
    label,
    labelProps,
    row,
    stacked,
    ...other
  } = props

  const classes = classNames(
    "form-group", {
      "mt-4": check,
      "row": row,
      "custom-controls-stacked": stacked
    },
    className
  )

  return (
    <div className={classes} id={id} {...other}>
      {label && <Label {...labelProps}>{label}</Label>}
      {children}
    </div>
  )
}

FormGroup.propTypes = {
  check: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  labelProps: PropTypes.object,
  row: PropTypes.bool,
  stacked: PropTypes.bool
}

export default FormGroup
