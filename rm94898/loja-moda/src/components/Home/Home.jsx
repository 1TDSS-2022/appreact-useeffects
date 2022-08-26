import { useEffect,useState } from "react";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    carregaImg();
  }, []);

  const carregaImg = async () => {
    const response = await fetch("./imagens.json");
    const data = await response.json();

    setImagens(data);
  };
  
  imagens.map(obj => {
    console.log(obj)
  })
  
  
  return (
    <div>
      <Carousel autoPlay infiniteLoop autoFocus showThumbs={false} dynamicHeight="40%">
        {imagens.map((obj) => {
          return (
            <div>
              <img
                alt=""
                src={obj.image}
              />
              <p className="legend">{obj.legenda}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Home;
