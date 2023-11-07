import ProductCard from "../molecules/ProductCard"

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
        <div >
            <h2>{category}</h2>
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
    )
} 
