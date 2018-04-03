/*
 * Badge
 * Display feedback in various styles
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const Badge = (props) => {

  const {
    children,
    className,
    id,
    pill,
    type,
    ...other
  } = props

  const classes = classNames(
    "badge",
    "badge-" + type,
    pill && "badge-pill",
    className
  )

  return (
    <span id={id} className={classes} {...other}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  id: PropTypes.string,
  pill: PropTypes.bool,
  type: PropTypes.oneOf(['success', 'danger', 'warning', 'info'])
}

Badge.defaultProps = {
  pill: true,
  type: "success"
}

export default Badge
