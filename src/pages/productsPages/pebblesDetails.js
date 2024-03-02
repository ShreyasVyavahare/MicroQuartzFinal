// ProductDetailsPebbles.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pebblesData } from "./pebblesData"; // Import your JSON data


import { Fade } from "react-awesome-reveal";

import Slider from "react-slick";
function PebblesDetails() {

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
  // const { subproductId } = useParams();
  // const subproduct = pebblesData.subproducts[subproductId];

  let url = window.location.href;
  let lastIndex = url.length;
  let subProductId = url[lastIndex - 1];
  console.log(subProductId);

  const [subProduct, SetSubProduct] = useState({});
  useEffect(() => {
    SetSubProduct(pebblesData.subproducts[subProductId]);
    if (!subProduct) {
      return <div>Subproduct not found</div>;
    }
    //console.log("Hello");
  }, []);

  // if (!subProduct) {
  //   return <div>Subproduct not found</div>;
  // }

  const { name, color, application, particleSize, imageurl2, imageurl3 } =
    subProduct;

  return (
    <div>
      <div>
        <Fade duration={2000} triggerOnce>
          <section className="productSection">
            <div className="row" style={{ marginTop: "60px" }}>
              <div id="headingContainer">
                <h2 id="heading">{name}</h2>
              </div>
              <div className="col-lg-6" id="productPageImageContainer">
                {/* <img className="productPageImage" src={prodImg}></img> */}
                <Slider className="imageSlider" {...settings}>
                  <div>
                    <img className="sliderImage" src={imageurl2}></img>
                  </div>
                  <div>
                    <img className="sliderImage" src={imageurl3}></img>
                  </div>
                </Slider>
              </div>
              <div id="productPageDescriptionContainer" className="col-lg-6">
               
               

                <div className="row">
                  <div className="col-lg-3">
                    <div style={{ marginLeft: "30px", marginTop: "30px" }}>
                      <h5 style={{ fontWeight: "1000", marginBottom: "20px" }}>
                        Color
                      </h5>
                      {color?.map((color, index) => (
                        <p key={index}>{color}</p>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div style={{ marginLeft: "30px", marginTop: "30px" }}>
                      <h5 style={{ fontWeight: "1000", marginBottom: "20px" }}>
                        Applications
                      </h5>
                      {application?.map((application, index) => (
                        <p key={index}>{application}</p>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div style={{ marginLeft: "30px", marginTop: "30px" }}>
                      <h5 style={{ fontWeight: "1000", marginBottom: "20px" }}>
                        Particle Size
                      </h5>
                      {particleSize?.map((particleSize, index) => (
                        <p key={index}>{particleSize}</p>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-1">

                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </div>
    </div>
  );
}

export default PebblesDetails;
