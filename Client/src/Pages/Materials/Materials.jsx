import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
const Materials = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const Data = {
    title: {
      label: 'Order',
      subLabel: null,

    },
    links: [
      { label: null, icon: null },
      { label: 'Order', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };
  const handleAddProduct = (data) => {
    fetch('http://localhost:5000/api/order/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          swal({
            title: "Error",
            text: result.error,
            icon: "error",
            button: "Ok",
          });
        } else {
          swal({
            title: "Success",
            text: "Order Added Successfully",
            icon: "success",
            button: "Ok",
          });
          navigate('/');
        }
      })
  }
  <BounceLoader color="#2e3094" />
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
              <input
                {...register("amount", {
                  required: "amount is required",
                })}
                className="input input-bordered w-full max-w-xs mt-6"
                placeholder="Amount/ Quantity"
                type="amount"
              />
              {errors.amount && (
                <p className="text-red-600">{errors.amount?.message}</p>
              )}
              <input
                {...register("design", {
                  required: "design is required",
                })}
                className="input input-bordered w-full max-w-xs mt-6"
                placeholder="Your Design (.STL file) drive link"
                type="url"
              />
              {errors.design && (
                <p className="text-red-600">{errors.design?.message}</p>
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

export default Materials;