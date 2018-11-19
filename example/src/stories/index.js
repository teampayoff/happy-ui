import React, { Fragment } from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

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

storiesOf("Alert", module)
  .addDecorator(CenterLayout)
  .add("Default Alerts", () =>(
    <Fragment>
      <Alert type="success">Hey, something good happened!</Alert>
      <Alert type="info">You might want to know this piece of info.</Alert>
      <Alert type="warning">You should check this out, but it"s not urgent.</Alert>
      <Alert type="danger">Uh, oh. Something bad happened.</Alert>
    </Fragment>
  ))
  .add("Dismissible", () =>(
    <Fragment>
      <Alert type="success" dismissible>Hey, something good happened!</Alert>
      <Alert type="info" dismissible>You might want to know this piece of info.</Alert>
      <Alert type="warning" dismissible>You should check this out, but it"s not urgent.</Alert>
      <Alert type="danger" dismissible>Uh, oh. Something bad happened.</Alert>
    </Fragment>
  ))

storiesOf("Badge", module)
  .addDecorator(CenterLayout)
  .add("Badge Types", () =>(
    <div>
      <Badge className="mx-1" type="success">Success</Badge>
      <Badge className="mx-1" type="info">Info</Badge>
      <Badge className="mx-1" type="warning">Warning</Badge>
      <Badge className="mx-1" type="danger">Danger</Badge>
    </div>
  ))

storiesOf("Button", module)
  .addDecorator(CenterLayout)
  .add("Primary", () => (
    <Fragment>
      <Button>Continue</Button>
      <Button disabled>Continue</Button>
    </Fragment>
  ))
  .add("Secondary", () => (
    <Fragment>
      <Button outline>Cancel</Button>
      <Button disabled outline>Cancel</Button>
    </Fragment>
  ))
  .add("Button Link", () => (
    <Fragment>
      <Button type="link">Learn More</Button>
      <Button type="link" disabled>Learn More</Button>
    </Fragment>
  ))
  .add("Wider Buttons", () => (
    <Fragment>
      <Button className="btn-wide" size="lg">Continue</Button>
      <Button className="btn-wide">Continue</Button>
      <Button className="btn-wide" size="sm">Continue</Button>
    </Fragment>
  ))
  .add("Icons (hasIcon)", () => (
    <Fragment>
      <Button hasIcon iconProps={{ icon: "upload" }}>Upload</Button>
      <div className="my-2"></div>
      <Button hasIcon iconRight iconProps={{ icon: "arrow-right" }}>Next</Button>
    </Fragment>
  ))
  .add("Loading (isLoading)", () => <Button className="btn-wide" isLoading>Continue</Button>)

storiesOf("Form", module)
  .addDecorator(CenterLayout)
  .add("Checkbox", () => (
    <Fragment>
      <FormGroup>
        <Checkbox id="checkbox--1">I choose this option</Checkbox>
        <Checkbox id="checkbox--2">I choose this option</Checkbox>
        <Checkbox id="checkbox--3">I choose this option</Checkbox>
      </FormGroup>

      <FormGroup>
        <Checkbox size="large" color="green">I choose this option</Checkbox>
      </FormGroup>
    </Fragment>
  ))
  .add("Feedback", () => (
    <Fragment>
      <FormGroup className="text-left">
        <Input label="Input w/Form Text" required />
        <FormText>Some helpful information about this field.</FormText>
      </FormGroup>

      <FormGroup className="text-left">
        <Input label="Error State" invalid required />
        <FormText invalid>Something went wrong here.</FormText>
      </FormGroup>

      <FormGroup className="text-left">
        <Input label="Success State" valid required />
      </FormGroup>

      <FormGroup className="text-left">
        <Select
          label="Select One"
          required
          invalid
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
        <FormText invalid>Please select an option.</FormText>
      </FormGroup>

      <FormGroup className="text-left">
        <Checkbox
          id="checkbox--1"
          invalid
          messages={<FormText invalid>Something went wrong here.</FormText>}>
          I choose this option
        </Checkbox>
      </FormGroup>

      <FormGroup className="text-left">
        <Radio
          id="radio--1"
          invalid
          messages={<FormText invalid>Something went wrong here.</FormText>}>
          I choose this option
        </Radio>
      </FormGroup>
    </Fragment>
  ))
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
