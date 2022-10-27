import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummeryCard from '../Shared/CourseSummeryCard/CourseSummeryCard';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2>this is home components: {allCourse.length} </h2>
            {
                allCourse.map(course => <CourseSummeryCard
                    key={course._id}
                    course={course}
                ></CourseSummeryCard>)
            }
        </div>
    );
};

export default Home;