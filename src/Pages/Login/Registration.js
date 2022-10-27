import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='card bg-base-100 shadow-xl p-5 items-center mx-32'>
            <h2 className='text-3xl text-amber-400'>Login</h2>


            <div className="form-control w-full">
                <form action="">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Type your email" className="input input-bordered input-info w-full" />

                    <label className="label">
                        <span className="label-text">Your Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Type your password" className="input input-bordered input-info w-full" />
                    <button className="btn w-1/3 sm:btn-sm md:btn-md lg:btn-lg btn-success my-4">Login</button>

                    <p>Haven't any account? <Link to='/signup' className='text-success my-2'>Create an account.</Link> </p>
                </form>


            </div>



        </div>

    );
};

export default Registration;