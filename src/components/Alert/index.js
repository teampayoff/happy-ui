//
// Alert
// Gives user feedback
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Close from "components/Close"

// component
const Alert = props => {

  const {
    align,
    children,
    className,
    dismissible,
    toggle,
    type,
    ...attributes
  } = props

  const classes = cx(
    "alert",
    "alert-" + type,
    dismissible ? "alert-dismissible text-left" : "text-" + align,
    className
  )

  return (
    <div className={classes} role="alert" {...attributes}>
      {children}
      {dismissible && <Close onClick={toggle} />}
    </div>
  )
}

Alert.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  dismissible: PropTypes.bool,
  toggle: PropTypes.func,
  type: PropTypes.oneOf(["success", "danger", "warning", "info"])
}

Alert.defaultProps = {
  align: "center",
  dismissible: false,
  type: "success"
}

export default Alert
