import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'sanitize.css'
import Header from './components/organisms/Header'
import Categories from './components/organisms/Categories'


// todo: ProductCardの呼び出しをループにしてjsonから呼び出し処理をする
// todo: イメージが読み込めない問題をなんとかする
// todo: ProductCardの呼び出しは下の方に責務を持たせるか？ -> Productcardをさらに呼び出すようのcomponentsを作成したい
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Categories />
  </React.StrictMode>,
)
