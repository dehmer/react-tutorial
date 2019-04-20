import React from 'react'
import Board from './Board'
import { calculateWinner, emptySquares } from './Logic'

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // last entry is most recent set of squares:
      history: [emptySquares()],
      next: 'X',
      move: 0
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.move + 1)
    const squares = history[history.length - 1].slice()

    if(squares[i]) return
    if(calculateWinner(squares)) return

    squares[i] = this.state.next

    this.setState({
      history: history.concat([squares]),
      next: this.state.next === 'X' ? 'O' : 'X',
      move: history.length
    })
  }

  jumpTo(move) {
    this.setState({
      next: move % 2 === 0 ? 'X' : 'O',
      move
    })
  }

  render() {
    const history = this.state.history
    const squares = history[this.state.move]
    const winner = calculateWinner(squares)
    const status = winner ?
      `Winner: ${winner} ` :
      `Next player: ${this.state.next}`

    const moves = history.map((_, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

export default Game