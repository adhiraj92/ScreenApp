import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {inputData: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      inputData: e.target.value
    });
  }
  handleSubmit(){
    this.props.addScreenData(this.state.inputData);
  }
  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.inputData}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleSubmit}
        >
         Add more screen data
        </button>
      </div>
    );
  }
}

export default Form;