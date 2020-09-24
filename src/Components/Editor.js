import React, {Component} from "react";
import Preview from './Preview.js'

class Editor extends Component{
  constructor(){
    super();
    this.state = {text:"Lorem Ipsum"}
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({text : event.target.value})
  }
  render(){
    let display = {margin:"10em 20em"}
    return(
      <div style={display}>
      <h2>Editor</h2>
      <textarea value={this.state.text} onChange={this.handleChange} />
      <Preview name={this.state.text} />
      </div>
    )
  }
}

export default Editor;
