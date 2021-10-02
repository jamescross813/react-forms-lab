import React from "react";

class TwitterMessage extends React.Component {

  
  constructor(props) {
    super();
    this.state = {
      input: "",
      remainingChar: props.maxChars
    };
  }

  handleChange = (event) =>{
    const newInput = event.target.value
    const remaingCharCount = this.state.remainingChar

    this.setState({    
      input: newInput,
      remainingChar: remaingCharCount - 1
    })
    
  }

  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.input}/>
        <p>{this.state.remainingChar} characters remaining...</p>
      </div>
    );
  }
}

export default TwitterMessage;
