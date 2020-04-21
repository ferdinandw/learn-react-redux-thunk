import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import {Provider} from 'react-redux'
import Siswa from './components/Siswa'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <h1>Aplikasi Sekolah</h1>
      <div>ada Navbar</div>
      <div>content utk guru</div>
      <Siswa/>
    </Provider>
  );
}

export default App;
