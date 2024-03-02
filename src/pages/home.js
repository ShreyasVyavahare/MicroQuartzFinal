
import { Fade,Slide } from "react-awesome-reveal";
import Strength2 from "../components/strength2";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Route, Link, Switch, Redirect } from 'wouter';
import React, { useState, useEffect,useRef } from 'react';
import img1 from '../components/assets/img1.png';
import img2 from '../components/assets/img2.png';
import img3 from '../components/assets/img3.png';
import img4 from '../components/assets/img4.png';
import img5 from '../components/assets/img5.png';
import img6 from '../components/assets/img6.png';
import img7 from '../components/assets/img7.png';
import Products from "../components/productsComponent";
import DemoCarousel from "../components/cardSlider";
import StrengthSection from "../components/strengthSection";
import { Helmet } from "react-helmet";
import emailjs from 'emailjs-com'; // Updated import statement

const Home =()=>{
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  // useEffect to show the modal after 4 seconds
  useEffect(() => {
    // Open modal after 4 seconds (4000 milliseconds)
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);
  
    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

    window.scrollTo(0, 0);
}, []);
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_g026eee', 'template_2umg7lj', form.current, '422YHYb6cxzCdJopF') // Update with your actual service, template, and user IDs
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        handleModalClose();
        form.current.reset(); // Reset form fields
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to submit form. Please try again.'); // Display an error message
      }
    );
};

  

    return(
        <>
        <Helmet>
        <title>Discover High-Quality Quartz Products | Micro Quartz</title>
        <meta
          name="description"
          content="Explore our range of quartz countertops, pebbles, powder & more! Your one-stop shop for top-grade silica products. Find out more now!"
        />
        {/* Add more meta tags as needed */}
      </Helmet>

        {/* carousel */}

        <div id='sliderContainer'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500"> {/* Adjusted for a 3-second interval */}
      

     
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            
            <div className="carousel-caption d-none d-md-block">
              <Slide  delay={500} >
              <h1 className="caroselHeader" style={{fontSize:'50px'}}>WORLD OF SILICA</h1>
              
           
              </Slide>
             
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <Slide delay={500}>
              <h1 className="caroselHeader"  style={{fontSize:'50px'}}>POWDERED PERFECTION</h1>
              <Nav.Link as={Link} to='/microSilica' > <button  className="carouselButton">Explore</button> </Nav.Link>
              
             
              </Slide>
              
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
             <Slide delay={500}>
             <h1 className="caroselHeader"  style={{fontSize:'50px'}}>EVERY PARTICLE MATTERS</h1>
             <Nav.Link as={Link} to='/quartzGritz' > <button  className="carouselButton">Explore</button> </Nav.Link>
             
             </Slide>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img6} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
             <Slide delay={500}>
             <h1 className="caroselHeader"  style={{fontSize:'50px'}}>REDEFINING PRECISION STANDARDS</h1>
             <Nav.Link as={Link} to='/quartzPowder' > <button  className="carouselButton">Explore</button> </Nav.Link>
             
             </Slide>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
             <Slide delay={500}>
             <h1 className="caroselHeader"  style={{fontSize:'50px'}}>EXPERIENCE THE LUXURY</h1>
             <Nav.Link as={Link} to='/slabs' > <button  className="carouselButton">Explore</button> </Nav.Link>
             
             </Slide>
            </div>
          </div>
       
          <div className="carousel-item">
            <img src={img7} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
             <Slide delay={500}>
             <h1 className="caroselHeader"  style={{fontSize:'50px'}}>TRANSFORM THE SURROUNDINGS</h1>
            
             <Nav.Link as={Link} to='/quartzPebbles' > <button  className="carouselButton">Explore</button> </Nav.Link>
             
             </Slide>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
             <Slide delay={500}>
             <h1 className="caroselHeader"  style={{fontSize:'50px'}}>NATURE'S FINEST</h1>
            
             <Nav.Link as={Link} to='/quartzLumps' > <button  className="carouselButton">Explore</button> </Nav.Link>
             
             </Slide>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
   
        {/* carousel */}

        <Fade> <div id='headingContainer'>
  
        <h2 id='heading' style={{ marginTop: '30.4px' ,color:'#100124'}}>
        DISCOVER ENDLESS QUARTZ POSSIBILITIES
        </h2>
        <br />
      </div>

      <p className='text-center' id='homeSubtext' style={{ marginBottom: '10px', marginLeft: '30px',marginTop:'20px', marginRight: '30px' }}>
      Drawing inspiration from the beauty of nature, Micro Quartz meticulously engineers a collection of premium mineral products with unparalleled craftsmanship to meet the diverse demands of discerning clientele. </p></Fade>
      <br></br>
      <br></br>
     
{/* products */}
<Products></Products>

<StrengthSection></StrengthSection>




     {/* modal */}
 
     {/*  */}
 

        </>
    )
}
export default Home
