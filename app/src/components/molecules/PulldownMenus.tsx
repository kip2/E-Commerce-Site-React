import PulldownMenu from "../atoms/PulldownMenu"

type PulldownMenusProps = {
    label1: string
    menus1: string[]
    label2: string
    menus2: string[]
}

const PulldownMenus: React.FC<PulldownMenusProps> = ({ label1, menus1, label2 ,menus2 }) => {
    return (
        <div>
            <PulldownMenu 
                label={label1}
                menus={menus1}
            />
            <PulldownMenu
                label={label2}
                menus={menus2}
            />
        </div>
    )
}

export default PulldownMenus