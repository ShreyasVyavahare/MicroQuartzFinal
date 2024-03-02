import React from "react";
import {pebblesData} from './pebblesData'; 
import Nav from 'react-bootstrap/Nav';


import { Route, Link, Switch, Redirect } from 'wouter';

import { Fade } from "react-awesome-reveal";

import img from './productAssets/slider/pebbles/sliderImg2.png';
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const QuartzPebbles = ()=>{
    const { subproducts } = pebblesData;

    return (
    
      <div>
         <Helmet>
        <title>Enhance Your Décor with Quartz Pebbles: Expert Tips Inside </title>
        <meta
          name="description"
          content="Elevate your space with the charm of quartz pebbles. Get expert tips and ideas to beautify your surroundings today!"
        />
        {/* Add more meta tags as needed */}
      </Helmet>
      
       
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
    
        <Fade>
        <div id='headingContainer' style={{marginTop:'70px',marginBottom:'-30px'}} >
        <h2 id='heading' > Quartz Pebbles</h2>
      </div>
      <br></br>
      
        <div className='row' id='row' style={{ marginTop: '50px', marginBottom: '50px' }}>
  {subproducts.map((subproduct, index) => (
    <div key={index} className='col-lg-4' id='imgContainer'>
      
      <Nav.Link as={Link} to={`/pebbles/product/${index}`}>
        <img className='prodImg' src={subproduct.imageurl} alt={`Product ${index}`} />
      </Nav.Link>
    
      <Nav.Link   as={Link} to={`/pebbles/product/${index}`}> <p id='productName'>{subproduct.name}</p></Nav.Link>
    </div>
  ))}
</div>
</Fade>

        
        
       
      </div>
      
    );
}
export default QuartzPebbles;