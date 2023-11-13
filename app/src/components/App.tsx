import CartPage from "./pages/CartPage"
import FavoritePage from "./pages/FavoritePage"
import ProductInformationPage from "./pages/ProductInformationPage"
import ProductPage from "./pages/ProductPage"
import { Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProductPage />}/>
                <Route path="/information" element={<ProductInformationPage />}/>
                <Route path="/favorite" element={<FavoritePage />}/>
                <Route path="/cart" element={<CartPage />}/>
            </Routes>
        </>
    )
}