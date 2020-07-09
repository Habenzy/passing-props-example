import React from 'react';
import logo from './logo.svg';
import ColorButton from './ColorButton';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      bgColor: 'white'
    }
  }

  changeBg = (color) => {
    this.setState(
      {bgColor: color}
    )
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.bgColor}}>
        <ColorButton changeColor={this.changeBg} color="red" />
        <ColorButton changeColor={this.changeBg} color="blue" />
        <ColorButton changeColor={this.changeBg} color="purple" />
        <ColorButton changeColor={this.changeBg} color="magenta" />
        <ColorButton changeColor={this.changeBg} color="chartreuse" />

      </div>
    );
  }
}

export default App;
