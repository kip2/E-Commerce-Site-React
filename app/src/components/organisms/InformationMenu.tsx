import Button from "../atoms/Button"
import Calculation from "../molecules/Calculation"
import "./InformationMenu.css"
import { useNavigate } from "react-router-dom"

type InformationMenuProps = {
    productName: string
    price: number
}

// todo: あとで実装する
const addFavoriteClick = () => {}
// todo: あとで実装する
const addCartClick = () => {}
// todo: あとで実装する

const InformationMenu: React.FC<InformationMenuProps> = ({productName, price}) => {
    const navigate = useNavigate()

    const goCartPage= () => {
        navigate("/cart")
    }

    return (
        <div className="information-menu">
            <h3 className="information-menu-title">{productName}</h3>
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

export default InformationMenu