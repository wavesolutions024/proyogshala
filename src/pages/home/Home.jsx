import React from "react";
import Herosection from "../../comp/herosection/Herosection";
import "./Home.scss";
import image1 from "../../assets/dummy_icon.png";
import Ustrasana from "../../assets/yoga_types/Ustrasana.png";
const Home = () => {
  return (
    <>
      <Herosection />
      <div class="about_section_parent parent">
        <div class="about_section_cont cont">
          <div class="left ">
            <div class="floral bg-img-contain"></div>

            <img src={image1} alt="" />
          </div>
          <div class="right">
            <div class="section_indi">About Us</div>
            <h1>STAY FIT AND HEALTHY WITH PLATES</h1>

            <div class="description">
              <div class="top">
                <div class="tag">01</div>
                <p>
                  Msenenatis iaculis. Donec a mi enim. Morbi euismod vel dolor
                  vitae congue. Proin vel dui semper, bibendum leo
                  in,pellentesque magna.
                </p>
              </div>
              <p>
                Duis convallis sodales magna. Fusce eu nisl interdum. Msenenatis
                iaculis. Donec a mi enim. Morbi euismod vel dolor vitae congue.
                Proin vel dui semper, bibendum leo in, Msenenatis iaculis. Donec
                a mi enim. Morbi euismod vel dolor vitae congue. Proin vel dui
                semper, bibendum leo in,
              </p>
            </div>
            <div class="btn">Read More</div>
          </div>
        </div>
      </div>

      <div class="yoga_types_parent parent">
        <div class="yoga_types_cont cont">
          <div class="left">
            <h3>YOGA TYPES / YOGA POSITIONS</h3>
            <div class="types">
              <div class="left">
                <div class="type">
                  <div class="icon">
                    <img src={Ustrasana} alt="" />
                  </div>
                  <div class="content">
                    <h4>1. Ustrasana Yoga</h4>
                    <p>5 reps 7 minutes</p>
                  </div>
                </div>
                <div class="type">
                  <div class="icon">
                    {" "}
                    <img src={Ustrasana} alt="" />
                  </div>
                  <div class="content">
                    <h4>2. Veerasana Yoga</h4>
                    <p>5 reps 7 minutes</p>
                  </div>
                </div>
                <div class="type">
                  <div class="icon">
                    {" "}
                    <img src={Ustrasana} alt="" />
                  </div>
                  <div class="content">
                    <h4>3. Chakrasana Yoga</h4>
                    <p>5 reps 7 minutes</p>
                  </div>
                </div>
                <div class="type">
                  <div class="icon">
                    {" "}
                    <img src={Ustrasana} alt="" />
                  </div>
                  <div class="content">
                    <h4>4. Ustrasana Yoga</h4>
                    <p>5 reps 7 minutes</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="type">
                  <div class="icon">
                    {" "}
                    <img src={Ustrasana} alt="" />
                  </div>
                  <div class="content">
                    <h4>5. Bakasana Yoga</h4>
                    <p>5 reps 7 minutes</p>
                  </div>
                </div>
                <div class="type">
                  <div class="icon">
                    {" "}
                    <img src={Ustrasana} alt="" />
                  </div>
                  <div class="content">
                    <h4>6. Kripalu Yoga</h4>
                    <p>5 reps 7 minutes</p>
                  </div>
                </div>
                <div class="type">
                  <div class="icon">
                    {" "}
                    <img src={Ustrasana} alt="" />
                  </div>
                  <div class="content">
                    <h4>7. Hatha Yoga</h4>
                    <p>5 reps 7 minutes</p>
                  </div>
                </div>
                <div class="type">
                  <div class="icon">
                    {" "}
                    <img src={Ustrasana} alt="" />
                  </div>
                  <div class="content">
                    <h4>8. Vinyasa Yoga</h4>
                    <p>5 reps 7 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="right">
            <div class="image"></div>
          </div>
        </div>

        <div class="left_panel"></div>
      </div>
    </>
  );
};

export default Home;
