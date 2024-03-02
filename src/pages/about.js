// src/pages/About.js
import React from 'react';
import { Link } from 'wouter';
import { Fade } from "react-awesome-reveal";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';


const About = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
         <Helmet>
        <title>Discover Our Micro Quartz Website | Quality Quartz Products </title>
        <meta
          name="description"
          content="Explore the about us page of a leading micro quartz website manufacturing top-notch quartz countertops, grits, pebbles, and more. Learn more!"
        />
        {/* Add more meta tags as needed */}
      </Helmet>
    <div className="aboutTop">
    <Fade  cascade damping={0.1} direction="down">
        <div className="aboutMiddle">
            
            <h1 style={{fontSize:'50px'}}>Micro Quartz</h1>
        </div>
        </Fade>
    </div>
    <div className="row">
        <div className="col-lg-6">
            <Fade  cascade damping={0.1}>
            <div id="aboutBoxLeft1"  ></div>
            </Fade>
        </div>
        <div id="abtTextContent" className="col-lg-6" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
            <h2 style={{ paddingLeft: '30px' ,color:'#100124' }}>

            Crafting Excellence from Earth's Heart to Yours</h2>
            <p style={{ margin: '30px' }}>Established in 2012, Micro Quartz has emerged as a stalwart in the mining and processing of Quartz products. Fuelled by impeccable craftsmanship, cutting-edge technological prowess and commitment to product quality, it has positioned us as leaders in the industrial market, both domestically and internationally.  </p>
        </div>



    </div>
    <div className="row">
        <div  id="abtTextContent" className="col-lg-6  order-lg-1 order-2" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
            <h2 style={{ paddingLeft: '30px',color:'#100124'}}>

            Who we are</h2>
            <p style={{ margin: '30px' }}>Nestled in Udaipur, Rajasthan, our state-of-the-art 100000 sq ft
 manufacturing facility stands as a testament to our unwavering dedication. Comprising five units, each with 60-70 skilled personnel, our operations unfold in a hassle-free environment, ensuring on-time deliveries for our valued clients. This seamless process transforms everyday spaces into reflections of individual style.</p>
        </div>
        <div className="col-lg-6 order-lg-2 order-1">
            <div id="RightContainer">
            <Fade cascade damping={0.1}>
                <div id="aboutBoxRight2" ></div>
                </Fade>
            </div> </div>


    </div>
    <div className="row">
        <div className="col-lg-6">
        <Fade cascade damping={0.1}>
            <div id="aboutBoxLeft3" ></div>
            </Fade>
        </div>
        <div id="abtTextContent" className="col-lg-6" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
            <h2 style={{ paddingLeft: '30px',color:'#100124' }}>

            A Pledge to Sustainability and Quality</h2>
            <p style={{ margin: '30px' }}>Choosing Micro Quartz means making the right choice for your home and the planet. We take immense pride in adhering to the highest benchmarks of safety, quality, environmental responsibility, and sustainability. Our commitment extends beyond crafting exquisite surfaces; it's a commitment to driving positive change by minimizing environmental impact.</p>
        </div>
    </div>
    <br></br>
    <div className="row">
        <div  id="abtTextContent" className="col-lg-6  order-lg-1 order-2" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
            <h2 style={{ paddingLeft: '30px',color:'#100124'}}>

            Principles at Play</h2>
            <p style={{ margin: '30px' }}>Our mission at Micro Quartz is to provide utility to our clients and foster prolonged business alliances. We aspire to reach diverse markets worldwide, distinguished by our operations and commitment to excellence.</p>
        </div>
        <div className="col-lg-6 order-lg-2 order-1">
            <div id="RightContainer">
            <Fade cascade damping={0.1}>
                <div id="aboutBoxRight4" ></div>
                </Fade>
            </div> </div>

            


    </div>
    <br></br>
    <div className="row">
        <div className="col-lg-6">
        <Fade cascade damping={0.1}>
            <div id="aboutBoxLeft5" ></div>
            </Fade>
        </div>
        <div id="abtTextContent" className="col-lg-6" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
            <h2 style={{ paddingLeft: '30px',color:'#100124' }}>

            Values that drive us forward</h2>
            <p style={{ margin: '30px' }}>
                <ul style={{fontWeight:'lighter'}}>
                    <li style={{fontFamily:'Proxima Nova' ,fontSize:'16px'}}>Continuous training of our employees and process improvement</li>
                    <li style={{fontFamily:'Proxima Nova' ,fontSize:'16px'}}>Maintaining a safe and healthy work environment</li>
                    <li style={{fontFamily:'Proxima Nova' ,fontSize:'16px'}}>Conducting business with integrity and fairness</li>
                    <li style={{fontFamily:'Proxima Nova' ,fontSize:'16px'}}>Focusing on our customer's needs</li>
                </ul>
            </p>
        </div>
    </div>

    
    <br></br>
</div>
  );
};

export default About;
