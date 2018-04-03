/*
 * Modal Body
 * The content area of a modal
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const ModalBody = (props) => {

  const {
    align,
    children,
    className,
    id,
    ...other
  } = props

  const classes = classNames(
    "modal-body",
    "text-" + align,
    props.className
  )

  return (
    <div id={id} className={classes} {...other}>
      {children}
    </div>
  )
}

ModalBody.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  id: PropTypes.string
}

ModalBody.defaultProps = {
  align: "center"
}

export default ModalBody
