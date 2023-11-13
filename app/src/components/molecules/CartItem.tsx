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
        <div className="card-outer">
            <div className="card-item">
                <div className="card-img-and-name">
                    <img src={imgUrl} />
                    <p className="card-name">{name}</p>
                </div>
                <div className="price-and-button">
                    <p className="price">{price}円</p>
                    <PulldownMenu
                        label={"数量："}
                        menus={menus}
                    />
                    <div>
                        <a href="#" onClick={onClickDelete}>カートから削除する</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem