import { Link } from "react-router-dom";
import Button from "../../../Component/Button/Button";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
        <div className="hero   bg-base-200" data-aos="fade-left">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    ><SwiperSlide><img src="https://i.ibb.co/XD43qk9/photo-2024-03-03-19-15-21.jpg" alt=""  className="h-4/6" /></SwiperSlide>
                        
                        
                        <SwiperSlide><img src="https://i.ibb.co/0J5J36L/photo-2024-03-03-19-15-14-1.jpg" alt=""  /></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/F40XDhY/image.png" alt=""  /></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/4F7ZfSP/photo-2024-03-03-19-15-06.jpg" alt=""  /></SwiperSlide>
                       
                        
                    </Swiper>
                </div>
                <div className="w-full lg:w-1/2" data-aos="fade-right">
                    <h1 className="text-5xl font-bold ml-5 mb-10">
                        <span className="text-[#2e3094]">FABLAB</span> DIU
                        <br />
                        <span className="mt-3 text-3xl">Unleash Your Creativity</span><br/>
                        <span className="mt-3 text-base">Learning how to make anything for innovation & industrial use.</span>
                    </h1>
                    
                    <Link><Button name='Join With Us' navigation="/membership" ></Button></Link>
                </div>

            </div>
        </div>
    );
};

export default Banner;
