import  { useState, useEffect } from 'react';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../Location/Location";
import { BounceLoader } from 'react-spinners';

const Research = () => {
    const Data = {
        title: {
          label: 'Fab Charter',
          subLabel: null,
        },
        links: [
          { label: 'Research', icon: RiArrowRightDoubleFill },
          { label: 'Published Paper', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
    };

    const [researchData, setResearchData] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        
        fetch("http://example.com/api/research")
            .then(response => response.json())
            .then(data => {
                setResearchData(data);
                setLoading(false); 
            })
            .catch(error => {
                console.error('Error fetching research data:', error);
                setLoading(false); 
            });
    }, []);

    return (
        <div>
            <Location {...Data} />
            <div className="flex justify-center items-center">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <BounceLoader color="#2e3094" />
                    </div>
                ) : researchData.length === 0 ? (
                    <div className="text-center text-2xl w-44 text-black border-spacing-1 shadow-2xl bg-slate-200 font-semibold">
                        No research data found.
                    </div>
                ) : (
                    <div className="w-full bg-base-200 flex justify-center items-center py-16">
                        {researchData.map(item => (
                            <div key={item.id} className="research-item">
                                <h2 className="text-xl font-bold">{item.title}</h2>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Research;
