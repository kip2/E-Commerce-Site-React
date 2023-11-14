import Category from "./Category";
import { useContext } from "react";
import { ProductContext } from "../App";


export default function Categories() {
    const data = useContext(ProductContext)

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