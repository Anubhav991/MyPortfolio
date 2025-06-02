import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import Navbar from "./sections/Navbar"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
const App = () => {
  return (
    <main>
        <div>
            <Navbar/>
            <Hero/>
            <ShowcaseSection/>
            <FeatureCards/>
            <ExperienceSection/>
            <TechStack/>
            <Contact/>
            <Footer/>
        </div>
    </main>
  )
}

export default App