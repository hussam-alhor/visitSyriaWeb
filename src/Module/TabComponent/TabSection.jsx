import { Nav, Tab, Container, Dropdown, DropdownButton, NavLink } from 'react-bootstrap';
import './TabSection.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListOfComponents from '../SharedComponents/ListOfComponents';

const TabSection = () => {
    const [key, setKey] = useState('restaurants');
    const [location, setLocation] = useState('');
    const [sort, setSort] = useState('');

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

                // Append location and sort query parameters if they are set
                const params = new URLSearchParams();
                if (location) params.append('location', location);
                if (sort) params.append('sort', sort);
                url += `?${params.toString()}`;

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
    }, [key, location, sort]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <Tab.Container id="left-tabs-example" activeKey={key} onSelect={(k) => setKey(k)}>
                <Nav variant="pills" className="justify-content-center my-4 custom-nav tab-with-overlay">
                    <Nav.Item>
                        <NavLink eventKey="locations" className={key === 'loactions' ? 'active-tab drop-downC': 'drop-downC'}>
                        <DropdownButton id="dropdown-location" title="المحافظة" className='drop-downC' onSelect={(e) => setLocation(e)}>
                            <Dropdown.Item eventKey="" >كل المواقع</Dropdown.Item>
                            <Dropdown.Item eventKey="location1">دمشق</Dropdown.Item>
                            <Dropdown.Item eventKey="location2">حلب</Dropdown.Item>
                         
                        </DropdownButton>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                    <NavLink eventKey="sorting" className={key === 'sorting' ? 'active-tab' : ''}>
                        <DropdownButton id="dropdown-sort" title="ترتيب حسب" onSelect={(e) => setSort(e)}>
                      
                            <Dropdown.Item eventKey="price_asc" className='drop-downC'>السعر</Dropdown.Item>
                          
                           
                        </DropdownButton>
                        </NavLink>
                    </Nav.Item>
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
                        <ListOfComponents items={restaurants} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="hotels">
                        <ListOfComponents items={hotels} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="landmarks">
                        <ListOfComponents items={landmarks} />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
};

export default TabSection;
