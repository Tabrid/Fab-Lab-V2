import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const DashBoarAddImage = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const imageUrl = form.image.value.trim(); // Trim whitespace from the input
        if (!isValidUrl(imageUrl)) {
            swal({
                title: "Error",
                text: "Please enter a valid image URL",
                icon: "error",
                button: "OK",
            });
            return; // Don't proceed further if URL is invalid
        }

        const input = {
            image: imageUrl
        };

        try {
            const response = await fetch('https://fab-lab-server-production.up.railway.app/api/images', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(input)
            });
            const result = await response.json();

            if (response.ok) {
                swal({
                    title: "Good job!",
                    text: `Image is successfully added`,
                    icon: "success",
                    button: "DONE",
                });
                navigate('/dashboard');
            } else {
                swal({
                    title: "Error",
                    text: result.error || "Something went wrong",
                    icon: "error",
                    button: "OK",
                });
            }
        } catch (error) {
            console.error('Network Error:', error);
            swal({
                title: "Error",
                text: "Network error. Please try again later.",
                icon: "error",
                button: "OK",
            });
        }
    };

    const isValidUrl = (url) => {
        // A simple URL validation regex
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(url);
    };

    return (
        <div>
            <div className='flex flex-col justify-center items-center '>
                <h1 className="font-bold text-3xl my-10">Add Image</h1>
                <div className="w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center items-center">
                        <input type="text" name="image" className="border border-gray-300 rounded-md px-3 py-2 input input-bordered w-full max-w-x" placeholder="Enter your image link" required />
                        <br />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashBoarAddImage;
