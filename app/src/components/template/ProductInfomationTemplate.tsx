import Header from "../organisms/Header";
import InformationCard from "../molecules/InformationCard";
import InformationMenu from "../organisms/InformationMenu";
import "./ProductInformationTemplate.css"
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../App";

type ProductInformationTemplateProps = {

}

const data = { 
    "id": 1,
    "name": "Cyber Workstation",
    "imgUrl": "./img/desktop1.png",
    "price": 130896,
    "description": "このデスクトップは、プロフェッショナルな映像編集や3Dレンダリングのために特別に設計されました。最新の高速プロセッサーと大容量のRAMを搭載しており、複雑なタスクでもスムーズに対応します。"
}

const ProductInformationTemplate: React.FC<ProductInformationTemplateProps> = () => {
    // const data = useContext(ProductContext)

    // const { id } = useParams()

    // if (!id || isNaN(parseInt(id))) {
    //     return <div>無効なIDです</div>
    // }

    // for (let i = 0; i < data.length; i++) {
    //     if(!data[i].products.find(p => p.id === parseInt(id))) {
    //         const product = (!data[i].products.find(p => p.id === parseInt(id)))
    //     }
    // }
    // const product = data.find(category => category.products.find(p => p.id === parseInt(id)))

    return (
        <div className="outer">
            <Header/>
            <div className="information">
                <InformationCard 
                    {...data}
                />
                <InformationMenu 
                    productName={data.name}
                    price={data.price}
                />
            </div>
        </div>
    )
}

export default ProductInformationTemplate