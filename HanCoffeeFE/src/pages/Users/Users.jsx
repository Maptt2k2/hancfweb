import React, { useEffect, useState } from 'react';
import axiosInstance from '../../common/library/query';
import './Users.css';
import { toast } from 'react-toastify';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addingUser, setAddingUser] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axiosInstance.get('/api/user');  // Adjust the endpoint as needed
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            setError(error);
            toast.error('Failed to fetch users.');
            setLoading(false);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleDelete = async (userId) => {
        try {
            await axiosInstance.delete(`/api/user/${userId}`);  // Adjust the endpoint as needed
            setUsers(users.filter(user => user._id !== userId));
            toast.success('User deleted successfully.');
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Failed to delete user.');
        }
    };

    const handleEditSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosInstance.put(`/api/user/${editingUser._id}`, editingUser);  // Adjust the endpoint as needed
            setUsers(users.map(user => user._id === editingUser._id ? editingUser : user));
            setEditingUser(null);
            toast.success('User updated successfully.');
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error('Failed to update user.');
        }
    };

    const handleAddUserSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/api/user/register', newUser);  // Adjust the endpoint as needed
            setUsers([...users, response.data]);
            setNewUser({ name: '', email: '', password: '' });
            setAddingUser(false);
            toast.success('User added successfully.');
        } catch (error) {
            console.error('Error adding user:', error);
            toast.error('Failed to add user.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const openAddUserForm = () => {
        setAddingUser(true);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="user-management">
            <h1>User Management</h1>

            <div className="add-user">
                {!addingUser ? (
                    <button className="actions add-user-button" onClick={openAddUserForm}>Add User</button>
                ) : (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setAddingUser(false)}>&times;</span>
                            <h2>Add User</h2>
                            <form onSubmit={handleAddUserSubmit}>
                                <label>
                                    Name:
                                    <input type="text" name="name" value={newUser.name} onChange={handleInputChange} required />
                                </label>
                                <label>
                                    Email:
                                    <input type="email" name="email" value={newUser.email} onChange={handleInputChange} required />
                                </label>
                                <label>
                                    Password:
                                    <input type="password" name="password" value={newUser.password} onChange={handleInputChange} required />
                                </label>
                                <button type="submit">Add</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="actions">
                                <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                                <button className="delete-button" onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingUser && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setEditingUser(null)}>&times;</span>
                        <h2>Edit User</h2>
                        <form onSubmit={handleEditSubmit}>
                            <label>
                                Name:
                                <input type="text" value={editingUser.name} onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })} />
                            </label>
                            <label>
                                Email:
                                <input type="email" value={editingUser.email} onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} />
                            </label>
                            <button type="submit">Save</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;
