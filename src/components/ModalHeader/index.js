//
// Modal Header
// Heading and icon for modal
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Close from "components/Close"
import Icon from "components/Icon"

// component
const ModalHeader = props => {

  const {
    children,
    className,
    hasImage,
    hideClose,
    hideIcon,
    icon,
    iconProps,
    toggle,
    ...attributes
  } = props

  const classes = cx(
    "modal-header flex-column",
    hasImage ? "modal-image-header p-0" : "pb-0",
    className
  )

  function renderHeader() {
    return (
      <div className="w-100 text-center">
        {!hideIcon &&
        <span className="fa-stack fa-4x mb-4">
          <Icon
            className="fa-stack-2x"
            family="fas"
            icon="circle" />
          <Icon
            className="fa-stack-1x"
            family="fas"
            icon={icon}
            {...iconProps} />
          <Icon
            className="fa-stack-1x"
            icon={icon}
            {...iconProps} />
        </span>
        }

        <h3 className="modal-title">
          {children}
        </h3>
      </div>
    )
  }

  return (
    <div className={classes} {...attributes}>
      {!hideClose && <Close onClick={toggle} inverted={hasImage} />}
      {hasImage ? children : renderHeader()}
    </div>
  )
}

ModalHeader.propTypes = {
  hideClose: PropTypes.bool,
  icon: PropTypes.string,
  iconProps: PropTypes.object,
  toggle: PropTypes.func
}

export default ModalHeader
