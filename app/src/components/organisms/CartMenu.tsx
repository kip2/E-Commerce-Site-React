import Button from "../atoms/Button"
import CartCalculation from "../molecules/CartCalculation"
import "./CartMenu.css"

type CartMenuProps = {
    price: number
}

// todo: あとで実装する
const addPurchaseClick = () => {}

const CartMenu: React.FC<CartMenuProps> = ({price}) => {
    return (
        <div className="cart-menu">
            <CartCalculation
                pieces={1}
                price={price}
            />
            <div className="buttons">
                <Button
                    caption={"Purchase"}
                    onButtonClick={addPurchaseClick}
                />
            </div>
        </div>
    )
}

export default CartMenu