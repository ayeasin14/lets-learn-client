import React from 'react';
import { Link } from 'react-router-dom';


const CourseSummeryCard = ({ course }) => {
    // console.log(course);

    const { title, _id, author, total_view, details, image_url } = course;
    return (
        <div className="card card-compact bg-base-100 shadow-2xl border">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.length > 250 ?
                    <span>{details.slice(0, 250) + '...'} <Link to={`/course/${_id}`}>Read more</Link> </span>
                    :
                    <span>{details}</span>
                }</p>
            </div>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col flex">
                    <p>By: <span className='text-orange-600'>{author?.name}</span> | Views: <span className='text-orange-600'>{total_view}</span> </p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <div className="card-actions justify-end">
                        <Link to={`/course/${_id}`}><button className="btn btn-primary">View Course</button></Link>

                    </div>
                </div>
            </footer>


        </div>
    );
};

export default CourseSummeryCard;