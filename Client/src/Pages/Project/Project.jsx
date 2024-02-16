import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Project = () => {
    const Data = {
        title: {
            label: 'Project',
            subLabel: null,

        },
        links: [
            { label: null, icon: null },
            { label: 'Project', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
    };
    const project = [
        {
            title: 'Robotic Hand',
            img: 'https://daffodilvarsity.edu.bd/images/lab-project/3aaffa95d60fc825fd96701e2545e402.webp',

        },
        {
            title: 'AIoT Based COVID-19 Detection System',
            img: 'https://daffodilvarsity.edu.bd/images/lab-project/c140426a3507f850ebfcd57eddea26c9.webp',

        },
        {
            title: 'Gas Detector Alarm System',
            img: 'https://daffodilvarsity.edu.bd/images/lab-project/1fc6d83d0bb94ac3f4e0b702e134d8ca.webp',

        },
        {
            title: 'Automatic Hand Sanitizer',
            img: 'https://daffodilvarsity.edu.bd/images/lab-project/107eed5a5fa4f05e8286b2b56f82e72e.webp',

        },
        {
            title: 'RFID-Based Smart Attendance System with Cloud Storage Integration',
            img: 'https://daffodilvarsity.edu.bd/images/lab-project/69e03015ea2c904b89906cdc04770d90.webp',

        },
        {
            title: 'Temperature Based Automatic Fan Speed Controller Using Arduino',
            img: 'https://daffodilvarsity.edu.bd/images/lab-project/4bdaaca68a303ecfbd8091b51190f0f8.webp',

        },
        {
            title: 'Measurement Helper (Range Measure & Spirit Level)',
            img: 'https://daffodilvarsity.edu.bd/images/lab-project/66133b257ddc88c4a09dc8884170b72e.webp',

        }
    ]
    return (
        <div>
            <Location {...Data} />
            <div className='my-10 px-10 flex justify-center'>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        project.map((item, index) => (
                            <div key={index} className="card w-96 bg-base-100 shadow-xl  border-slate-950 border-spacing-0.5 border">
                                <figure className="px-10 pt-10">
                                    <PhotoProvider>
                                        <PhotoView src={item.img} >
                                            <img src={item.img} alt="Shoes" className="rounded-xl" />
                                        </PhotoView>
                                    </PhotoProvider>

                                </figure>
                                <div className="card-body items-center text-center border-slate-950 border-spacing-0.5 border-t">
                                    <h2 className="card-title">{item.title}</h2>


                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;