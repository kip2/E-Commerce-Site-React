import IconButtons from "./IconButtons"
import { AiFillHeart} from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
import "./ProductCard.css"

type ProductCard = {
    imgUrl: string
    name: string
    price: number
    description: string
}

const leftIcon = <AiFillHeart color="black" size={20}/>
const rightIcon = <FaCartPlus color="black" size={20}/>

// todo: bookmark時の動作を追加
const bookmarkButton = () => {}
// todo: cartbutton押下時の動作を追加
const addToCartButton = () => {}

// todo: イメージが読み込めない問題をなんとかする
const ProductCard: React.FC<ProductCard> = ({ name, imgUrl, price, description }) => (
    <div className="card">
        <img src={imgUrl} />
        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <div className="popup" hidden>
            {description}
        </div>
        <IconButtons
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            onLeftButtonClick={bookmarkButton}
            onRightButtonClick={addToCartButton}
        />
    </div>
);

export default ProductCard;
