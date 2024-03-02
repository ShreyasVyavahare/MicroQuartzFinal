// src/pages/Page1.js
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Route, Link, Switch, Redirect } from 'wouter';

import slab from '../pages/productsPages/productAssets/productTiles/slabs.png'
import Powder from '../pages/productsPages/productAssets/productTiles/powder.png'
import pebbles from '../pages/productsPages/productAssets/productTiles/pebbles.png'
import gritz from '../pages/productsPages/productAssets/productTiles/gritz.png'
import microSilica from '../pages/productsPages/productAssets/productTiles/microSilica.png'
import lumps from '../pages/productsPages/productAssets/productTiles/lumps.png'
import { Fade } from "react-awesome-reveal";
import { Slide } from 'react-awesome-reveal';


const Products = () => {
  return (


    <div>
      <Slide cascade triggerOnce>
      <div id='headingContainer'>
        <h2 id='heading'>PRODUCTS</h2>
      </div>
      </Slide >
      
      <div className='row' id='row' style={{marginTop:'50px',marginBottom:'50px'}}>
        <div className='col-lg-4' id='imgContainer'>
          <Fade direction="left"   triggerOnce>
          <Nav.Link  as={Link}  to="/slabs"> <img className='prodImg' src={slab}></img></Nav.Link>
               
               <Nav.Link  as={Link} to="/slabs"> <p id='productName' >Artificial Quartz Stone</p></Nav.Link>
          </Fade>
       

        </div>
        <div className='col-lg-4' id='imgContainer'>
          
          <Fade direction="up" triggerOnce>
             <Nav.Link  as={Link} to="/microSilica"> <img className='prodImg' src={microSilica}></img></Nav.Link>
          <Nav.Link  as={Link} to="/microSilica"> <p id='productName' >Microfine Silica Powder</p></Nav.Link></Fade>
       

        </div>
        <div className='col-lg-4' id='imgContainer'>
        <Fade direction="right" delay=".3s" triggerOnce>
        <Nav.Link  as={Link} to="/quartzGritz"> <img className='prodImg' src={gritz}></img></Nav.Link>
               
               <Nav.Link  as={Link} to="/quartzGritz"> <p id='productName' >Quart Grits</p></Nav.Link>
        </Fade>
       

        </div>
        <div className='col-lg-4' id='imgContainer'>
        <Fade direction="left"   triggerOnce>
        <Nav.Link  as={Link} to="/quartzLumps"> <img className='prodImg' src={lumps}></img></Nav.Link>
               
               <Nav.Link  as={Link} to="/quartzLumps"> <p id='productName' >Quartz Lumps</p></Nav.Link>
        </Fade>
          
       

        </div>
        <div className='col-lg-4' id='imgContainer'>
        <Fade direction="up" triggerOnce>
        <Nav.Link  as={Link} to="/quartzPebbles"> <img className='prodImg' src={pebbles}></img></Nav.Link>
               
               <Nav.Link  as={Link} to="/quartzPebbles"> <p id='productName' >Quartz Pebbles</p></Nav.Link>
        </Fade>
       

        </div>
        <div className='col-lg-4' id='imgContainer'>
        <Fade direction="right" delay=".3s" triggerOnce>
        <Nav.Link  as={Link} to="/quartzPowder"> <img className='prodImg' src={Powder}></img></Nav.Link>
               
               <Nav.Link  as={Link} to="/quartzPowder"> <p id='productName' >Quartz Powder</p></Nav.Link>
     
        </Fade>
      
        </div>
  


      </div>
      {/* <div className='row' id='row'>
        <div id='productCard' className='col-lg-5'>
          <div id='productImageContainer'></div>
         
          <Nav.Link  as={Link} to="/slabs"> <p id='productName' >Product name</p></Nav.Link>

        </div>
        <div id='productCard' className='col-lg-5'>
          <div id='productImageContainer'>
            <img className='prodImg' src={img1}></img>
          </div>
          <p id='productName' to=''>Product name</p>

        </div>
        <div id='productCard' className='col-lg-5'>
          <div id='productImageContainer'></div>
          <p id='productName' to=''>Product name</p>

        </div>
        <div id='productCard' className='col-lg-5'>
          <div id='productImageContainer'></div>
          <p id='productName' to=''>Product name</p>

        </div>
        <div id='productCard' className='col-lg-5'>
          <div id='productImageContainer'></div>
          <p id='productName' to=''>Product name</p>

        </div>
        <div id='productCard' className='col-lg-5'>
          <div id='productImageContainer'></div>
          <p id='productName' to=''>Product name</p>

        </div>


      </div> */}
    </div>
  );
};

export default Products;

