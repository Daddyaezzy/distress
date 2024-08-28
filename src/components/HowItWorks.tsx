import Pic1 from "../assets/Frame 8.png";
import Pic2 from "../assets/Frame 9.png";
import Pic3 from "../assets/Frame 10.png";

const HowItWorks = () => {
  return (
    <div id="howItWorks" className="pt-[135px] h-full  pl-[350px]">
      <h2 className="text-white second pl-[50px] pb-[50px] text-[30px]">
        How it works
      </h2>
      <div className="relative">
        <img src={Pic3} alt="" className="absolute left-[60px] w-[25%]" />
        <img
          src={Pic2}
          alt=""
          className="absolute top-[180px] w-[25%] left-[470px]"
        />
        <img
          src={Pic1}
          alt=""
          className="absolute w-[24%] left-[270px] top-[480px]"
        />
        <h2
          id="sellingPoint"
          className="text-white absolute second left-[620px] top-[880px] text-right pb-[50px] second text-[30px]"
        >
          Our selling <br /> point
        </h2>
      </div>
    </div>
  );
};

export default HowItWorks;
