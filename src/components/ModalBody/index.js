//
// Modal Body
// The content area of a modal
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// component
const ModalBody = props => {

  const {
    align,
    children,
    className,
    ...attributes
  } = props

  const classes = cx(
    "modal-body",
    "text-" + align,
    props.className
  )

  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  )
}

ModalBody.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"])
}

ModalBody.defaultProps = {
  align: "center"
}

export default ModalBody
