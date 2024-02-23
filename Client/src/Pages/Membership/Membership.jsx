import { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
const skills = [
  "Design Team (2D & 3D)",
  "Printing Team",
  "Machine Operating Team",
  "Machine Maintenance Team",
  "Product Assembling Team",
  "Order Maintenance Team",
  "R&D Team",
  "Testing Team",
  "Event/Social Monitoring Team",
  "Research & Publication Team",
  "Trainer Team"
];

const Membership = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    diuEmail: '',
    mobileNumber: '',
    dob: '',
    organization: '',
    studentId: '',
    department: '',
    socialMediaLink: '',
    portfolioLink: '',
    bloodGroup: '',
    photoDriveLink: '',
    skillDomains: [],
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSkillDomainChange = (e) => {
    const { value } = e.target;
    const isChecked = formData.skillDomains.includes(value);

    if (isChecked) {
      setFormData({
        ...formData,
        skillDomains: formData.skillDomains.filter(domain => domain !== value)
      });
    } else {
      setFormData({
        ...formData,
        skillDomains: [...formData.skillDomains, value]
      });
    }
  };

  const handleSubmit = (e) => {
    // Handle form submission
    console.log(formData);
    fetch('http://localhost:5000/api/membership/membership', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          swal({
            title: "Error",
            text: result.error,
            icon: "error",
            button: "OK",
          });
        } else {
          swal({
            title: "Good job!",
            text: `your data is successfully added`,
            icon: "success",
            button: "DONE",
          });
          navigate('/');
        }
      })
    e.preventDefault();
  };
<BounceLoader color="#2e3094" />
  return (
    <div className="max-w-md mx-auto  p-6 bg-gray-100 rounded-lg shadow-md my-20 mt-14">
      <h2 className="text-xl font-semibold mb-4">Membership Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Your Full Name:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="diuEmail">DIU Email:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="diuEmail" value={formData.diuEmail} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">Mobile Number:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">Date of Birth:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organization">Organization/Educational Institution/Company/Startup:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="organization" value={formData.organization} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentId">Student/Employee ID:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="studentId" value={formData.studentId} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">Department:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="department" value={formData.department} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="socialMediaLink">Social Media Link:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="socialMediaLink" value={formData.socialMediaLink} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="portfolioLink">Portfolio Link (if any):</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="portfolioLink" value={formData.portfolioLink} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bloodGroup">Blood Group:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoDriveLink">Drive link to your Formal Photo (Please make sure Anyone with the link can view option is given):</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="photoDriveLink" value={formData.photoDriveLink} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Skill Domains:</label>
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center mb-2">
              <input className="mr-2 leading-tight" type="checkbox" name="skillDomains" value={skill} onChange={handleSkillDomainChange} checked={formData.skillDomains.includes(skill)} />
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comments">Overall Feedback/ Comments (if any):</label>
          <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="comments" value={formData.comments} onChange={handleChange}></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Membership;
