import Back from "../assets/theback.png";
import Pic1 from "../assets/Group 33378.png";
import Footer from "./Footer";

const Prediction = () => {
  return (
    <div className="mt-[1070px]">
      <div className="pl-6 flex   items-center relative justify-center">
        <img
          src={Back}
          className="absolute w-[15%] z-[-10] top-[-50px]"
          alt=""
        />
        <h2 className="text-white second left-[620px] text-center mt-5  pb-[50px] text-[30px]">
          Real-time AI Route <br />
          predictions
        </h2>
      </div>
      <div className="relative">
        <img
          src={Pic1}
          className="w-[40%] right-[180px] top-[-70px] absolute "
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default Prediction;
