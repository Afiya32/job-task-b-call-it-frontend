import { MdArrowOutward } from "react-icons/md";
import z1 from "../assets/z1.webp";
import z2 from "../assets/z2.jpg"
const JaurnalPart = () => {
  return (
    <div className="bg-white text-black grid grid-cols-1 mx-auto items-center justify-center mt-2">
      {/* text part */}
      <div className="flex justify-center items-center">
       <div>
       <h1 className="font-medium text-lg">RECENT BLOG</h1>
        <h1 className="font-bold text-5xl mt-2">READ UPDATED</h1>
        <h1 className="font-bold text-5xl">JOURNAL</h1>
        <div className="font-medium text-lg mt-32 ml-32">
            <h1>Read our blog and try to see everything</h1>
            <h1>from every perspective. Our passion lies</h1>
            <h1>in making everything accessible and</h1>
            <h1>aesthetic for everyone.</h1>
        </div>
       </div>
      </div>
      {/* card part */}
      <div className="flex justify-center items-center gap-40 mt-5">
         <div>
               {/* card1 */}
               <div className="w-3/4 h-64 relative right-36 top-9 ">
                <img src={z1} alt="z1" />
               </div>
               <div className="p-5 bg-white absolute">
                   <h1>UI Design . 02 May 2019</h1>
                   <h1 className="text-2xl font-bold">How to bring fold to your</h1>
                   <h1 className="text-2xl font-bold">startup company with </h1>
                   <h1 className="text-2xl font-bold">Axtra</h1>
               <div className="divider mt-5"></div>
               <div>
                <h1>READ MORE  <MdArrowOutward /></h1>
                
               </div>
               </div>
         </div>
         <div>
               {/* card1 */}
               <div className="w-3/4 h-64 relative right-36 top-9 ">
                <img src={z2} alt="z2" />
               </div>
               <div className="p-5 bg-white absolute">
                   <h1>UI Design . 02 May 2019</h1>
                   <h1 className="text-2xl font-bold">How to bring fold to your</h1>
                   <h1 className="text-2xl font-bold">startup company with </h1>
                   <h1 className="text-2xl font-bold">Axtra</h1>
               <div className="divider mt-5"></div>
               <div>
                <h1>READ MORE  <MdArrowOutward /></h1>
                
               </div>
               </div>
         </div>
       
      </div>
      <div>

      </div>
    </div>
  );
};

export default JaurnalPart;