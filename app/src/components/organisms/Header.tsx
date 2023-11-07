import { FaShoppingCart } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import "./Header.css";
// import IconButton from "../atoms/IconButton";
import IconButtons from "../molecules/IconButtons";

export default function Header() {
    return (
        <>
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
                    />
                </div>
            </div>
        </>
    );
}