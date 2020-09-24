import React, {Component} from 'react';


class Preview extends Component{
  constructor(){
    super();
  }
  render(){
    let display = {marginLeft:"20em"}
    return(
        <div style={display}>
        <h2>Preview</h2>
        <textarea value={this.props.name}/>
        </div>
    )
  }
}


export default Preview;
