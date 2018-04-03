/*
 * Button Group
 * Group a series of buttons together on a single line
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const ButtonGroup = (props) => {

  const {
    ariaLabel,
    children,
    className,
    id,
    size,
    type,
    ...other
  } = props

  const groupType = {
    group: "btn-group",
    toggle: "btn-group-toggle",
    toolbar: "btn-toolbar"
  }

  const classes = classNames(
    groupType[type],
    size && "btn-group-" + size,
    props.className
  )

  return (
    <div
      id={id}
      className={classes}
      role={type == "toolbar" ? "toolbar" : "group"}
      aria-label={ariaLabel}
      data-toggle={type == "toggle" && "buttons"}
      {...other}>
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  ariaLabel: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  type: PropTypes.oneOf(["group", "toggle", "toolbar"]),
}

ButtonGroup.defaultProps = {
  type: "group"
}

export default ButtonGroup
