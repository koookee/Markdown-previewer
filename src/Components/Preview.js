import React, {Component} from 'react';


class Preview extends Component{
  constructor(){
    super();
  }
  render(){
    let display = {margin:"-18.5% 55%", }
    return(
        <div style={display}>
        <h2>Preview</h2>
        <textarea id="preview" value={this.props.name}/>
        </div>
    )
  }
}


export default Preview;
