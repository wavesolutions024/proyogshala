import React from "react";
import Herosection from "../../comp/herosection/Herosection";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Herosection />
      <div class="about_section_parent parent">
        <div class="about_section_cont cont">
          <div class="left ">
            <div class="floral bg-img-contain">

            </div>

       
          </div>
          <div class="right">
            <div class="section_indi">About Us</div>
            <h1>STAY FIT AND HEALTHY WITH PLATES</h1>

            <div class="description">
              <div class="top">
                <div class="tag">01</div>
                <p>
                  Msenenatis iaculis. Donec a mi enim. Morbi euismod vel dolor
                  vitae congue. Proin vel dui semper, bibendum leo in,pellentesque magna. 
                </p>
              </div>
              <p>
                Duis convallis sodales magna. Fusce eu nisl
                interdum. Msenenatis iaculis. Donec a mi enim. Morbi euismod vel
                dolor vitae congue. Proin vel dui semper, bibendum leo in,
                Msenenatis iaculis. Donec a mi enim. Morbi euismod vel dolor
                vitae congue. Proin vel dui semper, bibendum leo in,
              </p>
            </div>
            <div class="btn">
              Read More
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
