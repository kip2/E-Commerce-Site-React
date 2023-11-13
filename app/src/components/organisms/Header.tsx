import { FaShoppingCart } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import "./Header.css";
import IconButtons from "../molecules/IconButtons";
import { useNavigate } from "react-router-dom";


export default function Header() {

    const onLeftButtonClick = () => {
        navigate("/cart");
    }

    const onRightButtonClick = () => {
        navigate("/favorite");
    }

    const navigate = useNavigate()

    return (
        <section className="header-outer">
            <div className="header">
                <div className="header-text">
                    <h1>Electric Commerce</h1>
                </div>
                <div className="header-icons">
                    <IconButtons 
                        leftIcon={
                            <FaShoppingCart color="black" size={30}/>
                        }
                        rightIcon={
                            <SlPeople color="black" size={30}/>
                        }
                        onLeftButtonClick={onLeftButtonClick}
                        onRightButtonClick={onRightButtonClick}
                    />
                </div>
            </div>
        </section>
    );
}