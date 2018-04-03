/*
 * Button
 * Create a button with many styles
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from 'components/Icon'


const Button = (props) => {

  const {
    active,
    block,
    children,
    className,
    hasIcon,
    iconProps,
    iconRight,
    id,
    outline,
    size,
    type,
    ...other
  } = props

  const classes = classNames(
    "btn btn-xs-block",
    "btn-" + (outline ? "outline-" : "") + type,
    size && ("btn-" + size), {
      "active": active,
      "btn-block": block
    },
    className
  )

  const btnIcon = (
    <Icon
      className={"m" + (iconRight ? "l" : "r") + "-1"}
      size={size === "lg" ? "2x" : "lg"}
      fw
      {...iconProps} />
  )

  return (
    <button
      id={id}
      className={classes}
      aria-pressed={active}
      {...other}>
      {hasIcon && !iconRight && btnIcon}
      {children}
      {hasIcon && iconRight && btnIcon}
    </button>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  hasIcon: PropTypes.bool,
  iconProps: PropTypes.object,
  id: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  type: PropTypes.string
}

Button.defaultProps = {
  children: "Continue",
  type: "primary"
}

export default Button
