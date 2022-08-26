import React from 'react'
import Menu from './components/menu/Menu'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/footer/Footer'

export default function App(){
    return(
        <>
            <Menu/>
            <MainRoutes/>
            <Footer/>
        </>
    )
}