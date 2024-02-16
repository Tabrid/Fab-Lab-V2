import './RecentEvent.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
const RecentEvent = () => {
    const data = [
        {
            id: 1,
            image: 'https://i.ibb.co/mTPLgPX/ed08d0a71adccf9d1c90574c448e9a1d.webp',
            name: 'Product Design and Idea Competition',
            
            date: '30 August 2023'
        },
        {
            id: 2,
            image: 'https://daffodilvarsity.edu.bd/images/event/cde0ef77fddf90c43f7735efbb63b1c6.webp',
            name: 'Product Design and Idea Competition',
          
            date: '30 August 2023'
        },
        {
            id: 3,
            image: 'https://i.ibb.co/mTPLgPX/ed08d0a71adccf9d1c90574c448e9a1d.webp',
            name: 'Product Design and Idea Competition',
            
            date: '30 August 2023'
        },
        {
            id: 4,
            image: 'https://i.ibb.co/mTPLgPX/ed08d0a71adccf9d1c90574c448e9a1d.webp',
            name: 'Product Design and Idea Competition',
            
            date: '30 August 2023'
        },
        {
            id: 5,
            image: 'https://i.ibb.co/mTPLgPX/ed08d0a71adccf9d1c90574c448e9a1d.webp',
            name: 'Product Design and Idea Competition',
           
            date: '30 August 2023'
        },
        {
            id: 6,
            image: 'https://i.ibb.co/mTPLgPX/ed08d0a71adccf9d1c90574c448e9a1d.webp',
            name: 'Product Design and Idea Competition',
            
            date: '30 August 2023'
        },

    ]
    return (
        <div className=" w-full bg-base-200 flex flex-col justify-center items-center py-16">
            <div className="flex-col flex justify-center items-center mb-5">
                <h2 className="text-5xl font-bold uppercase">Recent events</h2>
                <p className="text-lg py-3">FabLab DIU always try to arrange innovative Event for students.</p>
            </div>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper "
                >
                    {
                        data.map((item) => (
                            <SwiperSlide key={item.id} className='bg-base-200'>
                                <figure className="snip1171 shadow-2xl">
                                    <img src={item.image} alt="sample71" />

                                    <figcaption>
                                        <h3>{item.date} </h3>
                                        <h1 className='font-semibold'>{item.name} </h1>
                                        <p>{item.description} </p>
                                        <Link href="#" >Read More</Link>
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </>
        </div>
    );
};

export default RecentEvent;