import React from 'react';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='border-b-2 mb-4'>
            {/* <div className="navbar bg-primary text-primary-content">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='h-12 mx-4' src={Logo} alt="" />
                        Let's Learn</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Courses</Link></li>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>toggle theme</Link></li>
                    </ul>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <h4>{user?.displayName}</h4>

                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div> */}



            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Courses</Link></li>
                            <li><Link>FAQ</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>toggle theme</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='h-12 mx-4' src={Logo} alt="" />
                        Let's Learn</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Courses</Link></li>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>toggle theme</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <h4>{user?.displayName}</h4>
                    <Link to='/login' className="btn mx-2">SignOut</Link>
                    <Link to='/login' className="btn mx-1">Login</Link>
                    <Link to='/signup' className="btn mx-1">SignUp</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;