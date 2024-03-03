import { useEffect, useState } from "react";
import Location from "../../Component/Location/Location";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { BounceLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const People = () => {
  const router = useParams();
  const Data = {
    title: {
      label: "People",
      subLabel: null,
    },
    links: [
      { label: null, icon: null },
      {
        label: "People",
        icon: RiArrowRightDoubleFill,
        color: "text-[#2e3094]",
      },
    ],
  };

  const [people, setPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch(`https://fab-lab-server-production.up.railway.app/api/person/category/${router.category}`)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.data);
        setLoader(false);
      });
  }, [router.category]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  

  // Filtered people based on search query and selected filter
  const filteredPeople = people.filter(
    (person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) 
  );
  return (
    <div>
      <Location {...Data} />
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center align-middle gap-5 w-1/2">
          <input
            className="w-full h-10 rounded-[35px] mt-5 px-5 border-slate-950 border-2"
            value={searchQuery}
            onChange={handleSearchChange}
            type="url"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex justify-center p-5 m-5">
        {loader ? (
          <BounceLoader color="#2e3094" />
        ) : (
          <div className="grid  lg:grid-cols-2 gap-5">
            {filteredPeople.map((person, index) => (
              <div
                key={index}
                className="card flex lg:flex-row md:flex-row flex-col bg-base-100  shadow-xl border-slate-950 border-spacing-0.5 border"
              >
                <div>
                  <figure className=" p-5 ">
                    <img
                      src={person.image}
                      alt="Shoes"
                      className="rounded-xl w-full h-[250px]"
                    />
                  </figure>
                </div>
                <div className="card-body items-center text-center border-slate-950 border-spacing-0.5 border-l">
                  <h2 className="card-title">{person.name}</h2>
                  <h2 className="">{person.designation}</h2>
                  <h2 className="">{person.department}</h2>
                  <p className=" font-bold">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default People;
