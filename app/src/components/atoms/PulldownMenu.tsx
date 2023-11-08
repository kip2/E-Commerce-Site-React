type PulldownMenuProps = {
    menus: string[]
}

const PulldownMenu: React.FC<PulldownMenuProps> = ({ menus }) => {
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