import { Nav, Tab, Container } from 'react-bootstrap';
import './TabSection.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ListOfComponents from '../SharedComponents/ListOfComponents';

const TabSection = () => {
    const [key, setKey] = useState('restaurants');

    const [restaurants, setRestaurants] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [landmarks, setLandmarks] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                let url = '';
                switch (key) {
                    case 'restaurants':
                        url = 'http://localhost:8000/api/all_Restaurants';
                        break;
                    case 'hotels':
                        url = 'http://localhost:8000/api/all_hotels';
                        break;
                    case 'landmarks':
                        url = 'http://localhost:8000/api/all_landMarks';
                        break;
                    default:
                        break;
                }
                console.log(url);
                const response = await axios.get(url);
                if (key === 'restaurants') {
                    setRestaurants(response.data);
                } else if (key === 'hotels') {
                    setHotels(response.data);
                } else if (key === 'landmarks') {
                    setLandmarks(response.data);
                }
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [key]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Container>
            <Tab.Container id="left-tabs-example" activeKey={key} onSelect={(k) => setKey(k)}>
                <Nav variant="pills" className="justify-content-center my-4 custom-nav">
                    <Nav.Item>
                        <Nav.Link eventKey="restaurants" className={key === 'restaurants' ? 'active-tab' : ''}>المطاعم</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="hotels" className={key === 'hotels' ? 'active-tab' : ''}>الفنادق</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="landmarks" className={key === 'landmarks' ? 'active-tab' : ''}>المعالم السياحية</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="restaurants">
                        <h2>Restaurants Content</h2>
                        <ListOfComponents items={restaurants} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="hotels">
                        <h2>Hotels Content</h2>
                        <ListOfComponents items={hotels} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="landmarks">
                        <h2>Tourist Attractions Content</h2>
                        <ListOfComponents items={landmarks} />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
};

export default TabSection;
