import React from "react";

import { Slide } from "react-awesome-reveal";


const InfraContent = () => {
    return (
        <div>
            <section className="infraContent">
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="col-lg-6">
                        <Slide cascade damping={0.1} direction="left" >                
                        <div className="infraImageLeft1"></div>
                        </Slide>  
                      
                    </div>
                    <div className="col-lg-6"  style={{ marginTop: '30px' ,paddingLeft: '20px' }}>
                        <div className="infraHeadingContainer">
                            <div className="infraBorder"></div>
                        <h2 style={{color:'#100124'}} >Premium Mining Selection</h2>
                        </div>
                       
                        <p style={{marginTop:'20px',marginLeft:'20px',marginRight:'10px'}}>Our commitment to excellence begins with the careful selection of mining areas. The meticulous choice of locations ensures not only the abundance of raw materials but also guarantees their quality and uniformity.</p>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="col-lg-6 order-lg-1 order-2"  style={{ marginTop: '30px' ,paddingLeft: '20px' }}>
                    <div className="infraHeadingContainer">
                            <div className="infraBorder"></div>
                        <h2 style={{color:'#100124'}} >Efficient Sorting Systems</h2>
                        </div>
                       
                        <p style={{marginTop:'20px',marginLeft:'20px',marginRight:'10px'}}>The dedication to delivering superior products extends to our sorting process, where contemporary mechanized systems are employed. These systems effectively categorize different grades, maintaining the high standards that define the company. </p>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                    <Slide cascade damping={0.1} direction="right" >  
 
                        <div className="infraImageRight2"></div>
                        </Slide> 
                    </div>
                    
                </div>
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="col-lg-6">
                    <Slide cascade damping={0.1} direction="left" >  
                        <div className="infraImageLeft3"></div>
                        </Slide>
                    </div>
                    <div className="col-lg-6"  style={{ marginTop: '30px' ,paddingLeft: '20px' }}>
                    <div className="infraHeadingContainer">
                            <div className="infraBorder"></div>
                        <h2 style={{color:'#100124'}} >Rigorous Quality Assurance</h2>
                        </div>


                        <p style={{marginTop:'20px',marginLeft:'20px',marginRight:'10px'}}>Our machinery is lined with silex media to eliminate iron contamination to achieve breakthrough results in white mineral grinding. High-capacity rare earth magnetic separation systems power our machines, and stringent process control guarantees exceptional product quality.</p>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="col-lg-6 order-lg-1 order-2"  style={{ marginTop: '30px' ,paddingLeft: '20px' }}>
                    <div className="infraHeadingContainer">
                            <div className="infraBorder"></div>
                        <h2 style={{color:'#100124'}} >Optimal Mineral Storage</h2>
                        </div>
                     
                        <p style={{marginTop:'20px',marginLeft:'20px',marginRight:'10px'}}>We have the infrastructure to efficiently collect and store the minerals so as to preserve their quality even among the adverse weather or outside conditions. Our advanced machinery plants process high-quality minerals, ensuring that the final products meet international standards.</p>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                    <Slide cascade damping={0.1} direction="right" >  
                        <div className="infraImageRight4 "></div>
                        </Slide>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="col-lg-6">
                    <Slide cascade damping={0.1} direction="left" >  
                        <div className="infraImageLeft5"></div>
                        </Slide>
                    </div>
                    <div className="col-lg-6"  style={{ marginTop: '30px' ,paddingLeft: '20px' }}>
                    <div className="infraHeadingContainer">
                            <div className="infraBorder"></div>
                        <h2 style={{color:'#100124'}} >Industry-Leading Quartz Production</h2>
                        </div>
                       
                        <p style={{marginTop:'20px',marginLeft:'20px',marginRight:'10px'}}>Micro Quartz proudly holds one of the largest annual productions of Quartz in India. With a substantial collection of raw quartz, we produce an impressive 35,000 Metric tons of Quartz Powder, Quartz Lumps and Quartz Grits annually.</p>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="col-lg-6 order-lg-1 order-2"  style={{ marginTop: '30px' ,paddingLeft: '20px' }}>
                    <div className="infraHeadingContainer">
                            <div className="infraBorder"></div>
                        <h2 style={{color:'#100124'}} >CSR: Ethical Manufacturing</h2>
                        </div>
                     
                        <p style={{marginTop:'20px',marginLeft:'20px',marginRight:'10px'}}>Being committed to social responsibility, our manufacturing process undergoes meticulous health, safety, hygiene, and environmental checks. Constant monitoring and reviewing of procedures ensure compliance, creating a hassle-free workplace for our employees. Upholding a strict 'no child labour' policy, we prioritize ethical practices in every aspect of our operations.</p>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                    <Slide cascade damping={0.1} direction="right" >  
                        <div className="infraImageRight6 "></div>
                        </Slide>
                    </div>
                </div>
                <div className="goals">
                    <div className="row">
                        <div className="col-lg4">
                            <div className="goalOne"></div>
                        </div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </section>
        
        </div>
    );
}

export default InfraContent;
