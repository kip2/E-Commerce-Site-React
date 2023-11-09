import Button from "../atoms/Button"
import Calculation from "../molecules/Calculation"
import "./InformationMenu.css"

type InformationMenuProps = {
    productName: string
    price: number
}

// todo: あとで実装する
const addFavoriteClick = () => {}
// todo: あとで実装する
const addCartClick = () => {}
// todo: あとで実装する
const goCartPage= () => {}

const InformationMenu: React.FC<InformationMenuProps> = ({productName, price}) => {
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