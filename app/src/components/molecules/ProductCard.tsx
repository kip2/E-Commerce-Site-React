import IconButtons from "./IconButtons"
import { AiFillHeart} from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
import "./ProductCard.css"

type ProductCard = {
    imgUrl: string
    name: string
    price: number
    description: string
    leftIcon: React.ReactNode;
    onLeftButtonClick?: () => void;
    rightIcon: React.ReactNode;
    onRightButtonClick?: () =>  void;
}

const leftIcon = <AiFillHeart color="black" size={20}/>
const rightIcon = <FaCartPlus color="black" size={20}/>

const ProductCard: React.FC<ProductCard> = ({ imgUrl, name, price, description, onLeftButtonClick, onRightButtonClick}) => (
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
            onLeftButtonClick={onLeftButtonClick}
            onRightButtonClick={onRightButtonClick}
        />
    </div>
);

export default ProductCard;
