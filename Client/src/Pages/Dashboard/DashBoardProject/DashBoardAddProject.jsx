import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const data = ["complete", "ongoing"];

const DashBoardAddProject = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        const form = e.target;
        e.preventDefault();
        const input = {
            name: form.name.value,
            category: form.category.value,
            image: form.image.value,
            description: form.description.value
        };
        fetch('https://fab-lab-server-production.up.railway.app/api/project/projects', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(input)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
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
            text: `people is successfully added`,
            icon: "success",
            button: "DONE",
          });
          navigate('/');
        }
      })
  }
  <BounceLoader color="#2e3094" />
        return (
            <div className='flex flex-col justify-center items-center '>
                <h1 className="font-bold text-3xl my-10">Add Project</h1>
                <div className="w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center items-center">
                        <input type="text" name="name" placeholder="Name" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" />
                        <br />
                        <input type="url" name="image" placeholder="image link" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" />
                        <br />
                        <select name="category" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x">
                            <option value="">Select Category</option>
                            {data.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                        <br />
                        <textarea type="text" name="description" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x h-44" placeholder="description" />
                        <br />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
                </div>
            </div>
        );
    };

    export default DashBoardAddProject;
