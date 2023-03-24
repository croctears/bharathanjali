import React from "react";
import "./style.css";

const images = require.context("/public/images/slider", true);

class SliderSection extends React.Component {
  render() {
    return (
      <div id="sliderSection">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
          data-interval="2000"
        >
          <ol class="carousel-indicators">
            {
                images.keys().map((imageName, index) => (
                    <li 
                        data-target="#carouselExampleIndicators" 
                        data-slide-to={index} 
                        class={index === 0 ? "active" : ""}
                    ></li>
                ))
            }
          </ol>

          <div class="carousel-inner">
            {images.keys().map((imageName, index) => {
              imageName = imageName.replace("./", "");
              return (
                <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={index}>
                  <img
                    className="d-block w-100"
                    src={"/images/slider/" + imageName}
                    alt={imageName}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default SliderSection;
