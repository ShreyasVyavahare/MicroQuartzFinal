import React, { useEffect ,useState} from "react";
import { Route, Link, Switch, Redirect } from 'wouter';
import Home from './pages/home';
import About from './pages/about';
import Infrastructure from './pages/infrastructure';
import Contact from './pages/contact';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './index.css'
import backgroundImage from './components/assets/footerImage.png';

import microSilica from './pages/productsPages/microSilica';
import QuartzGritz from './pages/productsPages/quartzGritz';
import QuartzLumps from './pages/productsPages/quartzLumps';
import QuartzPebbles from './pages/productsPages/quartzPebbles';
import QuartzPowder from './pages/productsPages/quartzPowder';
import LumpsDetails from './pages/productsPages/lumpsDetails';
import PebblesDetails from './pages/productsPages/pebblesDetails';
import SlabsDetails from './pages/productsPages/slabsDetails';
import Slabs from './pages/productsPages/slabs';
import logo from './components/assets/MQ.svg'

import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsappLogo from "./components/whatsapp";


const App = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   handleResize(); // Initial check
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const closeMenu = () => {
    if (isMobile) {
      setExpanded(false);
    }
  };


  return (
    <div>



      {/* Navbar */}
      <Navbar
      bg="light"
      variant="light"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={handleToggle}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src={logo} alt="" height={40} style={{ marginRight: '10px' }} />
          MicroQuartz
        </Link>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown" className="justify-content-end">
          <Nav className="navbar-nav">
            <Nav.Link as={Link} to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link" onClick={closeMenu}>
              About us
            </Nav.Link>
            <NavDropdown
              title="Products"
              href="/products"
              id="basic-nav-dropdown"
              show={isMobile ? true : undefined}
              onClick={closeMenu}
            >
              <NavDropdown.Item className="nav-linkk" as={Link} to="/slabs">
                Artificial Quartz Stone
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-linkk" as={Link} to="/microSilica">
                Microfine Silica Powder
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-linkk" as={Link} to="/quartzGritz">
                Quartz Grits
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-linkk" as={Link} to="/quartzLumps">
                Quartz Lumps
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-linkk" as={Link} to="/quartzPebbles">
                Quartz Pebbles
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-linkk" as={Link} to="/quartzPowder">
                Quartz Powder
              </NavDropdown.Item>
              {/* Add more items as needed */}
            </NavDropdown>
            <Nav.Link as={Link} to="/infrastructure" className="nav-link" onClick={closeMenu}>
              Infrastructure
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link" onClick={closeMenu}>
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>


      {/* Main content */}
      <div >
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/infrastructure">
            <Infrastructure />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/slabs">
            <Slabs />
          </Route>
          <Route path="/microSilica" component={microSilica} />
          <Route path="/quartzGritz" component={QuartzGritz} />
          <Route path="/quartzLumps" component={QuartzLumps} />
          <Route path="/quartzPebbles" component={QuartzPebbles} />
          <Route path="/pebbles/product/:subproductId" component={PebblesDetails} />
          <Route path="/quartzPowder" component={QuartzPowder} />
          <Route path="/product/:subproductId" component={LumpsDetails} />
          <Route path="/calacatta/product/:productId" component={SlabsDetails} />

          {/* Redirects */}
          <Redirect from="/" to="/home" exact />
          <Redirect from="/about" to="/about" exact />
          <Redirect from="/infrastructure" to="/infrastructure" exact />
          <Redirect from="/contact" to="/contact" exact />
          <Redirect from="/slabs" to="/slabs" exact />
          <Redirect from="/microSilica" to="/microSilica" exact />
          <Redirect from="/quartzGritz" to="/quartzGritz" exact />
          <Redirect from="/quartzLumps" to="/quartzLumps" exact />
          <Redirect from="/quartzPebbles" to="/quartzPebbles" exact />
          <Redirect from="/pebbles/product/:subproductId" to="/pebbles/product/:subproductId" exact />
          <Redirect from="/quartzPowder" to="/quartzPowder" exact />
          <Redirect from="/product/:subproductId" to="/product/:subproductId" exact />
          <Redirect from="/calacatta/product/:productId" to="/calacatta/product/:productId" exact />
        </Switch>
        {/* fooetr */}
        <div>
          <div style={{ backgroundColor: 'black', width: '100vw', padding: '15px' }}>
            <div className="d-flex justify-content-center">
            <IconButton href="https://www.facebook.com/profile.php?id=61555606955234&mibextid=zOiqff" className="text-white me-4">
        <FacebookIcon />
      </IconButton>
      
   
      <IconButton href="https://www.instagram.com/microquartzs_udaipur?igsh=M2FlZjFjMDBwYmcy&utm_source=qr" className="text-white me-4">
        <InstagramIcon />
      </IconButton>
      <IconButton href="https://www.linkedin.com/company/microquartzs/" className="text-white me-4">
        <LinkedInIcon />
      </IconButton>
     
            </div>
          </div>

          <footer
            className="text-white"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              padding: '50px 0 0 0',
            }}
          >
            {/* Social Media Section */}

            {/* Links Section */}
            <section className="container">
                   <div className="row text-center text-md-start">
                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                  <img src={logo} className="footerLogo" alt="" height={50} style={{ marginRight: '10px' }} />
                  <br></br>
                  <br></br>

                  <p className="text-white" style={{fontFamily:'Cormorant'}}>
                  Micro Quartz is a manufacturer of premium quartz products such as artificial quartz stone, quartz grits, quartz lumps, quartz powder, quartz pebbles and microfine silica powder.         </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Site Map</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <Nav.Link as={Link} activeStyle={{}} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/infrastructure">Infrastructure</Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact us
                  </Nav.Link>

                </div>

              
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      <h6 className="text-uppercase fw-bold">Contact</h6>
      <hr
        className="mb-4 mt-0 d-inline-block mx-auto"
        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
      />
      <p className="text-white" style={{fontFamily:'cormorant'}}>
      <HomeIcon  style={{marginRight:'10px'}} />
        Office : 302, Vallabh Apartment New Navratna Complex, Bhuwana Udaipur (Rajasthan) 313001
      </p>
      <a  style={{fontFamily:'cormorant'}} href="mailto:microquartz@live.com" className="text-white">
        <EmailIcon style={{marginRight:'10px'}} />
        microquartz@live.com
      </a>
      <br></br>
      <br></br>

      <a  style={{fontFamily:'cormorant'}} href="tel:+919166676663" className="text-white">
        <PhoneIcon style={{marginRight:'10px'}} />
        +91 9166676663
      </a>
    </div>
              </div>
              <p className="text-center" style={{color:'white' ,fontSize:'11px',marginTop:'10px',fontFamily:'cormorant'}}><span style={{fontWeight:'100',fontSize:'9px'}}>Disclaimer : </span>The colours represented here may differ from actual depending on your display settings. You are welcome to know them in person at our factory.</p>
        
            </section>

            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',fontFamily:'cormorant',fontSize:'13px' }}>
              © Copyright @ Micro Quartz 2023-2024 All Rights Reserved
            </div>
          </footer>
        </div>



      </div>
      <WhatsappLogo></WhatsappLogo>
    </div>
    
  );
};

export default App;
