import React from "react";
import Menu from "./components/Menu/Menu";
import './App.css'

import Routers from "./routes/Routers";
import Footer from "./components/Footer/Footer";


const App = () => {
    return(
        <>

        <Menu/>
        <Routers/>
        <Footer/>

        </>
    )
};

export default App;