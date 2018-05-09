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
    labelProps,
    required,
    ...attributes
  } = props

  const classes = cx(
    "custom-control custom-radio",
    className
  )

  return (
    <div className={classes}>
      <input
        id={id}
        type="radio"
        className="custom-control-input"
        checked={checked}
        disabled={disabled}
        name={group}
        required={required}
        {...attributes} />
      <Label className="custom-control-label" hidden={hideLabel} htmlFor={id} {...labelProps}>
        {children}
      </Label>
    </div>
  )
}

Radio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  group: PropTypes.string,
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  labelProps: PropTypes.object,
  required: PropTypes.bool
}

export default Radio
