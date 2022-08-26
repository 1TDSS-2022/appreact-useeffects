import { useEffect, useState } from "react";
import { DivContainer, Container, Header, Footer, Hr, H1, Img } from './style.jsx'
const ModaInfantil = () => {


    const [infantil, setGeneroInfantil] = useState([])

    useEffect(() => {
        carregaDados()
    }, [])


    const carregaDados = async () => {
        const response = await fetch("./produtos.json")
        const data = await response.json();
        const categorias = data.map((obj) => {
            return obj.genero.infantil.categoria
        })

        setGeneroInfantil(categorias)
    }



    console.log(infantil)

    return (


        <div>
            <Container>
                <H1>Camisetas</H1>
            </Container>,
            {infantil.map((obj) => {
                return (
                    <Container>
                        {obj.camiseta.map((s) => {
                            return (
                                <DivContainer key={s.id}>
                                    <Header>
                                        <h2>{s.produto}</h2>
                                    </Header>
                                    <div>
                                        <figure>
                                            <Img src={s.image} />
                                        </figure>
                                    </div>
                                    <Footer>
                                        <p>R$ {Number(s.preco).toFixed(2).replace(".", ",")}</p>
                                    </Footer>
                                </DivContainer>
                            )
                        })}
                    </Container>
                )
            })}
            <Hr />

            <Container>
                <H1>Tênis</H1>
            </Container>,
            {infantil.map((obj) => {
                return (
                    <Container>
                        {obj.tenis.map((s) => {
                            return (
                                <DivContainer key={s.id}>
                                    <Header>
                                        <h2>{s.produto}</h2>
                                    </Header>
                                    <div>
                                        <figure>
                                            <Img src={s.image} />
                                        </figure>
                                    </div>
                                    <Footer>
                                        <p>R$ {Number(s.preco).toFixed(2).replace(".", ",")}</p>
                                    </Footer>
                                </DivContainer>
                            )
                        })}
                    </Container>


                )
            })}
            <Hr />
            <Container>
                <H1>Camisetas</H1>
            </Container>,
            {infantil.map((obj) => {
                return (
                    <Container>
                        {obj.mochilas.map((s) => {
                            return (
                                <DivContainer key={s.id}>
                                    <Header>
                                        <h2>{s.produto}</h2>
                                    </Header>
                                    <div>
                                        <figure>
                                            <Img src={s.image} />
                                        </figure>
                                    </div>
                                    <Footer>
                                        <p>R$ {Number(s.preco).toFixed(2).replace(".", ",")}</p>
                                    </Footer>
                                </DivContainer>
                            )
                        })}
                    </Container>


                )
            })}
        </div>
    );
};

export default ModaInfantil;
