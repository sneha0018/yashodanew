import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Footer from './Footer';

const images = [
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.14.07 PM.jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.18.25 PM.jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.18.26 PM.jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.18.26 PM(1).jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.18.26 PM(2).jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.18.27 PM.jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.18.27 PM(1).jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.34.32 PM.jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.37.41 PM.jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.37.42 PM.jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.37.42 PM(1).jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.37.43 PM.jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.37.43 PM(1).jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.37.44 PM.jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.37.44 PM(1).jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.44.35 PM.jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.44.36 PM (1).jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.44.36 PM.jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.44.37 PM (1).jpeg',
    '/assets/yect/WhatsApp Image 2025-02-06 at 9.44.37 PM.jpeg',
    // '/assets/yect/1000836061.jpg',
    // '/assets/yect/1000836105.jpg',
    // '/assets/yect/1000836106.jpg',
    '/assets/yect/1000836108.jpg',
    '/assets/yect/1000836112.jpg',
    '/assets/yect/1000836114.jpg',
    '/assets/yect/1000836117.jpg',
    // '/assets/yect/1000836232.jpg',
    '/assets/yect/1000836233.jpg',   
    '/assets/yect/1000836235.jpg',
    '/assets/yect/FB_IMG_1673609887035.jpg',
    '/assets/yect/FB_IMG_1673609914576.jpg',
    '/assets/yect/FB_IMG_1673609936117.jpg',
    '/assets/yect/FB_IMG_1673609947448.jpg',
    '/assets/yect/IMG_20250206_223322.jpg',
    '/assets/yect/IMG20240805173415_01.jpg',
    '/assets/yect/IMG_20250311_171649.jpg',
    '/assets/yect/IMG20240805173415_01.jpg',

];

function Gallery() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClickOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <Grid container spacing={2} className="d-flex justify-content-center" sx={{ padding: '15px' }}>
            {images.map((image, index) => (
                <Grid item size={{xs: 12, sm: 6, md: 4}} key={index} onClick={() => handleClickOpen(image)} style={{ cursor: 'pointer' }}>
                    <img src={image} className="img-fluid" alt={`Gallery ${index}`} />
                </Grid>
            ))}

            {/* Modal Dialog for Image Preview */}
            <Dialog open={open} onClose={handleClose} maxWidth="lg">
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{ position: 'absolute', right: 10, top: 10, color: 'white', background: 'black' }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
                    {selectedImage && (
                        <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto', maxHeight: '90vh' }} />
                    )}
                </DialogContent>
            </Dialog>

            <Footer />
        </Grid>
    );
}

export default Gallery;
