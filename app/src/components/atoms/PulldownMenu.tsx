const menus = ["read", "blue", "green"]

const PulldownMenu = () => {
    return (
        <>
            <select>
                {menus.map((menu) => {
                    return <option key={menu}>{menu}</option>
                })}
            </select>
        </>
    )

}

export default PulldownMenu