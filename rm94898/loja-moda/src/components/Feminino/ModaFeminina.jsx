import { useEffect, useState } from "react";
import { DivContainer, Container, Header, Footer, Hr, H1, Img } from './style.jsx'
const ModaFeminina = () => {


    const [infantil, setGeneroInfantil] = useState([])

    useEffect(() => {
        carregaDados()
    }, [])


    const carregaDados = async () => {
        const response = await fetch("./produtos.json")
        const data = await response.json();
        const categorias = data.map((obj) => {
            return obj.genero.feminino.categoria
        })

        setGeneroInfantil(categorias)
    }



    console.log(infantil)

    return (


        <div>
            <Container>
                <H1>Vestidos</H1>
            </Container>,
            {infantil.map((obj) => {
                return (
                    <Container>
                        {obj.vestidos.map((s) => {
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
                <H1>Sandálias</H1>
            </Container>,
            {infantil.map((obj) => {
                return (
                    <Container>
                        {obj.sandalias.map((s) => {
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
                <H1>Aneis</H1>
            </Container>,
            {infantil.map((obj) => {
                return (
                    <Container>
                        {obj.aneis.map((s) => {
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

export default ModaFeminina;
