import { FaShoppingCart } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import "./Header.css";
import IconButton from "./components/atoms/IconButton";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="header-text">
                    <h1>Electric Commerce</h1>
                </div>
                <div className="header-icons">
                    <IconButton icon={<FaShoppingCart color="black" size={30}/>} />
                    <IconButton icon={<SlPeople color="black" size={30}/>} />
                </div>
            </div>
        </>
    );
}