import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


const DashBoarAddImage = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        const form = e.target;
        e.preventDefault();
        const input = {
            image: form.image.value
        };
        fetch('http://localhost:5000/api/machine/machineries', {
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
    return (
        <div>
            <div className='flex flex-col justify-center items-center '>
                <h1 className="font-bold text-3xl my-10">Add Image</h1>
                <div className="w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center items-center">
                        
                        <input type="text" name="image" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" placeholder="enter your image link" />
                        <br />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashBoarAddImage;