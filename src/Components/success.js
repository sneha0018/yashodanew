import React from 'react';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';

function Success() {
    return (
        <Grid 
            container 
            sx={{
                backgroundColor: '#aeaeea',
                minHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Centers both text and button
                alignItems: 'center',
                gap: 2 // Reduces space between items
            }}
        >
            <Typography variant="h2" gutterBottom  >
                Thank you for your donation.
            </Typography>
            <Button href='/' variant="contained" sx={{ mt: 1 }}>
                Go back to Home
            </Button>
        </Grid>
    );
}

export default Success;
