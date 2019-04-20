import React from 'react'
import Square from './Square'

const cons = (xs, fn) => xs.reduce((acc, x) => acc.concat(fn(x)), [])

const square = props => i =>
  <Square
    value={props.squares[i]}
    onClick={() => props.onClick(i)}
  />

const row = props => y => cons([0, 1, 2], x =>
    square(props)(x + y))

const grid = props => cons([0, 3, 6], y =>
  <div className="board-row">
    { row(props)(y) }
  </div>)

const Board = props =>
  <div>
    { grid(props) }
  </div>

export default Board