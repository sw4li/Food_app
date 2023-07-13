import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import Category from "./Category";
import Header from "./Header";
import { AllMenus } from "./AllMenuContext";
import Checkout from "./Checkout";
import { AppProvider } from "../context/AppProvider";
import Footer from "./Footer/Footer";

function Menus() {

    return (
        <AppProvider>
            <Header />
            <Routes>
                    {/* Homepage */}
                <Route exact path="/"
                    element={
                        <>
                            <Hero />
                            <AllMenus>
                                <SpecialDishes />
                                <Category />
                            </AllMenus>
                        </>
                    } />

                {/* checkout page */}
                <Route path="checkout" element={<Checkout />} />
            </Routes>
            <Footer/>
        </AppProvider>
    )

}
export default Menus