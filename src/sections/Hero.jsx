import { words } from "../constants"
import Button from "../components/Button"
import Heroexperience from "../components/HeroModels/Heroexperience"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Animatedcounter from "../components/Animatedcounter";
const Hero = () => {
    useGSAP(()=>{
        gsap.fromTo('.hero-text h1',
            {
                y:50,
                opacity:0
            },
            {
                y:0,
                opacity:1,
                stagger:0.5,
                duration:1.5,
                ease: 'power2.inOut'
            },
        )
    })
  return (
    <section id="hero" className="relative overflow-hidden">
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className='hero-layout'>
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>Translating 
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word)=>(
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1> into impact -</h1>
                        <h1>one project at a time</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                        Hi, I am Anubhav a developer based in India , UP with passion for coding.
                    </p>
                    <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="see my work" />
                </div>

            </header>
            <figure>
                <div className="hero-3d-layout">
                    <Heroexperience />
                </div>
            </figure>
        </div>
        <Animatedcounter/>
    </section>
  )
}

export default Hero