//
// Link
// Render common hyperlinks
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import { CommonLinks } from "utils"

// component
const Link = props => {

  const {
    blank,
    className,
    children,
    href,
    onClick,
    type,
    ...attributes
  } = props

  const classes = cx(
    (!href && !type) && "cursor-pointer",
    className
  )

  const link = CommonLinks[type]
  const target = blank ? "_blank" : "_self"

  return (
    <a
      className={classes}
      href={link ? link.href : href}
      rel={blank ? "noopener noreferrer" : "nofollow"}
      onClick={onClick}
      tabIndex="-1"
      target={href && target}
      {...attributes}>{children || link && link.title}</a>
  )
}

Link.propTypes = {
  blank: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Link
