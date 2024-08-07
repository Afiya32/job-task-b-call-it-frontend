
import Brand from "../component/Brand";
import CardPart from "../component/CardPart";
import HorizontalScroll from "../component/HorizatalPart";
import Services from "../component/Services";
import Slider from "../component/Slider";
import TaxtBanner from "../component/taxtBanner";
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"
import CardPart2 from "../component/CardPart2";
import JaurnalPart from "../component/JaurnalPart";
import Footer from "../component/Footer";

const images=[c1,c2,c3,c4]

const Hompage = () => {
  return (
    <div>
     <div><TaxtBanner/></div>
     <div className="mt-80">
        <Brand/>
      </div>
      <div>
        <CardPart/>
      </div>
      <div><Services/></div>
      <div><Slider/></div>
      <div className="mt-5">
        <HorizontalScroll images={images}/>
      </div>
      <div className="mt-2">
        <CardPart2/>
      </div>
      <div className="mt-5">
        <JaurnalPart/>
      </div>
     <div className="mt-96">
      <Footer/>
     </div>
    </div>
  );
};

export default Hompage;