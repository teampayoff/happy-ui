/*
 * Modal Footer
 * Button actions inside a modal
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const ModalFooter = (props) => {

  const {
    children,
    className,
    id,
    stacked,
    ...other
  } = props

  const classes = classNames(
    "modal-footer pt-0",
    stacked && "flex-column",
    className
  )

  return (
    <div id={id} className={classes} {...other}>
      {children}
    </div>
  )
}

ModalFooter.propTypes = {
  id: PropTypes.string,
  stacked: PropTypes.bool,
}

ModalFooter.defaultProps = {
  stacked: true
}

export default ModalFooter
