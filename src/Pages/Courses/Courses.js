import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const course = useLoaderData();

    return (
        <div>
            <h2>this category has courses {course.length}</h2>
        </div>
    );
};

export default Courses;