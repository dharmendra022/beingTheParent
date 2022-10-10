import React from 'react'
import { Button, NavDropdown, Navbar, Nav, Container, Card, Col, Row } from 'react-bootstrap';
import imgMan from "../media/Manageing.png"
import TunePic from "../media/Tune.png"

const Tune = () => {
    return (
        <div>
            <Card className="text-center border-0"  >
                <Card.Body>
                    <Card.Title style={{ marginTop: "20px", }}> <img style={{ borderRadius: "50%" }} src={TunePic} alt="Card image cap" /></Card.Title>
                    <div class="container" style={{ marginTop: "90px" }}>
                        <div class="services-inner">
                            <div className='card border-0' colSpan={6} >
                            <Row style={{backgroundColor:"aliceblue",borderRadius:"23px",marginRight:"01px"}}>
                            <img style={{ borderRadius: "50%" ,height:"70px",width:"90px",marginLeft:"100px",marginTop:"47px"}} src={imgMan} alt="Card image cap" />
                                    <Col style={{backgroundColor:"aliceblue",borderRadius:"23px"}}>
                                        <Card className='border-0' style={{backgroundColor:"aliceblue",borderRadius:"23px"}}>
                                            <Card.Body>
                                                <div style={{marginRight:"230px"}}>
                                                <h3>Saxenna Oberoi</h3>
                                                <p>Marketing Director, Kidzone</p>
                                                </div>
                                                <Card.Text style={{textAlign: "justify"}}>
                                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo numquam assumenda suscipit obcaecati sapiente laudantium excepturi libero sit accusantium porro commodi voluptatum doloribus minima blanditiis rem velit, saepe modi tenetur, vitae eaque? 
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                            </Row>
                            </div>


                            <div className='card border-0' colSpan={6} >
                            <Row style={{backgroundColor:"aliceblue",borderRadius:"23px", marginRight:"01px"}}>
                            <img style={{ borderRadius: "50%" ,height:"70px",width:"90px",marginLeft:"100px",marginTop:"47px"}} src={imgMan} alt="Card image cap" />
                                    <Col style={{backgroundColor:"aliceblue",borderRadius:"23px"}}>
                                        <Card className='border-0' style={{backgroundColor:"aliceblue",borderRadius:"23px"}}>
                                            <Card.Body>
                                                <div style={{marginRight:"210px"}}>
                                                <h3  >Saxenna Oberoi</h3>
                                                <p  >Marketing Director, Kidzone</p>
                                                </div>
                                                <Card.Text style={{textAlign: "justify"}}>
                                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo numquam assumenda suscipit obcaecati sapiente laudantium excepturi libero sit accusantium porro commodi voluptatum doloribus minima blanditiis rem velit, saepe modi tenetur, vitae eaque? 
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                            </Row>
                            </div>
                        </div>
                    </div>

                </Card.Body>
            </Card>

        </div>
    )
}

export default Tune
