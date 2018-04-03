/*
 * Checkbox
 * Custom checkbox element
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Label from 'components/Label'


const Checkbox = (props) => {

  const {
    checked,
    children,
    className,
    disabled,
    hideLabel,
    id,
    labelProps,
    required,
    ...other
  } = props

  const classes = classNames (
    "custom-control custom-checkbox",
    className
  )

  return (
    <div className={classes}>
      <input
        id={id}
        type="checkbox"
        className="custom-control-input"
        checked={checked}
        disabled={disabled}
        required={required}
        {...other}/>
      <Label className="custom-control-label" hidden={hideLabel} htmlFor={id} {...labelProps}>
        {children}
      </Label>
    </div>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  labelProps: PropTypes.object,
  required: PropTypes.bool
}

export default Checkbox
