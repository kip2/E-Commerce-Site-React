import Header from "../organisms/Header"
import FavoriteItems from "../organisms/FavoriteItems"
import CartItems from "../organisms/CartItems"
import CartMenu from "../organisms/CartMenu"
import "./Cart.css"

const Cart = () => {
    return(
        <>
            <Header />
            <div className="order-field">
                <CartItems />
                <CartMenu 

                />
            </div>
            <FavoriteItems />
        </>
    )
}

export default Cart