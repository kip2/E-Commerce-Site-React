export default function PulldownMenu ( menus: string[] ) {
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
