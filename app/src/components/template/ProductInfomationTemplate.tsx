import Header from "../organisms/Header";
import InformationCard from "../molecules/InformationCard";
import InformationMenu from "../organisms/InformationMenu";
import "./ProductInformationTemplate.css"
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../App";

type ProductInformationTemplateProps = {

}


const ProductInformationTemplate: React.FC<ProductInformationTemplateProps> = () => {
    const data = useContext(ProductContext)

    const { id } = useParams()

    if (!id || isNaN(parseInt(id))) {
        return <div>無効なIDです</div>
    } 

    const product = data.find(data => data.id === parseInt(id))

    if (!product) {
        return <div>製品が見つかりません</div>
    }

    return (
        <div className="outer">
            <Header/>
            <div className="information">
                <InformationCard 
                    name={product.name}
                    imgUrl={product.imgUrl}
                    price={product.price}
                    description={product.description}
                />
                <InformationMenu 
                    productName={product.name}
                    price={product.price}
                />
            </div>
        </div>
    )
}

export default ProductInformationTemplate