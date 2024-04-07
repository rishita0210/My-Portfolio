import React from 'react'
import './Contact.css'
import Git from "../../assets/social/git.png"
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

           


           <div className="social-accounts">
           <div className="contact-subtitle">
              
              <h1> Let's Start a</h1>
              <h1> Project Together</h1>
          </div>
                <div className="personal-accounts">
                    <a href="https://www.instagram.com/riishita_dixit02/" className='socialll'>
                        <div className="insta-img">
                            <img src={Git} alt="git" className='socialmedia' />

                        </div>
                        
                    </a>



                    <a href="https://www.linkedin.com/in/rishita-dixit-6588a3264/" className='socialll'>
                        <div className="linkdin-img">
                        <img src={Linkdin} alt="linkdin" className='socialmedia-link'/>
                            

                        </div>
                       
                    </a>


                    <a href="https://www.linkedin.com/in/rishita-dixit-6588a3264/" className='socialll'>
                        <div className="Gmail-img">
                        <img src={Gmail} alt="gmail" className='socialmedia-gmail'/>
                            

                        </div>
                       
                    </a>


                    <a href="https://t.me/riishiita_02" className='socialll'>
                        <div className="tele-img">
                        <img src={Telegram} alt="telegram" className='socialmedia-tele'/>
                            

                        </div>
                      
                    </a>

              
            </div>

            
        </div>
      
    </div>

    
</div>
  )
}

export default Contact
