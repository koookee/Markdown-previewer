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
    return(
        <div className={styles.preview}>
          <h2>Preview</h2>
          <div style={{borderStyle:"solid"}}>
            <div id="preview" dangerouslySetInnerHTML = {{__html:marked(this.props.name)}}>
            </div>
          </div>
        </div>
    )
  }
}


export default Preview;
