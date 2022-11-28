import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';
import { GoogleAuthProvider } from 'firebase/auth';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        console.log(saveUser, user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                saveUser(res.user.displayName, res.user.email, "buyer")
            });
    }

    return (
        <div className='h-[800px] flex justify-center items-center text-neutral'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center '>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full ">

                        <label className="label"><span className="label-text">Name</span></label>

                        <input type="text"  {...register("name", { required: true })} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full ">

                        <label className="label"><span className="label-text">Email*</span></label>

                        <input type="email"  {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Password*</span></label>

                        <input type="password"  {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'length should be 6 character.' } })} className="input input-bordered w-full" />
                    </div>
                    <div className='form-control w-full my-3'>
                        <select className='p-3 border' {...register("role")}>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>

                    <input className='btn w-full' type="submit" value='SignUp' />
                    {
                        signUpError && <p className='text-red-500'>{signUpError}</p>
                    }
                </form>
                <p className='my-2'>Already have an account? <Link to='/login'><span className='text-primary'>Please login</span></Link></p>

                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full bg-red-400'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;