/*
 * Close
 * Button to close alerts and modals
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from 'components/Icon'


const Close = (props) => {

  const {
    className,
    id,
    inverted,
    onClick,
    ...other
  } = props

  const classes = classNames(
    "close",
    inverted && "close-inverted",
    className
  )

  return (
    <button
      id={id}
      type="button"
      className={classes}
      onClick={onClick}
      aria-label="Close"
      {...other}>
      <span aria-hidden="true">
        <Icon icon="times" />
      </span>
    </button>
  )
}

Close.propTypes = {
  id: PropTypes.string,
  inverted: PropTypes.bool,
  onClick: PropTypes.func
}

export default Close
