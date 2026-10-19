import React from 'react';
import Grid from '@mui/material/Grid2';
import Footer from './Footer';

function PrivacyPolicy() {
    return(
        <div>
            <Grid item container direction="row" sx={{backgroundColor: '#F8F0F1', paddingTop: '80px', paddingBottom: '80px'}}>
                <Grid item container size={12} sx={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', fontSize: '3rem'}}>
                    Privacy Policy
                </Grid>
                <Grid item container size={12} sx={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                    <p>With effect from : 14th Jan 2025</p>
                </Grid>
            </Grid>

            <Grid item container direction="row" className="mt-5">
                <Grid item size={{xs: 12, md: 3}}>
                    <img src='/assets/Vector (1).jpg' className='img-fluid'/>
                </Grid>
                <Grid item size={{xs: 12, md: 6}} sx={{paddingLeft: '15px'}}>
                    <Grid item container direction="column" spacing={2}>
                        <Grid item>
                        Yashoda Education & Charitable Trust ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you interact with our services. By using our services, you agree to the collection and use of information in accordance with this policy. Please read this Privacy Policy carefully to understand how we handle your personal data.
                        </Grid>
                        <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                            Table of Contents
                        </Grid>
                        <Grid item>
                            <ol style={{color: '#960116', fontWeight: '600'}}>
                                <li >Information We Collect</li>
                                <li>How We Use Your Information</li>
                                <li>How We Protect Your Information</li>
                                <li>Disclosure of Your Information</li>
                                <li>Data Retention</li>
                                <li>Your Rights</li>
                                <li>Cookies and Tracking Technologies</li>
                                <li>Third-Party Links</li>
                                <li>Changes to This Privacy Policy</li>
                                <li>Contact Us</li>
                            </ol>
                        </Grid>
                        <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                        Information we collect 
                        </Grid>
                        <Grid item>
                        We may collect the following types of personal information from you:
                        </Grid>
                        <Grid item>
                            <ul>
                                <li>Your Name: The full name you provide when interacting with our services. </li>
                                <li>Your Age: Your date of birth or age for identification purposes</li>
                                <li>Your Occupation: The job or profession you may share with us.</li>
                                <li>User ID and Password: Any credentials you create to access our online services.</li>
                                <li>Email and Mailing Address: To communicate with you about our services or any updates.</li>
                                <li>Telephone Number: For contacting you regarding your account or services.</li>
                                <li>Payment Processing Details: Information related to any payments you make for services, including billing information, credit card details, or other payment method specifics.</li>
                                <li>Limited Personal Details: Other personal information you may voluntarily provide, such as demographic information or preferences.</li>
                                <li>Changes to This Privacy Policy</li>
                                <li>Any Other Data: Any additional information you provide to us through surveys, feedback, or other interactions.</li>
                            </ul>
                        </Grid>
                        <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                        How We Use Your Information
                        </Grid>
                        <Grid item>
                        We use the information we collect in the following ways:
                        </Grid>
                        <Grid item>
                            <ul>
                                <li>To process your transactions and provide you with requested services.</li>
                                <li>To communicate with you, including sending important notices, newsletters, or updates.</li>
                                <li>To improve and personalize your experience with our services.</li>
                                <li>To manage your account and ensure the security of your information.</li>
                                <li>To comply with legal and regulatory obligations.</li>
                                <li>To analyze usage trends and make improvements to our services.</li>
                            </ul>
                        </Grid>
                        <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                        How We Protect Your Information
                        </Grid>
                        <Grid item>
                        We implement a variety of security measures to ensure the safety of your personal information. These measures include encryption, secure servers, and restricted access to authorized personnel only.
                        </Grid>
                        <Grid item>
                        While we make every effort to protect your personal information, no system can be completely secure, and we cannot guarantee absolute security.
                        </Grid>

                        <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                        Disclosure of Your Information
                        </Grid>
                        <Grid item>
                        We may share your personal information in the following circumstances:
                        </Grid>
                        <Grid item>
                            <ul>
                                <li>Service Providers: We may share your information with third-party service providers that assist us in providing our services (such as payment processors, IT support, etc.).</li>
                                <li>Legal Requirements: We may disclose your personal information if required by law or in response to a legal process.</li>
                                <li>Business Transfers: In the event of a merger, acquisition, or sale of our assets, your personal information may be transferred as part of the transaction.</li>
                                <li>Consent: We may share your information if we obtain your explicit consent.</li>                             
                            </ul>
                        </Grid>
                        <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                        Data Retention
                        </Grid>
                        <Grid item>
                        We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
                        </Grid>
                        <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                        Your Rights
                        </Grid>
                        <Grid item>
                        Depending on your location, you may have the following rights regarding your personal information:
                        </Grid>
                        <Grid item>
                            <ul>
                                <li>Access: You can request to access the personal information we hold about you.</li>
                                <li>Correction: You can request to correct or update any inaccurate information.</li>
                                <li>Deletion: You can request to delete your personal information, subject to certain exceptions.</li>
                                <li>Opt-Out: You may opt-out of receiving marketing communications from us at any time.</li>                             
                            </ul>
                        </Grid>
                        <Grid item>
                        To exercise these rights, please contact us using the contact details provided below.
                        </Grid>

                        <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                        Cookies and Tracking Technologies
                        </Grid>
                        <Grid item>
                        We may use cookies and other tracking technologies to enhance your experience with our services. These technologies allow us to analyze usage patterns, customize content, and improve the overall user experience. You can control cookie settings through your browser settings.
                        </Grid>
                        <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                        Third-Party Links
                        </Grid>
                        <Grid item>
                        Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                        </Grid>

                        <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                        Changes to This Privacy Policy
                        </Grid>
                        <Grid item>
                        We may update this Privacy Policy from time to time. When we do, we will post the revised policy on this page with an updated effective date. Please review this Privacy Policy periodically to stay informed about how we are protecting your information.                     
                       </Grid>
                       <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                        Refund Policy
                        </Grid>
                        <Grid item>
                        As a trusted organization, we do not offer refunds. We stand by the quality of our services/products and encourage our customers to reach out with any questions or concerns before making a purchase. If you need further assistance or clarification, feel free to contact us.                     
                       </Grid>
                       <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                       Contact Us
                        </Grid>
                        <Grid item>
                        If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at: 9731395555. 9945645985
                        </Grid>

                        <Grid item sx={{fontWeight: 'bold', fontSize: '1.4rem'}}>
                        Yashoda Education & Charitable Trust
                        </Grid>
                        <Grid item>
                        Contact us:  9731395555. 9945645985
                        </Grid>
                        <Grid item>
                        By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                       </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Footer/>
        </div>
    );
}

export default PrivacyPolicy;