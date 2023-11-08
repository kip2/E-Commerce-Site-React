import Header from "../components/organisms/Header"
import Categories from "../components/organisms/Categories"
import PulldownMenus from "../components/molecules/PulldownMenus"

const sort = ["read", "blue", "green"]
const filter = ["fishj", "meet", "beve"]

// todo: ソートとフィルタリング用のやつがいる
export default function  ProductPage() {
    return (
        <>
            <Header />
            <PulldownMenus 
                label1={"Sort"}
                menus1={sort}
                label2={"Filter"}
                menus2={filter}
            />
            <Categories />
        </>
    )
}