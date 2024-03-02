import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { abc } from "./slabsData";

import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";

function SlabsDetails() {
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
    arrows: true,
    fade: true,
  };

  let url = window.location.href;
  let lastIndex = url.length;
  let productId = url[lastIndex - 1];
  console.log(productId);


  const [product, SetProduct] = useState({});
  useEffect(() => {
    SetProduct(abc.data[productId]);
    if (!product) {
      return <div>Product not found</div>;
    }
    //console.log("Hello");
  }, []);

  console.log(product);

  const {
    product_name,
    description,
    primary_colour,
    vein,
    category,
    image_url,
    image_url2,
    slider_img,
    slider_img2,
    slider_img3,
  } = product;

  return (
    <div>
      <Fade duration={2000} triggerOnce>
        <section className="productSection">
          <div className="row" style={{ marginTop: "60px" }}>
            <div id="headingContainer">
              <h2 id="heading">{product_name}</h2>
            </div>
            <div className="col-lg-6" id="productPageImageContainer">

              <Slider className="imageSlider" {...settings}>
                <div>
                  <img className="slabImages" src={product.image_url2}></img>
                </div>
                <div>
                  <img className="slabImages" src={product.image_url3}></img>
                </div>
              </Slider>
            </div>
            <div id="productPageDescriptionContainer" className="col-lg-6">
              <p style={{ fontFamily:'Proxima Nova', margin: "10px" }}>
                {description}
              </p>
              <div className="BorderLine"></div>

              <div className="row">
                <div className="col-lg-4">
                  <div style={{ marginLeft: "30px", marginTop: "30px" }}>
                    <h5 style={{ fontWeight: "1000", marginBottom: "20px",borderBottom:'1px Solid grey',padding:'5px',maxWidth:'200px' }}>
                      Primary colour{" "}
                    </h5>
                    <p style={{fontSize:'13.5px'}}>{primary_colour}</p>
                    <h5 style={{ fontWeight: "1000", marginBottom: "20px",borderBottom:'1px Solid grey',padding:'5px' ,maxWidth:'70px' }}>
                      Vein:{" "}
                    </h5>
                    <p style={{fontSize:'13.5px'}}>{vein}</p>
                    <h5 style={{ fontWeight: "1000",marginTop:'20px', marginBottom: "20px",borderBottom:'1px Solid grey',padding:'5px' ,maxWidth:'80px' }}>
                      Finish{" "}
                    </h5>
                    <p style={{fontSize:'13.5px'}}>Honed</p>
                    <p style={{fontSize:'13.5px'}}>Leather</p>
                    <p style={{fontSize:'13.5px'}}>Polish</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div style={{ marginLeft: "30px", marginTop: "30px" }}>
                    <h5 style={{ fontWeight: "1000", marginBottom: "20px" }}>
                     
                    </h5>
                    
                    <h5 style={{ fontWeight: "1000", marginBottom: "20px",borderBottom:'1px Solid grey',padding:'5px' ,maxWidth:'200px' }} > Super Jumbo Slab</h5>
                    <p style={{fontSize:'13.5px'}}>Thickness: 2cm & 3 cm</p>
                    <p style={{fontSize:'13.5px'}}>Size: 138” x 78” </p>
                    <p style={{fontSize:'13.5px'}} >3500 X 2000 mm</p>
                    <br></br>
                    <h5 style={{ fontWeight: "1000", marginBottom: "20px",borderBottom:'1px Solid grey',padding:'5px' ,maxWidth:'150px' }} >Jumbo Slab</h5>
                    <p style={{fontSize:'13.5px'}}>Thickness: 2cm & 3 cm</p>

                    <p style={{fontSize:'13.5px'}}>Size: 127” x 64”</p>
                    <p style={{fontSize:'13.5px'}}>3230 x 1630 mm</p>
                    <br></br>

                  </div>
                </div>
                <div className="col-lg-4">
                  <div style={{ marginLeft: "30px", marginTop: "30px" }}>
                    <h5 style={{ fontWeight: "1000", marginBottom: "20px" }}>
                      {" "}
                    </h5>
                    <h5 style={{ fontWeight: "1000", marginBottom: "20px",borderBottom:'1px Solid grey',padding:'5px' ,maxWidth:'140px'}} >Cut to Size</h5>
                    <p style={{fontSize:'13.5px'}}>Kitchen</p>
                    <p style={{fontSize:'13.5px'}}>Island</p>
                    <p style={{fontSize:'13.5px'}}>Backsplash</p>
                    <br></br>
                    <h5 style={{ fontWeight: "1000", marginBottom: "20px",borderBottom:'1px Solid grey',padding:'5px' ,maxWidth:'150px'}}>Applications</h5>
                    <p style={{fontSize:'13.5px'}}>Kitchen Countertops</p>

<p style={{fontSize:'13.5px'}}>Shower Panels</p>

<p style={{fontSize:'13.5px'}}>Tubs Surrounds</p>

<p style={{fontSize:'13.5px'}}>Bathroom Vanities</p>

<p style={{fontSize:'13.5px'}}>Fireplace Surrounds</p>

<p style={{fontSize:'13.5px'}}>Bar Tops</p>

<p style={{fontSize:'13.5px'}}>Table Tops</p>

<p style={{fontSize:'13.5px'}}>Commercial Spaces</p>

                    

                  </div>
                </div>
                <div className="col-lg-4">
                  <div style={{ marginLeft: "30px", marginTop: "30px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
}

export default SlabsDetails;
