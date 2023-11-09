import "./Calculation.css"

const Calculation = () => {
    return (
        <>
            <div className="unit-price">
                <p>単価</p>
                <p>円</p>
            </div>
            <div className="unit-price">
                <label>数量</label>
                <input/>
            </div>
            <div className="unit-price">
                <p>合計</p>
                <p>円</p>
            </div>
        </>
    )
}

export default Calculation