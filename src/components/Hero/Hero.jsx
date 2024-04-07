import React from 'react'


import './Hero.css'
const PDF_FILE_URL='https://my-portfolio-lovat-eta.vercel.app/resume.pdf'
const Hero = () => {
  const downloadFileAtURL = (url) => {
    const fileName= url.split('/').pop();
    const aTag=document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    }

  return (
    <div className='Hero-container'>
     
        <div className="Hero-content">
            <div className="hero-left">
                <h3> Hello ,</h3>
                <h1>I'm RISHITA DIXIT</h1>
                <h3> Unlock the magic in my code! </h3>
                <h4>A Digital Architect transforming lines of code into digital marvels.</h4> 
                <h4>Dive into my portfolio, and let's weave some coding wonders together!</h4>
                {/*<button className='Hero-Hire'> SEE PORTFOLIO</button>*/}
                <button className="resume" onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>
                    Download Resume
                </button>
            </div>

            

            
            

        </div>

        

      
    </div>
  )
}

export default Hero
