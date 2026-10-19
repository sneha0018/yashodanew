import React, { useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Program = () => {
  const initiatives = [
    'Day Care Center for Seniors - Establish a safe space where elderly individuals can spend time during the day. Provide recreational activities, health check-ups, and nutritious meals.',
    'Medical Support & Wellness Programs - Organize free health camps in collaboration with doctors and hospitals. Provide physiotherapy, yoga, and mental wellness sessions.',
    'Adopt-a-Grandparent Program - Encourage youth volunteers to spend time with elderly individuals, reducing loneliness and fostering emotional support.',
    'Home Care Assistance - Arrange for basic home care services such as medical check-ups, meal delivery, and hygiene support for elderly individuals who are unable to visit centers.',
    'Pension & Legal Aid Assistance - Help elderly individuals with pension schemes, legal documentation, and government welfare benefits.',
    'Technology & Digital Literacy for Seniors - Conduct workshops to help elderly individuals learn how to use mobile phones, digital payments, and online medical consultations.'
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <Grid>
        <section id='old-age'>
    <Grid container spacing={3} sx={{ padding: 3, alignItems: 'center' }}>
      {/* ✅ Left Side - Text Content */}
      <Grid size={12}>
        <Typography 
          variant="h4" 
          sx={{ fontWeight: 'bold', marginBottom: 2, color: '#0c0c89' }}
          className='text-center'
        >
          Old Age Care Initiatives in YECT
        </Typography>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
        <List>
          {initiatives.map((item, index) => (
            <ListItem key={index} sx={{ paddingLeft: 0 }}>
              <ListItemText 
                primary={`• ${item.split(' - ')[0]}`} 
                secondary={item.split(' - ')[1]} 
                primaryTypographyProps={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#0c0c89' }}
                secondaryTypographyProps={{ fontSize: '1rem', color: 'text.secondary', color: '#0c4b0c' }}
              />
            </ListItem>
          ))}
        </List>
        </Grid>
   

      {/* ✅ Right Side - Image */}
      <Grid size={{xs: 12, md: 6}}>
        <CardMedia
          component="img"
          image="/assets/yect/FB_IMG_1673609914576(4).jpg" // ✅ Replace with your image path
          alt="Elderly Care"
          sx={{
            // height: 400,
            borderRadius: 2,
            boxShadow: 3,
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.03)',
            }
          }}
          className='img-fluid'
        />
      </Grid>

    </Grid>
    </section>

<section id='blood-donation'>
    <Grid container className="justify-content-center mt-2 mb-5"  sx={{border: '1px solid #FFF', backgroundColor: '#DCDCDC', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', padding: '20px'}}>
          <Grid size={10}>
            <h1 className='text-center' style={{color: '#0c0c89'}}>
                "Save Life" Blood Donation <FavoriteIcon sx={{fontSize: '2.5rem', color: 'red', position: 'relative', bottom: '3px'}}/>
            </h1>
            <h5 className='text-center' style={{color: '#0c4b0c'}}>Blood donation is a life-saving act that provides critical support to patients in need. Here are some key benefits:</h5>
          </Grid>
          <Grid size={10}>
            <ol >
                <li style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#0c0c89'}}>Saves Lives</li>
                <ul>
                    <li style={{fontSize: '1.2rem', fontWeight: '400', color: '#0c4b0c'}}>Helps accident victims, surgery patients, and individuals with conditions like anemia, cancer, and blood disorders.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400', color: '#0c4b0c'}}>One donation can save up to three lives by separating components like red cells, plasma, and platelets.</li>
                </ul>
                <li style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#0c0c89'}}>Supports Medical Treatments</li>
                <ul>
                    <li style={{fontSize: '1.2rem', fontWeight: '400', color: '#0c4b0c'}}>Essential for surgeries, childbirth, and treating diseases like leukemia and thalassemia.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400', color: '#0c4b0c'}}>Used in emergency situations, such as trauma or major blood loss.</li>
                </ul>
                <li style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#0c0c89'}}>Promotes the Donor’s Health</li>
                <ul>
                    <li style={{fontSize: '1.2rem', fontWeight: '400', color: '#0c4b0c'}}>Stimulates new blood cell production, keeping the body healthy.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400', color: '#0c4b0c'}}>Reduces iron overload, lowering the risk of heart disease in some individuals.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400', color: '#0c4b0c'}}>Free health check-ups during donation help detect underlying health issues.</li>
                </ul>
                <li style={{fontSize: '1.8rem', fontWeight: 'bold',  color: '#0c0c89'}}>Strengthens Community & Emergency Preparedness</li>
                <ul>
                    <li style={{fontSize: '1.2rem', fontWeight: '400', color: '#0c4b0c'}}>Ensures a steady blood supply in hospitals and blood banks.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400', color: '#0c4b0c'}}>Helps communities prepare for disasters and medical emergencies.</li>
                </ul>
            </ol>

          </Grid>

          <Grid size={{xs: 12, md: 6}}>
            <img src="/assets/yect/1000778456.jpg" alt='' className='img-fluid'/>
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
            <img src="/assets/yect/1000834628.jpg" alt='' className='img-fluid'/>
          </Grid>

          <Grid size={10} className="mt-5">
            <h4 className='text-center' style={{color: 'red'}}>"YECT has successfully conducted 7 blood donation camps with support from Red Cross, Victoria Hospital, and PeS Hospital, raising awareness and creating many donors. Founder Dronein Shetty has personally donated blood 12 times and is a lifetime donor."</h4>
          </Grid>
    </Grid>
    </section>

<section id='hygiene'>
    <Grid container spacing={3} sx={{ padding: 3, alignItems: 'center' }}>
      {/* ✅ Left Side - Text Content */}
      <Grid size={12}>
        <Typography 
          variant="h4" 
          sx={{ fontWeight: 'bold', marginBottom: 2 , color: '#0c0c89'}}
          className='text-center'
        >
          Hygiene Awareness Program by YECT
        </Typography>

       
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
            <h4 style={{color: '#0c4b0c'}}>Yashodha Education and Charitable Trust (YECT) is dedicated to improving menstrual hygiene and overall health for women and young girls. As part of this initiative, YECT regularly conducts hygiene awareness programs, educating women and female children on menstrual health management, hygiene practices, and sustainable menstrual products.
            </h4>
        <h4 className='mt-5' style={{ color: '#0c0c89'}}>Collaboration with Way for Life</h4>
        <h6 style={{color: '#0c4b0c'}}>In partnership with Way for Life, YECT has distributed essential hygiene kits that include:</h6>

        <ul>
            <li style={{fontSize: '1.4rem',color: '#0c4b0c'}}>Cloth pads</li>
            <li style={{fontSize: '1.4rem',color: '#0c4b0c'}}>Dry fruits (for better nutrition)</li>
            <li style={{fontSize: '1.4rem',color: '#0c4b0c'}}>Hand wash</li>
            <li style={{fontSize: '1.4rem',color: '#0c4b0c'}}>Soap</li>
            <li style={{fontSize: '1.4rem',color: '#0c4b0c'}}>Sanitary napkins</li>
        </ul>

        <h4 className='mt-5' style={{color: '#0c4b0c'}}>Additionally, YECT, in collaboration with way for life NGO, ensures monthly distribution of menstrual pads and hygiene kits to single-parent families and underprivileged children, promoting health and dignity for all.</h4>
        <h4 style={{color: '#0c4b0c'}}>Through these efforts, YECT is empowering women and young girls with education, resources, and sustainable hygiene solutions</h4>
        </Grid>
   

      {/* ✅ Right Side - Image */}
      <Grid size={{xs: 12, md: 6}}>
        <CardMedia
          component="img"
          image="/assets/yect/1000834616.jpg" // ✅ Replace with your image path
          alt="Elderly Care"
          sx={{
            // height: 400,
            borderRadius: 2,
            boxShadow: 3,
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.03)',
            }
          }}
          className='img-fluid'
        />
      </Grid>

      

    </Grid>
    </section>

<section id='nutrition'>
    <Grid container className="justify-content-center mt-2 mb-5"  sx={{border: '1px solid #FFF', backgroundColor: '#DCDCDC', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', padding: '20px'}}>
          <Grid size={10}>
            <h1 className='text-center' style={{color: '#0c0c89'}}>
            YECT's Nutrition Support for Government School Students
            </h1>
            <h5 className='text-center' style={{color: '#0c4b0c'}}>Yashodha Education and Charitable Trust (YECT) is committed to supporting the health and well-being of underprivileged students through regular nutritional initiatives.</h5>
          </Grid>
          <Grid size={10}>
            
                <ul>
                    <li style={{fontSize: '1.2rem', fontWeight: '400', color: '#0c4b0c'}}>For the past two years, YECT has provided boiled eggs and banana chikki to students in government schools in Begur and Hongasandra, ensuring they receive essential nutrients for better growth and concentration.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400',color: '#0c4b0c'}}>Additionally, YECT continues to support underprivileged children's by distributing nutritious food twice a week, helping improve their overall health and learning capacity.</li>
                </ul>             
                           

          </Grid>

          <Grid size={{xs: 12, md: 6}}>
            <img src="/assets/yect/1000695157.jpg" alt='' className='img-fluid'/>
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
            <img src="/assets/yect/1000695158.jpg" alt='' className='img-fluid'/>
          </Grid>

          <Grid size={10} className="mt-5">
            <h4 className='text-center' style={{color: '#0c4b0c'}} >"Through these efforts, YECT strives to combat malnutrition and support children's education by ensuring they have access to healthy food."</h4>
          </Grid>
    </Grid>
    </section>

<section id='farmers'>
    <Grid container className="justify-content-center mt-2 mb-5"  >
          <Grid size={10}>
            <h1 className='text-center' style={{color: '#0c0c89'}}>
            Farmers Support 
            </h1>
            <h5 className='text-center' style={{color: '#0c4b0c'}}>"YECT" supports farmers by encouraging sustainable farming practices. Every year, we celebrate Farmers day ' Appreciation Day to recognize their contributions and promote agricultural awareness."</h5>
          </Grid>
         

          <Grid size={12}>
            <img src="/assets/yect/1000835000.jpg" alt='' className='img-fluid'/>
          </Grid>
         
    </Grid>
    </section>

<section id='mask'>
    <Grid container className="justify-content-center mt-2 mb-5"  sx={{border: '1px solid #FFF', backgroundColor: '#DCDCDC', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', padding: '20px'}}>
          <Grid size={10}>
            <h1 className='text-center' style={{color: '#0c0c89'}}>
            YECT’s Mask Distribution Drive – Protecting Communities
            </h1>
            <h5 className='text-center' style={{color: '#0c4b0c'}}>During and after the COVID-19 pandemic, Yashodha Education and Charitable Trust (YECT) took proactive steps to ensure public safety by distributing over 1,00,000 masks in collaboration with the Red Cross.</h5>
          </Grid>
          <Grid size={10}>
            <h5 style={{color: '#0c0c89'}}>Key Initiatives:</h5>
        
                
                <ul>
                    <li style={{fontSize: '1.2rem', fontWeight: '400',color: '#0c4b0c'}}><strong>Mask Distribution at Schools: </strong>Ensuring students and teachers remained protected.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400',color: '#0c4b0c'}}><strong>Support for Street Dwellers: </strong>Providing masks to the homeless and underprivileged communities.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400',color: '#0c4b0c'}}><strong>Hospital Assistance: </strong>Supplying masks to healthcare workers, patients, and frontline workers.</li>

                </ul>              
                       

          </Grid>

          <Grid size={{xs: 12, md: 6}}>
            <img src="/assets/yect/1000834546.jpg" alt='' className='img-fluid'/>
          </Grid>
          <Grid size={{xs: 12, md: 6}} className="d-flex justify-content-center align-items-center">
            <img src="/assets/yect/1000834533.jpg" alt='' className='img-fluid'/>
          </Grid>

          <Grid size={10} className="mt-5">
            <h4 className='text-center' style={{color: '#0c4b0c'}}>"This initiative aimed to prevent the spread of infections and promote health awareness among vulnerable sections of society. YECT continues to prioritize community well-being and safety through such impactful programs."</h4>
          </Grid>
    </Grid>
    </section>

    <section id='asha'>
    <Grid container spacing={3} sx={{ padding: 3, alignItems: 'center' }}>
      {/* ✅ Left Side - Text Content */}
      <Grid size={12}>
        <Typography 
          variant="h4" 
          sx={{ fontWeight: 'bold', marginBottom: 2,color: '#0c0c89' }}
          className='text-center'
        >
         YECT’s Support for ASHA Workers
        </Typography>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <h5 style={{fontSize: '1.5rem',color: '#0c4b0c'}}>ASHA (Accredited Social Health Activist) workers play a crucial role in India's healthcare system, especially in rural and underprivileged communities. They serve as a bridge between the community and healthcare services, focusing on maternal and child health, immunization, and health awareness. During the COVID-19 pandemic, ASHA workers worked tirelessly on the frontlines, ensuring essential healthcare services continued despite the crisis.</h5>
          <h6 className='mt-4' style={{fontSize: '1.4rem',color: '#0c4b0c'}}>Recognizing their dedication, Yashodha Education and Charitable Trust (YECT) stepped forward to support ASHA workers in various ways:</h6>
          <ul className='mt-5'>
            <li style={{fontSize: '1.4rem',color: '#0c4b0c'}}><strong>COVID-19 Relief: </strong> YECT provided essential food rations and fresh vegetables to ASHA workers, ensuring they had the necessary nutrition during the crisis.</li>
            <li style={{fontSize: '1.4rem',color: '#0c4b0c'}}><strong>Financial Assistance: </strong> With the support of social activist Anil Shetty, YECT distributed ₹2,000 per head to 90 ASHA workers, helping them manage financial challenges.</li>
            <li style={{fontSize: '1.4rem',color: '#0c4b0c'}}><strong>Work Appreciation & Awards: </strong> YECT celebrated the efforts of ASHA workers by organizing an appreciation event, where they were honored with awards, gifts, and clothing as a token of gratitude.</li>
            <li style={{fontSize: '1.4rem',color: '#0c4b0c'}}><strong>Education Support: </strong> To empower ASHA workers, YECT also provided learning sessions to improve their writing skills and communication, helping them document health cases and reports effectively.</li>
          </ul>
          
          <h5 className='mt-4' style={{fontSize: '1.5rem',color: '#0c4b0c'}}>"YECT remains committed to recognizing and supporting the selfless service of ASHA workers, ensuring they receive the respect and assistance they deserve."</h5>
        </Grid>
   

      {/* ✅ Right Side - Image */}
      <Grid size={{xs: 12, md: 6}}>
      <div id="carouselExampleInterval3" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="assets/yect/1000778522.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="assets/yect/1000695885.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>

   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>
      </Grid>

      {/* <Grid size={12}>
<h5 className='text-center mt-4' style={{fontSize: '1.7rem',color: '#0c4b0c'}}>"Specially-Abled Trust to extend these services and ensure inclusivity and dignity for all."</h5>
      </Grid> */}

    </Grid>
</section>

<section id='covid'>
    <Grid container spacing={3} className="justify-content-center mt-2 mb-5"  sx={{border: '1px solid #FFF', backgroundColor: '#DCDCDC', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', padding: '20px'}}>
          <Grid size={12}>
            <h1 className='text-center' style={{color: '#0c0c89'}}>
            YECT Trust’s COVID-19 Vaccination Drive
            </h1>
            
          </Grid>

          <Grid size={{xs: 12, md: 6}}>
            <img src="/assets/yect/1000834553.jpg" alt='' className='img-fluid'/>
          </Grid>
          <Grid size={{xs: 12, md: 6}} className="justify-content-center align-items-center">
            <h5 style={{fontSize: '1.7rem', paddingTop: '120px',color: '#0c4b0c'}}>During the COVID-19 pandemic, Yashodha Education and Charitable Trust (YECT) played a vital role in ensuring public health and safety by organizing a large-scale vaccination drive in collaboration with NH (Narayana Health) and MPL Sports Modern.</h5>

            <h6 className='mt-5' style={{fontSize: '1.5rem',color: '#0c0c89'}}>Key Highlights:</h6>
            
                
                <ul>
                    <li style={{fontSize: '1.4rem', fontWeight: '400',color: '#0c4b0c'}}>15,000+ people vaccinated, ensuring widespread immunity.</li>
                    <li style={{fontSize: '1.4rem', fontWeight: '400',color: '#0c4b0c'}}>Conducted in partnership with Narayana Health (NH) and MPL Sports Modern for effective outreach.</li>
                    <li style={{fontSize: '1.4rem', fontWeight: '400',color: '#0c4b0c'}}>Focused on public safety, awareness, and accessibility to vaccines.</li>
                </ul>
               
            <h5 className='mt-5' style={{fontSize: '1.7rem',color: '#0c4b0c'}}>"Through this initiative, YECT reinforced its commitment to social welfare, ensuring that underserved communities received timely vaccinations and protection against COVID-19"</h5>

          </Grid>

          <Grid size={12}>
      <div id="carouselExampleInterval1" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="assets/yect/1000834505.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="assets/yect/1000834509.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>

   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>
      </Grid>
         
         
    </Grid>
    </section>

<section id='food'>
    <Grid container spacing={3} sx={{ padding: 3, alignItems: 'center' }}>
      {/* ✅ Left Side - Text Content */}
      <Grid size={12}>
        <Typography 
          variant="h4" 
          sx={{ fontWeight: 'bold', marginBottom: 2,color: '#0c0c89' }}
          className='text-center'
        >
          YECT Trust’s Food Drive – "Yashoda Annapurna"
        </Typography>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <h5 style={{fontSize: '1.7rem',color: '#0c4b0c'}}>During the COVID-19 pandemic, Yashodha Education and Charitable Trust (YECT) undertook a massive food drive, serving over 1,60,000 people, including street dwellers, PHC centers, and struggling families, with the support of Feed One Community and other individuals.</h5>
          <h6 className='mt-4' style={{fontSize: '1.5rem',color: '#0c0c89'}}>Key Initiatives:</h6>
          <ul className='mt-5'>
            <li style={{fontSize: '1.5rem',color: '#0c4b0c'}}><strong>COVID-19 Relief: </strong> Provided meals, ration kits, and essentials to those in need.</li>
            <li style={{fontSize: '1.5rem',color: '#0c4b0c'}}><strong>Support for Laborers & Vulnerable Families: </strong> Regular food distribution for daily wage workers and underprivileged communities.</li>
            <li style={{fontSize: '1.5rem',color: '#0c4b0c'}}><strong>Post-Pandemic Sustainability: </strong> Recognizing that many families lost their breadwinners and jobs, YECT launched "Yashoda Annapurna," a dedicated daily food drive to ensure continuous food support for the needy.</li>
          </ul>
          
          <h5 className='mt-4' style={{fontSize: '1.7rem',color: '#0c4b0c'}}>"Through "Yashoda Annapurna," YECT remains committed to eradicating hunger, ensuring no one sleeps hungry, and uplifting communities with sustained nourishment."</h5>
        </Grid>
   

      {/* ✅ Right Side - Image */}
      <Grid size={{xs: 12, md: 6}}>
        <CardMedia
          component="img"
          image="/assets/yect/1000834570.jpg" // ✅ Replace with your image path
          alt="Elderly Care"
          sx={{
            // height: 400,
            borderRadius: 2,
            boxShadow: 3,
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.03)',
            }
          }}
          className='img-fluid'
        />
      </Grid>

    </Grid>
    </section>

    <Grid container className="justify-content-center mt-2 mb-5"  sx={{border: '1px solid #FFF', backgroundColor: '#DCDCDC', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', padding: '20px'}}>
          <Grid size={10}>
            <h1 className='text-center' style={{color: '#0c0c89'}}>
            First Aid Training for Drivers – A YECT Initiative
            </h1>
            <h5 className='text-center' style={{color: '#0c4b0c'}}>Yashodha Education and Charitable Trust (YECT), in collaboration with the Red Cross and Karnataka Labour Department, regularly conducts first aid training and awareness programs for drivers.</h5>
          </Grid>
          <Grid size={10}>
            <h5 style={{color: '#0c0c89'}}>Objectives of the Program:</h5>
           
               
                <ul>
                    <li style={{fontSize: '1.2rem', fontWeight: '400',color: '#0c4b0c'}}><strong>Emergency Response: </strong>Training drivers to provide immediate first aid during accidents.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400',color: '#0c4b0c'}}><strong>Basic Life Support (BLS): </strong>Teaching CPR, wound care, and handling medical emergencies.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400',color: '#0c4b0c'}}><strong>Safety Awareness: </strong>Educating drivers on road safety, injury prevention, and handling critical situations.</li>
          
                </ul>
            <h5 style={{color: '#0c4b0c'}}>Through these initiatives, YECT aims to empower drivers with life-saving skills, ensuring safer roads and communities.</h5>
          </Grid>

          <Grid size={12}>
            <img src="/assets/yect/1000834544.jpg" alt='' className='img-fluid'/>
          </Grid>
         
    </Grid>

<section id='specially-abled'>
    <Grid container spacing={3} sx={{ padding: 3, alignItems: 'center' }}>
      {/* ✅ Left Side - Text Content */}
      <Grid size={12}>
        <Typography 
          variant="h4" 
          sx={{ fontWeight: 'bold', marginBottom: 2,color: '#0c0c89' }}
          className='text-center'
        >
         YECT’s Support for Specially-Abled Individuals
        </Typography>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <h5 style={{fontSize: '1.7rem',color: '#0c4b0c'}}>Yashodha Education and Charitable Trust (YECT) is committed to supporting specially-abled individuals by providing essential aid, education, and livelihood assistance.</h5>
          <h6 className='mt-4' style={{fontSize: '1.5rem',color: '#0c0c89'}}>Key Support Initiatives:</h6>
          <ul className='mt-5'>
            <li style={{fontSize: '1.5rem',color: '#0c4b0c'}}><strong>Mobility Aid: </strong> Regular distribution of wheelchairs and walking sticks to those in need.</li>
            <li style={{fontSize: '1.5rem',color: '#0c4b0c'}}><strong>Educational Support: </strong> Assistance for special education to empower differently-abled individuals.</li>
            <li style={{fontSize: '1.5rem',color: '#0c4b0c'}}><strong>Livelihood Support: </strong> Helping them gain skills and opportunities for a sustainable future.</li>
          </ul>
          
          <h5 className='mt-4' style={{fontSize: '1.7rem',color: '#0c4b0c'}}>"YECT collaborates with organizations like Mahaveer Jain Charitable Trust and Sneha Bharati and other"</h5>
        </Grid>
   

      {/* ✅ Right Side - Image */}
      <Grid size={{xs: 12, md: 6}}>
      <div id="carouselExampleInterval2" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="assets/yect/1000834541.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="assets/yect/1000834542.jpg" class="img-fluid" width="100%" alt="Elevator image" />                   

    
    </div>

   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>
      </Grid>

      <Grid size={12}>
<h5 className='text-center mt-4' style={{fontSize: '1.7rem',color: '#0c4b0c'}}>"Specially-Abled Trust to extend these services and ensure inclusivity and dignity for all."</h5>
      </Grid>

    </Grid>
    </section>

<section id='trees'>
    <Grid container className="justify-content-center mt-2 mb-5"  sx={{border: '1px solid #FFF', backgroundColor: '#DCDCDC', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', padding: '20px'}}>
          <Grid size={10}>
            <h1 className='text-center' style={{color: '#0c0c89'}}>
            Save Trees, Save Earth – YECT’s Green Initiative
            </h1>
            <h5 className='text-center' style={{color: '#0c4b0c'}}>To promote environmental awareness and sustainability, Yashodha Education and Charitable Trust (YECT) organizes a sapling distribution drive every year on August 15th.</h5>
          </Grid>
          <Grid size={10}>
            <h5 style={{color: '#0c0c89'}}>Key Highlights:</h5>
           
               
                <ul>
                    <li style={{fontSize: '1.2rem', fontWeight: '400',color: '#0c4b0c'}}><strong>Encouraging Afforestation: </strong> Free distribution of saplings to individuals and communities.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400',color: '#0c4b0c'}}><strong>Environmental Awareness: </strong>Spreading knowledge about the importance of trees in combating climate change.</li>
                    <li style={{fontSize: '1.2rem', fontWeight: '400',color: '#0c4b0c'}}><strong>Community Participation: </strong>Engaging schools, organizations, and citizens in tree plantation drives.</li>
          
                </ul>
            <h5 style={{color: '#0c4b0c'}}>Through this initiative, YECT aims to create a greener future and inspire people to protect nature.</h5>
          </Grid>

          <Grid size={12}>
            <img src="/assets/yect/1000778542.jpg" alt='' className='img-fluid'/>
          </Grid>
         
    </Grid>
    </section>


    <Footer/>

    </Grid>
  );
};

export default Program;
