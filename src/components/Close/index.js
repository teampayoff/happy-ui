//
// Close
// Used in alerts and modals
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Icon from "@fortawesome/react-fontawesome"

// component
const Close = props => {

  const {
    className,
    inverted,
    onClick,
    ...attributes
  } = props

  const classes = cx(
    "close",
    inverted && "close-inverted",
    className
  )

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-label="Close"
      {...attributes}>
      <span aria-hidden="true">
        <Icon icon={["fal", "times"]} />
      </span>
    </button>
  )
}

Close.propTypes = {
  inverted: PropTypes.bool,
  onClick: PropTypes.func
}

export default Close
