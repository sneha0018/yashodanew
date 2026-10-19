import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Button from 'react-bootstrap/Button';

import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import ProgramsCarousel from './ProgramsCarousel';
import { Typography } from '@mui/material';

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // Animation duration in ms
  

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(targetNumber / (duration / 50)); // Speed adjustment
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 50); // Updates every 50ms

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <h1 style={{ color: "rgb(12, 92, 12)", fontWeight: "700", fontSize: "2.2rem" }}>
      {count}+
    </h1>
  );
};

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing mt-5">
      <Grid item container direction='row'>
        {/* First Grid: Two h1 tags */}
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          container
          direction="column"
          sx={{paddingLeft: {xs: '10px', md: '150px'}}}
                >
          <Grid item>
            <h1 style={{fontWeight: '700', color: '#000', fontSize: '3rem', color: '#0c0c89'}}>Every Child Deserves a</h1>
          </Grid>
          <Grid item>
  <h1
    style={{
      background: "linear-gradient(to bottom, rgb(12, 92, 12) 60%, black 40%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "3rem", // Adjust as needed
    }}
  >
    Chance to Shine
  </h1>
</Grid>

          <Grid item>
            <p style={{color: '#000', fontSize: '18px', fontWeight: '500', color: 'rgb(12, 92, 12)'}}>
              Your support can be the difference between a lost opportunity and
              a bright future. Together, let's build a world where every child
              has the tools they need to thrive.
            </p>
          </Grid>
          <Grid item>
  <Grid
    container
    direction="row"
    alignItems="center"
    spacing={2} // Adds space between button and text
  >
    <Grid item>
      <Button href='/#/donation'
        style={{
          fontWeight: '600',
          backgroundColor: 'rgb(12, 92, 12)',
          color: '#FFF',
          borderColor: 'rgb(12, 92, 12)',
        }}
      >
        Donate Now
      </Button>
    </Grid>
    {/* <Grid item>
      <p style={{ margin: 0, fontWeight: '500', color: '#000' }}>Discover more <ArrowDownwardIcon/></p>
    </Grid> */}
  </Grid>
</Grid>

        </Grid>

        {/* Second Grid */}
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          container
         direction="row"
        >
            <Grid item container size={{xs: 6, md: 8}} direction="row" sx={{justifyContent: { xs: 'center', md: 'end' }, alignItems: 'center'}}>
                <Grid item container direction="column" sx={{zIndex: '99'}}>
                <Grid item>
                <Counter targetNumber={1000} />
                </Grid>
                <Grid sx={{color: '#0c0c89', fontWeight: '600'}}>
                    Lives Changed
                </Grid>
                <Grid item>
                <Counter targetNumber={1500} />
                </Grid>
                <Grid sx={{color: '#0c0c89', fontWeight: '600'}}>
                    Children educated
                </Grid>
                </Grid>
            </Grid>
            <Grid item container size={{xs: 6, md: 4}} sx={{ justifyContent: { xs: 'start', md: 'end' } , alignItems: 'center'}}>
<img src='/assets/Vector.jpg' className='img-fluid' />
            </Grid>

        </Grid>
      </Grid>

      <Grid item container direction="row" className="mt-3">
        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
<img src='/assets/Frame 49.jpg' className='img-fluid' style={{width: '100%'}}/>
        </Grid>
        <Grid item size={{ xs: 12,sm: 6, md: 4 }}>
        <img src='/assets/Frame 50.jpg' className='img-fluid' style={{width: '100%'}}/>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
        <img src='/assets/Frame 51.jpg' className='img-fluid' style={{width: '100%'}}/>
        </Grid>
      </Grid>

      <Grid item container direction="row" className="mt-3 mb-3 d-flex justify-content-center align-items-center" sx={{marginLeft: '50px', marginRight: '50px' }}>
        <Grid size={12}>
          <h1 className='mt-3 text-center' style={{color: '#0c0c89'}}>Our Impact at YECT</h1>
        </Grid>
        <Grid size={{xs:10, md: 8}} className="mt-4 pb-3 justify-content-center align-items-center">
          
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Education: Provided quality education to 15,000 students</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Livelihood Training: Trained 1,500 youth, empowering them with job opportunities</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Employment Support: Successfully placed 1,500 individuals in various sectors</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Environmental Initiatives: Planted 2,000 saplings for a greener future</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Women Empowerment: Transformed the lives of 750 women through skills and support</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Volunteering Strength: 200 volunteers joined hands in our mission</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Sponsorship Support: Received backing from 15 generous sponsors</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Meals Served: Distributed 2,50,000 meals to the underprivileged</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Health & Hygiene: Benefitted 17,000 individuals with awareness and resources</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Ration & Nutrition: Provided 1,20,000 food kits to needy families</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Shelter Support: Offered housing to 150 individuals</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>✅ Clothing Assistance: Distributed 7,500 clothing kits</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem'}}>Together, we are making a lasting impact! Be a part of our journey and help us reach more lives.
</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem', fontWeight: '700'}}>
Contact Dr Vani N Shetty :9945645985 
</p>
<p style={{color: 'rgb(12, 92, 12)', fontSize: '1.5rem', fontWeight: '700'}}>
TAPASYA : 9731395555</p>

        </Grid>
      </Grid>


      <Grid item container direction="row" className="mt-3">
        <Grid item container size={{xs: 12, md: 4}}>
            <Grid item container direction="column" spacing={3}>
                <Grid>
                <img src='/assets/Line 2.jpg' className='img-fluid' style={{width: '100%'}}/>
                </Grid>
                <Grid>
                <img src='/assets/Vector (1).jpg' className='img-fluid'/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container size={{xs:12, md: 6}}>
            <Grid item container direction="column" sx={{paddingLeft: {xs: '30px', md: '30px'}}}> 
                <Grid item>
                <h1 style={{color: '#960116', fontWeight: '600', fontSize: '3rem',color: '#0c0c89'}}>Who we are?</h1>
                </Grid>
                <Grid item>
                    <p style={{color: '#000', fontSize: '1rem', color: 'rgb(12, 92, 12)'}}>At Yashodha Education and Charitable Trust (YECT), we are dedicated to transforming lives through education, empowerment, and community service. Founded with a vision to create a better future for underprivileged children and communities, YECT works tirelessly to provide quality education, skill development, and holistic support to those in need.</p>
                </Grid>
                <Grid item>
                <h1 style={{color: '#960116', fontWeight: '600', fontSize: '3rem', color: '#0c0c89'}}>Our Mission</h1>
                </Grid>
                <Grid item>
                    <p style={{color: '#000', fontSize: '1rem', color: 'rgb(12, 92, 12)'}}>To provide education and skill development opportunities for underprivileged children and youth, fostering self-reliance and confidence.</p>
                </Grid>
                <Grid item>
                <h1 style={{color: '#960116', fontWeight: '600', fontSize: '3rem', color: '#0c0c89'}}>Our Vission</h1>
                </Grid>
                <Grid item>
                    <p style={{color: '#000', fontSize: '1rem', color: 'rgb(12, 92, 12)'}}>To empower underprivileged communities through accessible, high-quality education and holistic development, creating a society where every individual has the opportunity to realize their full potential and contribute meaningfully to the world.</p>
                </Grid>
                {/* <Grid item>
<Button style={{
          fontWeight: '600',
          backgroundColor: '#960116',
          color: '#FFF',
          borderColor: '#960116',
        }}>Read more</Button>
                </Grid> */}
            </Grid>

        </Grid>
      </Grid>

      <Grid item container direction="row" className="mt-5">
      {[
        { target: 1000, label: "Lives changed" },
        { target: 1500, label: "Children educated" },
        { target: 1500, label: "Teachers involved" },
        { target: 20, label: "Events conducted" },
      ].map((item, index) => (
        <Grid
          key={index}
          item
        size={{xs: 12, sm: 6, md: 3}}
          sx={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}
        >
          <Grid item container direction="column">
            <Grid item>
              <Counter targetNumber={item.target} />
              <p style={{color: '#0c0c89'}}>{item.label}</p>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>

    {/* <Grid item container direction="row" spacing={3} className="mt-5" >
      <Grid size={12}>
        <h2 className='text-center' style={{color: '#0c0c89', fontWeight: '700'}}>Programs We Conducted</h2>
      </Grid>

      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program#old-age")}>
        <img src='/assets/yect/IMG20240805173415_01.jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>OLD AGE CARE</h4>
      </Grid>

      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program#blood-donation")}>
        <img src='/assets/yect/1000834628(1).jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>BLOOD DONATION</h4>
      </Grid>
      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program")}>
        <img src='/assets/yect/IMG_20240810_211610(3).jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>STUDENTS HOSTEL</h4>
      </Grid>
      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program#hygiene")}>
        <img src='/assets/yect/1000834616(1).jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>HYGIENE AWARENESS PROGRAM</h4>
      </Grid>
      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program#nutrition")}>
        <img src='/assets/yect/1000695158(4).jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>NUTRITION SUPPORT PROGRAM</h4>
      </Grid>
      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program#farmers")}>
        <img src='/assets/yect/1000835000(3).jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>FARMERS SUPPPORT PROGRAM</h4>
      </Grid>
      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program#mask")}>
        <img src='/assets/yect/1000834534.jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>MASK DISTRIBUTION DRIVE</h4>
      </Grid>
      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program#asha")}>
        <img src='/assets/yect/1000695885(3).jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>SUPPORT FOR ASHA WORKERS</h4>
      </Grid>

      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program#covid")}>
        <img src='/assets/yect/1000834509(1).jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>COVID-19 VACCINATION DRIVE</h4>
      </Grid>
      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program#food")}>
        <img src='/assets/yect/1000834570(3).jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>FOOD DRIVE</h4>
      </Grid>
      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program#specially-abled")}>
        <img src='/assets/yect/1000834541(3).jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>SUPPORT FOR SPECIALLY ABLED</h4>
      </Grid>
      <Grid size={{xs: 12, md: 4}} sx={{border: '1px solid rgb(12, 92, 12)', backgroundColor: 'rgb(12, 92, 12)', padding: '10px'}} onClick={() => navigate("/program#trees")}>
        <img src='/assets/yect/1000778542(3).jpg' className='img-fluid'/>
        <h4 className='text-center mt-4' style={{fontWeight: '700',color: '#0c0c89'}}>SAVE TREES</h4>
      </Grid>
    </Grid> */}

    <ProgramsCarousel/>

    <Grid container spacing={3} sx={{ padding: 3, alignItems: 'center' }}>
      {/* ✅ Left Side - Text Content */}
      <Grid size={12}>
        <Typography 
          variant="h4" 
          sx={{ fontWeight: 'bold', marginBottom: 2,color: '#0c0c89' }}
          className='text-center'
        >
         Dr Vani N Shetty received Honours and awards
        </Typography>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
            <h3 style={{color: '#0c0c89'}}>Honours And Awards</h3>
            <ul>
                <li style={{fontSize: '1.4rem',color: 'rgb(12, 92, 12)'}}>
                    HONORARY DOCTORATE AWARD
                </li>
                <li style={{fontSize: '1.4rem',color: 'rgb(12, 92, 12)'}}>
                    Emerging women Business Award India 2021
                </li>
                <li style={{fontSize: '1.4rem',color: 'rgb(12, 92, 12)'}}>
                    Hemmeya Kannadati Prashasti
                </li>
                <li style={{fontSize: '1.4rem',color: 'rgb(12, 92, 12)'}}>
                    Hemmeya Kannadiga Prashasti
                </li>
                <li style={{fontSize: '1.4rem',color: 'rgb(12, 92, 12)'}}>Veera Vanite Prashasti</li>
                <li style={{fontSize: '1.4rem',color: 'rgb(12, 92, 12)'}}>
                    International women award 2025
                </li>
                <li style={{fontSize: '1.4rem',color: 'rgb(12, 92, 12)'}}>INNER VOICE ACHIEVER AWARD</li>
            </ul>
            <h6 style={{color: 'rgb(12, 92, 12)', fontSize: '1.7rem'}}>Many organizations have recognized and honored the social service of Dr Vani N Shetty</h6>
      

      
        </Grid>
   

      {/* ✅ Right Side - Image */}
      <Grid size={{xs: 12, md: 6}}>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">

  <div class="carousel-item active" data-bs-interval="2000">
      <img src="assets/yect/1000836102.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="assets/yect/1000836103.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="assets/yect/1000836105.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="assets/yect/1000836106.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="assets/yect/1000836110.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>
   

   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>
      </Grid>

      {/* <Grid size={12}>
          <h4 className='text-center' style={{color: 'rgb(12, 92, 12)'}}>Since its inception, the IVA Award has celebrated frontline workers, healthcare professionals, educators, and social workers, inspiring many to continue their meaningful contributions to society.</h4>
      </Grid> */}

    </Grid>

    <Grid container spacing={3} sx={{ padding: 3, alignItems: 'center' }}>
      {/* ✅ Left Side - Text Content */}
      <Grid size={12}>
        <Typography 
          variant="h4" 
          sx={{ fontWeight: 'bold', marginBottom: 2,color: '#0c0c89' }}
          className='text-center'
        >
         IVA Award – Honoring Service and Humanity
        </Typography>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
                 <h5 style={{fontSize: '1.6rem',color: 'rgb(12, 92, 12)'}}>In 2022, Yashodha Education and Charitable Trust (YECT) introduced the IVA Award to recognize and appreciate individuals in the service sector who demonstrate exceptional dedication, humanity, and responsibility.</h5>

       <h6 className='mt-3' style={{fontSize: '1.5rem',color: '#0c0c89'}}>This award aims to:</h6>
       <ul>
        <li style={{fontSize: '1.4rem',color: 'rgb(12, 92, 12)'}}><strong>Encourage Humanity: </strong>Recognizing those who selflessly contribute to society.</li>
        <li style={{fontSize: '1.4rem',color: 'rgb(12, 92, 12)'}}><strong>Promote Responsibility: </strong>Honoring individuals who take initiative to create a positive impact.</li>
        <li style={{fontSize: '1.4rem',color: 'rgb(12, 92, 12)'}}><strong>Motivate Service Sector Workers: </strong>Providing appreciation and encouragement for their hard work.</li>
       </ul>
       <h4 className='text-center' style={{color: 'rgb(12, 92, 12)'}}>Since its inception, the IVA Award has celebrated frontline workers, healthcare professionals, educators, and social workers, inspiring many to continue their meaningful contributions to society.</h4>
      
        </Grid>
   

      {/* ✅ Right Side - Image */}
      <Grid size={{xs: 12, md: 6}}>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">


    <div class="carousel-item active" data-bs-interval="2000">
      <img src="assets/yect/1000825914.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="assets/yect/GridArt_20250311_120739418.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>

   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>
      </Grid>

 

    </Grid>
  

      <Grid item container className="mt-5" direction="row" size={12} sx={{justifyContent: 'center'}}>
        <Button href='/#/donation' style={{
            fontWeight: '600',
            backgroundColor: 'rgb(12, 92, 12)',
            color: '#FFF',
            borderColor: 'rgb(12, 92, 12)',
          }}>Make an impact</Button>
      </Grid>

      <Grid item container className="mt-5" direction="row">
          <Grid item container size={{xs: 12, md: 6}}>
            <Grid item container direction="row">
            <Grid item container size={{xs: 2, md: 2}}>
              <Grid item>
              <img src='/assets/Vector (1).jpg'/>
              </Grid>
            </Grid>
            <Grid item container size={{xs: 10, md: 10}}>
            <Grid item container direction="column" sx={{ justifyContent: 'center'}}>
              <Grid item>
              <h1 style={{color: '#0c0c89'}}>Together, we can nourish</h1>
              </Grid>
              <Grid item>
              <h1 style={{color: '#0c0c89'}}>dreams and build brighter</h1>
              </Grid>
              <Grid item>
              <h1 style={{color: '#0c0c89'}}>futures.</h1>
              </Grid>
              <Grid item>
              <p style={{color: 'rgb(12, 92, 12)'}}>Donate Today and Change a Life</p>
              </Grid>
              <Grid item>
              <Button href='/#/donation' style={{
            fontWeight: '600',
            backgroundColor: 'rgb(12, 92, 12)',
            color: '#FFF',
            borderColor: 'rgb(12, 92, 12)',
          }}>Donate Now</Button>
          </Grid>
            </Grid>
            </Grid>
            </Grid>
          </Grid>
          <Grid item container size={{xs: 12, md: 6}} sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Grid item sx={{justifyContent: 'center', alignItems: 'center'}}>
              <img src='/assets/Frame 86.jpg' className='img-fluid'/>
            </Grid>
          </Grid>

          <Grid item container size={12} className="mt-3 mb-5">
            <img src='/assets/yect/WhatsApp Image 2025-03-23 at 20.47.53_fbd34722.jpg' className='inmg-fluid w-100'/>
          </Grid>
      </Grid>

      <Grid item container direction="row" spacing={3} className="mt-4">
          <Grid size={12}>
            <h2 className='text-center' style={{color: '#0c0c89', fontSize: '2rem', fontWeight: '700'}}>Testimonial</h2>
          </Grid>

          
          <Grid size={{xs: 12, md: 6}}>
          <video 
    src="/assets/yect/Video1.mp4" 
    controls 
    autoPlay 
    loop 
    muted 
    style={{ width: "100%", height: "auto", borderRadius: "10px" }}
  />
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
          <video 
    src="/assets/yect/Video2.mp4" 
    controls 
    autoPlay 
    loop 
    muted 
    style={{ width: "100%", height: "auto", borderRadius: "10px" }}
  />
          </Grid>
      </Grid>

    
          <Footer/>

    </div>
  );
}

export default Landing;
