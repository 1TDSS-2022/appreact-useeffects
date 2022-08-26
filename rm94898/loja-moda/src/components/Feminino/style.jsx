
import styled from "styled-components"


export const DivContainer = styled.div`

    background-color: #5150559d;
    width: 260px;
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px #0000006b;
    transition: all .2s ease-in-out;

    &:hover{
      background: rgba(43, 43, 43, 0.644);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: 1px 2px 13px #00000061;
    cursor: pointer;
    }

  `
export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;

  `

export const Img = styled.img`

      width: 200px;
      object-fit: cover;
`


export const Header = styled.header`
      text-align: center;
      font-size: 12px;
      position: relative;
      margin-bottom: 10px;

`

export const H1 = styled.h1`
      font-size: 25px;
      color: #636363;
      margin-top: 10px;
`

export const Footer = styled.footer`
      text-align: center;
      font-size: 20px;
      margin-top: 10px;

`

export const Hr = styled.hr`
      margin-top: 50px;
      border: 0;
      height: 1px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0));

`

