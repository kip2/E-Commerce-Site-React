import PulldownMenu from "../atoms/PulldownMenu"

type PulldownMenusProps = {
    menus1: string[]
    menus2: string[]
}

const PulldownMenus: React.FC<PulldownMenusProps> = ({ menus1, menus2 }) => {
    return (
        <div>
            <PulldownMenu menus={menus1}/>
            <PulldownMenu menus={menus2}/>
        </div>
    )
}

export default PulldownMenus