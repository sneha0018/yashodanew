import React from 'react';
import Grid from '@mui/material/Grid2';

import './About.css';
import Footer from './Footer';
import { Typography } from '@mui/material';
import TeamCarousel from './TeamCarousel';
import TeamCarousel2 from './TeamCarousel2';
function About() {
  return (
    <div>
    <div style={{ position: 'relative', width: '100%'}}>
      {/* Image Container */}
      <Grid container>
        <Grid item size={12}>
          <img
            src="/assets/Hope Rises With Every Donation (2) 1.png"
            alt="Donation Banner"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
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
          If you cannot do good, at
        </h1>
        
        <h1 className='responsive-text'>
          least do not do bad
        </h1>
        <p className='responsive-text2'>
          - Dr VANI N SHETTY
        </p>
        </Grid>
      </Grid>

    
    </div>
    <Grid item container direction="row" className="mt-5">
            <Grid item container size={12} sx={{justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{fontWeight: 'bold', color: '#0c0c89'}}>Our Founder Member</h1>
            </Grid>
      </Grid>

      <Grid item container direction="row">
        <Grid item container size={{xs: 12, md: 6}} sx={{justifyContent: {xs: 'center', md: 'left'}}}>
            <Grid item container direction="column" >
                <Grid item container sx={{paddingLeft: '110px', position: 'relative', top: '80px'}}>
                    <img src='/assets/Mask group.png' />
                </Grid>
                <Grid item container sx={{position: 'relative', bottom: '40px'}}>
                    <img src='/assets/Vector.png'/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container size={{xs: 12, md: 6}} sx={{ justifyContent: 'center', alignItems: 'center', paddingLeft: '30px', paddingRight: '30px'}}>
            <Grid item container direction="column">
                <Grid item>
                <p style={{color: 'rgb(12, 92, 12)'}}>My childhood was marked by feelings of abandonment and a deep interest in education. Despite facing obstacles and being forced into a child marriage, I carried the burden of responsibilities at a very young age. As a woman, I have witnessed the injustices society imposes on those like me. These experiences led me to establish an organization in my mother's name, where I aim to provide support and guidance to children and women, empowering them to live independently, healthily, and with dignity. My goal is to raise legal awareness, helping them protect their rights, and ensure that even the elderly and disabled can lead fulfilling lives. With the support of generous donors, I provide shelter, food, healthcare, and education to those in need.
     I have dedicated my life 24/7 to the betterment of society and welcome your help and guidance in this mission.</p>


                </Grid>
                <Grid item>
<p style={{color: 'rgb(12, 92, 12)'}}>- Dr Vani N Shetty</p>
                </Grid>
     </Grid>
        </Grid>
      </Grid>

      <Grid item container direction="row" className="mt-5" >
        <Grid item container size={3} sx={{justifyContent: 'end'}}>
            <Grid item>
                <img src='/assets/Heading.png' className='img-fluid'/>
            </Grid>
        </Grid>
        <Grid item container size={6} sx={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
            <Grid item container direction="column">
                <Grid item>
            <h5 style={{color: '#0c0c89', fontWeight: '700'}}>Although society has given me bitterness, I strive to return only sweetness.</h5>
            </Grid>
            <Grid item>
                <p style={{color: 'rgb(12, 92, 12)'}}>- Dr Vani N Shetty</p>
            </Grid>
            </Grid>
        </Grid>
        <Grid item container size={3} sx={{justifyContent: 'start'}}>
            <Grid item>
        <img src='/assets/Heading1.png' className='img-fluid'/>
        </Grid>
        </Grid>
      </Grid>

      <Grid item container direction="row" className="mt-5 mb-5">
        <Grid item container size={{xs: 12, sm: 6, md: 3}} sx={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
            <Grid item container direction="column">
                <Grid item>
                    <img src='/assets/bx-medal.png' className='img-fluid'/>
                </Grid>
                <Grid item>
                    <h4 style={{color: 'rgb(12, 92, 12)'}}>
                    Received the Emerging 
                    </h4>
                </Grid>
                <Grid item>
                    <h4 style={{color: 'rgb(12, 92, 12)'}}>Women Business Award</h4>
                </Grid>
                
            </Grid>
        </Grid>
        <Grid item container size={{xs: 12, sm: 6, md: 3}} sx={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
            <Grid item container direction="column">
                <Grid item>
                    <img src='/assets/bx-plus-medical.png' className='img-fluid'/>
                </Grid>
                <Grid item>
                    <h4 style={{color: 'rgb(12, 92, 12)'}}>Red cross lifetime </h4>
                </Grid>
                <Grid item>
                    <h4 style={{color: 'rgb(12, 92, 12)'}}>member</h4>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container size={{xs: 12, sm: 6, md: 3}} sx={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
            <Grid item container direction="column">
                <Grid item>
                    <img src='/assets/bx-pen.png' className='img-fluid'/>
                </Grid>
                <Grid item>
                    <h4 style={{color: 'rgb(12, 92, 12)'}}>Member of KANNADA </h4>
                </Grid>
                <Grid item>
                    <h4 style={{color: 'rgb(12, 92, 12)'}}>SAHITYA PARISHATTU</h4>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container size={{xs: 12, sm: 6, md: 3}} sx={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
            <Grid item container direction="column">
                <Grid item>
                    <img src='/assets/bxs-group.png' className='img-fluid'/>
                </Grid>
                <Grid item>
                    <h4 style={{color: 'rgb(12, 92, 12)'}}> Received Docatarate Award</h4>
                </Grid>
                <Grid item>
                    <h4 style={{color: 'rgb(12, 92, 12)'}}> Dr. Vani N Shetty</h4>
                </Grid>
              
            </Grid>
        </Grid>
      </Grid>

      {/* <Grid item container spacing={3} direction='row' className="d-flex justify-content-center align-items-center">
        <Grid size={12}>
            <h1 className='text-center' style={{color: '#0c0c89'}}>Our Team</h1>
        </Grid>
        <Grid size={{xs:12, md:4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '20px'}}>
            <img src='/assets/yect/1000835010.jpg' className='img-fluid'/>
            <h5 className='text-center mt-3' style={{color: '#0c0c89'}}>Founder & President</h5>
            <h6 className='text-center' style={{color: '#0c0c89'}}>Dr Vani N Shetty</h6>
        </Grid>
        <Grid size={{xs:12, md:4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '20px'}}>
            <img src='/assets/yect/1000835011.jpg' className='img-fluid'/>
            <h5 className='text-center mt-3' style={{color: '#0c0c89'}}>General Secretary</h5>
            <h6 className='text-center' style={{color: '#0c0c89'}}>Ananya Shetty</h6>
        </Grid>
        <Grid size={{xs:12, md:4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '20px'}}>
            <img src='/assets/yect/1000835012.jpg' className='img-fluid'/>
            <h5 className='text-center mt-3' style={{color: '#0c0c89'}}>Treasurer</h5>
            <h6 className='text-center' style={{color: '#0c0c89'}}>Tapasya</h6>
        </Grid>
      </Grid> */}
      <TeamCarousel2/>

      <Grid item container direction="row" className="mt-5">
        <Grid item container size={{xs: 12, md: 12}} sx={{ justifyContent: 'center', paddingLeft: {xs: '10px', md: '40px'}}}>
            <Grid item container >
                <h3 style={{fontSize: '2rem', color: '#0c0c89'}}>How was Yashoda Trust established ?</h3>
            </Grid>
        </Grid>

        <Grid item container size={{xs: 12, md: 12}} sx={{paddingLeft: '20px', paddingRight: '20px', marginTop: '10px'}}>
            <Grid item container direction="column">
                <Grid item>
                    <p style={{color: 'rgb(12, 92, 12)'}}>The founder and president of Yashodha Education and Charitable Trust (YECT), was born into a challenging life, as her mother passed away at birth and she grew up neglected by her father. Raised by her grandparents and aunt, she constantly felt a deep sense of abandonment and isolation. Society added to her struggles, labeling her as an orphan and placing obstacles in her path, even discouraging her interest in education and the arts during childhood. Her early years were marked by innocence and fear, with no expectations or desires, while she quietly suppressed her emotions and longings. Devoid of parental love and care, she found herself surrounded by people who provided food and clothing but withheld affection, further deepening her sense of loneliness.</p>
                </Grid>
                <Grid item>
                    <p style={{color: 'rgb(12, 92, 12)'}}>She was married off at a young age  of 17, and as a mother, she carried the burden of raising her children with little knowledge or support, becoming a single parent with more responsibilities on her shoulders. In 1999, she became a school teacher, later becoming a working partner in 2004 an educational institution. However, after facing betrayal in this role ,she started her own play home and daycare center,and also she pursued a B.com degree through a correspondence course.alongside,she showed intrest in computers and various short-term training programs.her passion for education and the arts became the driving force behind encouraging others to provide children with education that aligns with their interests and to motivate them in pursuing other skills and activities.</p>
                </Grid>
            </Grid>
        </Grid>
      </Grid>

      <Grid item container direction="row" className="mt-5"  
    sx={{
      
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
         <Grid item container size={{xs: 12, md: 6}}>
            <Grid item container direction="column" sx={{paddingLeft: '20px', paddingRight: '20px'}}>
                <Grid item>
                    <p style={{color: 'rgb(12, 92, 12)'}}>She started her own play home and daycare the name of Ushanikethan , and started tuition center in the name of sri sai tutorial .and she started Ushakalaniketan dance and music center.</p>
                </Grid>
                <Grid item>
                    <p style={{color: 'rgb(12, 92, 12)'}}>Since 2006 40% she  providing free play home and daycare, pre-nursery, dance, music, and tuition classes for single parent and underprivileged children. She ran this center until 2020.</p>
                </Grid>
                <Grid item>
                    <p style={{color: 'rgb(12, 92, 12)'}}>In 2013, Dr. Vani founded YECT ( YASHODHA EDUCATION AND CHARITABLE TRUST ), an organization dedicated to providing free education, meals, healthcare, and shelter to the poor and underprivileged. During the 2020-2021 lockdown, YECT successfully distributed meals to 150,000 people, provided rations to 15,000 individuals, and organized vaccinations for 8,500 people, all with the help of several organizations and citizens.</p>
                </Grid>
                <Grid item>
                    <p style={{color: 'rgb(12, 92, 12)'}}>In 2022, she established Eva Angels Home for children and the disabled, as well as an old age home, providing shelter to over 180 individuals. From 2006 to 2020, Dr. Vani's initiatives provided free nursery education to more than 5,000 underprivileged children and helped over 1,500 children with their education. Since 2022, YECT has supported over 180 children of single parents, offering them education, meals, and accommodation. The organization, in collaboration with Magic Bus, has also provided free computer training to over 65 students who completed their SSLC (10th-grade exams), along with food and accommodation.</p>
                </Grid>
                <Grid item>
                    <p style={{color: 'rgb(12, 92, 12)'}}>In 2022, she established Eva Angels Home for children and the disabled, as well as an old age home, providing shelter to over 180 individuals. From 2006 to 2020, Dr. Vani's initiatives provided free nursery education to more than 5,000 underprivileged children and helped over 1,500 children with their education. Since 2022, YECT has supported over 180 children of single parents, offering them education, meals, and accommodation. The organization, in collaboration with Magic Bus, has also provided free computer training to over 65 students who completed their SSLC (10th-grade exams), along with food and accommodation.</p>
                </Grid>
            </Grid>
        </Grid>
  <Grid 
    item 
  
    size={{xs: 12, md: 6}}
  >
    <img 
      src='/assets/IMG_20221017_081618 1.png' 
      alt="Descriptive Alt Text"
      className="img-fluid" 
      style={{ width: '100%', height: 'auto' }}
    />
  </Grid>

 
</Grid>



    {/* <Grid item container direction="row" className="mt-5" sx={{justifyContent: 'center'}}>
      
    </Grid> */}

    <Grid item container direction="row" className="mt-5">
        <Grid item container size={{xs: 12, md: 6}} >
            <Grid item container direction="column" spacing={10}>
                <Grid item sx={{paddingLeft: '70px'}}>
                    <h3 style={{fontSize: '3rem', color: '#0c0c89'}}>Her story through the years</h3>
                </Grid>
                <Grid item>
                    <img src='/assets/Vector.png' className='img-fluid'/>
                </Grid>
            </Grid>

        </Grid>

        <Grid item container size={{xs: 12, md: 6}}>
            <Grid item>
                <img src='/assets/Screenshot 2025-01-18 141925.png' className='img-fluid'/>
            </Grid>
        </Grid>
    </Grid>

    {/* <Grid item container spacing={3} gap={3} direction="row" className="mt-5 justify-content-center align-items-center">
        <Grid size={12}>
            <h1 className='text-center' style={{color: '#0c0c89'}}>Our Team Members</h1>
        </Grid>
        <Grid size={{xs:12, md:4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '20px'}}>
            <img src='/assets/yect/1000835264.jpg' className='img-fluid'/>
            <h5 className='text-center mt-4' style={{color: '#0c0c89'}}>Bhagya</h5>
        </Grid>
        <Grid size={{xs:12, md:4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '20px'}}>
            <img src='/assets/yect/1000835281.jpg' className='img-fluid'/>
            <h5 className='text-center mt-4' style={{color: '#0c0c89'}}>Nagesh N</h5>
        </Grid>
        <Grid size={{xs:12, md:4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '20px'}}>
            <img src='/assets/yect/1000825707.jpg' className='img-fluid'/>
            <h5 className='text-center mt-4' style={{color: '#0c0c89'}}>Prarthana</h5>
        </Grid>
        <Grid size={{xs:12, md:4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '20px'}}>
            <img src='/assets/yect/1000825706.jpg' className='img-fluid'/>
            <h5 className='text-center mt-4' style={{color: '#0c0c89'}}>Sreeja Shetty</h5>
        </Grid>
        <Grid size={{xs:12, md:4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '20px'}}>
            <img src='/assets/yect/1000835322.jpg' className='img-fluid'/>
            <h5 className='text-center mt-4' style={{color: '#0c0c89'}}>Niharika</h5>
        </Grid>
        <Grid size={{xs:12, md:4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '20px'}}>
            <img src='/assets/yect/1000835399.jpg' className='img-fluid'/>
            <h5 className='text-center mt-4' style={{color: '#0c0c89'}}>Shakti</h5>
        </Grid>
    </Grid> */}

    <TeamCarousel/>

    <Grid item container direction="row" className="mt-5">
        <Grid item size={{xs: 12, md: 6}}>
            <Grid item>
                <p style={{color: '#960116', fontSize: '1.5rem'}}><img src='/assets/Line 3.png' className='img-fluid' style={{width: '60%'}}/> About Us</p>
            </Grid>
        </Grid>
    </Grid>

    <Grid item container direction='row'>
        <Grid item size={{xs: 12, md: 6}} >
           
                <img src='assets/IMG_20220106_222054.jpg' className='img-fluid' style={{width: '100%'}}/>
           
        </Grid>
        <Grid item container size={{xs: 12, md: 6}}>
            <Grid item container direction="column" sx={{fontSize: '1.2rem', paddingLeft: '20px'}}>
            <Grid item>
                <p style={{color: 'rgb(12, 92, 12)'}}>At Yashodha Education and Charitable Trust (YECT), we are dedicated to transforming lives through education, empowerment, and community service. Founded with a vision to create a better future for underprivileged children and communities, YECT works tirelessly to provide quality education, skill development, and holistic support to those in need.
</p>
            </Grid>
            <Grid item>
<p style={{color: 'rgb(12, 92, 12)'}}>Our initiatives range from sponsoring school fees for deserving students to organizing specialized workshops, health camps, and vocational training programs. Through our innovative projects like setting up high-tech play schools and financial literacy classes, we aim to empower individuals to lead self-reliant and fulfilling lives.
We believe in creating lasting change by fostering collaboration and inclusivity. With the support of our dedicated team, volunteers, and well-wishers, YECT continues to expand its reach and impact, ensuring that education and opportunities are accessible to all.
Join us on this journey of hope, learning, and transformation as we work towards building a more equitable and compassionate society.</p>
            </Grid>
            </Grid>
        </Grid>
    </Grid>

    <Grid item container direction="row" className="mt-5" sx={{paddingLeft: '10px'}}>
        <Grid item size={{xs: 12, md: 6}}>
            <Grid item>
                <p style={{color: '#960116', fontSize: '1.5rem'}}><img src='/assets/Line 3.png' className='img-fluid' style={{width: '30%'}}/> Vision & Mission</p>
            </Grid>
        </Grid>
    </Grid>

    <Grid item container direction='row'>
    <Grid item container size={{xs: 12, md: 6}} sx={{paddingLeft: '10px'}}>
            <Grid item container direction="column" sx={{fontSize: '1.2rem', paddingLeft: '20px'}}>
            <Grid item>
                <h4 style={{color: '#0c0c89'}}>Vision</h4>
            </Grid>
            <Grid item>
                <p style={{color: 'rgb(12, 92, 12)'}}>To empower underprivileged communities through accessible, high-quality education and holistic development, creating a society where every individual has the opportunity to realize their full potential and contribute meaningfully to the world.</p>
            </Grid>
            <Grid item>
                <h4 style={{color: '#0c0c89'}}>Mission</h4>
            </Grid>
            <Grid item>
                <ul>
                    <li style={{color: 'rgb(12, 92, 12)'}}>To provide education and skill development opportunities for underprivileged children and youth, fostering self-reliance and confidence.</li>
                    <li style={{color: 'rgb(12, 92, 12)'}}>To establish innovative, high-tech learning environments that promote creativity, inclusivity, and a love for learning.</li>
                    <li style={{color: 'rgb(12, 92, 12)'}}>To organize health camps, workshops, and community-driven initiatives to enhance the well-being of underserved populations.</li>
                    <li style={{color: 'rgb(12, 92, 12)'}}>To build partnerships with individuals and organizations to drive sustainable change and make education accessible for all.</li>
                    <li style={{color: 'rgb(12, 92, 12)'}}>To instill values of compassion, leadership, and social responsibility in the younger generation, preparing them to be change-makers in their communities.</li>
                </ul>
            </Grid>
            </Grid>
        </Grid>
        <Grid item size={{xs: 12, md: 6}} >
           
                <img src='assets/IMG20230128141828_01.png' className='img-fluid' style={{width: '100%'}}/>
           
        </Grid>
        
    </Grid>

    <Footer/>
    </div>
  );
}

export default About;
