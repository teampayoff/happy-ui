//
// Select
// Custom select dropdown
//

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Label from "components/Label"

// component
const Select = props => {

  const {
    children,
    className,
    defaultOption,
    disabled,
    hideLabel,
    id,
    invalid,
    label,
    labelAction,
    labelProps,
    options,
    required,
    size,
    valid,
    ...attributes
  } = props

  const classes = cx(
    "form-control custom-select",
    size && "form-control-" + size,
    invalid && "is-invalid",
    valid && "is-valid",
    className
  )

  const inputLabel = (
    <div className="d-flex justify-content-between">
      <Label
        htmlFor={id}
        hidden={hideLabel}
        optional={!required}
        {...labelProps}>
          {label}
      </Label>
      {labelAction}
    </div>
  )

  /* TODO: Add ability for select options to accept array without key, value pairs */

  return (
    <Fragment>
      {inputLabel}
      <select
        id={id}
        name={id}
        className={classes}
        disabled={disabled}
        required={required}
        {...attributes} >
        <option className="d-none">
          {defaultOption}
        </option>
        {options.map((option, i) =>
          <option
            key={i}
            value={option.value}>
            {option.label}
          </option>
        )}
      </select>
    </Fragment>
  )
}

Select.propTypes = {
  defaultOption: PropTypes.string,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  labelAction: PropTypes.element,
  labelProps: PropTypes.object,
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  required: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  valid: PropTypes.bool
}

Select.defaultProps = {
  defaultOption: "Select One",
  id: "select"
}

export default Select
