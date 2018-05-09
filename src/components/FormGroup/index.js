//
// FormGroup
// Wrapper for form elements
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Label from "components/Label"

// component
const FormGroup = props => {

  const {
    check,
    children,
    className,
    id,
    label,
    labelProps,
    row,
    stacked,
    ...attributes
  } = props

  const classes = cx(
    "form-group", {
      "mt-4": check,
      "row": row,
      "custom-controls-stacked": stacked
    },
    className
  )

  return (
    <div id={id} className={classes} {...attributes}>
      {label && <Label htmlFor={id} {...labelProps}>{label}</Label>}
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

FormGroup.defaultProps = {
  id: "group"
}

export default FormGroup
