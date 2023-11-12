import "./CartCalculation.css"

type CartCalculationProps = {
    pieces: number
    price: number
}

// todo: 数量の入力に対したuseEffectが必要になる
// todo: 単価を自動で取得して表示するようにする

const CartCalculation: React.FC<CartCalculationProps> = ({ pieces, price}) => {
    return (
        <>
            <div className="unit-text">
                <p>小計</p>
                <p>{pieces} 個</p>
            </div>
            <div className="unit-text">
                <p>合計</p>
                <p>{price} 円</p>
            </div>
        </>
    )
}

export default CartCalculation