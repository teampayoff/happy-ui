//
// Modal Header
// Heading and icon for modal
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Close from "components/Close"
import Icon from "@fortawesome/react-fontawesome"

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
        <div className="fa-7x">
          <span className="fa-layers fa-fw">
            <Icon
              className="fa-layer-1"
              color="white"
              icon="circle" />
            <Icon
              className="fa-layer-2"
              transform="shrink-10"
              icon={icon}
              {...iconProps} />
          </span>
        </div>
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
