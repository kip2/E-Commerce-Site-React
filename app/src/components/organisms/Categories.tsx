import { useState } from "react"
import Category from "./Category";
import productList from "../../json/productList.json"

export default function Categories() {
    const [data] = useState(productList)

    return (
        <section className="categories">
            {
                data.map((products, i) => {
                    return <Category 
                            key={i}
                            category={products.category}
                            products={products.products}/>
                })
            }
        </section>
    )

}