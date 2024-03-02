import {React,useEffect} from "react";
import prodImg from './productAssets/DetailsPageImages/quartzGritz.png'
import prodImg2 from './productAssets/DetailsPageImages/quartzGritz2.png'
import { Fade } from "react-awesome-reveal";

import Slider from "react-slick";
import { Helmet } from "react-helmet";

const QuartzGritz = () => {
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
        <title>Elevate Your Projects with Quartz Grits: A Complete Guide </title>
        <meta
          name="description"
          content="Dive into the world of quartz grits and discover how they can add sparkle and strength to your projects. Learn more today! "
        />
        {/* Add more meta tags as needed */}
      </Helmet>
         
            <Fade duration={2000} triggerOnce>
                <section className="productSection">
                    <div className="row" style={{ marginTop: '60px' }}>
                        <div id='headingContainer'>
                            <h2 id='heading'>QUARTZ GRITS</h2>
                        </div>
                        <div className="col-lg-6" id="productPageImageContainer" >
                            {/* <img className="productPageImage" src={prodImg}></img> */}
                            <Slider className="imageSlider" {...settings}>
    <div>
        <img src={prodImg} className="sliderImage"></img>
    </div>
    <div>
        <img src={prodImg2} className="sliderImage"></img>
    </div>
</Slider>

                            



                        </div>
                        <div id="productPageDescriptionContainer" className="col-lg-6">
                            <p style={{ fontFamily:'Proxima Nova',fontSize:'16px', margin: "10px" ,margin:'10px'}} >Our range of quartz grits is widely acknowledged in the market for its high chemical and physical properties. In addition to this, the offered range is made using superior grade ingredients with sophisticated machinery at the premises. </p>
                            <div className="BorderLine" ></div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                        <h5 style={{ fontWeight: '1000', marginBottom: '20px' }}>Features</h5>
                                        <p>Premium Purity</p>
                                        <p>Superior Fusibility</p>
                                        <p>Precisely Processed</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">

                                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                                        <h5 style={{ fontWeight: '1000', marginBottom: '20px' }}>Applications</h5>
                                        <p>Artificial Quartz Stone</p>
                                        <p>Stone Cutting</p>
                                        <p>Sand Blasting</p>
                                        <p>Solid Surface</p>
                                        <p >Paint Stripping</p>
                                        <p>Glass Grinding</p>
                                        <p>Fiber Glass</p>
                                        <p>Micro Graving</p>
                                       






                                    </div>
                                </div>
                                <div className="col-lg-4">

                                    <div style={{ marginLeft: '30px', marginTop: '0px' }}>
                                  
                                   





                                    </div>
                                </div>
                            </div>


                        </div>
                        <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
    <h5 style={{ marginLeft: '20px', marginTop: '20px', color: '#100124' }}>Sizes and Grade</h5>
    <table style={{ borderLeft: '1px solid  #d9d9d9', marginTop: '20px', maxWidth: '100%' }} className="table table-bordered">
    <tbody>
        <tr>
            <th scope="row">Silica Granules</th>
            <th>Grade-I</th>
            <th>Grade-II</th>
            <th>Grade-III</th>
        </tr>
        <tr>
            <th scope="row">Size</th>
            <td>0.1-0.4 | 0.1-0.3 | 0.3-0.7 | 0.6-1.2 | 1.2-2.5 | 2.5-4.0 | 4.0-6.0 | 6.0-8.0</td>
            <td>0.1-0.4 | 0.1-0.3 | 0.3-0.7 | 0.6-1.2 | 1.2-2.5 | 2.5-4.0 | 4.0-6.0 | 6.0-8.0</td>
            <td>0.1-0.4 | 0.1-0.3 | 0.3-0.7 | 0.6-1.2 | 1.2-2.5 | 2.5-4.0 | 4.0-6.0 | 6.0-8.0</td>
        </tr>
        <tr>
            <th scope="row">Color & Whiteness</th>
            <td>Transparent</td>
            <td>Transparent</td>
            <td>Transparent to Milky White</td>
        </tr>
        <tr>
            <th scope="row">SiO2(Purity)</th>
            <td>99.5% min</td>
            <td>99.5% min</td>
            <td>99%-99.6%</td>
        </tr>
        <tr>
            <th scope="row">Fe2O3</th>
            <td>0.008%-0.01%</td>
            <td>0.008%-0.01%</td>
            <td>0.01%</td>
        </tr>
        <tr>
            <th scope="row">Iron Free</th>
            <td>Nil</td>
            <td>Nil</td>
            <td>Nil</td>
        </tr>
        <tr>
            <th scope="row">Moisture</th>
            <td>0.033%</td>
            <td>0.033%</td>
            <td>0.033%</td>
        </tr>
    </tbody>
</table>

                        <h5 style={{ marginLeft: '20px', marginTop: '20px', color: '#100124' }}>Chemical Composition</h5>
                        <ul  style={{ marginLeft: '30px', marginTop: '20px' }}>
                            <li>
                                SiO2 : 99.5%-99.8%
                            </li>
                            <li>
                                Fe2O3 : 0.01% or below
                            </li>
                            <li>
                                Al2O3 : 0.01%
                            </li>
                            <li>
                              CaO : 0.01%
                            </li>
                            <li>
                                MgO,Na2O,K2O,TiO2,MnO are in trace or absent
                            </li>
                        </ul>
                        </div>

                    </div>
                </section>
            </Fade>
        
        </div>
    )
}
export default QuartzGritz;