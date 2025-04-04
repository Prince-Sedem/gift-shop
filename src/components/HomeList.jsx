import Home from "../pages/Home";
import About from "./About";
import FeaturedGifts from "./FeaturedGifts";
import MapSection from "./MapSection";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";



function HomeList () {
    return(
        <div>
            <Home />
            <FeaturedGifts />
            <About />
            <WhyChooseUs />
            <Testimonial />
            <MapSection />
        </div>
  
    );
  } 
  export default HomeList;