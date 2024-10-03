import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./pages/Product.jsx";
import Header from "./components/Header.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
