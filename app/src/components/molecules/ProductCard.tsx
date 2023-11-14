import IconButtons from "./IconButtons"
import { AiFillHeart} from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import "./ProductCard.css"

type ProductCard = {
    id: number
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

const ProductCard: React.FC<ProductCard> = ({ id, name, imgUrl, price }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/information/${id}`)
    }

    return (
        <div className="card">
            <img 
                src={imgUrl} 
                onClick={handleClick}
            />
            <p 
                className="name"
                onClick={handleClick}
            >
                {name}
            </p>
            <p className="price">{price}~</p>
            <IconButtons
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onLeftButtonClick={bookmarkButton}
                onRightButtonClick={addToCartButton}
            />
        </div>
    )
};

export default ProductCard;
