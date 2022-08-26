import React from "react";
import Menu from "./components/Menu/Menu";
import './App.css'
import Home from "./components/Home/Home";
import Routers from "./routes/Routers";


const App = () => {
    return(
        <>

        <Menu/>
        <Routers/>
        </>
    )
};

export default App;