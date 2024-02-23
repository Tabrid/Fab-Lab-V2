import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

const DashBoardIdea = () => {
  const [memberships, setMemberships] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fab-lab-server-production.up.railway.app/api/idea/ideas')
      .then(response => response.json())
      .then(data => {
        setMemberships(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching membership data:', error);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <h1 className="text-2xl font-bold mb-4">Idea Box</h1>
      <div className="container mx-auto px-4 grid grid-cols-2 gap-10">
        {loading ? ( 
          <div className="flex justify-center items-center h-full">
            <BounceLoader color="#2e3094" />
          </div>
        ) : (
          memberships && memberships.map((membership, index) => (
            <div key={index} className="w-full mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Idea Details</h2>
              <div className="mb-4">
                <p><strong className="text-blue-700">Name:</strong> {membership.name}</p>
                <p><strong className="text-blue-700">Phone:</strong> {membership.phone}</p>
                <p><strong className="text-blue-700">Email:</strong> {membership.email}</p>
                <p><strong className="text-blue-700">Idea:</strong> {membership.idea}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DashBoardIdea;
