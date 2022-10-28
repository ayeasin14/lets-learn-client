import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { googleProviderLogin, gitHubProviderLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const notifySuccess = () => toast('login successful');


    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                notifySuccess();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }


    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    const handleGithubSignIn = () => {
        gitHubProviderLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    return (
        <div className='card bg-base-100 shadow-xl p-5 items-center lg:mx-32 md:mx-32'>
            <h2 className='text-3xl text-amber-400'>Login</h2>

            <div className="form-control w-full">
                <form onSubmit={handleSubmit}>
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
                        <button className="btn w-1/3 sm:btn-sm md:btn-md lg:btn-lg btn-success my-4">Login</button>
                        <p className='text-red-300 mx-3 text-lg'>{error}</p>
                    </div>
                    <Toaster />
                </form>

                <p>Haven't any account? <Link to='/signup' className='text-success my-2'>Create an account.</Link> </p>
                <div className='items-center text-center '>
                    <hr />
                    <p className='my-5'>Or use one of these options</p>
                    <div className='grid lg:grid-cols-2 gap-3'>
                        <button onClick={handleGoogleSignIn} className="btn gap-2 btn-outline btn-success ">
                            <FaGoogle></FaGoogle>
                            SignIn by Google
                        </button>
                        <button onClick={handleGithubSignIn} className="btn gap-2 btn-outline">
                            <FaGithub />
                            SignIn by GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;