
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 const Home = () => {

    const[imagens, setImagens] = useState([])

    useEffect( () => {
        carregaImg()
    }, [])

    
    
    const carregaImg = async() => {
        const response =  await fetch('./imagens.json') 
        const data = await response.json();
        
        setImagens(data)
    }
    
    console.log(imagens)

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"

    }
    return (
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>

            
           {imagens.map((i) => 
            <div>
                <img src={i.image} alt="" />
            </div>
           )}
        
     
        </Slider>
      </div>
     
    );
  
    
    }

    export default Home;

