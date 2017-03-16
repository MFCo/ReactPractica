import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.renderSquare = this.renderSquare.bind(this);
  }

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} key={i} />;
  }

  renderCell(row) {
    return row.map(value => this.renderSquare(value));
  }

  renderBoard() {
    return [0,3,6].map((value, i) => {
      const row = [value, value + 1, value + 2];

      return (
        <div className="board-row">
          {this.renderCell(row)}
        </div>
      );
    });
  }

  renderCellWithFors(row) {
    let cell = [];

    for(let k=0; k < 3; k++) {
      cell.push(this.renderSquare(row+k));
    }
    return cell;
  }

  renderWithForsBoard() {
    let board = [];    
    for (let i=0; i < 9; i = i+3) {
      board.push(
        <div className="board-row" key={i}>
          {this.renderCellWithFors(i)}
        </div>
      );
    }

    return board;
  }

  render() {
  const winner = calculateWinner(this.props.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
  }
    return (
      <div>
        {this.renderWithForsBoard()}
      </div>
    );
  }
}

class Game extends React.Component {
    constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0,
    };
  }
 
  handleClick(i) {
      const history = this.state.history;
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
      });
    }

  jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) ? false : true,
      });
}
  render() {
    
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
    const moves = history.map((step, move) => {
    const desc = move ?
    'Move #' + (move%2+1) + '.' +(Math.trunc(move/2)) :
    'Game start';
      return (
    <li key={move}>
      <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
    </li>
     );
});
    return(
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}