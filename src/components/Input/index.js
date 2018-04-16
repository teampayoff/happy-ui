/*
 * Input
 * Create different types of inputs with or without masking
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import classNames from 'classnames'

import Label from 'components/Label'

// Addons
import emailMask from 'text-mask-addons/dist/emailMask'
import numberMask from 'text-mask-addons/dist/createNumberMask'


export default class Input extends Component {

  // trigger focus on the input field
  focusInput = () => {
    this.input.focus()
  }

  render() {
    const {
      children,
      className,
      disabled,
      hideLabel,
      id,
      label,
      labelAction,
      labelProps,
      maskProps,
      placeholder,
      required,
      size,
      type,
      ...other
    } = this.props

    const classes = classNames(
      "form-control",
      size && "form-control-" + size
    )

    // params for masked inputs
    const inputMasks = {
      currency: {
        guide: false,
        mask: numberMask({
          allowDecimal: true,
          integerLimit: 7
        }),
        placeholder: "$0.00"
      },
      email: {
        guide: false,
        mask: emailMask,
        maxLength: 100,
        placeholder: "name@website.com"
      },
      tel: {
        guide: true,
        mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        placeholder: "(___) ___-____"
      },
      ssn: {
        guide: true,
        mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        placeholder: "___-__-____"
      },
      zip: {
        guide: true,
        mask: [/\d/, /\d/, /\d/, /\d/, /\d/]
      }
    }

    // returns a mask object or undefined
    const mask = inputMasks[type] || maskProps

    const inputLabel = (
      <div className="d-flex justify-content-between">
        <Label
          htmlFor={id}
          hidden={hideLabel}
          optional={!required}
          {...labelProps}>
            {label}
        </Label>
        {labelAction}
      </div>
    )

    if(mask) {
      return (
        <div className={className}>
          {inputLabel}
          <MaskedInput
            id={id}
            name={id}
            className={classes}
            disabled={disabled}
            guide={mask.guide}
            mask={mask.mask}
            maxLength={mask.maxLength}
            placeholder={placeholder || mask.placeholder}
            required={required}
            ref={(input) => {this.input = input}}
            {...other} />
        </div>
      )
    } else {
      return (
        <div className={className}>
          {inputLabel}
          <input
            id={id}
            name={id}
            type={type}
            className={classes}
            disabled={disabled}
            maxLength={70}
            placeholder={placeholder}
            required={required}
            ref={(input) => {this.input = input}}
            {...other} />
        </div>
      )
    }
  }
}

Input.propTypes = {
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  labelAction: PropTypes.element,
  labelProps: PropTypes.object,
  maskProps: PropTypes.object,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  type: PropTypes.string
}

Input.defaultProps = {
  type: "text"
}
