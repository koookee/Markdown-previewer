import React, {Component} from 'react';
import styles from '../CSS/preview.module.css';
let marked = require("marked");
marked.setOptions({
  breaks: true
})
class Preview extends Component{
  constructor(){
    super();
  }
  render(){
    let display = {margin:"-17.7% 55%"}
    return(
        <div style={{backgroundColor:""}}>
          <h2>Preview</h2>
          <div style={{backgroundColor:"", borderStyle:"solid"}}>
            <div id="preview" class={styles.preview} dangerouslySetInnerHTML = {{__html:marked(this.props.name)}}>
            </div>
          </div>
        </div>
    )
  }
}


export default Preview;
