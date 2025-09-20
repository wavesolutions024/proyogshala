import React from "react";
import "./About.scss";
import PageTop from "../../comp/pagetop/PageTop";
import pic from "../../assets/image.jpg";

const About = () => {
  return (
    <>
      <PageTop title="About Us" />
      <div className="parent about-parent">
        <div className="cont about-cont">
          <p className="top-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className=" parent about-second">
        <div class="cont about-cont">
          <div className="left">
            <img src={pic} alt="" />
          </div>
          <div className="rigth">
            <h3>Heding goes here...</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </p>
            <div className="btn">Know more</div>
          </div>
        </div>
      </div>

      <div className="parent m-v-v-parent">
        <div className="cont m-v-v-cont">
          <div className=" card">
            <img src={pic} alt="" />
            <div className="bottom-content">
              <h3>Our Mission</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>

          <div className=" card">
            <img src={pic} alt="" />
            <div className="bottom-content">
              <h3>Our Mission</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>

          <div className=" card">
            <img src={pic} alt="" />
            <div className="bottom-content">
              <h3>Our Mission</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
