import React from 'react'
import './Contact.css'
import Cimg from '../../assets/contact-img.png'
import Instagram from "../../assets/social/insta.png"
import Linkdin from "../../assets/social/linkdin.png"
import Gmail from "../../assets/social/gmail.png"
import Telegram from "../../assets/social/tele.png"

const Contact = () => {
  return (
    <div>
        <div className="contact-header">
            <div className="contact-title">
                <h1>_________CONTACT ME__________</h1>
            </div>

            <div className="contact-subtitle">
                <h4>Please Fill out the form below to discuss any work opportunity</h4>
            </div>


            <div className="contact-form-box">
            <div className="contact-form">
               
               
               
               <div className="contact-details">
               <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea name='message' rows={5} placeholder='Your Message' className='msg'></textarea>
                <button className='Contact-button'>Submit</button>
               </div>
               
            </div>
           
            

            </div>

            <div className="social-accounts">
                <div className="personal-accounts">
                <a href="https://www.instagram.com/riishita_dixit02/">
                <img src={Instagram} alt="insta" className='socialmedia'/>
                </a>

                <a href="https://www.linkedin.com/in/rishita-dixit-6588a3264/">
                <img src={Linkdin} alt="linkdin" className='socialmedia-link'/>
                </a>

               
                <img src={Gmail} alt="gmail" className='socialmedia-gmail'/>
                
                   
               <a  href="https://t.me/riishiita_02">
               <img src={Telegram} alt="telegram" className='socialmedia-tele'/>
               </a>
            </div>

            
        </div>
      
    </div>
</div>
  )
}

export default Contact
