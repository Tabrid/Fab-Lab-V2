import { Link } from 'react-router-dom';
import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill } from "react-icons/ri";


const Product = () => {
  const Data = {
    title: {
      label: 'Product',
      subLabel: null,

    },
    links: [
      { label: null, icon: null },
      { label: 'Product', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };
  const Product = [
    {
      id: 1,
      title: 'Desk Organizer',
      img: 'https://i.ibb.co/0Gs4twj/f52c2d9304dcc47e31265c0f986b25cd.webp',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      id: 2,
      title: 'Mobile Stand',
      img: 'https://i.ibb.co/7K8qTkD/fe9ec3007987f95cbeb93830bf1522b0.webp',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
  ]
  return (
    <div className='mb-10'>
      <Location {...Data} />

      <div className='flex justify-center my-5 gap-10'>
       {
        Product.map((item) => (
          <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={item.img} alt="https://i.ibb.co/0Gs4twj/f52c2d9304dcc47e31265c0f986b25cd.webp" /></figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions flex justify-between mt-5">
              <button className="btn bg-[#2e3094] hover:bg-[#2e3094] text-white">Read More</button>
              <Link to='/order'><button className="btn bg-[#2e3094] hover:bg-[#2e3094] text-white">BUy Now</button></Link>
              
            </div>
          </div>
        </div>
        ))
       }
      </div>
    </div>
  );
};

export default Product;