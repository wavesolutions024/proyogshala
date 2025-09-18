import React from 'react'
import "./Contact.scss"
import PageTop from '../../comp/pagetop/PageTop'
import { CiLocationOn } from "react-icons/ci";
import { LuHeadphones } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
    return (
        <>
            <PageTop title="Contact Us" />
            <div className="parent contact-parent">
                <div className="cont contact-cont">

                    <div className="top">
                        <div className="connect-wrap">
                            <span><CiLocationOn /></span>
                            <h3>Address</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                        </div>

                        <div className="connect-wrap">
                            <span><LuHeadphones /></span>
                            <h3>Let's Talk</h3>
                            <p>+91 9856235894</p>
                        </div>

                        <div className="connect-wrap">
                            <span><MdOutlineMail /></span>
                            <h3>Email Address</h3>
                            <p>info@gmail.com</p>
                        </div>
                    </div>
                    <div className="bottom">

                        <h3>Get in touch with us</h3>

                        <form action="">


                            <div className="row">
                                <input type="text" placeholder="First name" />
                                <input type="text" placeholder="Last name" />
                            </div>
                            <div className="row">
                                <input type="text" placeholder="Mobile number" />
                                <input type="email" placeholder="Email address" />
                            </div>
                            <textarea placeholder="Message"></textarea>
                            <button className='btn' type="submit">Send Message</button>



                        </form>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Contact