import './RecentEvent.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
const RecentEvent = () => {
    const [data, setData] = useState([]); // Initialize data state
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://fab-lab-server-production.up.railway.app/api/event/all')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false); // Set loading to false after data is fetched
            });
    }, []); // Empty dependency array ensures effect only runs once on component mount

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toString() !== 'Invalid Date' ? date.toLocaleString() : 'Invalid Date';
    };
  
    return (
        <div className="w-full bg-base-200 flex flex-col justify-center items-center py-16">
            <div className="flex-col flex justify-center items-center mb-5">
                <h2 className="text-5xl font-bold uppercase">Recent events</h2>
                <p className="text-lg p-3">FabLab DIU always tries to arrange innovative events for students.</p>
            </div>
            {loading ? ( // Render loader if loading state is true
                <div className="flex justify-center items-center">
                    <BounceLoader color="#2e3094" />
                </div>
            ) : (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id} className="bg-base-200">
                            <figure className="snip1171 shadow-2xl">
                                <img src={item.image} alt="sample71" />
                                <figcaption>
                                    <h3>{formatDate(item.createdAt)}</h3>
                                    <h1 className="font-semibold">{item.title}</h1>
                                    <p>{item.category}</p>
                                    <p>{item.organizedBy}</p>
                                    <Link to={`/event/${item._id}`}>Read More</Link>
                                </figcaption>
                            </figure>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default RecentEvent;