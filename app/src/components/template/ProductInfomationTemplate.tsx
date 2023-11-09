import Header from "../organisms/Header";
import InformationCard from "../molecules/InfomationCard";
import InformationMenu from "../organisms/InformationMenu";
import "./ProductInformation.css"

type ProductInformationTemplateProps = {

}

const data = { 
    "name": "Cyber Workstation",
    "imgUrl": "./img/desktop1.png",
    "price": 130896,
    "description": "このデスクトップは、プロフェッショナルな映像編集や3Dレンダリングのために特別に設計されました。最新の高速プロセッサーと大容量のRAMを搭載しており、複雑なタスクでもスムーズに対応します。"
}

const ProductInformationTemplate: React.FC<ProductInformationTemplateProps> = () => {
    return (
        <>
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
        </>
    )
}

export default ProductInformationTemplate