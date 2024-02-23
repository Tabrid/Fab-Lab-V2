import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill } from "react-icons/ri";


const LabFacilities = () => {
    const Data = {
        title: {
            label: 'Our Activities',
            subLabel: null,

        },
        links: [
            { label: 'Facilities', icon: RiArrowRightDoubleFill },
            { label: 'Our Activities', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
    };

    const labFacility = [
        {
            img: 'https://daffodilvarsity.edu.bd/images/fablab-facility/25c244ef329649a221df332618ccd349.webp',
            title: 'Workshop',
            discription: 'Workshop on using and introduction to different tools of the laboratory'
        },
        {
            img: 'https://daffodilvarsity.edu.bd/images/fablab-facility/0e8ae7033aa55166ce7d4edd08273dc3.webp',
            title: 'Competition',
            discription: 'There will be numerous project competitions among the students and best projects will be awarded and sent to inter university contests'
        },
        {
            img: 'https://daffodilvarsity.edu.bd/images/fablab-facility/4866cdcc6ed729a92446b794db89e754.webp',
            title: 'Seminar',
            discription: 'Seminars on different topics about Fabrication and 4th IR '
        },
    ]
    
    return (
        <div className='my-10'>
            <div>
                <Location {...Data} />
            </div>

            <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    labFacility.map((item, index) => (
                        <div key={index} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={item.img} alt="image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item.title}
                                </h2>
                                <p>{item.discription}</p>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default LabFacilities;