/*
 * Icon
 * Used to render FontAwesome Icons
 *
 * Color can be one of type primary, secondary, success, danger, warning, info, light, dark, muted or white
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const Icon = (props) => {

  const {
    color,
    className,
    family,
    fw,
    icon,
    id,
    inverse,
    size,
    spin,
    ...other
  } = props

  const classes = classNames(
    family,
    "fa-" + icon,
    size && "fa-" + size,
    color && "text-" + color,
    fw && "fa-fw",
    inverse && "fa-inverse",
    spin && "fa-spin",
    className
  )

  return (
    <i id={id} className={classes} {...other}></i>
  )
}

Icon.propTypes = {
  color: PropTypes.string,
  family: PropTypes.oneOf(["fab", "fal", "fas"]),
  fw: PropTypes.bool,
  icon: PropTypes.string,
  size: PropTypes.string,
  status: PropTypes.string,
  spin: PropTypes.bool
}

Icon.defaultProps = {
  family: "fal",
  icon: "lock",
}

export default Icon
