import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'sanitize.css'
import ProductPage from './components/pages/ProductPage'
import ProductInformationTemplate from './components/template/ProductInfomationTemplate'
import FavoriteTemplate from './components/template/FavoriteTemplate'
import CartTemplate from './components/template/CartTemplate'
import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <ProductPage /> */}
    {/* <ProductInformationTemplate /> */}
    {/* <FavoriteTemplate /> */}
    {/* <CartTemplate /> */}
  </React.StrictMode>,
)
