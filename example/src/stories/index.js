import React, { Fragment } from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { Modal } from "reactstrap"
import { withKnobs, text, select, number, boolean, radios } from "@storybook/addon-knobs"

import "happy-ui/dist/css/bundle.min.css"
import "../index.css"

import {
  Alert,
  Badge,
  Button,
  Checkbox,
  Container,
  File,
  Form,
  FormGroup,
  FormText,
  Icon,
  Input,
  Label,
  LabelAction,
  Link,
  Logo,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Radio,
  Row,
  Select,
  TextStyle
} from "happy-ui"

const CenterLayout = (storyFn) => (
  <div id="app-root" className="d-flex align-items-center justify-content-center h-100">
    <Container className="text-center">
      { storyFn() }
    </Container>
  </div>
)

const stories = storiesOf('Storybook Knobs', module);
const alerts = storiesOf('Alert', module);
const badge = storiesOf('Badge', module);
const button = storiesOf('Button', module);
const form = storiesOf('Form', module);

stories.addDecorator(withKnobs)
alerts.addDecorator(withKnobs).addDecorator(CenterLayout)
badge.addDecorator(withKnobs).addDecorator(CenterLayout)
button.addDecorator(withKnobs).addDecorator(CenterLayout)
form.addDecorator(withKnobs).addDecorator(CenterLayout)

stories.add('with button', () => (
  <Button disabled={boolean('Disabled', false)} >
    {text('Label', 'Hello Storybook')}
  </Button>
))

stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala');
  const age = number('Age', 89);

  const content = `I am ${name} and I'm ${age} years old.`;
  return (<div>{content}</div>);
});

  alerts.add("Default Alerts", () =>{
    const label = "Alert Type";
    const defaultValue = 'success';
    const options = {
      success: 'success',
      info: 'info',
      warning: 'warning',
      danger: 'danger'
    }
    const value = select(label, options, defaultValue);
    return (
      <Fragment>
        <Alert type={value}>This is the {value} message</Alert>
      </Fragment>
    )
  })
  .add("Dismissible", () => {
    const label = "Alert Type";
    const defaultValue = 'success';
    const options = {
      success: 'success',
      info: 'info',
      warning: 'warning',
      danger: 'danger'
    }
    const value = select(label, options, defaultValue);
    return (
      <Fragment>
        <Alert type={value} dismissible>This is a dismissable {value} message</Alert>
      </Fragment>
    )
  })

  badge.add("Badge Types", () => {
    const label = "Badge Type";
    const defaultValue = 'success';
    const options = {
      success: 'success',
      info: 'info',
      warning: 'warning',
      danger: 'danger'
    }
    const value = select(label, options, defaultValue);
    return (
      <div>
        <Badge className="mx-1" type={value}>{value}</Badge>
      </div>
    )
  })

  button.add("Primary", () => {
    const disabledLabel = 'Disabled';
    const defaultDisabledValue = false;

    const outlineLabel = 'Outlined'
    const defaultOutlineValue = false;

    const sizeLabel = 'Size';
    const sizeOptions = {
      small: 'sm',
      medium: '',
      large: 'lg'
    }
    const defaultSize = ''

    const buttonWideLabel = 'Button Width';
    const widthOptions = {
      normal: '',
      wide: 'btn-wide'
    }
    const defaultWidth = ''

    const hasIconLabel = 'Has Icon'
    const hasIconDefaultValue = false;

    const iconAlignLabel = 'Icon Align';
    const iconAlignOptions = {
      right: 'iconRight',
      left: 'iconLeft'
    }
    const iconAlignDefault = 'iconRight'

    const isLoadingLabel = 'Is Loading';
    const isLoadingDefault = false;

    const disabledValue = boolean(disabledLabel, defaultDisabledValue);
    const outlinedValue = boolean(outlineLabel, defaultOutlineValue);
    const sizeValue = radios(sizeLabel,sizeOptions,defaultSize);
    const widthValue = radios(buttonWideLabel,widthOptions,defaultWidth);
    const hasIcon = boolean(hasIconLabel, hasIconDefaultValue);
    const iconAlign = radios(iconAlignLabel, iconAlignOptions, iconAlignDefault);
    const isLoading = boolean(isLoadingLabel, isLoadingDefault);

    return (
    <Fragment>
      <Button
      disabled={disabledValue}
      outline={outlinedValue}
      size={sizeValue}
      className={widthValue}
      hasIcon={hasIcon}
      isLoading={isLoading}
      >Continue</Button>
    </Fragment>
  )
  })
  .add("Button Link", () => {
    const disabledLabel = 'Disabled';
    const disabledDefaultValue = false;
    const disabled = boolean(disabledLabel, disabledDefaultValue)

    return (
      <Fragment>
        <Button type="link" disabled={disabled}>Learn More</Button>
      </Fragment>
    )
  })

  form.add("Checkbox", () => (
    <Fragment>
      <FormGroup>
        <Checkbox id="checkbox--1">I choose this option</Checkbox>
        <Checkbox id="checkbox--2">I choose this option</Checkbox>
        <Checkbox id="checkbox--3" color="green">I choose this option</Checkbox>
      </FormGroup>
    </Fragment>
  ))
  .add("Feedback", () => {

    const selectOptions = [{
        value: "option--1",
        label: "Option 1"
      }, {
        value: "option--2",
        label: "Option 2"
      }, {
        value: "option--3",
        label: "Option 3"
      }
    ]

    const stateOptions = {
      normal: '',
      error: 'invalid',
      success: 'success'
    }
    const stateDefault = ''

    const inputStateLabel = 'Input State'
    const inputDefaultState = ''
    const inputStateValue = radios(inputStateLabel,stateOptions,stateDefault)

    const selectStateLabel = 'Select State'
    const selectDefaultState = ''
    const selectStateValue = radios(selectStateLabel,stateOptions,stateDefault)

    const checkboxStateLabel = 'Checkbox State'
    const checkboxDefaultState = ''
    const checkboxStateValue = radios(checkboxStateLabel,stateOptions,stateDefault)

    const radioStateLabel = 'Radio State'
    const radioDefaultState = ''
    const radioStateValue = radios(radioStateLabel,stateOptions,stateDefault)

    return (
      <Fragment>
        <FormGroup className="text-left">
          {(inputStateValue === 'invalid') ?
          <Fragment>
            <Input label="Input w/Form Text" required invalid/>
            <FormText invalid>Something went wrong here.</FormText>
          </Fragment>
          : (inputStateValue === 'success') ?
          <Fragment>
            <Input label="Input w/Form Text" required valid/>
            <FormText>Some helpful information about this field.</FormText>
          </Fragment>
          :
          <Fragment>
            <Input label="Input w/Form Text" required/>
            <FormText>Some helpful information about this field.</FormText>
          </Fragment>
        }
        </FormGroup>

        <FormGroup className="text-left">
        {(selectStateValue === 'invalid') ?
          <Fragment>
          <Select
            label="Select One"
            required
            invalid
            options={selectOptions} />
          <FormText invalid>Please select an option.</FormText>
          </Fragment>
          : (selectStateValue === 'success') ?
            <Fragment>
            <Select
              label="Select One"
              required
              valid
              options={selectOptions} />
            <FormText valid>Please select an option.</FormText>
            </Fragment>
          :
          <Fragment>
          <Select
            label="Select One"
            required
            options={selectOptions} />
          <FormText>Please select an option.</FormText>
          </Fragment>
        }
        </FormGroup>

        <FormGroup className="text-left">
        <FormGroup className="text-left">
          {checkboxStateValue === 'invalid' ?
          <Checkbox
            id="radio--1"
            invalid
            messages={<FormText invalid>Something went wrong here.</FormText>}>
            I choose this option
          </Checkbox>
          : (checkboxStateValue === 'valid') ?
            <Checkbox
              id="radio--1"
              valid
              messages={<FormText invalid>Something went wrong here.</FormText>}>
              I choose this option
            </Checkbox>
            :
            <Checkbox
              id="radio--1"
              messages={<FormText invalid>Something went wrong here.</FormText>}>
              I choose this option
            </Checkbox>
          }
        </FormGroup>
        </FormGroup>

        <FormGroup className="text-left">
        {radioStateValue === 'invalid' ?
        <Radio
          id="radio--1"
          invalid
          messages={<FormText invalid>Something went wrong here.</FormText>}>
          I choose this option
        </Radio>
        : (radioStateValue === 'valid') ?
          <Radio
            id="radio--1"
            valid
            messages={<FormText invalid>Something went wrong here.</FormText>}>
            I choose this option
          </Radio>
          :
          <Radio
            id="radio--1"
            messages={<FormText invalid>Something went wrong here.</FormText>}>
            I choose this option
          </Radio>
        }
        </FormGroup>
      </Fragment>
    )
  })
  .add("File Input", () => (
    <Fragment>
      <File />
      <File tag="link">Upload File</File>
    </Fragment>
  ))
  .add("Text Inputs", () => (
    <Fragment>
      <FormGroup>
        <Input label="Text Input" required />
      </FormGroup>

      <FormGroup>
        <Input label="Currency w/Mask" type="currency" required />
      </FormGroup>

      <FormGroup>
        <Input label="Email w/Mask" type="email" required />
      </FormGroup>

      <FormGroup>
        <Input label="Phone w/Mask" type="tel" required />
      </FormGroup>

      <FormGroup>
        <Input label="Social Security Number w/Mask" type="ssn" required />
      </FormGroup>

      <FormGroup>
        <Input label="Zip Code w/Mask" type="zip" required />
      </FormGroup>

      <FormGroup>
        <Input label="Credit Card w/Mask" type="card" required placeholder="Card Number"/>
      </FormGroup>
    </Fragment>
  ))
  .add("Radio", () => (
    <FormGroup>
      <Radio group="radio-btns" id="radio--1">I choose this option</Radio>
      <Radio group="radio-btns" id="radio--2">I choose this option</Radio>
      <Radio group="radio-btns" id="radio--3">I choose this option</Radio>
    </FormGroup>
  ))
  .add("Select", () => (
    <Fragment>
      <FormGroup>
        <Select
          label="Select One"
          required
          options={[
            {
              value: "option--1",
              label: "Option 1"
            }, {
              value: "option--2",
              label: "Option 2"
            }, {
              value: "option--3",
              label: "Option 3"
            }
          ]} />
      </FormGroup>
    </Fragment>
  ))

storiesOf("Logo", module)
  .addDecorator(CenterLayout)
  .add("Balloon", () => <Logo type="balloon" style={{ width: "6rem" }} />)
  .add("Wordmark", () => <Logo style={{ width: "10rem" }} />)

storiesOf("Typography", module)
  .addDecorator(CenterLayout)
  .add("Display Headings", () => (
    <Fragment>
      <h1 className="display-1">Display One</h1>
      <h1 className="display-2">Display Two</h1>
      <h1 className="display-3">Display Three</h1>
      <h1 className="display-4">Display Four</h1>
    </Fragment>
  ))
  .add("Headings", () => (
    <Fragment>
      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <h4>Heading Four</h4>
      <h5>Heading Five</h5>
      <h6>Heading Six</h6>
    </Fragment>
  ))
  .add("Highlights", () => (
    <Fragment>
      <h1 className="display-3"><TextStyle highlight="full">Full Highlight</TextStyle></h1>
      <h1><TextStyle highlight="full">Full Highlight</TextStyle></h1>
      <h1><TextStyle highlight="underline">Underlined Highlight</TextStyle></h1>
      <p><TextStyle highlight="underline">Underlined Highlight</TextStyle></p>
    </Fragment>
  ))
  .add("Text", () => (
    <Fragment>
      <p className="lead">This is a lead paragraph. Salami prosciutto biltong short ribs fatback beef ribs beef kielbasa cow kevin meatball pork loin landjaeger pancetta. Shankle filet mignon t-bone kevin beef ribs. Strip steak swine beef ribs shoulder, pork chop brisket ground round. <TextStyle highlight="underline">Brisket jowl sausage</TextStyle>, tail tri-tip sirloin pig. Pork loin cupim kevin beef. Spare ribs strip steak turkey shank bresaola ground round, meatball corned beef.</p>

      <p>This is a normal paragraph. Salami prosciutto biltong short ribs fatback beef ribs beef kielbasa cow kevin meatball pork loin landjaeger pancetta. Shankle filet mignon t-bone kevin beef ribs. Strip steak swine beef ribs shoulder, pork chop brisket ground round. Brisket jowl sausage, tail tri-tip sirloin pig. Pork loin cupim kevin beef. Spare ribs strip steak turkey shank bresaola ground round, meatball corned beef.</p>
    </Fragment>
  ))

  storiesOf("Modal", module)
    .addDecorator(CenterLayout)
    .add("Modal", () => (
      <Modal
        isOpen={true}
        headerProps={{
          hideIcon: true
        }}
      >
      <ModalHeader hasImage={true} align="center">
        Modal Header
      </ModalHeader>
      <ModalBody>
        Modal Body
      </ModalBody>
      <ModalFooter>
        Modal Footer
      </ModalFooter>
      </Modal>
    ))
