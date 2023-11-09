import Button from "../atoms/Button"
import Calculation from "../molecules/Calculation"
import "./InformationMenu.css"

type InformationMenuProps = {

}

// todo: あとで実装する
const addFavoriteClick = () => {}
// todo: あとで実装する
const addCartClick = () => {}
// todo: あとで実装する
const goCartPage= () => {}

const InformationMenu: React.FC<InformationMenuProps> = () => {
    return (
        <div className="information-menu">
            <h3 className="information-menu-title">Product Name</h3>
            <Calculation/>
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