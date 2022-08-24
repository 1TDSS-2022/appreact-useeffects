import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/users' element={<App/>}/>
                <Route path='/users/:user' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    )
}
