import PulldownMenu from "../atoms/PulldownMenu"
import "./CartItem.css"

type CartItemProps = {
    imgUrl: string
    name: string
    price: number
}

// todo: 内部ロジックを後で追加する
const onClickDelete = () => {}

const menus = [1,2,3,4,5,6,7,8,9,10]

const CartItem:React.FC<CartItemProps> = ({ imgUrl, name, price }) => {
    return(
        <div className="cart-card-outer">
            <div className="cart-card-item">
                <div className="cart-card-img-and-name">
                    <img src={imgUrl} />
                    <p className="cart-card-name">{name}</p>
                </div>
                <div className="price-and-button">
                    <div className="product-price">
                        <p className="price">{price}円</p>
                    </div>
                    <div className="product-number">
                        <PulldownMenu
                            label={"数量"}
                            menus={menus}
                        />
                    </div>
                    <div className="product-delete">
                        <a 
                            href="#"
                            className="block"
                            onClick={onClickDelete}>カートから削除する</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem