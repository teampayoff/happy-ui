//
// Radio
// Custom radio button element
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Label from "components/Label"

// component
const Radio = (props) => {

  const {
    checked,
    children,
    className,
    disabled,
    group,
    hideLabel,
    id,
    invalid,
    labelProps,
    messages,
    required,
    valid,
    ...attributes
  } = props

  const classes = cx(
    "custom-control-input",
    invalid && "is-invalid",
    valid && "is-valid",
    className
  )

  return (
    <div className="custom-control custom-radio">
      <input
        id={id}
        type="radio"
        className={classes}
        checked={checked}
        disabled={disabled}
        name={group}
        required={required}
        {...attributes} />
      <Label className="custom-control-label" hidden={hideLabel} htmlFor={id} {...labelProps}>
        {children}
      </Label>
      {messages}
    </div>
  )
}

Radio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  group: PropTypes.string,
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  invalid: PropTypes.bool,
  labelProps: PropTypes.object,
  messages: PropTypes.element,
  required: PropTypes.bool,
  valid: PropTypes.bool
}

Radio.defaultProps = {
  id: "radio"
}

export default Radio
