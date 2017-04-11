import React from 'react';
import ReactDOM from 'react-dom';
import './sprite.css';

ReactDOM.render(
  <div>
    <div className="sprite sprite_stand"> </div>
    <div className="sprite sprite_run"> </div>
    <div className="sprite sprite_walk"> </div>
    <div className="sprite sprite_jump"> </div>
    <div className="sprite sprite_fall"> </div>
    <div className="sprite sprite_front"> </div>
    <div className="sprite sprite_back"> </div>
    <div className="sprite sprite_down"> </div>
  </div>,
  document.getElementById('root')
);
