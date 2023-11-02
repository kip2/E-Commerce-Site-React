import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'sanitize.css'
import Header from './Header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)
