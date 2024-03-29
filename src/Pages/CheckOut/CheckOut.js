import React from 'react';

const CheckOut = () => {
    return (
        <div>
            <h2 className='text-3xl font-extrabold text-center my-20 '>Welcome to CheckOut page </h2>

            <div className="alert alert-success shadow-lg ">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Your purchase has been confirmed!</span>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;