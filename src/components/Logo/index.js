//
// Logo
// Render brand logo svgs
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// assets
import LogoBalloon from "assets/svg/LogoBalloon"
import Wordmark from "assets/svg/Logo"

// component
const Logo = props => {

  const {
    className,
    type,
    ...attributes
  } = props

  const classes = cx(
    "svg-pink",
    className
  )

  const Tag = type === "balloon" ? LogoBalloon : Wordmark

  return (
    <Tag className={classes} {...attributes} />
  )
}

Logo.propTypes = {
  type: PropTypes.oneOf(["balloon", "logo"])
}

Logo.defaultProps = {
  type: "logo"
}

export default Logo
