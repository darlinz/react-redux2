import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

const { dispatch, subscribe } = store;
const { inc, dec, rnd, incFive, decThree } = bindActionCreators(actions, dispatch);

const App = () => {
  useEffect(() => {
   
    const update = () => {
      document.getElementById('counter').textContent = store.getState().value;
    };

    store.subscribe(update);

    document.getElementById('inc').addEventListener('click', inc);
    document.getElementById('dec').addEventListener('click', dec);
    document.getElementById('rnd').addEventListener('click', () => {
      const value = Math.floor(Math.random() * 10);
      store.dispatch(rnd(value));
    });
    document.getElementById('incFive').addEventListener('click', incFive);
    document.getElementById('decThree').addEventListener('click', decThree);

    return () => {
      document.getElementById('inc').removeEventListener('click', inc);
      document.getElementById('dec').removeEventListener('click', dec);
      document.getElementById('rnd').removeEventListener('click', () => {
        const value = Math.floor(Math.random() * 10);
        store.dispatch(rnd(value));
      });
      document.getElementById('incFive').removeEventListener('click', incFive);
      document.getElementById('decThree').removeEventListener('click', decThree);
    };
  }, []); 

  return (
    <div>
      <div id="incFive" className="btn btn-success">INC FIVE</div>
      <div id="decThree" className="btn btn-danger">DEC THREE</div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
