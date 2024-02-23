import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../../Component/Location/Location";
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
const Idea = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const Data = {
    title: {
      label: 'Idea Box',
      subLabel: null,

    },
    links: [
      { label: null, icon: null },
      { label: 'Idea Box', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };
  const handleAddProduct = (data) => {

    console.log(data);
    fetch('https://fab-lab-server-production.up.railway.app/api/idea/ideas', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
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
            text: `your idea ${data.idea} is successfully added`,
            icon: "success",
            button: "DONE",
          });
          navigate('/');
        }
      })
  }
  return (
    <div>
      <Location {...Data} />
      <div className="flex justify-center">
        <div className="card w-96 ">
          <div className="card-body items-center text-center">
            <form
              className="mt-6 text-center pb-6"
              onSubmit={handleSubmit(handleAddProduct)}
            >
              <input
                {...register("name", {
                  required: "name is required",
                })}
                className="input input-bordered w-full max-w-xs mt-6"
                placeholder="name"
                type="text"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}

              <input
                {...register("phone", {
                  required: "phone is required",
                })}
                className="input input-bordered w-full max-w-xs mt-6"
                placeholder="phone"
                type="text"
              />
              {errors.phone && (
                <p className="text-red-600">{errors.phone?.message}</p>
              )}
              <input
                {...register("email", {
                  required: "email is required",
                })}
                className="input input-bordered w-full max-w-xs mt-6"
                placeholder="email"
                type="email"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}

              <textarea
                {...register("idea", {
                  required: "idea is required",
                })}
                className="input input-bordered w-full max-w-xs mt-6 h-44"
                placeholder="idea"
              />
              {errors.idea && (
                <p className="text-red-600">{errors.idea?.message}</p>
              )}

              <input
                className="btn w-full max-w-xs mt-6"
                value="Submit"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idea;