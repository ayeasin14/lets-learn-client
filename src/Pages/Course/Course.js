import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData()
    const { title, image_url, category_id, details, rating } = course;

    console.log(course);
    return (
        <div className="card card-compact w-5/6 bg-base-100 shadow-lg m-10 p-5">
            <div className='flex justify-between'>
                <h2 className="card-title">{title}</h2>
                <button className='btn btn-primary mx-3'>Download PDF</button>
            </div>
            <div className="card-body">
                <figure className='card card-compact my-3'><img src={image_url} alt="Shoes" /></figure>
                <p>{details}</p>
                <div className="card-actions justify-end my-4">
                    <Link to={`/category/${category_id}`}><button className="btn btn-primary">Explore more like this course</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;