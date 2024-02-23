import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";


const DashBoardMember = () => {
  const [memberships, setMemberships] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/membership/membership')
      .then(response => response.json())
      .then(data => setMemberships(data))
      .catch(error => console.error('Error fetching membership data:', error));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  <BounceLoader color="#2e3094" />
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Membership Application</h1>
        <div className="grid grid-cols-2">
        {memberships.map((membership, index) => (
          <div key={index} className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Membership Details</h2>
              <div  className="mb-4">
                <p><strong className="text-blue-700">Full Name:</strong> {membership.fullName}</p>
                <p><strong className="text-blue-700">DIU Email:</strong> {membership.diuEmail}</p>
                <p><strong className="text-blue-700">Mobile Number:</strong> {membership.mobileNumber}</p>
                <p><strong className="text-blue-700">Date of Birth:</strong> {formatDate(membership.dob)}</p>
                <p><strong className="text-blue-700">Organization:</strong> {membership.organization}</p>
                <p><strong className="text-blue-700">Student/Employee ID:</strong> {membership.studentId}</p>
                <p><strong className="text-blue-700">Department:</strong> {membership.department}</p>
                <p><strong className="text-blue-700">Social Media Link:</strong> <a href={membership.socialMediaLink} target="_blank" rel="noopener noreferrer" className="text-blue-700">{membership.socialMediaLink}</a></p>
                <p><strong className="text-blue-700">Portfolio Link:</strong> <a href={membership.portfolioLink} target="_blank" rel="noopener noreferrer" className="text-blue-700">{membership.portfolioLink}</a></p>
                <p><strong className="text-blue-700">Blood Group:</strong> {membership.bloodGroup}</p>
                <p><strong className="text-blue-700">Photo Drive Link:</strong> <a href={membership.photoDriveLink} target="_blank" rel="noopener noreferrer" className="text-blue-700">{membership.photoDriveLink}</a></p>
                <p><strong className="text-blue-700">Skill Domains:</strong> {membership.skillDomains.join(', ')}</p>
                <p><strong className="text-blue-700">Comments:</strong> {membership.comments}</p>
              </div>
            
            
          </div>
        ) )}
        </div>
      </div>
    </div>
  )
}

export default DashBoardMember