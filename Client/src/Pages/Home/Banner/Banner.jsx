import { Link } from "react-router-dom";
import Button from "../../../Component/Button/Button";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({
          once: true,
          offset: 500,
          duration: 1500,
          easing: 'ease-in-sine'
        }); 
      }, []);

    return (
        <div className="hero lg:mt-10 sm:lg-10  bg-base-200" data-aos="fade-left">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <img src="https://i.ibb.co/ZLsSfQ3/manifesto-fablab-milano1-orig-removebg.png" className="w-full" />
                </div>
                <div className="w-full lg:w-1/2" data-aos="fade-right">
                    <h1 className="text-5xl font-bold ml-5 lg:ml-0 mb-10">
                        <span className="text-[#2e3094]">FABLAB</span> DIU
                        <br />
                        <span className="mt-3 text-3xl">Unleash Your Creativity</span>
                    </h1>
                    <Link to='/rules'><Button name='More About Us' ></Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
