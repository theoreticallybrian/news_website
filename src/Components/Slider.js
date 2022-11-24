import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { useEffect, useState } from "react";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function Slider() {
  const [slider, setSlider] = useState([]);

  const getSlider = () => {
    fetch("http://127.0.0.1:8090/api/collections/slider/records")
      .then((res) => res.json())
      .then((json) => {
        setSlider(json.items);

      });
  };

  useEffect(() => {
    getSlider()
  }, []);

  const baseUrl = "http://127.0.0.1:8090/api/files/slider";

  return (
    <HeroSlider
      height={"60vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        /* onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)*/
      }}
    >{slider.map(slider=>(
      <>
<Slide
        shouldRenderMask
        label={slider.label}  
className="slide"        background={{
          backgroundImage: `url(${baseUrl}/${slider.id}/${slider.slider_image})`,
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
          backgroundSize: "cover",
    
        }}
      />
      <MenuNav />

      </>
    ))}


    </HeroSlider>
  );
}
