import React from "react";
import "./Herosection.scss";
import hero_image from "../../assets/hero_model.png"
const Herosection = () => {
  return (
    <>
      <div class="herosection_parent parent bg-img-cover">
        <div class="herosection_cont cont">
          <div class="left">
            <h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur elit.{" "}
              </span>
              Officiis, ipsa.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              soluta labore, quibusdam accusamus commodi iste magnam qui ea
              necessitatibus quidem, debitis quisquam? Iusto aliquam aut
              asperiores nisi tempora sit laborum.
            </p>
            <div class="btn">Know More</div>
          </div>
          <div class="right">
            <img src={hero_image} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
