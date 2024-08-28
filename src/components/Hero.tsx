import Phone1 from "../assets/iPhone.png";
import Phone3 from "../assets/iPhone-1.png";
import Phone2 from "../assets/iPhone-2.png";
import Back from "../assets/theback.png";
import Connect from "../assets/Vector 142.png";
import MapImg from "../assets/Web(4) 1.png";

const Hero = () => {
  return (
    <div className="pt-10 relative  ">
      <div className="block">
        <div className="flex items-center justify-center">
          <img
            src={Back}
            className="absolute w-[70%] z-[-10] top-[-50px]"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-[80px] second text-center text-red-600">
            <span className="addGradient">Distress</span>,{" "}
            <span className="text-white">Send</span> Alerts <br />{" "}
            <span className="text-white">and get help!</span>
          </h1>

          <div className="relative  pt-10">
            <div className="flex gap-12 items-center justify-center">
              <img src={Phone2} className="w-[15%] " alt="" />
              <img src={Phone1} className="w-[15%] mb-[260px]" alt="" />
              <img src={Phone3} className="w-[15%] " alt="" />
            </div>

            <img
              src={Connect}
              className="absolute w-[600px] h-[2300px]   z-[-13] left-[465px] top-[500px]"
              alt=""
            />
            <img
              src={MapImg}
              className="absolute w-[500px] z-[-10] left-[525px] top-[580px]"
              alt=""
            />
          </div>

          <div
            id="about"
            className="flex items-center justify-center mt-[230px] "
          >
            <div className="bg-white w-[45%] rounded-3xl px-4 py-7">
              <h2 className="text-[40px] second">About Distress</h2>
              <p className="mt-4 text-[16px] robot">
                The distress app is a personal safety application designed to
                quickly and discreetly alert authorities and selected contacts
                in case of an emergency. With a simple interface, the app allows
                users to send a distress signal, sharing their real-time
                location through Google Maps and an in-app map. The app is
                designed with a focus on user discretion, featuring a subtle
                design that can be easily hidden in critical situations,
                ensuring help is summoned without drawing unnecessary attention
                from potential assailants.
                <br />
                <br />
                The distress app’s AI-driven route prediction sets us apart.
                When a distress signal is sent, our app not only shares the
                user's location but also predicts potential routes they might
                take, using real-time geographical data. This unique feature
                helps responders quickly and accurately track the user. Our
                AI-powered approach ensures that help is not just on the way but
                is on the right track, making our app a truly life-saving tool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
