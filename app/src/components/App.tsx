import CartPage from "./pages/CartPage"
import FavoritePage from "./pages/FavoritePage"
import ProductInformationPage from "./pages/ProductInformationPage"
import ProductPage from "./pages/ProductPage"
import NotFoundPage from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"
import { createContext } from "react"
import productList from "../json/productList.json"

export const ProductContext = createContext(productList)

export default function App() {
    return (
        <ProductContext.Provider value={productList}>
            <Routes>
                <Route path="/" element={<ProductPage />}/>
                <Route path="/information/:id" element={<ProductInformationPage />}/>
                <Route path="/favorite" element={<FavoritePage />}/>
                <Route path="/cart" element={<CartPage />}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </ProductContext.Provider>
    )
}