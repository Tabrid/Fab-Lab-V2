import { useEffect, useState } from 'react';
import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { BounceLoader } from 'react-spinners';

const People = () => {

  const Data = {
    title: {
      label: 'People',
      subLabel: null,
    },
    links: [
      { label: null, icon: null },
      { label: 'People', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };

  const [people, setPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('ALL'); // Initialize with 'ALL'
  const [loader, setLoader]=useState(false)
  
  useEffect(() => {
    setLoader(true)
    fetch('https://fab-lab-server-production.up.railway.app/api/person/all')
      .then(res => res.json())
      .then(data => {
        setPeople(data.data);
        setLoader(false)
      })
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  // Filtered people based on search query and selected filter
  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedFilter === 'ALL' || person.category === selectedFilter)
  );
  return (
    <div>
      <Location {...Data} />
      <div className='flex justify-center'>
        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center align-middle gap-5 w-1/2">
          <input className="w-full h-10 rounded-[35px] mt-5 px-5 border-slate-950 border-2" value={searchQuery}
          onChange={handleSearchChange} type="url" placeholder="Search" />
          <select className="bg-white mt-5 h-10 hover:bg-white rounded-full border-slate-950 border-2" onChange={handleFilterChange}>
            <option value="ALL" className="lang text-center">
              All
            </option>
            <option value="Management-Committee" className="lang text-center">
              Management Committee
            </option>
            <option value="Student-Team" className="lang text-center">
              Student Team
            </option>
            <option value="Researchers" className="lang text-center">
              Researchers
            </option>
            <option value="Advisory-Panel" className="lang text-center">
              Advisory Panel
            </option>
            <option value="General-Members" className="lang text-center">
              General Members
            </option>
          </select>
        </div>
      </div>
      <div className='flex justify-center p-5 m-5'>
        {
          loader ? <BounceLoader color="#2e3094"/> :<div className='grid  lg:grid-cols-2 gap-5'>
          {
            filteredPeople.map((person, index) => (
              <div key={index} className="card w-96 bg-base-100 shadow-xl border-slate-950 border-spacing-0.5 border">
                <figure className=" p-5 ">
                  <img src={person.image} alt="Shoes" className="rounded-xl w-full h-[250px]" />
                </figure>
                <div className="card-body items-center text-center border-slate-950 border-spacing-0.5 border-t">
                  <h2 className="card-title">{person.name}</h2>
                  <h2 className="">{person.designation}</h2>
                  <h2 className="">{person.department}</h2>
                  <p className=" font-bold">{person.role}</p>
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

export default People;
