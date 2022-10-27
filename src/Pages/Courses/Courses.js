import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummeryCard from '../Shared/CourseSummeryCard/CourseSummeryCard';

const Courses = () => {
    const categoryCourse = useLoaderData();

    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-10 m-8 '>
                {
                    categoryCourse.map(course => <CourseSummeryCard
                        key={course._id}
                        course={course}
                    ></CourseSummeryCard>)
                }
            </div>
        </div>
    );
};

export default Courses;