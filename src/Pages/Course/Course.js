import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload, FaStar } from 'react-icons/fa';

const Course = () => {
    const course = useLoaderData()
    const { title, image_url, category_id, details, rating, author } = course;

    console.log(course);
    return (
        <div className="card card-compact w-5/6 bg-base-100 shadow-lg m-10 p-5">
            <div className='flex justify-between'>
                <div className='items-center text-center'>
                    <h2 className="card-title">{title}</h2>
                </div>
                <div>
                    <button className='btn btn-primary mx-3'>Download PDF <FaDownload className='mx-2' /></button>
                </div>
            </div>
            <div className="card-body">
                <figure className='card card-compact my-3'><img src={image_url} alt="Shoes" /></figure>
                <p>{details}</p>
                <div className="card-actions justify-end my-4">
                    <p className='text-2xl'>By: <span className='text-orange-600'>{author?.name}</span> | <span className='text-orange-600'> <FaStar className='inline text-warning align-baseline mx-4-' /> {rating?.number}</span> </p>

                    <Link to='/checkout'><button className="btn btn-warning hover:btn-success">Get Premium Access</button></Link>
                    <Link to={`/category/${category_id}`}><button className="btn btn-primary">Explore more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;