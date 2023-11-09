import Button from "../atoms/Button"

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
        <>
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
        </>
    )
}

export default InformationMenu