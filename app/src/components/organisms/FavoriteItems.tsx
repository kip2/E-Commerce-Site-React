import "./FavoriteItems.css"
import Title from "../atoms/Title"
import FavoriteItem from "../molecules/FavoriteItem"

const data = { 
    "name": "Cyber Workstation",
    "imgUrl": "./img/desktop1.png",
    "price": 130896,
    "description": "このデスクトップは、プロフェッショナルな映像編集や3Dレンダリングのために特別に設計されました。最新の高速プロセッサーと大容量のRAMを搭載しており、複雑なタスクでもスムーズに対応します。"
}

const FavoriteCard = () => {
    return (
        <div className="favorite-card">
            <Title title={"Favorite Items"}/>
            <FavoriteItem 
                imgUrl={data.imgUrl}
                name={data.name}
                price={data.price}
            />
        </div>
    )
}

export default FavoriteCard