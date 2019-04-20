import React from 'react'
import Board from './Board'
import { calculateWinner, emptySquares } from './Logic'

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // last entry is most recent set of squares:
      history: [emptySquares()],
      next: 'X'
    }
  }

  handleClick(i) {
    const history = this.state.history
    const squares = history[history.length - 1].slice()

    if(squares[i]) return
    if(calculateWinner(squares)) return

    squares[i] = this.state.next

    this.setState({
      history: history.concat([squares]),
      next: this.state.next === 'X' ? 'O' : 'X'
    })
  }

  render() {
    const history = this.state.history
    const squares = history[history.length - 1]
    const winner = calculateWinner(squares)
    const status = winner ?
      `Winner: ${winner} ` :
      `Next player: ${this.state.next}`

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game