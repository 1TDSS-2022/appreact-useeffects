import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { Header, H1, Ul, Li } from './style.jsx'

const Menu =() => {

    const Links = styled(Link)`

        text-decoration: none;
        color: white;
        font-weight: 500;

        &:hover{
            color: #05058d;
        }

    `
   



    return(
        <>
            <Header>
            <H1>Fashion</H1>
                <nav>
                    <Ul> 
                        <Li ><Links to="/">Home</Links></Li>
                        <Li ><Links to="/modaMascuLina">Moda Masculina</Links></Li>
                        <Li ><Links to="/modaFeminina">Moda Feminina</Links></Li>
                        <Li ><Links to="/modaInfatil">Moda Infatil</Links></Li>
                        <Li ><Links to="/sobre">Sobre</Links></Li>
                    </Ul>
                </nav>
            </Header>
        </>
    )
}

export default Menu;