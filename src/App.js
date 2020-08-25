import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = { 
    txtLength: 0,
    minLength: 5, 
    chars: ''
  }


  inputChangeHandler = (event) => {

    console.log(this.state);
    //  make a copy of state using spread
    let txtLength = {...this.state.txtLength};
    //  get the text & length
    const getTxt = event.target.value;
    const getLength = getTxt.length;
    //  split string into array
    const txtArray = getTxt.split('');

    //  set the new state to txtLength
    txtLength = getLength;

    this.setState({txtLength: txtLength});
    this.setState({chars: txtArray});
  }

  charDeleteHandler = (charIndex) => {
    console.log('delete me: ', charIndex);
    const chars = [...this.state.chars];

    chars.splice(charIndex, 1);
    console.log('index: ', charIndex);

    this.setState({chars: chars});
  }

  render() {
    let letters = null;
    //  if there are chars entered
    if(this.state.txtLength > 0) {
      letters = (
        <div>
          {/* letters should be group of CharComponents, with each letter of string */}
          {this.state.chars.map((char, index) => {
              return <CharComponent 
              char={char}
              click={(event) => this.charDeleteHandler(index)} /> 
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

        <input type="text" onChange={(event) => this.inputChangeHandler(event)}/>

        <p>{this.length}</p>

        <ValidationComponent txtLength={this.state.txtLength} minLength={this.state.minLength} validationMessage={this.validationMessage} />
        
        {/* render the conditional letters obj */}
        {letters} 
      </div>
    )
  }
}

export default App;