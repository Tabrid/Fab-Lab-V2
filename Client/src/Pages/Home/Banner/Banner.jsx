import { Link } from "react-router-dom";
import Button from "../../../Component/Button/Button";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-1/2">
                <img src="https://i.ibb.co/ZLsSfQ3/manifesto-fablab-milano1-orig-removebg.png" className=" " />
                </div>
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold ml-5 mb-10"><span className="text-[#2e3094]">FABLAB</span> DIU <br/><span className="mt-3 text-3xl">Unleash Your Creativity</span></h1>
                    <Link to='/rules'><Button name='More About Us' ></Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;