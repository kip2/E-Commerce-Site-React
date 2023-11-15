import Category from "./Category";
import { useContext } from "react";
import { ProductContext } from "../App";


export default function Categories() {
    const data = useContext(ProductContext)

    return (
        <section className="categories">
            {
                data.map((category, i) => {
                    return <Category 
                            key={i}
                            category={category.category}
                            products={category.products}/>
                })
            }
        </section>
    )

}