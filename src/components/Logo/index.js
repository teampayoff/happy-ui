/*
 * Logo
 * Render brand logo svgs
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Assets
import LogoBalloon from 'assets/svg/LogoBalloon'
import Wordmark from 'assets/svg/Logo'


const Logo = (props) => {

  const {
    className,
    type,
    ...other
  } = props

  const classes = classNames(
    "svg-pink",
    className
  )

  const Tag = type === "balloon" ? LogoBalloon : Wordmark

  return (
    <Tag className={classes} {...other} />
  )
}

Logo.propTypes = {
  type: PropTypes.oneOf(["balloon", "logo"])
}

Logo.defaultProps = {
  type: "logo"
}

export default Logo
