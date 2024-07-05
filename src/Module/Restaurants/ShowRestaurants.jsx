import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListOfComponents from '../SharedComponents/ListOfComponents';

const ShowRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/all_Restaurants');
                setRestaurants(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <ListOfComponents restaurants={restaurants} />
        </div>
    );
}

export default ShowRestaurants;
