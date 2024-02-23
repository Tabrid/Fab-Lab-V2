import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const DashBoardPeople = () => {
  const [people, setPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://fab-lab-server-production.up.railway.app/api/person/all')
      .then(res => res.json())
      .then(data => {
        setPeople(data.data);
        setLoading(false);
      });
  }, []);

  console.log(people);

  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  
  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const navigate = useNavigate();

  const handleEdit = (id) =>{
    navigate(`/dashboard/editpeople/${id}`);
  }

  const handleDelete = (id) =>{
    fetch(`https://fab-lab-server-production.up.railway.app/api/person/delete/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  }

  return (
    <div>
      <div className="mx-14 flex justify-between items-center">
        <input
          className="w-1/2 h-10 rounded-[35px] mt-5 px-5 border border-black"
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Link to='/dashboard/addpeople'>
          <button className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Add People</button>
        </Link>
      </div>
     
      {loading ? (
        <div className="flex justify-center mt-5">
          <BounceLoader color="#2e3094" />
        </div>
      ) : (
        <div className='flex justify-center p-5 m-5'>
          <div className='grid grid-cols-2 gap-5'>
            {filteredPeople.map((person, index) => (
              <button
                onClick={() => document.getElementById('my_modal_4').showModal()}
                key={index}
                className="card w-80 bg-base-100 shadow-xl border-slate-950 border-spacing-0.5 border flex flex-col justify-center items-center"
              >
                <figure className=" p-5 ">
                  <img src={person.image} alt="Shoes" className="rounded-xl w-full h-[250px]" />
                </figure>
                <div className="card-body items-center text-center border-slate-950 border-spacing-0.5 border-t">
                  <h2 className="card-title">{person.name}</h2>
                  <p>{person.role}</p>
                </div>
                <div className="flex justify-between mb-5">
                  <button onClick={() => handleEdit(person._id)} className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Edit</button>
                  <button onClick={() => handleDelete(person._id)} className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white">Delete</button>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoardPeople;
