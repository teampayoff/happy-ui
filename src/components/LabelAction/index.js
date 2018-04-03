/*
 * LabelAction
 * Link aligned with label in a FormGroup
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Label from 'components/Label'
import Link from 'components/Link'


const LabelAction = (props) => {

  const {
    children,
    className,
    id,
    onClick,
    ...other
  } = props

  const classes = classNames(
    "label-action",
    className
  )

  return (
    <Label
      id={id}
      className={classes}
      {...other}>
      <Link onClick={onClick}>
        {children}
      </Link>
    </Label>
  )
}

LabelAction.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func
}

export default LabelAction
