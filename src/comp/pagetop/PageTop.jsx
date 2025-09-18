import React from 'react'
import "./PageTop.scss"

const PageTop = ({title}) => {
  return (
    <>

        <div className=" pagetop_parent bg-img-cover ">
            <div className=" pagetop_cont">
                <h2>{title}</h2>              
            </div>
        </div>
    </>
  )
}

export default PageTop