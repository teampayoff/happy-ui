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
    color,
    disabled,
    hideLabel,
    id,
    invalid,
    labelClass,
    labelProps,
    messages,
    required,
    size,
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
    <div className={cx('custom-control custom-checkbox', size && size, color && color)}>
      <input
        id={id}
        type="checkbox"
        className={classes}
        checked={checked}
        disabled={disabled}
        required={required}
        {...attributes}/>
      <Label className={cx("custom-control-label", labelClass, color)} hidden={hideLabel} htmlFor={id} {...labelProps}>
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
  labelClass: PropTypes.string,
  labelProps: PropTypes.object,
  messages: PropTypes.element,
  required: PropTypes.bool,
  valid: PropTypes.bool
}

Checkbox.defaultProps = {
  id: "checkbox"
}

export default Checkbox
