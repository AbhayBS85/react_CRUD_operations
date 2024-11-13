import React from "react";
import './user.css';

const User = ({id,email,name}) =>{
    return (
        <div className="list">
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <button>Edit</button>
                <button>Delete</button>
            </span>
        </div>
    );
}

export default User;