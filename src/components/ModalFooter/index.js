//
// Modal Footer
// Button actions inside a modal
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// component
const ModalFooter = props => {

  const {
    children,
    className,
    stacked,
    ...attributes
  } = props

  const classes = cx(
    "modal-footer pt-0",
    stacked && "flex-column",
    className
  )

  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  )
}

ModalFooter.propTypes = {
  stacked: PropTypes.bool,
}

ModalFooter.defaultProps = {
  stacked: true
}

export default ModalFooter
