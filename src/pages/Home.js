import React from 'react';
import Carousel1 from "../images/carousel/carousel-1.jpg";
import Carousel2 from "../images/carousel/carousel-2.jpg";
import Carousel3 from "../images/carousel/carousel-3.jpg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Container } from 'react-bootstrap';
import tab1 from "../images/tab/tab-1.jpg";
import tab2 from "../images/tab/tab-2.jpg";

function Home() {
    return (
        <div>

            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Carousel1}
                  alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Carousel2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Carousel3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
            <Container>
              <h1>We do YAY things</h1>
                <p>
                    Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, 
                    a rutrum justo eros pretium libero. 
                    Nullam vel enim id mauris eleifend finibus et ac orci. 
                    Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. 
                    Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
                    Donec mi orci, sollicitudin in luctus a, varius eget massa.
                </p>
                
                
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="home" title="Home">
                    <p>
                    <img src={tab1} alt="tv"></img>
                        co laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullam
                    </p>
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                  <img src={tab2} alt="tv"></img>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                  </Tab>
                  <Tab eventKey="contact" title="Contact">
                  </Tab>
                </Tabs>
                      
                <div className='d-none d-md-block'>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>First</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Second</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Third</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
            </Container>
          </div>
    )
}

export default Home;
