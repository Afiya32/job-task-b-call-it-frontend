import logo from "../assets/logo-white-2.webp"
const Footer = () => {
  return (
    <div className="bg-black text-white pb-10">
        {/* part 1 */}
    <div className="flex justify-between gap-5">
    <div className="text-left p-10">
     <div className="mb-5"> <img src={logo} alt="logo" /></div>
      <h1>When do they work well, and when do they</h1>
      <h1>on us and finally, when do we actually need</h1>
      <h1>how can we avoid them.</h1>
    </div>
      <div className="p-36 ">
        <div className="hover:bg-white hover:text-black p-8" >FACEBOOK</div>
        <div className="hover:bg-white hover:text-black p-8" >TWITTER</div>
        <div className="hover:bg-white hover:text-black p-8" >LINKEDIN</div>
        <div className="hover:bg-white hover:text-black p-8" >INSTAGRAM</div>
      </div>
      <div className="p-5 flex justify-center items-center mr-14 font-bold text-7xl">
        <h1 className="bg-gradient-to-r hover:from-lime-400 hover:via-green-400 hover:to-cyan-700 from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">LET'S TALK</h1>
      </div>
    </div>
    {/* part 2 */}
    <div className="flex justify-between items-center ">
        <div>
            <h1>@copyright 2022 - 2025 | Alrights reserved</h1>
            <h1>by Wealcoder</h1>
             </div>
        <div className="flex justify-between items-center gap-10 mr-10 ">
            <h1>ABOUT</h1>
            <h1>CONTACT</h1>
            <h1>CAREER</h1> 
            <h1>FAQs</h1></div>
    </div>
    </div>
  );
};

export default Footer;