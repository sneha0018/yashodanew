import React, { useState } from "react";
import { Button,TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./Footer";
import axios from 'axios';

function Internship() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    pincode: "",
    country: "",
    applicationType: "",
    date: "",
    availableDuration: "",
    commitmentDuration: "",
    skills: "",
    experience: "",
    educational: "",
    interests: [],
    volunteerIntern: "",
    platformSelect: "",
    resume: null,
    supportingDocuments: null,
    confirmDetails: false,
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
  
    setFormData((prevData) => {
      if (type === "checkbox" && name === "interests") {
        return {
          ...prevData,
          interests: checked
            ? [...prevData.interests, value] // Add interest if checked
            : prevData.interests.filter((interest) => interest !== value), // Remove if unchecked
  
          // Clear 'otherApplicationType' when "Others" checkbox is unchecked
          otherApplicationType: value === "other" && !checked ? "" : prevData.otherApplicationType,
        };
      } else if (type === "file") {
        return {
          ...prevData,
          [name]: files[0], // Store single file
        };
      } else {
        return {
          ...prevData,
          [name]: value, // Store normal text inputs
        };
      }
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "interests") {
        formDataToSend.append(key, JSON.stringify(formData[key]));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      await axios.post(`${process.env.REACT_APP_PUBLIC_BASE_URL}/internship/send-email`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };
  return (
    <Grid>
    <Grid container sx={{ backgroundColor: "#6565bb", justifyContent: "center", alignItems: "center" }}>

      <Grid item>

      <Grid size={12}>
          <div id="carouselExampleInterval4" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="assets/yect/1000834855.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="assets/yect/1000834866.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>

    <div class="carousel-item" data-bs-interval="3000">
      <img src="assets/yect/1000834868.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>

   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>
          </Grid>
          <Grid size={12} sx={{paddingTop: '40px',paddingBottom: '40px'}}>
            <h3 className="text-center" style={{color: 'rgb(12, 92, 12)'}}>"The internship program for college students provides an opportunity to engage in community service, allowing them to contribute to social causes while gaining hands-on experience in addressing community needs."</h3>
          </Grid>

       
      </Grid>0c0c89
      <Grid item size={{xs: 12, md: 8}} sx={{ padding: 3, backgroundColor: "#fff", borderRadius: "10px", boxShadow: 3, marginTop: '10px', marginBottom: '10px' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{color: '#'}}>
          Volunteer/Intern with Yashoda Trust
        </Typography>
        <Form onSubmit={handleSubmit}>
          
            <p>Section 01. Personal Information</p>
        <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Full Name *</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" required onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group >
                <Form.Label>Enter your Email *</Form.Label>
                <Form.Control type="email" name="email" placeholder="you@company.com" required onChange={handleChange}/>
              </Form.Group>
          </Col>
        </Row>
         
          <Row className="mb-3">
            <Col xs={12} md={6}>
          <Form.Group >
            <Form.Label>Enter contact no. *</Form.Label>
            <Form.Control type="number" name="contact" placeholder="Contact no." required onChange={handleChange}/>
          </Form.Group>
          </Col>
          <Col xs={12} md={6}>
          <Form.Group>
            <Form.Label>Enter address *</Form.Label>
            <Form.Control type="text" name="address" placeholder="Address..." required onChange={handleChange}/>
          </Form.Group>
          </Col>
          </Row>
         
         
          <Row className="mb-3">
          <Col xs={12} md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Enter pincode *</Form.Label>
            <Form.Control type="number" name="pincode" placeholder="******" required onChange={handleChange}/>
          </Form.Group>
          </Col>
          <Col xs={12} md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Enter country *</Form.Label>
            <Form.Control type="text" name="country" placeholder="India" required onChange={handleChange}/>
          </Form.Group>
          </Col>
          </Row>
<hr></hr>
          <p>Section 02. Application Details</p>
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>You are applying for *</Form.Label>
                <div>
                <Form.Check
      type="radio"
      label="Volunteer Position"
      name="applicationType"
      value="volunteer"
      required
      onChange={handleChange}
      checked={formData.applicationType === "volunteer"} // Ensure correct selection
    />
    <Form.Check
      type="radio"
      label="Internship Position"
      name="applicationType"
      value="internship"
      required
      onChange={handleChange}
      checked={formData.applicationType === "internship"} // Ensure correct selection
    />
  </div>

              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group >
                <Form.Label>Preferred Start Date *</Form.Label>
                <Form.Control type="date" name="date" required onChange={handleChange} />
              </Form.Group>
          </Col>
        </Row>      

        <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>How many hours you are available per week? *</Form.Label>
                <Form.Select name="availableDuration" required onChange={handleChange}>
        <option value="">Choose number of hours</option>
        <option value="20 hours">20 hours</option>
        <option value="30 hours">30 hours</option>
        <option value="35 hours">35 hours</option>
      </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group >
                <Form.Label>How long you can commit to this role? *</Form.Label>
                <Form.Select name="commitmentDuration" required onChange={handleChange}>
        <option value="">Choose below</option>
        <option value="6 months">6 months</option>
        <option value="1 year">1 year</option>
        <option value="3 years">3 years</option>
      </Form.Select>
              </Form.Group>
          </Col>
        </Row>
<hr></hr>
        <p>Section 03. Skills and Experience</p>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Briefly describe your skills and strengths. *</Form.Label>
              <Form.Control as="textarea" name="skills" placeholder="Describe your skills..." rows={4} required onChange={handleChange}/>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Relevant experience (if any)</Form.Label>
              <Form.Control as="textarea" name="experience" placeholder="Mention relevant experience..." rows={4} onChange={handleChange} />
            </Form.Group>
          </Col>

         

        </Row>

        <Form.Group className="mb-3">
              <Form.Label>Educational Background *</Form.Label>
              <Form.Control as="textarea" name="educational" placeholder="Enter..." rows={3} required onChange={handleChange}/>
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Do you have specific areas of interest? *</Form.Label>
              <div>
              <Form.Check
      type="checkbox"
      label="Teaching"
      name="interests"
      value="teaching"
      onChange={handleChange}
      checked={formData.interests.includes("teaching")}
    />
    <Form.Check
      type="checkbox"
      label="Content Creation"
      name="interests"
      value="contentCreation"
      onChange={handleChange}
      checked={formData.interests.includes("contentCreation")}
    />
    <Form.Check
      type="checkbox"
      label="Fundraising"
      name="interests"
      value="fundraising"
      onChange={handleChange}
      checked={formData.interests.includes("fundraising")}
    />
    <Form.Check
      type="checkbox"
      label="Social Media Management"
      name="interests"
      value="socialMediaManagement"
      onChange={handleChange}
      checked={formData.interests.includes("socialMediaManagement")}
    />
    <Form.Check
      type="checkbox"
      label="Event Coordination"
      name="interests"
      value="eventCoordination"
      onChange={handleChange}
      checked={formData.interests.includes("eventCoordination")}
    />
      {/* "Others" Option with Text Field */}
      <div className="d-flex align-items-center mt-2">
      <Form.Check
        type="checkbox"
        id="otherCheckbox"
        label="Others:"
        name="interests"
        value="other"
        onChange={handleChange}
        checked={formData.interests.includes("other")}
      />
      <Form.Control
        type="text"
        placeholder="Specify other..."
        name="otherApplicationType"
        className="ms-2"
        onChange={handleChange}
        value={formData.otherApplicationType}
      />
      </div>
    </div>
            </Form.Group>

<hr></hr>
          <p>Section 04. Motivation</p>
          <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Why do you want to volunteer/intern with us? *</Form.Label>
              <Form.Control as="textarea" name="volunteerIntern" placeholder="Enter..." rows={4} required onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Where did you hear about us? *</Form.Label>
              <Form.Select name="platformSelect" required onChange={handleChange}>
        <option value="">Choose from options</option>
        <option value="career">Career</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="Facebook">Facebook</option>
      </Form.Select>
            </Form.Group>
          </Col>

         

        </Row>

<hr></hr>
        <p>Section 05. Documents Upload</p>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Upload your Resume *</Form.Label>
              <Form.Control type="file" name="resume" required onChange={handleChange}/>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Additional Supporting Documents (if any)</Form.Label>
              <Form.Control type="file" name="supportingDocuments" onChange={handleChange} />
            </Form.Group>
          </Col>

         

        </Row>

        <div>
      <Form.Check type="checkbox" label="I confirm that the information provided is accurate and true." name="applicationType" value="value1" onChange={handleChange} />
      <Form.Check className="mb-3" type="checkbox" label="I agree to abide by the organizational's terms and conditions." name="applicationType" value="value2" onChange={handleChange} />
     
    </div>

          <Button className="mb-3" type="submit" fullWidth style={{ backgroundColor: "rgb(12, 92, 12)", color: "#FFF", borderRadius: "10px", borderColor: 'rgb(12, 92, 12)' }}>
            Submit
          </Button>
        </Form>
      </Grid>
    </Grid>
    <Footer/>
    </Grid>
  );
}

export default Internship;
