//
// Checkbox
// Custom checkbox element
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Label from "components/Label"

// component
const Checkbox = props => {

  const {
    checked,
    children,
    className,
    disabled,
    hideLabel,
    labelProps,
    required,
    ...attributes
  } = props

  const classes = cx (
    "custom-control custom-checkbox",
    className
  )

  return (
    <div className={classes}>
      <input
        type="checkbox"
        className="custom-control-input"
        checked={checked}
        disabled={disabled}
        required={required}
        {...attributes}/>
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
  labelProps: PropTypes.object,
  required: PropTypes.bool
}

export default Checkbox
