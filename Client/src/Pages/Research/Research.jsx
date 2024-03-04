import  { useState, useEffect } from 'react';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { useParams } from 'react-router-dom';
import Location from '../../Component/Location/Location';
import { BounceLoader } from 'react-spinners';
const Research = () => {
  const router = useParams();
  const [researchData, setResearchData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Fetch the JSON data
    fetch(`http://localhost:5000/api/research/research/category/${router.category}`)
      .then(response => response.json())
      .then(data => {
        setResearchData(data);
        setLoader(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [router.category]);
  
  const Data = {
    title: {
        label: `${router.category} Research`,
        subLabel: null,

    },
    links: [
        { label: null, icon: null },
        { label: 'Research', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
};
  // const researchData = [
  //   {
  //     "title": "Research Title 1",
  //     "description": "Description of Research 1",
  //     "authors": [
  //       {
  //         "name": "Author 1",
  //         "image": "https://i.ibb.co/znxKpSM/image.png",
  //         "designation": "Researcher"
  //       },
  //       {
  //         "name": "Author 2",
  //         "image": "https://i.ibb.co/znxKpSM/image.png",
  //         "designation": "Assistant Researcher"
  //       }
  //     ],
  //     "category": "ongoing",
  //     "deadline": "2024-05-15",
  //     "publishedDate": "2024-03-01"
  //   },
  //   {
  //     "title": "Research Title 2",
  //     "description": "Description of Research 2",
  //     "authors": [
  //       {
  //         "name": "Author 3",
  //         "image": "https://i.ibb.co/znxKpSM/image.png",
  //         "designation": "Lead Researcher"
  //       }
  //     ],
  //     "category": "complete",
  //     "deadline": "2023-12-31",
  //     "publishedDate": "2024-02-20"
  //   }
  // ]

  function formatDate(timestamp) {
    const dateObject = new Date(timestamp);
    return dateObject.toLocaleString();
  }


  return (
    <div>
      <Location {...Data}  />
      <div className="max-w-4xl mx-auto px-4 py-8">

        {loader ? <BounceLoader color="#2e3094" />:<div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10'>
          {researchData.map((research, index) => (
            <div key={index} className="mb-8 border border-gray-200 rounded-lg p-10 shadow-md">
              <h2 className="text-xl font-bold mb-2">{research.title}</h2>
              <p className="text-gray-700 mb-4">{research.description}</p>
              <div className="flex flex-wrap items-center">
                {research.authors.map((author, i) => (
                  <div key={i} className="flex items-center mr-4 mb-2">
                    <img src={author.image} alt={author.name} className="w-8 h-8 rounded-full mr-2" />
                    <span className="text-sm">{author.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-2 capitalize"><span className="font-semibold">Category:</span> {research.category}</p>
              {
                research.category === 'ongoing' &&
                <p className="text-gray-600 mb-2"><span className="font-semibold">Deadline:</span> {formatDate(research.deadline)}</p>
              }
              {
                research.category === 'complete' &&
                <p className="text-gray-600 mb-2"><span className="font-semibold">Published Date:</span> {formatDate(research.publishedDate)}</p>
              }
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default Research;
