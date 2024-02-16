import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";


const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser, LoginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();




    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password.length < 6) {
            setError("password should be 6 character or more.");
            return;
        }

        if (password !== confirm) {
            setError("Your Password did not match");
            return;
        }
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/registration');
            })
            .catch((error) => console.error(error));
    };
    const handleLogin = (event) => {
        console.log("working");
        event.preventDefault();
        LoginWithGoogle()
            .then((result) => {

                const user = result.user;
                console.log(user);
                navigate('/registration');
            })
            .catch((error) => {
                console.error("error:", error);
            });
    };
    <Loading/>
    return (
        <div className="flex justify-center my-5 ">
            <div className="card w-96  bg-[#1d344a] shadow-2xl ">
                <div className="card-body items-center text-center">
                    <h1 className="text-2xl font-bold text-white">SIGNUP</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Type Email"
                            className="input  mt-10 input-bordered w-full max-w-xs"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Type Password"
                            className="input mt-10 input-bordered w-full max-w-xs"
                            required
                        />
                        <input
                            type="password"
                            name="confirm"
                            placeholder="Confirm Password"
                            className="input mt-10 input-bordered w-full max-w-xs"
                            required
                        />
                        <input className="btn mt-10" type="submit" value="SIgnup" />
                    </form>
                    <p className="text-error">{error}</p>
                    <div className="divider text-white ">OR</div>
                    <div className="flex gap-4">
                        <button onClick={handleLogin} > <img className='g-logo w-10 h-10' src='https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt='' /> </button>
                        <button > <img className='g-logo w-10 h-10' src='https://i.ibb.co/mcCdGpM/image.png' alt='' /> </button>
                    </div>
                    <h1 className="text-white mt-10">
                        Already have account?{" "}
                        <Link className="underline underline-offset-1" to="/login">
                            logIn
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default SignUp;