import React from 'react';
import Grid from '@mui/material/Grid2';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from './Footer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Contact() {
    return(
        <Grid>
        <Grid sx={{backgroundColor: '#6565bb'}}>
            <Grid item container direction="row" >
                <Grid item container size={12}  className="justify-content-center">
                <h1 style={{color: 'rgb(12, 92, 12)'}}>Contact Us</h1>
                </Grid>
            </Grid>
            <Grid  item container direction="row" spacing={3} className="mt-5 justify-content-center" sx={{paddingLeft: '10px', paddingRight: '10px'}}>
                <Grid item container size={{xs:12, sm: 6, md: 4}} className="justify-content-center">
                    <Grid item container direction="column" spacing={2} sx={{ border: '1px solid #FFF', padding: '10px', backgroundColor: '#FFF', boxShadow: '2px 4px 4px 4px rgb(255, 255, 255, 1)'}}>
                        <Grid item container size={12}>
                            <h4 style={{color: 'rgb(12, 92, 12)'}}>Address:</h4>
                        </Grid>
                        <Grid item container size={12}>
                            <h6> <LocationOnIcon/> &nbsp;No.1282, 2nd floor,16th main, Begur Rd, Mico Layout, Hongasandra, Bengaluru, Karnataka 560068</h6>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container size={{xs:12, sm: 6, md: 4}} className="justify-content-center" >
                    <Grid item container direction="column" spacing={2} sx={{ border: '1px solid #FFF', padding: '10px', backgroundColor: '#FFF', boxShadow: '2px 4px 4px 4px rgb(255, 255, 255, 1)'}}>
                        <Grid item container size={12}>
                    <h6><EmailIcon/> &nbsp;<a href='mailto:trustyashodha@gmail.com' style={{textDecoration: 'none', color: '#000'}}>trustyashodha@gmail.com</a></h6>
                    </Grid>
                    <Grid item container size={12}>
                    <h6><LocalPhoneIcon/> &nbsp;<a href='tel:08123264845' style={{textDecoration: 'none', color: '#000'}}>08123264845</a></h6>
</Grid>
                    </Grid>
                </Grid>

                <Grid item container size={{xs: 12, sm: 6, md: 4}} className="justify-content-center" >
                    <Grid item container direction="column" spacing={2} sx={{ border: '1px solid #FFF', padding: '10px', backgroundColor: '#FFF', boxShadow: '2px 4px 4px 4px rgb(255, 255, 255, 1)'}}>
                        <Grid item container size={12}>
                            <h5 style={{color: 'rgb(12, 92, 12)'}}>Social Media Links</h5>
                        </Grid>
                        <Grid item container size={12}>
                        <a href='https://www.facebook.com/share/14n8KLAL6H/?mibextid=qi2Omg' style={{textDecoration: 'none', color: '#000'}}><FacebookRoundedIcon/> </a>
                        </Grid>
                        <Grid item container size={12}>
                        <a href='https://www.instagram.com/yect_inner_voice_achieves?igsh=MWMwZjB4dWc3OHNjdw== ' style={{textDecoration: 'none', color: '#000'}}><InstagramIcon/> </a>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container size={12} className="mb-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.498448328333!2d77.62242139066532!3d12.891689599665327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14c8bcc2e2a9%3A0xdfa1a3ec9cec3f6e!2sYashodha%20Education%20And%20Charitable%20Trust!5e0!3m2!1sen!2sin!4v1740652005439!5m2!1sen!2sin" width="100%" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Grid>
            </Grid>

        </Grid>
        
        <Footer/>
        </Grid>
    );
}

export default Contact;