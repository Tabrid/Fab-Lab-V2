import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";


const Login = () => {
    const { signIn, LoginWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/dashboard';


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }

    
    
    return (
        <div className='flex justify-center  my-9'>
            <div className="card w-96 shadow-2xl ">
                <div className="card-body items-center text-center">
                    <h1 className='text-2xl font-bold text-white'>LOGIN</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name='email' placeholder="Type Email" className="input  mt-10 input-bordered w-full max-w-xs" />
                        <input type="password" name='password' placeholder="Type Password" className="input mt-10 input-bordered w-full max-w-xs" />

                        <input className='btn  mt-10' type="submit" value="LogIn" />
                    </form>
                    

                </div>
            </div>

        </div>
    );
};

export default Login;