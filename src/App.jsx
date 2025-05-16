import React,{useState} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
    window.onload = function () {
        // Start animation logic here
        document.body.classList.add('start-animation');
    };
    let [showContent , setShowContent] = useState(false)

    useGSAP(() => {

        const tl = gsap.timeline();
        tl.to(".manan", {
            rotate : 10,
            duration: 1.5,
            ease : "circ.InOut",
            transformOrigin: "50% 50%",
        }).to(".manan",{
            scale : 9,
            duration : 1.5,
            delay : -1.3,
            ease : "expo.InOut",
            opacity : 0,
            transformOrigin: "50% 50%",
            onUpdate: function(){
                if(this.progress() > 0.9){
                    document.querySelector(".svg").remove()
                    setShowContent(true)
                    this.kill()
                }
            }
        })
    })
  
    
    useGSAP(() =>{
        if(!showContent) return

        gsap.to(".main", {
            scale: 1,
            rotate: 0,
            duration: 3,
            delay: "-1",
            ease: "Expo.easeInOut",
        });

        gsap.to(".sky",{
            scale: 1.1,
            rotate: 0,
            duration: 3,
            delay: "-2",
            ease: "Expo.easeInOut",
            y:"0"
        })

        gsap.to(".bg", {
            scale: 1.1,
            duration: 3,
            delay: "-1.5",
            ease: "Expo.easeInOut",
            y:"0",

        });

        gsap.to(".profile img",{
            scale:1,
            duration:3,
            delay:"-1",
            ease: "elastic.inOut",
            transformOrigin: "350%",
        })

        gsap.to(".navbar",{
            y: "100%",
            duration: 3,
            delay:-0.25,
            ease: 'power3.in',
        })

        gsap.to(".headings h5",{
            scale:1,
            duration:3,
            delay:-.66,
            ease: "elastic.inOut",
            transformOrigin: "-350%",
        })
        gsap.to(".headings h1",{
            scale:1,
            duration:3,
            delay:-0.33,
            ease: "elastic.inOut",
            transformOrigin: "-350%",
        })
        gsap.to(".headings h4",{
            scale:1,
            duration:3,
            delay:0,
            ease: "elastic.inOut",
            transformOrigin: "-350%",
        })
        gsap.to(".headings-duplicate",{
            scale:1,
            duration:3,
            delay:0.5,
            ease: "elastic.inOut",
        })

        const main = document.querySelector(".main")

        main?.addEventListener("mousemove", function(e) {
            const xMove = (e.clientX / window.innerWidth - 0.5) * 40
            gsap.to(".main .sky" ,{
                x: xMove * 0.8
            })
            gsap.to(".main .bg" ,{
                x: xMove * 1.7
            })
        })
    } , [showContent]);

    return (
        <>
        <div className="svg">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="manan">
                <text
                  x="50%"
                  y="50%"
                  fontSize="150"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  M
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./sky.webp"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
        </div>
        {showContent && 
            
            <div className='main'>
                <div className="landing">
                    <div className="navbar">
                        <div className="left-nav">
                            <span>Manan.</span>
                        </div>
                        <div className="right-nav">
                            <div className="pages">
                                <a href="#" className='page active'>Home</a>
                                <a href="#" className='page'>About Me</a>
                                <a href="#" className='page'>Skills</a>
                                <a href="#" className='page'>Projects</a>
                            </div>
                            <div className="contact">
                                <button className='button'>
                                    <span>Contact Me</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <img className='sky' src="./sky.webp" alt="" />
                    <img className="bg" src="./bg.webp" alt="Background"/>
                    <div className="sec-1-bottom"></div>
                    <div className="sec-1-bottom2"></div>
                    <div className="layer"></div>
                    <div className="details">
                        <div className="headings">
                            <div className="headings-duplicate"></div>
                            <h5>Hello!</h5>
                            <h1>I'M <span className='m'>Manan <br/> Borda</span></h1>
                            <h4>
                                <span className='mern'>MERN</span> Stack Developer
                            </h4>
                        </div>
                        <div className="profile">
                            <img src="./p.webp" alt="" />
                        </div>
                    </div>
                </div>

                <div className="section-2">
                    mananannanananananna
                </div>
            </div>
        }
    
        </>
    )
}

export default App;