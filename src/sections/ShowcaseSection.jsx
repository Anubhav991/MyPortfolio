import { useRef } from "react"
import gsap from "gsap";
import ScrollTrigger  from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const Project1Ref = useRef(null);
    const Project2Ref = useRef(null);
    const Project3Ref = useRef(null);

    const projects = [Project1Ref.current , Project2Ref.current , Project3Ref.current];``
    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [Project1Ref.current, Project2Ref.current, Project3Ref.current];

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              y: 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 0.3 * (index + 1),
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
              },
            }
          );
        });
      }, []);

  return (
    <div id="work" className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                <div className='first-project-wrapper' ref={Project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/anulance.png" alt="Ryde" />
                    </div>
                    <div className='text-content'>
                        <h2>A freelance platform where clients can post jobs and freelancers can express interest.</h2>
                        <p>Anulance is a freelance web application built with the MEN stack (MongoDB, Express.js, Node.js). It allows clients to post jobs and freelancers to connect with them. It features real-time chat using Socket.io, session-based authentication, and plans for file upload support with Multer.</p>
                    </div>
                </div>
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={Project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/SAE.png" />
                        </div>
                        <h2>SAE Practice Website</h2>
                    </div>
                    <div className='project' ref={Project3Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/jktyre-logo.png" />
                        </div>
                        <h2>Ongoing project</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection