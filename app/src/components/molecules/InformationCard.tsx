import IconButtons from "./IconButtons"
import { AiFillHeart} from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
import "./InformationCard.css"

type InformationCard = {
    imgUrl: string
    name: string
    price: number
    description: string
}

const leftIcon = <AiFillHeart color="black" size={30}/>
const rightIcon = <FaCartPlus color="black" size={30}/>

// todo: bookmark時の動作を追加
const bookmarkButton = () => {}
// todo: cartbutton押下時の動作を追加
const addToCartButton = () => {}

const InformationCard: React.FC<InformationCard> = ({ name, imgUrl, price, description }) => (
    <div className="information-card">
        <img src={imgUrl} />
        <div className="name-and-price">
            <p className="product-name">{name}</p>
            <p className="product-price">{Intl.NumberFormat('ja-JP').format(price)}円</p>
        </div>
        <div className="description">
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

export default InformationCard;
