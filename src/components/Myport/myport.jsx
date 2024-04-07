import React, { Component } from "react";
import './myport.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/myprojects/img1.png";
import Img2 from "../../assets/myprojects/img2.png";
import Img3 from "../../assets/myprojects/img3.png";
import Img4 from "../../assets/myprojects/img4.png";
import Img5 from "../../assets/myprojects/img5.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      centerMode: true,
      
      focusOnSelect: true,
      
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
      
    };
    
    return (
      <div className="work-container">
        <div className="work-header">
            <h1>_________My Portfolio__________</h1>
            <div className="work-subtitle">
            <p className='p1'>"Step into my portfolio, where each project unfolds a distinctive tale of creativity and dedication.</p>
            <p className='p2'>Take a visual journey through my work, showcasing a commitment to delivering design solutions  that</p>
            <p className='p3'> not only meet but surpass expectations, capturing the essence of individual craftsmanship."</p>
            </div>

        </div>
        
        <Slider {...settings}>
          <div className="project">
          <img src={Img2} alt="Img2" className='img'/>
            <span>Digital Marketing Website using React Js</span>
        
          </div>
          <div className="project">
            <a href="https://github.com/rishita0210/REGISTRATION-SYSTEM.git">
            <img src={Img3} alt="Img3" className='img'/>
            <span>Hostel Management Portal</span>
            </a>
          
            
          </div>
          <div className="project">
          <img src={Img1} alt="Img1" className='img'/>
            <span>Amazon clone  using HTML and CSS</span>
          </div>

          <div className="project">
          <img src={Img4} alt="Img4" className='img'/>
            <span>Eccomerce website using HTML,CSS and JavaScript</span>
            
          </div>

          <div className="project">
          <img src={Img5} alt="Img4" className='img'/>
            <span>QR Generator</span>
            
          </div>
          
        </Slider>

      
       


        
      </div>


    );
  }
}