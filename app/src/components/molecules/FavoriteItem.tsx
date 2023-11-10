import "./FavoriteItem.css"

type FavoriteItemProps = {
    imgUrl: string
    name: string
    price: number
}

// todo: 内部ロジックを後で追加する
const onClickCart = () => {}
// todo: 内部ロジックを後で追加する
const onClickDelete = () => {}

const FavoriteItem:React.FC<FavoriteItemProps> = ({ imgUrl, name, price }) => {
    return(
        <div className="favorite-outer">
            <div className="favorite-item">
                <div className="favorite-img-and-name">
                    <img src={imgUrl} />
                    <p className="name">{name}</p>
                </div>
                <div className="price-and-button">
                    <p className="price">{price}円</p>
                    <div>
                        <a href="#" onClick={onClickCart}>カートに追加する</a>
                    </div>
                    <div>
                        <a href="#" onClick={onClickDelete}>お気に入りから削除する</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteItem