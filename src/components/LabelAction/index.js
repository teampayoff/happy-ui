//
// LabelAction
// Link aligned with label in a FormGroup
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Label from "components/Label"
import Link from "components/Link"

// component
const LabelAction = props => {

  const {
    children,
    className,
    onClick,
    ...attributes
  } = props

  const classes = cx(
    "label-action",
    className
  )

  return (
    <Label
      className={classes}
      {...attributes}>
      <Link onClick={onClick}>
        {children}
      </Link>
    </Label>
  )
}

LabelAction.propTypes = {
  onClick: PropTypes.func
}

export default LabelAction
