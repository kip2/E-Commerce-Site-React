import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'sanitize.css'
import ProductPage from './pages/ProductPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductPage />
  </React.StrictMode>,
)
