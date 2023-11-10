import "./FavoriteCard.css"
import Title from "../atoms/Title"
import FavoriteCardItem from "../molecules/FavoriteCardItem"

const FavoriteCard = () => {
    return (
        <div className="favorite-card">
            <Title title={"Favorite Items"}/>
            <FavoriteCardItem />
        </div>
    )
}

export default FavoriteCard