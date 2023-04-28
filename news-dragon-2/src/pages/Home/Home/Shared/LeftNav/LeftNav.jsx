import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log('Error', error));
    }, [])
    return (
        <div>
            <h4>All Categories</h4>
            {
                categories.map(category => <p key={category.id}>
                    <Link className='text-decoration-none text-secondary ms-3' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;