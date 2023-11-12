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
            // "name": "Home Essemtial PC",
            // "imgUrl": "./img/desktop2.png",
            // "price": 132364,
            // "description": "家庭用として最適なこのデスクトップは、日常の業務や学習、エンターテインメントに適しています。コンパクトなデザインと手頃な価格で、あらゆるユーザーにおすすめです。"
//     }
// ]

const data = [
    { 
        "name": "Home Essemtial PC",
        "imgUrl": "./img/desktop2.png",
        "price": 132364,
        "description": "家庭用として最適なこのデスクトップは、日常の業務や学習、エンターテインメントに適しています。コンパクトなデザインと手頃な価格で、あらゆるユーザーにおすすめです。"
    }
]

const CartItems = () => {
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

export default CartItems