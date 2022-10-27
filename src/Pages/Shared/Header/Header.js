import React from 'react';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }

    return (
        <div className='border-b-2 mb-4'>

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
                            <div className='lg:hidden flex'>
                                <LeftSideNav></LeftSideNav>
                            </div>
                        </ul>

                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='h-12 mx-4' src={Logo} alt="" />
                        <span className='lg:flex md:flex hidden'>Let's Learn</span></Link>
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

                    {
                        user?.uid ?
                            <div className='flex justify-between items-center'>
                                <Link>
                                    <h4>{user?.displayName}</h4>
                                </Link>
                                <span className='mx-3 w-8'>
                                    {
                                        user?.photoURL ?
                                            <img className='rounded-full' src={user?.photoURL} alt='' />
                                            :
                                            <FaUser />
                                    }
                                </span>
                                <Link onClick={handleLogOut} to='' className="btn btn-outline btn-error mx-2">SignOut</Link>
                            </div>
                            :

                            <div>
                                <Link to='/login' className="btn btn-outline btn-success mx-1">Login</Link>
                                <Link to='/signup' className="btn btn-outline btn-success mx-1">SignUp</Link>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;