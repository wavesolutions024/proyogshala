import React from 'react'
import "./Services.scss"
import PageTop from '../../comp/pagetop/PageTop'
import img1 from "../../assets/image.jpg"

const Services = () => {
  return (
    <>
        
        <PageTop />

        <div className="parent service_parent">
            <div className="cont service_cont row-reverse">
                  <div className="services_wraper row-reverse">
                    <div className="left ">
                        <h3>Service name goes here...</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis cumque neque, iure aspernatur laboriosam commodi ratione perspiciatis eum doloribus voluptas, quia enim saepe! Quod eum, repellendus ullam quae a quos repellendus ullam quae a quos</p>
                    </div>
                    <div className="right">
                        <img src={img1} alt="" />
                    </div>
                </div>

                 <div className="services_wraper">
                    <div className="left">
                        <h3>Service name goes here...</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis cumque neque, iure aspernatur laboriosam commodi ratione perspiciatis eum doloribus voluptas, quia enim saepe! Quod eum, repellendus ullam quae a quos repellendus ullam quae a quos</p>
                    </div>
                    <div className="right">
                        <img src={img1} alt="" />

                    </div>
                </div>

                 <div className="services_wraper row-reverse">
                    <div className="left">
                        <h3>Service name goes here...</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis cumque neque, iure aspernatur laboriosam commodi ratione perspiciatis eum doloribus voluptas, quia enim saepe! Quod eum, repellendus ullam quae a quos repellendus ullam quae a quos</p>
                    </div>
                    <div className="right">
                        <img src={img1} alt="" />

                    </div>
                </div>
            </div>
        </div>
        
        </>
  )
}

export default Services