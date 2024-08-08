import { FaCheck } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
const CardPart2 = () => {
  return (
    <div className="flex justify-center items-center gap-2 h-[140vh] bg-purple-300 mx-auto">
     <div className="w-1/2 ml-10 text-left">
      <h1 className="font-medium text-base">PRICING TABLE</h1>
     <h1 className="font-bold text-5xl mt-2">BE KIND TO YOUR</h1>
     {/* accorder */}
     <h1 className="font-bold text-5xl mt-2">MIND</h1>
     <div className="mt-2">
     <div className="divider"></div>
     <div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">Design should enrich one day</div>
  <div className="collapse-content">
    <p>Our design services starts and ends with a
         best-in-class experience strategy that builds brands. Through a process 
        of iteration and prototyping design interfaces that bring joy to people</p>
  </div>
</div>
<div className="divider"></div>
<div className="collapse collapse-plus">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">
  Bring their individual experience and creative
  </div>
  <div className="collapse-content">
    <p>
    This is the second `$item's` accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.
    </p>
  </div>
</div>
<div className="divider"></div>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">
  Human centred design to challenges
  </div>
  <div className="collapse-content">
    <p>
    Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people
    </p>
  </div>
</div>
<div className="divider"></div>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">
  Design should enrich our day
  </div>
  <div className="collapse-content">
    <p>
    Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people
    </p>
  </div>
</div>
<div className="divider"></div>
<div className="collapse collapse-plus">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">
  Developing core web application
  </div>
  <div className="collapse-content">
    <p>
    Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people
    </p>
  </div>
</div>
     </div>
     </div>
     {/* card part */}
     <div className="w-1/2 justify-center items-center grid grid-cols-1 relative">
     
     {/* card1 */}
     <div className="bg-black text-white relative w-3/4 rounded-xl mx-auto">
      <div ><button className="bg-red-300 btn w-30 h-2 rounded-xl relative ml-80 -top-3">BEST VALUE</button></div>
      <div className="flex justify-evenly items-end gap-1">
        <div><button className="btn btn-outline border-white text-white rounded-3xl"> YEARLY</button></div>
        <div> <h1 className="text-3xl font-bold">$129<span className="text-lg">.99</span></h1></div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-5">
        <div className="bg-red-300 rounded-xl flex justify-center items-center w-10 h-10 text-black font-bold">
        <FaCheck />
        </div>
        <div className="text-left font-bold mb-5">
            <h1 className="font-bold text-2xl">14 DAYS FREE</h1>
            <h1>Subscription fee is $129.99 USD and </h1>
            <h1>  automatically renews each year.</h1>
        </div>
      </div>
     </div>
     {/* card-2 */}
     <div className="mt-5">
     <div className="bg-white text-black relative w-3/4 rounded-xl mx-auto">
      <div ><button className="bg-red-300 btn w-30 h-2 rounded-xl relative ml-80 -top-3">BEST VALUE</button></div>
      <div className="flex justify-evenly items-end gap-1">
        <div><button className="btn btn-outline border-black text-black rounded-3xl"> YEARLY</button></div>
        <div> <h1 className="text-3xl font-bold">$12<span className="text-lg">.99</span></h1></div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-5">
        <div className="bg-black rounded-xl flex justify-center items-center w-10 h-10 text-white font-bold">
        <FaCheck />
        </div>
        <div className="text-left font-bold mb-5">
            <h1 className="font-bold text-2xl">7 DAYS FREE</h1>
            <h1>Subscription fee is $129.99 USD and </h1>
            <h1>  automatically renews each year.</h1>
        </div>
      </div>
     </div>
     </div>
     <div className='mt-5 ml-10 mb-10  h-44 w-44 text-center border-white flex items-center justify-center rounded-full hover:bg-black hover:text-white bg-white text-black'><button>Try it 
        <br />
        Free Now</button>
      <MdArrowOutward />
      </div>
     <div>

     </div>
     </div>
    </div>
  );
};

export default CardPart2;