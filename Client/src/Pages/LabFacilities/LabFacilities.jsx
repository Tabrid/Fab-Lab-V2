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
            img: 'https://daffodilvarsity.edu.bd/images/lab-scope/3e1264ae3b4d681afbb68dc52f3df79d.webp',
            title: 'Workshop',
            discription: 'Workshop on using and introduction to different tools of the laboratory'
        },
        {
            img: 'https://daffodilvarsity.edu.bd/images/lab-scope/7c4721025ac0f1c596d4f7dc6534807f.webp',
            title: 'Competition',
            discription: 'There will be numerous project competitions among the students and best projects will be awarded and sent to inter university contests'
        },
        {
            img: 'https://daffodilvarsity.edu.bd/images/lab-scope/cb1e71240d0ea82cb71fdac25c13d26b.webp',
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