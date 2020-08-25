import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = { 
    userInputTxt: '',
    minLength: 5
  }


  inputChangeHandler = (event) => {
    //  make a copy of state using spread
    let txtLength = {...this.state.userInputTxt.length};

    this.setState({userInputTxt: event.target.value});
    // this.setState({chars: txtArray});
  }

  charDeleteHandler = (charIndex) => {
    //  get text and convert into array
    const text = this.state.userInputTxt.split('');
    //  remove character an index
    text.splice(charIndex, 1);
    //  rejoin as array again
    const updatedText = text.join('');
    //  update state
    this.setState({userInputTxt: updatedText});
  }

  render() {
    let letters = null;
    //  if there are chars entered
    if(this.state.userInputTxt.length > 0) {
      letters = (
        <div>
          {/* letters should be group of CharComponents, with each letter of string */}
          {this.state.userInputTxt.split('').map((char, index) => {
              return <Char
              char={char}
              key={index}
              click={() => this.charDeleteHandler(index)} /> 
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        {/* need to set up two way binding */}
        <input 
          type="text" 
          onChange={(event) => this.inputChangeHandler(event)} 
          value={this.state.userInputTxt} />

        <p>{this.state.getLength}</p>

        <Validation 
          txtLength={this.state.userInputTxt.length} 
          minLength={this.state.minLength} 
          validationMessage={this.validationMessage} />
        
        {/* render the conditional letters obj */}
        {letters} 
      </div>
    )
  }
}

export default App;