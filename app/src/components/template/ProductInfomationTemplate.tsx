import Header from "../organisms/Header";
import InformationCard from "../molecules/InfomationCard";
import Button from "../atoms/Button";

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
            <InformationCard 
                {...data}
            />
            <Button 
                caption={"Add Favorite"}
            />
        </>
    )
}

export default ProductInformationTemplate