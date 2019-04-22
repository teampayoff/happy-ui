//
// Input
// Create different types of inputs with or without masking
//

import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import MaskedInput from "react-text-mask"
import cx from "classnames"
import Label from "components/Label"

// addons
import emailMask from "text-mask-addons/dist/emailMask"
import numberMask from "text-mask-addons/dist/createNumberMask"
import { Number } from "react-credit-card-primitives"

// component
class Input extends Component {

  // trigger focus on the input field
  focusInput = () => {
    this.input.focus()
  }

  constructor() {
    super();
    this.inputprefix = React.createRef();
  }

  componentDidMount() {
    if (this.props.prefix && this.inputprefix ) {
      this.prefixWidth = this.inputprefix.current.clientWidth + 13;
      this.inputPadding = this.prefixWidth +'px';
      this.input.inputElement.style.paddingLeft = this.inputPadding;
    }
    if (this.props.type === 'currency') {
        console.log('top value before adding 15 is: ',this.input.inputElement.offsetTop);
        this.topValue = this.input.inputElement.offsetTop + 15;
        console.log('top value after adding 15 is: ',this.topValue);
        this.inputprefix.current.style.top = this.topValue + 'px';
        console.log('top value is ',this.topValue);
    }
  }

  render() {
    const {
      children,
      className,
      cardDefault,
      disabled,
      hideLabel,
      id,
      invalid,
      label,
      labelAction,
      labelProps,
      maskProps,
      onCardNumberChange,
      placeholder,
      prefix,
      required,
      size,
      type,
      valid,
      ...attributes
    } = this.props

    const classes = cx(
      "form-control",
      size && "form-control-" + size,
      invalid && "is-invalid",
      valid && "is-valid",
      className,
      (type === 'currency') ? 'default-padding' : ''
    )

    // params for masked inputs
    const inputMasks = {
      currency: {
        guide: false,
        mask: numberMask({
          prefix: '',
          allowDecimal: true,
          integerLimit: 8
        }),
        placeholder: "0.00"
      },
      email: {
        guide: false,
        mask: false,
        maxLength: 100,
        placeholder: "name@website.com"
      },
      tel: {
        guide: true,
        mask: ["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/],
        placeholder: "(___) ___-____"
      },
      ssn: {
        guide: true,
        mask: [/\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/],
        placeholder: "___-__-____"
      },
      zip: {
        guide: false,
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
        <Fragment>
          {inputLabel}
          {(type === 'currency') &&
            <div className="input-prefix" ref={this.inputprefix}>{(typeof prefix != 'string') ? '$' : prefix}</div>
          }
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
            prefix={prefix}
            ref={(input) => {this.input = input}}
            {...attributes} />
        </Fragment>
      )
    } else if (type === 'card') {
      return (
      <Number
        onChange={onCardNumberChange}
        defaultValue={cardDefault}
        render={({
          getInputProps,
          valid
        }) =>
        <Fragment>
        {inputLabel}
          <input
            {...getInputProps()}
            className={classes}
            required={required}
            ref={(input) => {this.input = input}}
            placeholder={placeholder}
            disabled={disabled}
            {...attributes}
          />
          </Fragment>
        }
        />
      )
    }
    else {
      return (
        <Fragment>
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
            {...attributes} />
        </Fragment>
      )
    }
  }
}

Input.propTypes = {
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  id: PropTypes.string,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  labelAction: PropTypes.element,
  labelProps: PropTypes.object,
  maskProps: PropTypes.object,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  type: PropTypes.string,
  valid: PropTypes.bool
}

Input.defaultProps = {
  id: "input",
  type: "text"
}

export default Input
