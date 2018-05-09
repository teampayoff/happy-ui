//
// Row
// Bootstrap row
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// component
const Row = props => {

  const {
    children,
    className,
    formRow,
    noGutters,
    ...attributes
  } = props

  const classes = cx(
    formRow ? "form-row" : "row",
    noGutters && "no-gutters",
    className
  )

  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  )
}

Row.propTypes = {
  formRow: PropTypes.bool,
  noGutters: PropTypes.bool,
}

export default Row
