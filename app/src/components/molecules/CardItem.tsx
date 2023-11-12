import "./CardItem.css"

type CardItemProps = {
    imgUrl: string
    name: string
    price: number
}

// todo: 内部ロジックを後で追加する
const onClickCart = () => {}
// todo: 内部ロジックを後で追加する
const onClickDelete = () => {}

const CardItem:React.FC<CardItemProps> = ({ imgUrl, name, price }) => {
    return(
        <div className="card-outer">
            <div className="card-item">
                <div className="card-img-and-name">
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

export default CardItem