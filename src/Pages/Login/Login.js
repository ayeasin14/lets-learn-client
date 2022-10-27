import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='card bg-base-100 shadow-xl p-5 items-center mx-32'>
            <h2 className='text-3xl text-amber-400'>Login</h2>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <input name='email' type="text" placeholder="Type your email" className="input input-bordered input-info w-full" />

                <label className="label">
                    <span className="label-text">Your Password</span>
                </label>
                <input name='password' type="password" placeholder="Type your password" className="input input-bordered input-info w-full" />
                <button className="btn w-1/3 sm:btn-sm md:btn-md lg:btn-lg btn-success my-4">Login</button>
                <p>Haven't any account? <Link to='/signup' className='text-success my-2'>Create an account.</Link> </p>

                <div className='items-center text-center '>
                    <hr />
                    <p className='my-5'>Or use one of these options</p>
                    <div className='grid lg:grid-cols-3 gap-3'>
                        <button className="btn btn-outline btn-success ">
                            <FaGoogle></FaGoogle>
                            SignIn by Google
                        </button>
                        <button className="btn gap-2 btn-outline">
                            <FaGithub />
                            SignIn by GitHub
                        </button>
                        <button className="btn gap-2 btn-outline btn-info">
                            <FaFacebook />
                            SignIn by Facebook
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;