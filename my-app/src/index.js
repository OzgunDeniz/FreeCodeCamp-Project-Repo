import React from 'react';
import ReactDOM from 'react-dom';
import ControlledInput from './ControlledInput';
import Counter from './Counter';
import GameOfChance from './GameOfChance';
import MagicEightBall from './MagicEightBall';
import MyForm from './MyForm';


ReactDOM.render(
  <React.StrictMode>
    <ControlledInput />
    <MyForm />
    <Counter />
    <MagicEightBall />
    <GameOfChance />
  </React.StrictMode>,
  document.getElementById('root')
);

