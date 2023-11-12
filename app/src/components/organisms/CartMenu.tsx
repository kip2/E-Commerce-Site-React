import Button from "../atoms/Button"
import Calculation from "../molecules/Calculation"
import "./CartMenu.css"

type CartMenuProps = {
    productName: string
    price: number
}

// todo: あとで実装する
const addFavoriteClick = () => {}
// todo: あとで実装する
const addCartClick = () => {}
// todo: あとで実装する
const goCartPage= () => {}

const CartMenu: React.FC<CartMenuProps> = ({productName, price}) => {
    return (
        <div className="cart-menu">
            <h3 className="cart-menu-title">{productName}</h3>
            <Calculation
                price={price}
            />
            <div className="buttons">
                <Button
                    caption={"Add Favorite"}
                    onButtonClick={addFavoriteClick}
                />
                <Button
                    caption={"Add Cart"}
                    onButtonClick={addCartClick}
                />
                <Button
                    caption={"Go Cart Page"}
                    onButtonClick={goCartPage}
                />
            </div>
        </div>
    )
}

export default CartMenu