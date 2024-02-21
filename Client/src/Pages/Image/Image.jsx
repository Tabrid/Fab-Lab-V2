import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from '../../Component/Location/Location';
const Image = () => {
    const data = [
        {
            id: 1,
            img: "https://i.ibb.co/zxxnfb2/image.png"
        },
        {
            id: 2,
            img: "https://i.ibb.co/WKSSDhz/image.png"
        },
        {
            id: 3,
            img: "https://i.ibb.co/Rg4Wb5v/image.png"
        },
        {
            id: 4,
            img: "https://i.ibb.co/x8vX5cF/image.png"
        },
    ]
    const Datalc = {
        title: {
            label: 'Image',
            subLabel: null,

        },
        links: [
            { label: null, icon: null },
            { label: 'Image', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
    };
    return (
        <div>
            <Location {...Datalc} />
            <div className='flex justify-center'>

                <PhotoProvider>
                    <div className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-5 my-5">
                        {data.map((item, index) => (
                            <PhotoView key={index} src={item.img}>
                                <img src={item.img} alt="" />
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
            </div>
        </div>
    );
};

export default Image;