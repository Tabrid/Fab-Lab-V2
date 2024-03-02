import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useEffect, useState } from 'react';
import { BounceLoader } from "react-spinners";
import { useParams } from 'react-router-dom';
const Project = () => {
    const router = useParams();
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);
    const Data = {
        title: {
            label: `${router.category} Project`,
            subLabel: null,

        },
        links: [
            { label: null, icon: null },
            { label: 'Project', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
    };

    useEffect(() => {
        fetch(`http://localhost:5000/api/project/projects/category/${router.category}`)
            .then(res => res.json())
            .then(data => {
                setProject(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching project data:', error);
                setLoading(false); 
            });
    }, [router.category]);
    
    return (
        <div>
            <Location {...Data} />
            <div className='my-10  flex justify-center items-center'>
                {loading ? 
                <div className="flex justify-center">
                    <BounceLoader color="#2e3094" />
                </div>
            :
                    <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-5'>
                    {
                        project.map((item, index) => (
                            <div key={index} className="card w-96 bg-base-100 shadow-xl  border-slate-950 border-spacing-0.5 border">
                                <figure className="px-10 pt-10">
                                    <PhotoProvider>
                                        <PhotoView src={item.image} >
                                            <img src={item.image} alt="Shoes" className="rounded-xl" />
                                        </PhotoView>
                                    </PhotoProvider>

                                </figure>
                                <div className="card-body items-center text-center border-slate-950 border-spacing-0.5 border-t">
                                    <h2 className="card-title">{item.name}</h2>


                                </div>
                            </div>
                        ))
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default Project;