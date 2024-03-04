import{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";

const Partner = () => {
    const data = [
        {
            id: 1,
            image: 'https://i.ibb.co/YQgxNXJ/5300ce4ecfacd652e48acd91f710ad86.jpg',
        },
        {
            id: 2,
            image: 'https://i.ibb.co/mFHJtpc/ed6b46689338fa7609debe4f0a209cdd.jpg',
        },
        {
            id: 3,
            image: 'https://i.ibb.co/S3vwMzz/84052bfc0cfc7bcfb4ac2f6e00d8f687.jpg',
        },
    ];

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div className="w-full bg-base-100 flex flex-col justify-center items-center py-16" data-aos="zoom-in">
            <div className="flex-col flex justify-center items-center">
                <h2 className="text-5xl font-bold uppercase">Our Partners</h2>
                <p className="text-lg py-3 px-5 md:px-48 lg:px-48 text-wrap text-center">Partner There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing</p>
            </div>
            <Marquee gradient={false} speed={40} >
            <div className="flex flex-row justify-center items-center gap-24">
                {data.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={`Partner ${item.id}`} />
                    </div>
                ))}
            </div>
            </Marquee>
        </div>
    );
};

export default Partner;
