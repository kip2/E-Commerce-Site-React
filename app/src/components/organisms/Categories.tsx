import { useState } from "react"
import Category from "./Category";
import productList from "../../json/productList.json"

export default function Categories() {
    const [data] = useState(productList)

    return (
        <>
            {
                data.map(products => {
                    return <Category 
                            category={products.category}
                            products={products.products}/>
                })
            }
        </>
    )

}