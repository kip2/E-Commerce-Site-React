import "./Calculation.css"

type CalculationProps = {
    price: number
}

// todo: 数量の入力に対したuseEffectが必要になる
// todo: 単価を自動で取得して表示するようにする

const Calculation: React.FC<CalculationProps> = ({price}) => {
    return (
        <>
            <div className="unit-price">
                <p>単価</p>
                <p>{price} 円</p>
            </div>
            <div className="unit-price">
                <label>数量</label>
                <input 
                    className="calculation-input"
                    placeholder="注文数"
                />
            </div>
            <div className="unit-price">
                <p>合計</p>
                <p>{price} 円</p>
            </div>
        </>
    )
}

export default Calculation