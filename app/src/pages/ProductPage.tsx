import Header from "../components/organisms/Header"
import Categories from "../components/organisms/Categories"
import PulldownMenus from "../components/molecules/PulldownMenus"

const menus1 = ["read", "blue", "green"]
const menus2 = ["fishj", "meet", "beve"]

// todo: ソートとフィルタリング用のやつがいる
export default function  ProductPage() {
    return (
        <>
            <Header />
            <PulldownMenus 
                menus1={menus1}
                menus2={menus2}
            />
            <Categories />
        </>
    )
}