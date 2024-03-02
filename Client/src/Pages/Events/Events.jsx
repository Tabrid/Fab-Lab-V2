
import { RiArrowRightDoubleFill } from "react-icons/ri";

import Location from '../../Component/Location/Location';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
const Events = () => {
  
  const router = useParams();
  
  const Data = {
    title: {
      label: `${router.category} Events`,
      subLabel: null,
    },
    links: [
      { label: 'Events', icon: RiArrowRightDoubleFill },
      { label: `${router.category} Events`, icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };
  const [data, setData] = useState([]); // Initialize data state
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/api/event/events/category/${router.category}`)
      .then((response) => response.json())
      .then((data) => {
        const EventData = data.reverse();
        setData(EventData);
        setLoading(false); // Set loading to false after data is fetched
      });
  }, [router.category]); // Empty dependency array ensures effect only runs once on component mount

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toString() !== 'Invalid Date' ? date.toLocaleString() : 'Invalid Date';
  };
  return (
    <div>
      <Location {...Data} />
      <div className="flex justify-center items-center">
        {loading ? ( // Render loader if loading state is true
          <div className="flex justify-center items-center">
            <BounceLoader color="#2e3094" />
          </div>
        ) :   data.length === 0 ? ( // Render message when data array is empty
        <div className="text-center text-2xl w-44   text-black border-spacing-1 shadow-2xl bg-slate-200 font-semibold">
            No data found.
        </div>
    ) :(
          <div className="w-full bg-base-200 flex  justify-center items-center py-16">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
              {data.map((item) => (
                        
                            <figure key={item.id} className="snip1171 shadow-2xl">
                                <img src={item.image} alt="sample71" />
                                <figcaption>
                                    <h3>{formatDate(item.createdAt)}</h3>
                                    <h1 className="font-semibold">{item.title}</h1>
                                    <p>{item.category}</p>
                                    <p>{item.organizedBy}</p>
                                    <Link to={`/event/${item._id}`}>Read More</Link>
                                </figcaption>
                            </figure>
                       
                    ))}

              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;