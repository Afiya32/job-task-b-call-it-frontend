
import Brand from "../component/Brand";
import TaxtBanner from "../component/taxtBanner";

const Hompage = () => {
  return (
    <div>
     <div><TaxtBanner/></div>
     <div className="mt-80">
        <Brand/>
      </div>
    </div>
  );
};

export default Hompage;