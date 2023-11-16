import Category from "./Category";
import { useContext } from "react";
import { ProductContext, CategoryContext } from "../App";


export default function Categories() {
    const productList = useContext(ProductContext)
    const categories = useContext(CategoryContext)

    return (
        <section className="categories">
            {
                categories.map((category, i) => {
                    return <Category 
                            key={i}
                            category={category}
                            products={
                                productList.filter(product => product.category === category)
                            }/>
                })
            }
        </section>
    )

}