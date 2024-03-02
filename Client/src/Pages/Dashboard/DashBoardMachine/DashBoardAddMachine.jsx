import  { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const data = ["Heavy-Machineries", "Electronics", "Power-Tools", "Other-Tools"];

const DashBoardAddMachine = () => {
    const [refresh, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state
      
        try {
          const form = e.target;
          const input = {
            name: form.name.value,
            category: form.category.value,
            image: form.image.value,
          };
      
          const response = await fetch('https://fab-lab-server-production.up.railway.app/api/machine/machineries', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(input)
          });
      
          const result = await response.json();
      
          console.log(result);
          setLoading(false); // Clear loading state
      
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
              text: "Machine is successfully added",
              icon: "success",
              button: "DONE",
            });
      
            // Clear the form
            form.reset(); // Reset form fields to their initial values
      
            // Data refetch not possible without AuthContext
            console.warn("AuthContext not found for data refetch. Consider implementing it for automatic updates.");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          setLoading(false); // Clear loading state
          swal({
            title: "Error",
            text: "Something went wrong. Please try again.",
            icon: "error",
            button: "OK",
          });
        }
      };
      

    return (
        <div className='flex flex-col justify-center items-center '>
            <h1 className="font-bold text-3xl my-10">Add Machine</h1>
            <div className="w-1/2">
                {loading && <BounceLoader color="#2e3094" />} 
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center items-center">
                    <input type="text" name="name" placeholder="Name" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" />
                    <br />
                    <select name="category" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x">
                        <option value="">Select Category</option>
                        {data.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                    <br />
                    <input type="text" name="image" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" placeholder="enter your picture" />
                    <br />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default DashBoardAddMachine;
