import React from "react";

import prodImg from './productAssets/DetailsPageImages/quartzPowder.png'
import prodImg2 from './productAssets/DetailsPageImages/quartzPowder2.png'
import { Fade } from "react-awesome-reveal";

import Slider from "react-slick";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const QuartzPowder = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);

    // slider settings
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
        <title>Unveiling the Magic of Quartz Powder: Your Ultimate Guide</title>
        <meta
          name="description"
          content="Dive into the world of quartz powder and discover its endless possibilities. Explore uses, benefits, and more!"
        />
        {/* Add more meta tags as needed */}
      </Helmet>
           

            <Fade duration={2000} triggerOnce>
                <section className="productSection">
                    <div className="row" style={{ marginTop: '60px' }}>
                        <div id='headingContainer'>
                            <h2 id='heading'>Quartz Powder</h2>
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
                            <p style={{ fontFamily:'Proxima Nova',fontSize:'16px', margin: "10px" }} >Actively engaged in the manufacturing and exporting of premium quality Quartz Powder/Filler, the product is widely appreciated by our clientele for the quality, highly competitive price and bulk quantity. </p>
                            <div className="BorderLine" ></div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                        <h4 style={{ fontWeight: '1000', marginBottom: '20px' }}>Features</h4>
                                        <p>Precisely Processed</p>
                                        <p>Enhanced Shelf Life</p>
                                        <p>Accurate Composition</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">

                                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                        <h4 style={{ fontWeight: '1000', marginBottom: '20px' }}>Applications</h4>
                                        <p>Artificial Quartz Stone</p>
                                        <p>Ceramic Industry</p>
                                        <p>Filler in Paint for Coatings</p>
                                        <p>Filler in Rubber Industry</p>
                                        <p>Television Picture Tube</p>
                                        <p>Semi- conductors</p>
                                        <p>Silicon Carbide</p>
                                        <p>Abrasives</p>









                                    </div>
                                </div>
                                <div className="col-lg-4">

                                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                       



                                    </div>
                                </div>
                            </div>


                        </div>
                        <h5 style={{marginLeft:'20px',marginTop:'10px', color:'#100124'}}>Sizes and Grade</h5>
                        <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}></div>
                        <table style={{borderTop: '1px solid  #d9d9d9', marginTop: '20px' }} className="table table-bordered">
    <tbody>
        <tr>
            <th scope="row">Quartz Powder</th>
            <th>Grade-I</th>
            <th>Grade-II</th>
            <th>Grade-III</th>
        </tr>
        <tr>
            <th scope="row">Mesh Size</th>
            <td>200,300,325,<br></br>400 and 500 mesh</td>
            <td>200,300,325<br></br>,400 and 500 mesh</td>
            <td>150,200,325</td>
        </tr>
        <tr>
            <th scope="row">Color & Whiteness</th>
            <td>95%-97%</td>
            <td>91%-93%</td>
            <td>85%-89%</td>
        </tr>
        <tr>
            <th scope="row">SiO2(Purity)</th>
            <td>99.5% min</td>
            <td>99.1% min</td>
            <td>98%-99.1%</td>
        </tr>
        <tr>
            <th scope="row">Fe2O3</th>
            <td>0.01%</td>
            <td>0.01%-0.02%</td>
            <td>0.0.2%-0.04%</td>
        </tr>
        <tr>
            <th scope="row">Resin test</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>N.A%</td>
        </tr>
    </tbody>
</table>
</div>
                        <h5 style={{marginLeft:'20px',marginTop:'10px',marginBottom:'20px', color:'#100124'}}>Our Silica (Quartz) Powder Specification Grade A</h5>
                        <table style={{ borderTop: '1px solid  #d9d9d9' }} className="table table-bordered">
                            <thead>
                                <tr>
                                   


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th>SIO2</th>
                                    <td>99.45% min</td>
                                    <td>Firing Whiteness</td>
                                    <td>97%</td>

                                </tr>
                                <tr>
                                <th>FE2O3</th>
                                    <td>0.009%</td>
                                    <td>L-value</td>
                                    <td>97.75%</td>

                                </tr>
                                <tr>
                                <th>Al2O3</th>
                                    <td>0.187%</td>
                                    <td>Firid Temperature</td>
                                    <td>1120</td>

                                </tr>
                                <tr>
                                <th>K2O</th>
                                    <td>0.187%</td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                <th>Na2O</th>
                                    <td>0.83%</td>
                                    <td>LOI</td>
                                    <td>0.103</td>

                                </tr>
                                <tr>
                                <th>CaO</th>
                                    <td>0.029%</td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                <th>MgO</th>
                                    <td>0.015%</td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                
                            </tbody>
                        </table>
                        <div>

                    </div>
                </section>
            </Fade>
           
        </div>
    )
}
export default QuartzPowder;