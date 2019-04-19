import React from 'react'

const Square = props =>
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>

/**
 * Controlled component: Board controls Square.
 */
// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square" // CSS class name
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     )
//   }
// }

/**
 * Function component (aka look ma, no class!)
 *
 */
// function Square(props) {
//   return (
//       <button className="square" onClick={props.onClick}>
//         {props.value}
//       </button>
//   )
// }

export default Square