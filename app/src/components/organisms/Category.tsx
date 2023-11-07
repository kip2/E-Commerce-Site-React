import ProductCard from "../molecules/ProductCard"
import "./Category.css"

type Products = {
    imgUrl: string
    name: string
    price: number
    description: string
}

type Category = {
    category: string
    products: Products[]
}

export default function Category ({ category, products}: Category){

    return (
        <div className="category">
            <h2>{category}</h2>
            <div className="container">
                {
                    products.map((product, i) => {
                        return (
                            <ProductCard 
                                key={i}
                                {...product}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
} 
