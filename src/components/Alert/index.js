/*
 * Alert
 * Display feedback in various styles
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Close from 'components/Close'


const Alert = (props) => {

  const {
    align,
    children,
    className,
    dismissible,
    id,
    toggle,
    type,
    ...other
  } = props

  const classes = classNames(
    "alert",
    "alert-" + type,
    dismissible ? "alert-dismissible text-left" : "text-" + align,
    className
  )

  return (
    <div id={id} className={classes} role="alert" {...other}>
      {children}
      {dismissible && <Close onClick={toggle} />}
    </div>
  )
}

Alert.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  dismissible: PropTypes.bool,
  id: PropTypes.string,
  toggle: PropTypes.func,
  type: PropTypes.oneOf(['success', 'danger', 'warning', 'info'])
}

Alert.defaultProps = {
  align: "center",
  dismissible: false,
  type: "success"
}

export default Alert
