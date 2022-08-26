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
    
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {imagens.map((obj) => {
          return (
            <div key={obj.id}>
              <img  style={{objectFit: 'cover', height: "600px"}}
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
