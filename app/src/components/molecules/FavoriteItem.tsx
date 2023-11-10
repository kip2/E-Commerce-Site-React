import "./FavoriteItem.css"

type FavoriteItemProps = {
    imgUrl: string
    name: string
    price: number
}

const FavoriteItem:React.FC<FavoriteItemProps> = ({ imgUrl, name, price }) => {
    return(
        <>
            <div className="favorie-item">
                <img src={imgUrl} />
                <p className="name">{name}</p>
                <p className="price">{price}~</p>
            </div>
        </>
    )
}

export default FavoriteItem