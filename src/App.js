import React from 'react';
import './App.css';
import Search from './components/Search'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import artistReducer from './store/reducers'

const store = createStore(artistReducer, applyMiddleware(reduxThunk))

function App() {
  return (
    <Provider store={ store }>
      <Search/>
    </Provider>
  );
}

export default App;
