import React from "react";
import "./Services.scss";
import PageTop from "../../comp/pagetop/PageTop";
import img1 from "../../assets/image.jpg";
import { MdCurrencyRupee } from "react-icons/md";

const Services = () => {
  return (
    <>
      <PageTop />

      <div className="parent service_parent">
        <div className="cont service_cont row-reverse">
          <h2>Heading goes here...</h2>
          <div className="services_wraper row-reverse">
            <div className="left ">
              <h3>Service name goes here...</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                cumque neque, iure aspernatur laboriosam commodi ratione
                perspiciatis eum doloribus voluptas, quia enim saepe! Quod eum,
                repellendus ullam quae a quos repellendus ullam quae a quos
              </p>
            </div>
            <div className="right">
              <img src={img1} alt="" />
            </div>
          </div>

          <div className="services_wraper">
            <div className="left">
              <h3>Service name goes here...</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                cumque neque, iure aspernatur laboriosam commodi ratione
                perspiciatis eum doloribus voluptas, quia enim saepe! Quod eum,
                repellendus ullam quae a quos repellendus ullam quae a quos
              </p>
            </div>
            <div className="right">
              <img src={img1} alt="" />
            </div>
          </div>

          <div className="services_wraper row-reverse">
            <div className="left">
              <h3>Service name goes here...</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                cumque neque, iure aspernatur laboriosam commodi ratione
                perspiciatis eum doloribus voluptas, quia enim saepe! Quod eum,
                repellendus ullam quae a quos repellendus ullam quae a quos
              </p>
            </div>
            <div className="right">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="parent pricing-parent">
        <div className="cont pricing-cont">
          <h2>Heading goes here...</h2>

          <div class="main">
            <div className="cards-wrap">
              <div className="top">
                <h3>Beginner</h3>
                <div className="price">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <h3>92</h3>
                </div>
                <p>Price per week</p>
              </div>
              <div className="content">
                <p>Increased Flexibility</p>
                <p>Cardio and Circulator Health</p>
                <p>Protection from Injury</p>
              </div>

              <div class="btn">Buy Now</div>
            </div>

            <div className="cards-wrap">
              <div className="top">
                <h3>Advanced</h3>
               <div className="price">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <h3>290</h3>
                </div>
                <p>Price per week</p>
              </div>
              <div className="content">
                <p>Increased Flexibility</p>
                <p>Cardio and Circulator Health</p>
                <p>Protection from Injury</p>
              </div>

              <div class="btn">Buy Now</div>
            </div>

            <div className="cards-wrap">
              <div className="top">
                <h3>Private</h3>
                <div className="price">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <h3>490</h3>
                </div>

                <p>Price per week</p>
              </div>
              <div className="content">
                <p>Increased Flexibility</p>
                <p>Cardio and Circulator Health</p>
                <p>Protection from Injury</p>
              </div>

              <div class="btn">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
