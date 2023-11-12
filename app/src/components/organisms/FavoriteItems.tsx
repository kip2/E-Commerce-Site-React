import "./FavoriteItems.css"
import Title from "../atoms/Title"
import FavoriteItem from "../molecules/FavoriteItem"

// const data = [
//     { 
//         "name": "Cyber Workstation",
//         "imgUrl": "./img/desktop1.png",
//         "price": 130896,
//         "description": "このデスクトップは、プロフェッショナルな映像編集や3Dレンダリングのために特別に設計されました。最新の高速プロセッサーと大容量のRAMを搭載しており、複雑なタスクでもスムーズに対応します。"
//     },
//     { 
//         "name": "Cyber Workstation",
//         "imgUrl": "./img/desktop1.png",
//         "price": 130896,
//         "description": "このデスクトップは、プロフェッショナルな映像編集や3Dレンダリングのために特別に設計されました。最新の高速プロセッサーと大容量のRAMを搭載しており、複雑なタスクでもスムーズに対応します。"
//     }
// ]

const data = [
    { 
        "name": "Cyber Workstation",
        "imgUrl": "./img/desktop1.png",
        "price": 130896,
        "description": "このデスクトップは、プロフェッショナルな映像編集や3Dレンダリングのために特別に設計されました。最新の高速プロセッサーと大容量のRAMを搭載しており、複雑なタスクでもスムーズに対応します。"
    }
]

const FavoriteItems = () => {
    return (
        <div className="favorite-card">
            <Title title={"Favorite Items"}/>
            <div>
                {
                    data.map((item) => {
                        return (
                            <FavoriteItem
                                imgUrl={item.imgUrl}
                                name={item.name}
                                price={item.price}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FavoriteItems