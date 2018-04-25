/*
 * Link
 * Render common hyperlinks
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Core
import { CommonLinks } from 'utils'


const Link = (props) => {

  const {
    blank,
    className,
    children,
    href,
    id,
    onClick,
    type,
    ...other
  } = props

  const classes = classNames(
    (!href && !type) && "cursor-pointer",
    className
  )

  const link = CommonLinks[type],
        target = blank ? "_blank" : "_self"

  return (
    <a
      id={id}
      className={classes}
      href={link ? link.href : href}
      rel={blank ? "noopener noreferrer" : "nofollow"}
      onClick={onClick}
      tabIndex="-1"
      target={href && target}
      {...other}>
      {children || link && link.title}
    </a>
  )
}

Link.propTypes = {
  blank: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Link
