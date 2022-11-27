import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data)
        setLoginError('');

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });

    }
    return (
        <div className='h-[800px] flex justify-center items-center text-neutral'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center '>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full ">

                        <label className="label"><span className="label-text">Email*</span></label>

                        <input type="text" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />

                        {errors.email && <span className='text-red-600'>This field is required</span>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Password*</span></label>

                        <input type="password" {...register("password",
                            { required: 'Password is required', minLength: { value: 6, message: 'length should be 6 character.' } })} className="input input-bordered w-full" />

                        {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                    </div>

                    <label className="label"> <span className="label-text"> Forget Password? </span></label>

                    <input className='btn w-full' type="submit" value='Login' />
                    <div>
                        {
                            loginError && <p>{loginError} </p>
                        }
                    </div>
                </form>
                <p className='my-2'>New to Unused Bargain <Link to='/signup'><span className='text-primary'>Register Now</span></Link></p>

                <div className="divider">OR</div>
                <button className='btn btn-outline w-full bg-red-400'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;