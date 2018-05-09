//
// Button Group
// Group a series of buttons together on a single line
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// component
const ButtonGroup = (props) => {

  const {
    ariaLabel,
    children,
    className,
    size,
    type,
    ...attributes
  } = props

  const groupType = {
    group: "btn-group",
    toggle: "btn-group-toggle",
    toolbar: "btn-toolbar"
  }

  const classes = cx(
    groupType[type],
    size && "btn-group-" + size,
    props.className
  )

  return (
    <div
      className={classes}
      role={type == "toolbar" ? "toolbar" : "group"}
      aria-label={ariaLabel}
      data-toggle={type == "toggle" && "buttons"}
      {...attributes}>
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  type: PropTypes.oneOf(["group", "toggle", "toolbar"]),
}

ButtonGroup.defaultProps = {
  type: "group"
}

export default ButtonGroup
