import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })

    }

    return (
        <div className='card bg-base-100 shadow-xl p-5 items-center lg:mx-32 md:mx-32'>
            <h2 className='text-3xl text-amber-400'>Create An Account</h2>
            <div className="form-control w-full">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label">
                            <span className="label-text">Your Full Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Type your full name" className="input input-bordered input-info w-full" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Your Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Paste your photo url" className="input input-bordered input-info w-full" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input name='email' type="email" placeholder="Type your email" className="input input-bordered input-info w-full" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input name='password' type="password" placeholder="Type your password" className="input input-bordered input-info w-full" required />
                    </div>
                    <div className='flex items-baseline'>
                        <button className="btn w-1/3 sm:btn-sm md:btn-md lg:btn-lg btn-success my-4">Signup</button>
                        <p className='text-red-300 mx-3 text-lg'>{error}</p>
                    </div>
                </form>
                <p>Already Regiter? <Link to='/login' className='text-success my-2'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Registration;