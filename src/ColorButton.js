import React from 'react'

function ColorButton(props) {
  console.log(`Coming from the ${props.color} button:`)
  console.log({ props })


  return (
    <button onClick={(evt) => { evt.preventDefault(); props.changeColor(props.color) }}>
      <ColorMessage myColor={props.color} />
    </button>
  )
}

class ColorMessage extends React.Component {

  render() {
    return (
      <span>Change to {this.props.myColor}</span>
    )
  }
}

export default ColorButton
