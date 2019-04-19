import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}

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

const Square = props =>
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>


class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      next: 'X'
    }
  }

  handleClick(i) {
    if(this.state.squares[i]) return
    if(calculateWinner(this.state.squares)) return

    const squares = this.state.squares.slice()
    squares[i] = this.state.next

    this.setState({
      squares,
      next: this.state.next === 'X' ? 'O' : 'X'
    })
  }

  renderSquare(i) {
    return (
      <Square
        // passed as `props` to constructor
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    const winner = calculateWinner(this.state.squares)
    const status = winner ?
      `Winner: ${winner} ` :
      `Next player: ${this.state.next}`


    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

