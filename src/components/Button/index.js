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
    disabled,
    hasIcon,
    iconProps,
    iconRight,
    id,
    isLoading,
    onClick,
    outline,
    preventDefault,
    size,
    tag,
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

  // Click handler
  function handleOnClick(e) {
    if(disabled) {
      e.preventDefault()
      return
    } else if(preventDefault) {
      e.preventDefault()
      onClick(e)
    } else {
      onClick(e)
    }
  }

  // set tag to anchor if there's an href
  const Tag = other.href ? "a" : "button"

  return (
    <Tag
      id={id}
      className={classes}
      disabled={disabled || isLoading}
      onClick={(e) => handleOnClick(e)}
      aria-pressed={active}
      {...other}>
      {isLoading ?
        <Icon
          family="fas"
          icon="spinner-third"
          size="lg"
          spin />
      :
        <span>
          {hasIcon && !iconRight && btnIcon}
          {children}
          {hasIcon && iconRight && btnIcon}
        </span>
      }
    </Tag>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  hasIcon: PropTypes.bool,
  iconProps: PropTypes.object,
  id: PropTypes.string,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["sm", "lg"]),
  tag: PropTypes.oneOf(["a", "button"]),
  type: PropTypes.string
}

Button.defaultProps = {
  children: "Continue",
  tag: "button",
  type: "primary"
}

export default Button
