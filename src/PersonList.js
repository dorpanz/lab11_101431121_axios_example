import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css'; 

class PersonList extends Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then((res) => {
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <div className="person-list">
                <header className="header">
                    <p>User List</p>
                </header>
                <div className="cards-container">
                    {this.state.persons.map((person, index) => (
                        <div key={index} className="card">
                            <div className='image-cont'>
                                <img
                                src={person.picture.large}
                                alt={`${person.name.first} ${person.name.last}`}
                                className="profile-pic"
                            />
                            <button className="details-btn">Details</button>
                            </div>
                            
                            <div className="card-content">
                                <h2>
                                    {person.name.title} {person.name.first} {person.name.last}
                                </h2>
                                <p><b>User Name:</b> {person.login.username}</p>
                                <p><b>Gender:</b> {person.gender.toUpperCase()}</p>
                                <p><b>Time Zone Description:</b> {person.location.timezone.description}</p>
                                <p><b>Address:</b> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state} - ${person.location.postcode}`}</p>
                                <p><b>Email:</b> {person.email}</p>
                                <p><b>Birth Date and Age:</b> {`${person.dob.date} (${person.dob.age})`}</p>
                                <p><b>Register Date:</b> {person.registered.date}</p>
                                <p><b>Phone#:</b> {person.phone}</p>
                                <p><b>Cell#:</b> {person.cell}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PersonList;
