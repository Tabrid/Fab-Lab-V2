import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const DashBoardAddProduct = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        const form = e.target;
        e.preventDefault();
        const input = {
            name: form.name.value,
            image: form.image.value,
            description: form.description.value
        };
        fetch('http://localhost:5000/api/product/products', {
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
            <div className='flex flex-col justify-center items-center '>
                <h1 className="font-bold text-3xl my-10">Add Product</h1>
                <div className="w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center items-center">
                        <input type="text" name="name" placeholder="Name" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" />
                        <br />
                        <input type="url" name="image" placeholder="image link" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" />
                        <br />
                        <textarea type="text" name="description" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x h-44" placeholder="description" />
                        <br />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
                </div>
            </div>
        );
    };

    export default DashBoardAddProduct;
