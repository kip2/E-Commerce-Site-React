import "./PulldownMenu.css"

type PulldownMenuProps = {
    label: string
    menus: string[] | number[]
}

const PulldownMenu: React.FC<PulldownMenuProps> = ({ label, menus }) => {
    return (
        <div className="pulldown-menu">
            <label>{label}</label>
            <select className="select-block">
                {menus.map((menu) => {
                    return <option key={menu}>{menu}</option>
                })}
            </select>
        </div>
    )
}

export default PulldownMenu