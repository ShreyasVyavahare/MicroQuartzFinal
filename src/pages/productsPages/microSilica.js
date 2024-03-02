import React from "react";

import prodImg from './productAssets/DetailsPageImages/microSilica.png'
import prodImg2 from './productAssets/DetailsPageImages/microSilica2.png'
import { Fade } from "react-awesome-reveal";

import Slider from "react-slick";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const MicroSilica = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        fade:true

    };
    return (
        <div> 
            <Helmet>
        <title>Unlock the Power of Microfine Silica Powder for Your Projects </title>
        <meta
          name="description"
          content="Dive into the versatility and benefits of microfine silica powder. Enhance your applications with this game-changing ingredient today!"
        />
        {/* Add more meta tags as needed */}
      </Helmet>
            
          
            <Fade duration={2000} triggerOnce>
            <section className="productSection">
                <div className="row" style={{ marginTop: '60px' }}>
                    <div id='headingContainer'>
                        <h2 id='heading'>Microfine Silica Powder</h2>
                    </div>
                    <div className="col-lg-6" id="productPageImageContainer" >
                        {/* <img className="productPageImage" src={prodImg}></img> */}
                        <Slider className="imageSlider" {...settings}>
                                <div>
                                    <img className="sliderImage" src={prodImg}></img>

                                </div>
                                <div>
                                    <img className="sliderImage" src={prodImg2}></img>

                                </div>

                            </Slider>




                    </div>
                    <div id="productPageDescriptionContainer" className="col-lg-6">
                        <p style={{ fontFamily:'Proxima Nova',fontSize:'16px', margin: "10px" ,margin:'10px'}} >Microfine Silica powder is highly micronized form of Silica Powder with particle size of 10-20 Microns. </p>
                        <div className="BorderLine" ></div>
                      
                        <div className="row">
                            <div className="col-lg-4">
                                <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                    <h5 style={{ fontWeight: '1000',marginBottom:'20px' }}>Features</h5>
                                    <p>Precisely Processed</p>
                                    <p>Uniformity in Composition</p>
                                    <p>Fine Particle Size</p>
                                </div>
                            </div>
                            <div className="col-lg-4">

                                <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                    <h5 style={{ fontWeight: '1000',marginBottom:'20px' }}>Applications</h5>
                                    <p>Paints and Coatings</p>
                                    <p>  Ceramics</p>

                                    <p>Epoxy Resin</p>
                                    <p>Road Marking Paints</p>
                                    <p>Plastic Filler</p>




                                </div>
                            </div>
                            <div className="col-lg-4">

                                <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                    <h5 style={{ fontWeight: '1000' ,marginBottom:'20px' }}>Particle Size</h5>
                                    <p>800-1000 Mesh</p>
                                    



                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            </Fade>
      
        </div>
    )
}
export default MicroSilica;