import { FaShoppingCart } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import "./Header.css";
import IconButton from "./IconButton";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="header-text">
                    <h1>Electric Commerce</h1>
                </div>
                <div className="header-icons">
                    <IconButton icon={<FaShoppingCart color="white" size={30}/>} />
                    <IconButton icon={<SlPeople color="white" size={30}/>} />
                </div>
            </div>
        </>
    );
}