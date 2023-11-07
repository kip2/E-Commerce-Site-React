import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'sanitize.css'
import Header from './components/organisms/Header'
import ProductCard from './components/molecules/ProductCard'

// todo: ProductCardの呼び出しをループにしてjsonから呼び出し処理をする
// todo: イメージが読み込めない問題をなんとかする
// todo: ProductCardの呼び出しは下の方に責務を持たせるか？ -> Productcardをさらに呼び出すようのcomponentsを作成したい
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
