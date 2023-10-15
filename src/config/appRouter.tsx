import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../Addtocart/product";
import Cart from "../Addtocart/cart";

export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Product />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}