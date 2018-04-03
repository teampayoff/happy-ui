/*
 * TextStyle
 * Common styles applied to text elements
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const TextStyle = (props) => {

  const {
    block,
    children,
    className,
    highlight,
    id,
    type,
    animate,
    ...other
  } = props

  const styles = {
    bold: !highlight ? "font-weight-bold" : "",
    disclaimer: "small text-muted",
    error: "text-danger",
    muted: "text-muted",
    success: "text-success"
  }

  const hlStyles = {
    full: !animate ? "hl" : "hl animatehl",
    underline: !animate ? "hl-ul" : "hl-ul animatehl-ul"
  }

  const Tag = block ? "p" : "span"

  const classes = classNames(
    styles[type],
    highlight && hlStyles[highlight],
    className
  )

  return (
    <Tag id={id} className={classes} {...other}>
      {children}
    </Tag>
  )
}

TextStyle.propTypes = {
  block: PropTypes.bool,
  highlight: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string
}

TextStyle.defaultProps = {
  type: "bold"
}

export default TextStyle
