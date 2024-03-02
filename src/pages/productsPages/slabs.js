import React from "react";
import { Fade } from "react-awesome-reveal";
import Nav from 'react-bootstrap/Nav';
import img from './productAssets/slider/slabs/sliderImg1.png';
import img2 from './productAssets/slider/slabs/sliderImg2.png';
import img3 from './productAssets/slider/slabs/sliderImg3.png';
import { abc } from "./slabsData";
import { Route, Link, Switch, Redirect } from 'wouter';
import { useEffect } from "react";
import { Helmet } from "react-helmet";


const Slabs = () => {
  const { data } = abc;
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

 

  return (
    
    <div>
       <Helmet>
        <title>Discover the Beauty of Artificial Quartz Stone</title>
        <meta
          name="description"
          content="Explore the elegance and durability of artificial quartz stone for your home. Learn about its benefits and applications today! "
        />
        {/* Add more meta tags as needed */}
      </Helmet>
      <Fade direction="down">
      <div id='sliderContainer'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"> {/* Adjusted for a 3-second interval */}
      

     
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
        </div>
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." />
            
          
          </div>
          {/* <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
           
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
     
      <div id='headingContainer'>
        <h1 id='heading' style={{ marginTop: '40px' }}>
         Artificial Quartz Stone
        </h1>
        <br />
      </div>

      <p className='text-center' id='homeSubtext' style={{ marginBottom: '50px', marginLeft: '30px',marginTop:'20px', marginRight: '30px' ,fontSize:'18px'}}>
      Bringing the timeless beauty of natural minerals to create a space that truly reflects your unique style with our range of jumbo and superjumbo countertops. Our expertise in stone engineering with our passion for design transforms spaces in way that is second to none.    </p>
      <Fade >
        <div className='row' id='row' style={{ marginTop: '50px', marginBottom: '50px' }}>
          {data.map((product, index) => (
           <div key={index} className='col-lg-4' id='imgContainer'>
            
           {/* <a href={`/calacatta/product/${index}`}>
           { console.log(product.image_url)}
           </a>  */}
           {/* microquartz\src\pages\productsPages\productAssets\NaturalSeries */}
           <Nav.Link  as={Link}  to={`/calacatta/product/${index}`}>
            <div className="productTile">
            <img className='prodImg' src={product.image_url} loading="lazy" />
             <p id='productName'>{product.product_name}</p>
            </div>
          
           </Nav.Link>
         </div>

          ))}

        </div>
      </Fade>
     

    </div>
  );
};

export default Slabs;
