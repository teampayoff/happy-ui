/*
 * Row
 * Bootstrap row
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const Row = (props) => {

  const {
    children,
    className,
    formRow,
    id,
    noGutters,
    ...other
  } = props

  const classes = classNames(
    formRow ? "form-row" : "row",
    noGutters && "no-gutters",
    className
  )

  return (
    <div id={id} className={classes} {...other}>
      {children}
    </div>
  )
}

Row.propTypes = {
  formRow: PropTypes.bool,
  id: PropTypes.string,
  noGutters: PropTypes.bool,
}

export default Row
