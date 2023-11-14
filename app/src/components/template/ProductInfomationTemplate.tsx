import Header from "../organisms/Header";
import InformationCard from "../molecules/InformationCard";
import InformationMenu from "../organisms/InformationMenu";
import "./ProductInformationTemplate.css"

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