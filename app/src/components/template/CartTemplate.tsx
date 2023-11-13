import Header from "../organisms/Header"
import FavoriteItems from "../organisms/FavoriteItems"
import CartItems from "../organisms/CartItems"
import CartMenu from "../organisms/CartMenu"
import "./CartTemplate.css"

const cartDummyData = { 
        "name": "Home Essemtial PC",
        "imgUrl": "./img/desktop2.png",
        "price": 132364,
        "description": "家庭用として最適なこのデスクトップは、日常の業務や学習、エンターテインメントに適しています。コンパクトなデザインと手頃な価格で、あらゆるユーザーにおすすめです。"
}

const CartTemplate = () => {
    return(
        <>
            <Header />
            <div className="order-field">
                <CartItems />
                <CartMenu 
                    price={cartDummyData.price}
                />
            </div>
            <FavoriteItems />
        </>
    )
}

export default CartTemplate