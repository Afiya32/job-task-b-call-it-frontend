
import Brand from "../component/Brand";
import CardPart from "../component/CardPart";
import Services from "../component/Services";
import TaxtBanner from "../component/taxtBanner";

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
    </div>
  );
};

export default Hompage;