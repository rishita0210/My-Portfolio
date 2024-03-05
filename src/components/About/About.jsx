import React from 'react'

import Html from "../../assets/html.png"
import Css from '../../assets/css.png'
import Js from '../../assets/image-removebg-preview.png'
import Rjs from '../../assets/React_Logo_SVG.svg.png'
import "./About.css"

const About = () => {
  return (
    <div className='About-container'>
        <div className="skiils-container">
            <div className="what-I-do">
                <h1>__________What I do___________</h1>
                <h3>As a frontend web developer, </h3>
                <h4 >I have a keen eye for design and expertise in HTML, CSS, and JavaScript .I specialize in sculpting engaging and responsive </h4>
                <h4 > user interfaces. I ensure that websites not only look appealing but also deliver a seamless and good delightful user experience.</h4>
               
                     
                
                
            </div>

            <div className="skill-bar">
                <div className="skill-set">
                    <div className='HTML'>
                        <img src={Html} alt="html" className='skill'/>
                        <h4>HTML</h4>
                    </div>

                    <div className='HTML'>
                        <img src={Css} alt="css" className='skill'/>
                        <h4>CSS</h4>
                    </div>

                    <div className='HTML'>
                        <img src={Js} alt="js" className='skill'/>
                        <h4>JAVA SCRIPT</h4>
                    </div>

                    <div className='HTML'>
                        <img src={Rjs} alt="rjs" className='skill'/>
                        <h4>REACT JS</h4>
                    </div>

                   
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
