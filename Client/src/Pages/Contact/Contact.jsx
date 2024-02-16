import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../../Component/Location/Location";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiMiniSignal } from "react-icons/hi2";
import { BsLinkedin, BsTelegram } from "react-icons/bs";
const Contact = () => {
  const Data = {
    title: {
      label: 'Contact',
      subLabel: null,

    },
    links: [
      { label: 'About Us', icon: RiArrowRightDoubleFill , color: 'text-black'},
      { label: 'Contact', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };
  return (
    <div>
      <Location {...Data} />

    <div className="grid grid-cols-2 gap-5 m-10">
    <div className=" border-spacing-0.5 border-gray-700 border  mx-5 rounded-lg bg-base-200">
        <div className="flex justify-center my-5">
        <FaLocationDot  className="text-[#2e3094] text-3xl"/>
        </div>
        <div className="text-center border-spacing-0.5 border-gray-700 border-t my-10">
            <h1 className=" mt-5 font-semibold text-3xl"> Meet Us At</h1>
            <h1 className=" mt-5 font-semibold text-2xl">DIU FABLAB & INNOVATION LAB</h1>
            <h1 className=" mt-5 text-xl">Daffodil International University</h1>
        </div>
      </div>
      <div className=" border-spacing-0.5 border-gray-700 border  mx-5 rounded-lg bg-base-200">
        <div className="flex justify-center my-5">
        <FaPhoneAlt className="text-[#2e3094] text-3xl"/>
        </div>
        <div className="text-center border-spacing-0.5 border-gray-700 border-t my-10">
            <h1 className=" mt-5 font-semibold text-3xl"> Phone Number</h1>
            <h1 className=" mt-5 font-semibold text-2xl">+880 1*************</h1>
        </div>
      </div>
      <div className=" border-spacing-0.5 border-gray-700 border  mx-5 rounded-lg bg-base-200">
        <div className="flex justify-center my-5">
        <MdEmail  className="text-[#2e3094] text-3xl"/>
        </div>
        <div className="text-center border-spacing-0.5 border-gray-700 border-t my-10">
            <h1 className=" mt-5 font-semibold text-3xl"> Email Us</h1>
            <h1 className=" mt-5 font-semibold text-2xl">fablab@diu.edu.bd</h1>
            
        </div>
      </div>
      <div className=" border-spacing-0.5 border-gray-700 border  mx-5 rounded-lg bg-base-200">
        <div className="flex justify-center my-5">
        <HiMiniSignal  className="text-[#2e3094] text-3xl"/>
        </div>
        <div className="text-center border-spacing-0.5 border-gray-700 border-t my-10">
            <h1 className=" mt-5 font-semibold text-3xl"> Connect With Us</h1>
            <h1 className=" mt-5 font-semibold text-2xl text-center flex justify-center gap-5">
              <FaFacebook className="text-[#2e3094] text-3xl"/> <BsTelegram className="text-[#2e3094] text-3xl"/> <BsLinkedin className="text-[#2e3094] text-3xl"/>
            </h1>
            
            
        </div>
      </div>

    </div>
    

    </div>
  );
};

export default Contact;
