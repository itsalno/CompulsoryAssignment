import {Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import {Toaster} from "react-hot-toast";
import {DevTools} from "jotai-devtools";
import Navigation from "./Navigation.tsx";
import {useAtom} from "jotai";
import {ThemeAtom} from "../Atoms/ThemeAtom.tsx";
import Home from "./WebPages/Home.tsx";
import PaperList from "./WebPages/PaperList.tsx";
import CartList from "./WebPages/CartList.tsx";
import OrderList from "./WebPages/OrderList.tsx";


const App = () => {

    const [theme, setTheme] = useAtom(ThemeAtom);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    return (<>

        <Navigation/>
        <Toaster position={"bottom-center"}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Papers" element={<PaperList />} />
            <Route path="/Cart" element={<CartList/>}/>
            <Route path="/Orders" element={<OrderList/>}/>
        </Routes>

    </>)
}
export default App;