import React from "react";
import Slider from "react-slick";


import t_1 from "../assets/images/team_images/t_1.webp";
import t_2 from "../assets/images/team_images/t_2.webp";
import t_3 from "../assets/images/team_images/t_3.webp";
import t_4 from "../assets/images/team_images/t_4.webp";


import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Sliderteam() {
     const member = [
        {
          image: t_1,
          title: "Olivia Park",
          text: "Design Lead",
          Icon: [FaLinkedin, MdOutlineEmail],
        },
        {
          image: t_2,
          title: "Nathan Cole",
          text: "Engineering Lead",
          Icon: [MdOutlineEmail, FaLinkedin],
        },
        {
          image: t_3,
          title: "Priya Sharma",
          text: "Brand Strategist",
          Icon: [MdOutlineEmail, FaLinkedin],
        },
        {
          image: t_4,
          title: "Leo Tanaka",
          text: "Creative Director",
          Icon: [MdOutlineEmail, FaLinkedin],
        },
      ];

 var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
            member.map(({image,title,text,Icon})=>(
                <div >
                    <div>
                        <img className="w-100" src={image} alt="" />
                    </div>
                    <h3 style={{color:'var(--h-text)'}}>{title}</h3>
                    <p>{text}</p>
                    {Icon.map((I)=> <span style={{background:'white',color:'black'}}><I/></span> )}
                </div>
            ))
        }
      </Slider>
    </div>
  );
}

export default Sliderteam;