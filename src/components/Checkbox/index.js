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
    id,
    invalid,
    labelProps,
    messages,
    required,
    valid,
    ...attributes
  } = props

  const classes = cx (
    "custom-control-input",
    invalid && "is-invalid",
    valid && "is-valid",
    className
  )

  return (
    <div className="custom-control custom-checkbox">
      <input
        id={id}
        type="checkbox"
        className={classes}
        checked={checked}
        disabled={disabled}
        required={required}
        {...attributes}/>
      <Label className="custom-control-label" hidden={hideLabel} htmlFor={id} {...labelProps}>
        {children}
      </Label>
      {messages}
    </div>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  invalid: PropTypes.bool,
  labelProps: PropTypes.object,
  messages: PropTypes.element,
  required: PropTypes.bool,
  valid: PropTypes.bool
}

Checkbox.defaultProps = {
  id: "checkbox"
}

export default Checkbox
