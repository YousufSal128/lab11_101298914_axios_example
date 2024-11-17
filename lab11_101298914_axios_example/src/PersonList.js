import React, { Component } from 'react';

class PersonList extends Component {
  state = {
    persons: [
      {
        id: '1',
        name: 'Miss Eliza Moore',
        username: 'bigladybug274',
        gender: 'FEMALE',
        timezone: 'Abu Dhabi, Muscat, Baku, Tbilisi',
        address: '4638 North Street, Truro, South Glamorgan, United Kingdom - LP5 6QN',
        email: 'eliza.moore@example.com',
        dob: '1948-09-02T14:43:16.832Z', 
        registerDate: '2008-05-05T09:32:39.014Z', 
        phone: '0708-312-222',
        profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg', 
      },
      {
        id: '2',
        name: 'Ms Sarah Johnson',
        username: 'silverswan537',
        gender: 'FEMALE',
        timezone: 'Mountain Time (US & Canada)',
        address: '3354 Rookery Road, Cashel, Monaghan, Ireland - 80827',
        email: 'sarah.johnson@example.com',
        dob: '1993-10-02T19:24:08.662Z', 
        registerDate: '2006-07-04T09:12:14.214Z', 
        phone: '011-629-6364',
        profilePicture: 'https://randomuser.me/api/portraits/women/77.jpg', 
      },
    ],
  };

  calculateAge(dob) {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--; 
    }
    
    return age;
  }

  render() {
    return (
      <div style={{ backgroundColor: 'white', padding: '20px', minHeight: '100vh' }}>
        {}
        <div
          style={{
            backgroundColor: 'green',
            color: 'white',
            textAlign: 'center',
            padding: '10px',
            margin: '0 auto',
            marginBottom: '20px',
            width: '70%',
            borderRadius: '10px',
          }}
        >
          <h1>User List</h1>
        </div>

        {}
        {this.state.persons.map((person) => (
          <div
            key={person.id}
            style={{
              backgroundColor: 'teal',
              margin: '20px auto',
              padding: '20px',
              borderRadius: '10px',
              width: '70%',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {}
            <div style={{ textAlign: 'center', marginRight: '20px' }}>
              <img
                src={person.profilePicture}
                alt={`${person.name}'s profile`}
                style={{
                  borderRadius: '50%',
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  marginBottom: '10px',
                }}
              />
              {}
              <div style={{ marginTop: '10px' }}>
                <button
                  style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                  }}
                >
                  Details
                </button>
              </div>
            </div>

            {/* User Details */}
            <div style={{ flex: 1 }}>
              <h2 style={{ marginBottom: '10px' }}>{person.name}</h2>
              <p><strong>User Name:</strong> {person.username}</p>
              <p><strong>Gender:</strong> {person.gender}</p>
              <p><strong>Time Zone Description:</strong> {person.timezone}</p>
              <p><strong>Address:</strong> {person.address}</p>
              <p><strong>Email:</strong> {person.email}</p>
              <p><strong>Birth Date:</strong> {person.dob} ({this.calculateAge(person.dob)})</p> {/* Display age next to dob */}
              <p><strong>Register Date:</strong> {person.registerDate}</p>
              <p><strong>Phone:</strong> {person.phone}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;
