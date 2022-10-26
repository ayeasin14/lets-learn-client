import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h4 className='bg-orange-600 text-primary-content p-5 my-5 rounded-lg'>All Courses Category: {categories.length}</h4>

            <div>
                {
                    categories.map(category => <ul className="menu bg-primary text-primary-content w-56 m-5 p-1 rounded-box" key={category.id}>
                        <li><Link to={`/category/${category.id}`}>{category.name}</Link></li>
                    </ul>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;