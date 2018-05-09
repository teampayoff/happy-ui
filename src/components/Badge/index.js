//
// Badge
// Display a status or notification
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// component
const Badge = props => {

  const {
    children,
    className,
    pill,
    type,
    ...attributes
  } = props

  const classes = cx(
    "badge",
    "badge-" + type,
    pill && "badge-pill",
    className
  )

  return (
    <span className={classes} {...attributes}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  pill: PropTypes.bool,
  type: PropTypes.oneOf(["success", "danger", "warning", "info"])
}

Badge.defaultProps = {
  pill: true,
  type: "success"
}

export default Badge
