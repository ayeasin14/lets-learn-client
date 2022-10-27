import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-5 gap-4">
                <div className="hidden lg:flex ">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-4 col-span-full ">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;