import ProductTemplate from "../template/ProductPageTemplate"

// todo: sortとfilteringの内容を考える必要がある
// todo: filterはカテゴリーの数だけ実装したいから、先に得たjsonデータからカテゴリーを配列に抜き出したい
const sort = ["-","値段"]
const filter = ["-", "値段", "カテゴリー"]

export default function  ProductPage() {
    return (
        <>
            <ProductTemplate
                label1={"Sort"}
                menus1={sort}
                label2={"Filter"}
                menus2={filter}
            />
        </>
    )
}