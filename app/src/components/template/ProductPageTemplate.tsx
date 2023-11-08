import Header from "../organisms/Header"
import Categories from "../organisms/Categories"
import PulldownMenus from "../molecules/PulldownMenus"

type ProductTemplateProps = {
    label1: string
    menus1: string[]
    label2: string
    menus2: string[]
} 

const ProductTemplate: React.FC<ProductTemplateProps> = ({ label1, menus1, label2, menus2})  => {
    return (
        <>
            <Header />
            <PulldownMenus 
                label1={label1}
                menus1={menus1}
                label2={label2}
                menus2={menus2}
            />
            <Categories />
        </>
    )
}

export default ProductTemplate