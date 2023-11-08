import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'sanitize.css'
import ProductPage from './pages/ProductPage'
import PulldownMenu from './components/atoms/PulldownMenu'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PulldownMenu/>
    <ProductPage />
  </React.StrictMode>,
)
