//
// TextStyle
// Common styles applied to text elements
//

import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

// component
const TextStyle = props => {

  const {
    block,
    children,
    className,
    highlight,
    type,
    animate,
    ...attributes
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

  const classes = cx(
    styles[type],
    highlight && hlStyles[highlight],
    className
  )

  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  )
}

TextStyle.propTypes = {
  block: PropTypes.bool,
  highlight: PropTypes.string,
  type: PropTypes.string
}

TextStyle.defaultProps = {
  type: "bold"
}

export default TextStyle
