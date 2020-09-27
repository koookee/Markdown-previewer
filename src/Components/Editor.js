import React, {Component} from "react";
import Preview from './Preview.js'

class Editor extends Component{

  constructor(){
    super();
    this.state = {text:"# Hello"}
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({text : event.target.value})
  }
  render(){
    let tex = "# he";
    let display = {margin:"10% 10%"}
    return(
      <div>
        <div style={display}>
          <h2>Editor</h2>
          <textarea id="editor" value={this.state.text} onChange={this.handleChange} />
        </div>
        <Preview name={this.state.text} />
      </div>

    )
  }
}

export default Editor;
