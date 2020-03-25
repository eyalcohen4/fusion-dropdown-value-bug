import React from 'react'
import {FusionDropdown} from '@ironsrc/fusion-ui/native/react'

const DROPDOWN_OPTIONS = [
  {
    id: 1,
    displayText: "option_a"
  },
  {
    id: 2,
    displayText: "option_b"
  }
];

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: {
        placeholder: "Please Select",
        options: DROPDOWN_OPTIONS,
        controlValue: null
      }
    }
  }

  handleChange(name, value) {
    this.setState({[name]: {...this.state[name], controlValue: value}})
    console.log(this.state)
  }

  reset = () => {
    this.handleChange('dropdown', null)
  }

  render() {
    return (
      <div>
        <button onClick={this.reset}>reset dropdown value</button>
        <FusionDropdown config={this.state.dropdown} name="dropdown" selectedChange={this.handleChange.bind(this, "dropdown")} />
      </div>
    )
  }
}

export default Dropdown;