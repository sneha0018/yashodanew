import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useAuth } from '../AuthContext';

function AddInternship() {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');

  const { isAuthenticated } = useAuth(); // Get authentication status from context

      useEffect(() => {
          if (!isAuthenticated) {
              navigate("/admin-login"); // Redirect to the login page
          }
      }, [isAuthenticated, navigate]); // Trigger effect when authentication state changes
  

  // 🛠 Create Internship API Call
  const handleCreateInternship = async () => {
    if (!jobTitle || !salary) {
      alert('Please fill all fields.');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_PUBLIC_BASE_URL}/internship/internships`, { jobTitle, salary });
      alert('Internship added successfully!');
      setJobTitle('');
      setSalary('');
    } catch (error) {
      console.error('Error creating internship:', error);
    }
  };

  return (
    <Grid container item direction="row" style={{ padding: '20px' }} className="d-flex justify-content-center" sx={{backgroundColor: '#aeaeea', minHeight: '85vh'}}>
        <Grid item container size={{md:6, xs:12}} className="d-flex justify-content-center">
            <Grid item container direction="column" spacing={2} sx={{border: '1px solid #FFF', padding: '20px', backgroundColor: '#FFF'}} >
      {/* Heading */}
      <Grid item container size={12}>
        <Typography variant="h3" align="center">CREATE INTERNSHIP</Typography>
      </Grid>

      {/* Input Fields */}
      <Grid item container size={12}>
        <TextField
          label="Job Title"
          variant="outlined"
          fullWidth
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </Grid>
      <Grid item container size={12}>
        <TextField
          label="Salary"
          variant="outlined"
          fullWidth
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </Grid>

      {/* Save Internship Button */}
      <Grid item container size={12}>
        <Button variant="contained" color="primary" fullWidth onClick={handleCreateInternship}>
          Save Internship
        </Button>
      </Grid>

      {/* View Internship Button */}
      <Grid item container size={12}>
        <Button variant="outlined" color="secondary" fullWidth onClick={() => navigate('/manage-internships')}>
          View Internships
        </Button>
      </Grid>
      </Grid>
      </Grid>
    </Grid>
  );
}

export default AddInternship;
