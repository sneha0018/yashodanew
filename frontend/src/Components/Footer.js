import React from "react";
import Grid from "@mui/material/Grid2";
import Button from "react-bootstrap/Button";
import CircleIcon from "@mui/icons-material/Circle";
import Form from "react-bootstrap/Form";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div>
      <Grid item container className="mt-5" direction="row">
        <Grid
          item
          container
          size={{ xs: 12, md: 12 }}
          className="justify-content-center align-items-center"
        >
          <Grid
            item
            container
            direction="column"
            sx={{ paddingLeft: "50px" }}
            spacing={2}
          >
            <Grid item>
              <h4 className="text-center" style={{ color: "#0c0c89" }}>
                <img src="/assets/logo 1.jpg" /> YECT
              </h4>
            </Grid>
            <Grid item>
              <h5 style={{ textAlign: "center", color: "#0c0c89" }}>
                <a
                  href="/#/about"
                  style={{ textDecoration: "none", color: "rgb(12, 92, 12)" }}
                >
                  About Us
                </a>{" "}
                <CircleIcon sx={{ fontSize: "1rem" }} />{" "}
                <a
                  href="/#/donation"
                  style={{ textDecoration: "none", color: "rgb(12, 92, 12)" }}
                >
                  Donation
                </a>{" "}
                <CircleIcon sx={{ fontSize: "1rem" }} />{" "}
                <a
                  href="/#/gallery"
                  style={{ textDecoration: "none", color: "rgb(12, 92, 12)" }}
                >
                  Gallery
                </a>{" "}
                <CircleIcon sx={{ fontSize: "1rem" }} />{" "}
                <a
                  href="/#/contact"
                  style={{ textDecoration: "none", color: "rgb(12, 92, 12)" }}
                >
                  {" "}
                  Contact Us
                </a>
              </h5>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item container size={{xs: 12, md: 7}}>
            <Grid item container direction="column" spacing={1} sx={{paddingLeft: '30px'}}>
            <Grid item>
              <h6>Subscribe to our Newsletter</h6>
            </Grid>
            <Grid item>
              <p>Join our newsletter to stay up to date on features and releases.</p>
            </Grid>
            <Grid item>
               <Form.Control type="text" placeholder="Enter your email" />
            </Grid>
            <Grid item>
              <Button style={{
            fontWeight: '600',
            backgroundColor: '#FFF',
            color: '#960116',
            borderColor: '#960116',
          }}>Join now</Button>
            </Grid>
            <Grid item>
              <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
            </Grid>
            </Grid>
          </Grid> */}
      </Grid>

      <Grid
        item
        container
        className="mt-5"
        direction="row"
        sx={{ justifyContent: "center" }}
      >
        <Grid item xs={8}>
          <img src="/assets/Divider.png" className="img-fluid" />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className="mt-5"
        direction="row"
        sx={{ justifyContent: "center" }}
      >
        <Grid
          item
          container
          size={{ xs: 12, md: 2 }}
          sx={{ justifyContent: "center" }}
        >
          <a href="/#/privacy-policy" style={{ color: "#000" }}>
            Privacy Policy
          </a>
        </Grid>
        <Grid
          item
          container
          size={{ xs: 12, md: 2 }}
          sx={{ justifyContent: "center" }}
        >
          <a href="/#/terms-condition" style={{ color: "#000" }}>
            Terms of Service
          </a>
        </Grid>

        <Grid
          item
          container
          size={{ xs: 12, md: 2 }}
          sx={{
            justifyContent: { xs: "center", md: "end" },
            paddingRight: { xs: "0", md: "20px" },
          }}
        >
          <p>
            <a
              href="https://www.facebook.com/share/14n8KLAL6H/?mibextid=qi2Omg"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <FacebookRoundedIcon sx={{ fontSize: "35px" }} />
            </a>{" "}
            <a
              href="https://www.instagram.com/yect_inner_voice_achieves?igsh=MWMwZjB4dWc3OHNjdw== "
              style={{ textDecoration: "none", color: "#000" }}
            >
              <InstagramIcon sx={{ fontSize: "35px" }} />
            </a>{" "}
          </p>
        </Grid>

        <Grid item container size={12} sx={{ justifyContent: "center" }}>
          <p style={{ color: "rgb(12, 92, 12)" }}>
            2025 Yashoda Trust. All rights reserved. Designed by{" "}
            <span>
              <a
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "700",
                }}
                href="https://www.rpinfocare.com/"
              >
                Codentix Tech LLP
              </a>
            </span>{" "}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
