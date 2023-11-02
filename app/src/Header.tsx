import { FaShoppingCart } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import "./Header.css";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="header-text">
                    <h1>Electric Commerce</h1>
                </div>
                <div className="header-icons">
                    <button>
                        <FaShoppingCart color="white" size={30}/>
                    </button>
                    <button>
                        <SlPeople color="white" size={30} />
                    </button>
                </div>
            </div>
        </>
    );
}