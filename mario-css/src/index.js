import React from 'react';
import ReactDOM from 'react-dom';
import './sprite.css';
import Mario from './mario';
import { Provider } from 'react-redux';
import store from './store';
import SliderMario from './slider'
import BackgroundMario from './background'


ReactDOM.render(
  <Provider store={store}>
    <div>
      <BackgroundMario>
        <Mario />
      </BackgroundMario>
      <SliderMario />
    </div>
  </Provider>,
  document.getElementById('root')
);
