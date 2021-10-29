import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    const handleDelete = id => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert("deleted")
                    const remining = users.filter(user => user._id !== id)
                    setUsers(remining)
                }

            })
    }
    return (
        <div>
            <h1>this is manage services</h1>
            {
                users.map(user => <div key={user._id}>
                    <h3>{user.name}</h3>
                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;