/*
 * Container
 * Fixed or fluid container
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const Container = (props) => {

  const {
    children,
    className,
    fluid,
    id,
    ...other
  } = props

  const classes = classNames(
    fluid ? "container-fluid" : "container",
    className
  )

  return (
    <div id={id} className={classes} {...other}>
      {children}
    </div>
  )
}

Container.propTypes = {
  fluid: PropTypes.bool,
  id: PropTypes.string,
}

export default Container
