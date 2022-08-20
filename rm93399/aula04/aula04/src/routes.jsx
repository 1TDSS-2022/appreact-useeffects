import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Components/Home/index";
import { Api } from "./Components/Api/index";

export const R = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/api' element={<Api />}/>
            </Routes>
        </BrowserRouter>
    )
}