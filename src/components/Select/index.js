/*
 * Select
 * Custom select dropdown
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Label from 'components/Label'


const Select = (props) => {

  const {
    children,
    className,
    defaultOption,
    disabled,
    hideLabel,
    id,
    label,
    labelAction,
    labelProps,
    options,
    required,
    size,
    ...other
  } = props

  const classes = classNames(
    "form-control custom-select",
    size && "form-control-" + size
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
    <div className={className}>
      {inputLabel}
      <select
        id={id}
        name={id}
        className={classes}
        disabled={disabled}
        required={required}
        {...other} >
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
    </div>
  )
}

Select.propTypes = {
  defaultOption: PropTypes.string,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  labelAction: PropTypes.element,
  labelProps: PropTypes.object,
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  required: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"])
}

Select.defaultProps = {
  defaultOption: "Select One"
}

export default Select
