/*
 * Modal Header
 * Displays heading text and a close button inside a modal
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Close from 'components/Close'
import Icon from 'components/Icon'


const ModalHeader = (props) => {

  const {
    children,
    className,
    hasImage,
    hideClose,
    hideIcon,
    icon,
    iconProps,
    id,
    toggle,
    ...other
  } = props

  const classes = classNames(
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
    <div id={id} className={classes} {...other}>
      {!hideClose && <Close onClick={toggle} inverted={hasImage} />}
      {hasImage ? children : renderHeader()}
    </div>
  )
}

ModalHeader.propTypes = {
  hideClose: PropTypes.bool,
  icon: PropTypes.string,
  iconProps: PropTypes.object,
  id: PropTypes.string,
  toggle: PropTypes.func
}

export default ModalHeader
