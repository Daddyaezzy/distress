const Navbar = () => {
  return (
    <div className="flex items-center justify-center z-[99]">
      <div className="bg-white py-3 px-6 rounded-bl-[35px] rounded-br-[35px]">
        <div className="flex gap-[70px]">
          <a className="cursor-pointer text-[24px] robot text-red-500" href="">
            Distress
          </a>
          <div className="flex gap-8">
            <a
              className="cursor-pointer text-[24px] robot hover:text-red-500"
              href="#about"
            >
              About
            </a>
            <a
              className="cursor-pointer text-[24px] robot hover:text-red-500"
              href="#howItWorks"
            >
              How it works
            </a>
            <a
              className="cursor-pointer text-[24px] robot hover:text-red-500"
              href="#sellingPoint"
            >
              Our selling point
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
