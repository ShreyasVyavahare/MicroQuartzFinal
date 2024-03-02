import React from "react";
import { lumpsData } from "./quartzLumpsData";
import { Route, Link, Switch, Redirect } from 'wouter';
import Nav from 'react-bootstrap/Nav';

import img from './productAssets/slider/lumpsSlider.png';
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const QuartzLumps = ()=>{
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
    const { subproducts } = lumpsData;
    return(
        <div>
           <Helmet>
        <title>Unleash the Potential of Quartz Lumps: Essential Tips & Insights </title>
        <meta
          name="description"
          content="Discover the versatility and beauty of quartz lumps for your projects. Explore our expert tips and insights today!"
        />
        {/* Add more meta tags as needed */}
      </Helmet>
            <Fade direction="right" triggerOnce>
      <div id='sliderContainer'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"> {/* Adjusted for a 3-second interval */}
      

     
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button> */}
         
        </div>
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." />
            
           
          </div>
          {/* <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            
          </div> */}
          
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
    </Fade>
         
      
        <div id='headingContainer' style={{marginTop:'70px',marginBottom:'-30px'}} >
        <h2 id='heading' > Quartz Lumps</h2>
      </div>
      <br></br>
      <p className='text-center' id='homeSubtext' style={{ marginBottom: '50px', marginLeft: '30px',marginTop:'20px', marginRight: '30px' ,fontSize:'18px'}}>
      An advantage of having our own mines of quartz, provides us with a competitive edge of fulfilling client’s demands as per their requirements. Our sorting process of lumps includes: Sorting, washing, re-sizing, re-washing and packing.</p>
<div className='row' id='row' style={{marginTop:'50px',marginBottom:'50px'}}>
  {subproducts.map((subproduct, index) => (
    <div className='col-lg-4' id='imgContainer' key={index}>
      <Nav.Link as={Link} to={`/product/${index}`}>
        <img className='prodImg' src={subproduct.image_url} alt={`Product ${index}`} />
      </Nav.Link>
  
      <Nav.Link   as={Link} to={`/product/${index}`}> <p id='productName'>{subproduct.name}</p></Nav.Link>
    </div>
  ))}
</div>

      
      
      </div>
    )
}
export default QuartzLumps;