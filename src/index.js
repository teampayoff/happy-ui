// import styles
import "scss/index.scss"

// import icons: https://github.com/FortAwesome/react-fontawesome
import FontAwesome from "@fortawesome/fontawesome"
import brands from "@fortawesome/fontawesome-free-brands"
import light from "@fortawesome/fontawesome-pro-light"
import solid from "@fortawesome/fontawesome-pro-solid"

FontAwesome.library.add(brands, light, solid)

// import components
import Alert from "components/Alert"
import Badge from "components/Badge"
import Button from "components/Button"
import ButtonGroup from "components/ButtonGroup"
import Checkbox from "components/Checkbox"
import Close from "components/Close"
import Container from "components/Container"
import File from "components/File"
import Form from "components/Form"
import FormGroup from "components/FormGroup"
import FormText from "components/FormText"
import Icon from "@fortawesome/react-fontawesome"
import Input from "components/Input"
import Label from "components/Label"
import LabelAction from "components/LabelAction"
import Link from "components/Link"
import Logo from "components/Logo"
import ModalBody from "components/ModalBody"
import ModalFooter from "components/ModalFooter"
import ModalHeader from "components/ModalHeader"
import Radio from "components/Radio"
import Row from "components/Row"
import ScrollGroup from "components/ScrollGroup"
import Select from "components/Select"
import TextStyle from "components/TextStyle"
import * as Util from "utils"

export {
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Checkbox,
  Close,
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
  ModalBody,
  ModalFooter,
  ModalHeader,
  Radio,
  Row,
  ScrollGroup,
  Select,
  TextStyle,
  Util
}
