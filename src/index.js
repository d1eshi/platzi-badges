import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'global.css'

const root = document.getElementById('app')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , root)
