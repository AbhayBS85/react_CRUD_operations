import React from "react";
import './user.css';
import  { useState } from 'react';

const User = ({id,email,name,onDelete,onEdit}) =>{

    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);
    const [editedEmail, setEditedEmail] = useState(email);

    const handleDelete= () => {
        onDelete(id);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(id, editedName, editedEmail);
        setIsEditing(false);
    };

    return (
        <div className="list">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                    <input
                        type="email"
                        value={editedEmail}
                        onChange={(e) => setEditedEmail(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <span>{name}</span>
                    <span>{email}</span>
                    <span>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </span>
                </>
            )}
        </div>
    );
};

export default User;