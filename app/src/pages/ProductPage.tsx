import Header from "../components/organisms/Header"
import Categories from "../components/organisms/Categories"
import PulldownMenus from "../components/molecules/PulldownMenus"

// todo: sortとfilteringの内容を考える必要がある
// todo: filterはカテゴリーの数だけ実装したいから、先に得たjsonデータからカテゴリーを配列に抜き出したい
const sort = ["read", "blue", "green"]
const filter = ["fish", "meet", "bread"]

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