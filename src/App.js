import React from 'react';
import {createStore} from 'redux';
import reducers from './reducers'
import './App.css';
import {Provider} from 'react-redux'
import Siswa from './components/Siswa'

const store = createStore(reducers)

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
