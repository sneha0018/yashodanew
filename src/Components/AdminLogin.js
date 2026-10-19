import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import Grid from '@mui/material/Grid2';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../AuthContext'; // Import AuthContext

function AdminLogin() {
    const { login } = useAuth(); // Get login function from context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize navigate function

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post(`${process.env.REACT_APP_PUBLIC_BASE_URL}/admin/adminlogin`, { email, password });
            
            console.log('Backend Response:', response.data); // Debugging output
        
            const userData = response.data.admin;
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("admin", JSON.stringify(userData));
        
            login(); 
            navigate('/admin-dashboard');
        } catch (err) {
            console.error("Error during login:", err);
        
            if (err.response) {
                setError(err.response.data.message || "Invalid login credentials.");
            } else {
                setError("Server error. Please try again later.");
            }
        }
        
    };

    return (
        <Grid container justifyContent="center" className="mt-5">
            <Grid 
                item 
                xs={12} md={5}
                className="p-4"
                sx={{ border: '1px solid #FFF', boxShadow: '0 4px 10px rgba(213, 208, 208, 1)', background: '#fff', borderRadius: 2 }}
            >
                <Grid container direction="column" className="mt-3">
                    <p className='text-center'>
                        <img src='assets/logo 1.jpg' className='img-fluid' alt="Yashoda Trust" /> 
                        YECT
                    </p>
                    <h4 className='text-center'>LOG IN</h4>
                    <p className='text-center'>Track your donations</p>

                    {error && <p className="text-danger text-center">{error}</p>}

                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="name@example.com" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="********" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </Form.Group>

                        <Grid container justifyContent="center">
                            <Button type="submit" variant="primary">SUBMIT</Button>
                        </Grid>
                    </Form>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AdminLogin;
