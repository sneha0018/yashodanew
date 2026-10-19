import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Donation.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

function Donation() {
  const [donationData, setDonationData] = useState({
    amount: "",
    name: "",
    email: "",
    dob: "",
    pan: "",
    country: "",
    address: "",
    pincode: "",
    contact: "",
  });
  const navigate = useNavigate(); // Navigate function to redirect
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!donationData.amount) newErrors.amount = "Amount is required";
    if (!donationData.name) newErrors.name = "Name is required";
    if (!donationData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(donationData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!donationData.dob) newErrors.dob = "Date of birth is required";
    
    if (!donationData.contact) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(donationData.contact)) {
      newErrors.contact = "Enter a valid 10-digit contact number";
    }

    if (!donationData.pan) {
      newErrors.pan = "PAN number is required";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(donationData.pan)) {
      newErrors.pan = "Enter a valid 10-character PAN (e.g., ABCDE1234F)";
    }

    if (!donationData.country) newErrors.country = "Country is required";
    if (!donationData.address) newErrors.address = "Address is required";
    
    if (!donationData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(donationData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // Handle Input Changes
  const handleChange = (e) => {
    setDonationData({ ...donationData, [e.target.name]: e.target.value });
  };

  // Handle Payment
  const handlePayment = async () => {
    if (!validateForm()) {
      return;
    }
    
    try {
      // ✅ Step 1: Create Order & Send User Data
      const { data } = await axios.post(`${process.env.REACT_APP_PUBLIC_BASE_URL}/donation/create-order`, donationData);

      const options = {
        key: data.key, // Razorpay Key ID
        amount: donationData.amount * 100,
        currency: "INR",
        name: "Child Education Donation",
        description: "Help children study",
        order_id: data.orderId,
        handler: async function (response) {
          // ✅ Step 2: Verify Payment
          const verifyRes = await axios.post(`${process.env.REACT_APP_PUBLIC_BASE_URL}/donation/verify-payment`, response);

          if (verifyRes.data.success) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            navigate("/success");
          } else {
            alert("Payment verification failed. Contact support.");
          }
        },
        prefill: {
          name: donationData.name,
          email: donationData.email,
        },
        theme: { color: "#960116" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '20px'}}>
      {/* Image Container */}
      <Grid container>
        <Grid container item size={12} className="justify-content-center align-items-center">
          <img
            src="/assets/Vector.jpg"
            alt="Donation Banner"
            style={{
              width: '300px',
              height: '200px',
              display: 'block',
            }}
            className="img-fluid"
          />
        </Grid>
      </Grid>

      {/* Centered Text */}
      <Grid
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#000', // Adjust text color as needed
          
          padding: '10px 20px',
      
          textAlign: 'center',
        }}
      >
        <Grid >
        <h1 className='responsive-text' >
         Give a Little, Change a Lot - Your Donation Can Make a World of Difference
        </h1>
        
       
        </Grid>
      </Grid>

    
    </div>

      <Grid container className="background" sx={{ backgroundImage: `url('/assets/7ded7d36e691bda015c0363a71830fef.jpg')`, backgroundSize: "cover", padding: "20px" }}>
        <Grid container sx={{ border: "1px solid #FFF", backgroundColor: "#FFF", padding: "40px" }}>
          <Grid item xs={12}>
            <h3>Donate to help a child study<img src="/assets/yect/WhatsApp Image 2025-03-26 at 15.26.32_986e3af2.jpg" className="img-fluid" height={100} width={150}/></h3>
            <p>Only national payments are possible.</p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Enter amount *</Form.Label>
                <Form.Control type="number" name="amount" placeholder="4000" required onChange={handleChange} />
                <span className="text-danger">{errors.amount}</span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name *</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" onChange={handleChange} />
                <span className="text-danger">{errors.name}</span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" name="email" placeholder="you@company.com" onChange={handleChange} />
                <span className="text-danger">{errors.email}</span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>DOB *</Form.Label>
                <Form.Control type="date" name="dob" onChange={handleChange} />
                <span className="text-danger">{errors.dob}</span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter contact no. *</Form.Label>
                <Form.Control type="text" name="contact" placeholder="Contact no." required onChange={handleChange} />
                <span className="text-danger">{errors.contact}</span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter country *</Form.Label>
                <Form.Control type="text" name="country" placeholder="India" required onChange={handleChange} />
                <span className="text-danger">{errors.country}</span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter pan no. *</Form.Label>
                <Form.Control type="text" name="pan" placeholder="**********" required onChange={handleChange} />
                <span className="text-danger">{errors.pan}</span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter address *</Form.Label>
                <Form.Control type="text" name="address" placeholder="Address..." required onChange={handleChange} />
                <span className="text-danger">{errors.address}</span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter pincode *</Form.Label>
                <Form.Control type="number" name="pincode" placeholder="******" required onChange={handleChange} />
                <span className="text-danger">{errors.pincode}</span>
              </Form.Group>
              <Button className="w-100" style={{ backgroundColor: "rgb(12, 92, 12)", color: "#FFF", borderRadius: "10px", borderColor: 'rgb(12, 92, 12)' }} onClick={handlePayment}>
                Donate Now
              </Button>
            </Form>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default Donation;
