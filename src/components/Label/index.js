/*
 * Label
 * Display a label for a form element
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const Label = (props) => {

  const {
    children,
    className,
    hidden,
    htmlFor,
    id,
    optional,
    ...other
  } = props

  const classes = classNames(
    hidden && "sr-only",
    className
  )

  return (
    <label
      htmlFor={htmlFor}
      id={id}
      className={classes}
      {...other}>
      {children} {optional && " — Optional"}
    </label>
  )
}

Label.propTypes = {
  hidden: PropTypes.bool,
  htmlFor: PropTypes.string,
  optional: PropTypes.bool
}

Label.defaultProps = {
  children: "Label"
}

export default Label
