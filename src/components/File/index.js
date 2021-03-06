//
// File
// Custom file upload element
//

import React, { Component } from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import Button from "components/Button"
import Link from "components/Link"

// component
class File extends Component {

  openFileBrowser = (e, callback) => {
    e.preventDefault()
    this.input.click()
    callback && callback()
  }

  render() {
    const {
      callback,
      children,
      className,
      id,
      tag,
      tagProps,
      ...attributes
    } = this.props

    const tags = {
      button: {
        classes: "btn-xs-block",
        component: Button,
        defaultProps: {
          hasIcon: true,
          iconProps: {
            icon: "plus-circle"
          },
          outline: true,
          size: "sm"
        }
      },
      link: {
        component: Link
      }
    }

    const Tag = tags[tag].component

    return (
      <span>
        <input
          id={id}
          name={id}
          type="file"
          className="d-none"
          ref={(input) => {this.input = input}}
          multiple
          {...attributes} />
        <Tag
          className={cx(tags[tag].classes, className)}
          onClick={(e) => {this.openFileBrowser(e, callback)}}
          {...tags[tag].defaultProps}
          {...attributes}>
          {children}
        </Tag>
      </span>
    )
  }
}

File.propTypes = {
  id: PropTypes.string,
  tag: PropTypes.oneOf(["button", "link"]),
  tagProps: PropTypes.object
}

File.defaultProps = {
  id: "upload",
  tag: "button"
}

export default File
