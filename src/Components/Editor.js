import React, {Component} from "react";
import Preview from './Preview.js'

let startingText = `
# Welcome to my React Markdown Previewer!
## You can add subheaders
And [links](https://www.freecodecamp.com)
Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
 - With different indentation levels.
    - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
class Editor extends Component{

  constructor(){
    super();
    this.state = {text: startingText}
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({text : event.target.value})
  }
  render(){
    let display = {display:"flex",margin:"2em 2em",justifyContent:"space-around",borderStyle:"solid"}
    return(
      <div style={display}>
        <div>
          <h2>Editor</h2>
          <textarea id="editor" rows="30" cols="50" value={this.state.text} onChange={this.handleChange} />
        </div>
        <Preview name={this.state.text} />
      </div>

    )
  }
}

export default Editor;
