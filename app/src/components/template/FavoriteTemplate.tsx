import Header from "../organisms/Header";
import Title from "../atoms/Title";
import FavoriteCard from "../molecules/FavoriteCard";

const FavoriteTemplate = () => {
    return (
        <>
            <Header />
            <Title 
                title={"Favorite Items"}
            />
            <FavoriteCard />
        </>
    )
}

export default FavoriteTemplate