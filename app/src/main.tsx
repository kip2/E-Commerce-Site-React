import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'sanitize.css'
import Header from './components/organisms/Header'
import ProductCard from './components/molecules/ProductCard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <ProductCard
      imgUrl="./img/desktop2.png"
      name="test name"
      price={100000}
      description='test description'
    />
  </React.StrictMode>,
)
