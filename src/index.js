import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

import Game from './Game'

// Component hierarchy
// Game -> Board -> Square

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)

