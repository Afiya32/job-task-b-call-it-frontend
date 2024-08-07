import p1 from "../assets/p1.webp"
import p2 from "../assets/p2.webp"
import p3 from "../assets/p3.webp"
import p4 from "../assets/p4.webp"
const Slider = () => {
  return (
    <div className="h-[140vh] bg-black text-white text-lg">
     <div className="ml-10 mt-20 pt-20">
     <h1 > FEATURED </h1>
     <h1>WORK</h1>
     </div>
     <div className="w-5/6 h-44 mt-5 mx-auto">
        {/* slider */}

        <div className="carousel w-full h-[100vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="grid grid-cols-2 justify-center items-center">
        <div className="w-1/2 justify-end text-right font-semibold ">
        <h1 className="text-5xl ml-96 text-right">1/<span className="text-lg">4</span></h1>
        <h1 className="text-9xl text-left">BENJON</h1>
        <h1 className="text-9xl text-right ml-20">WEBSITE</h1>
        <h1 className="text-9xl text-left">2012</h1>
        </div>
        <img
      src={p1} alt="p1"
      className="w-full " />
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <div className="grid grid-cols-2 justify-center items-center">
        <div className="w-1/2 justify-end text-right font-semibold ">
        <h1 className="text-5xl ml-96 text-right">2/<span className="text-lg">4</span></h1>
        <h1 className="text-9xl text-left">BENJON</h1>
        <h1 className="text-9xl text-right ml-20">WEBSITE</h1>
        <h1 className="text-9xl text-left">2012</h1>
        </div>
        <img
      src={p2} alt="p2"
      className="w-full " />
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <div className="grid grid-cols-2 justify-center items-center">
        <div className="w-1/2 justify-end text-right font-semibold ">
        <h1 className="text-5xl ml-96 text-right">3/<span className="text-lg">4</span></h1>
        <h1 className="text-9xl text-left">BENJON</h1>
        <h1 className="text-9xl text-right ml-20">WEBSITE</h1>
        <h1 className="text-9xl text-left">2012</h1>
        </div>
        <img
      src={p3} alt="p3"
      className="w-full " />
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <div className="grid grid-cols-2 justify-center items-center">
        <div className="w-1/2 justify-end text-right font-semibold ">
        <h1 className="text-5xl ml-96 text-right">4/<span className="text-lg">4</span></h1>
        <h1 className="text-9xl text-left">BENJON</h1>
        <h1 className="text-9xl text-right ml-20">WEBSITE</h1>
        <h1 className="text-9xl text-left">2012</h1>
        </div>
        <img
      src={p4} alt="p4"
      className="w-full " />
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
     </div>
    </div>
  );
};

export default Slider;