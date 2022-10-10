import React from 'react'
import { Button, NavDropdown, Navbar, Nav, Container, Card } from 'react-bootstrap';
import Palm from "../toolkitPic/palm.png"
import Gift from "../toolkitPic/Gift.png"
import Arrow from "../toolkitPic/Arrow.png"
import Sound from "../toolkitPic/Sound.png"
import Home from "../toolkitPic/Setting.png"
import Setting from "../toolkitPic/Setting1.png"
const BusinessToolkit = () => {
    return (
        // <div className="grid--box">
        //         <div className="grid-item">1
        //         </div>
        //         <div className="grid-item">2</div>
        //         <div className="grid-item">3</div>
        //         <div className="grid-item">4</div>
        //         <div className="grid-item">5</div>
        //         <div className="grid-item">6</div>
        //     </div>
        <div>
            <Card className="text-center border-0" style={{ backgroundColor: "#e6f7ff" }} >
                <Card.Body>
                    <Card.Title style={{ marginTop: "50px", fontWeight: "bold", fontSize: "30px" }}>Simple tools for every business </Card.Title>
                    <p style={{ marginTop: "20px" }}>A complete business toolkit</p>
                    
                    <div className="container" style={{ marginTop: "70px" }}>
                        <div className="card--grid">
                            <div className="grid-item--a">
                                <div className="flex-card">
                                    <div className="card--left">
                                    <img className="toolkiPic" src={Palm} alt="Card image cap" />
                                        <h3 style={{ marginRight: "40px" }}>Manage Brand Pages</h3>
                                        <p>Stylizes, emotional representations of your</p>
                                        <p style={{ marginRight: "93px", marginTop: "-20px" }}>brand using images & videos</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-item--a" style={{marginRight:"240px"}}>
                                <div className="flex-card">
                                    <div className="card--left">
                                    <img className="toolkiPic" src={Gift} alt="Card image cap" />
                                        <h3 style={{ marginRight: "40px" }}>Showcase Your Product</h3>
                                        <p style={{ marginRight: "60px" }}>Create, categorize and showcase your</p>
                                        <p style={{ marginRight: "186px", marginTop: "-20px" }}>product cataglogue</p>
                                    </div>
                                </div>
                            </div>


                            <div className="grid-item--a">
                                <div className="flex-card">
                                    <div className="card--left">
                                    <img className="toolkiPic" src={Arrow} alt="Card image cap" />
                                        <h3 style={{ marginRight: "40px" }}>Target User Precisely</h3>
                                        <p style={{ marginRight: "37px" }}>Define your audience for smarter ad</p>
                                        <p style={{ marginLeft: "20px", marginTop: "-20px" }}>targeting. Adjust your target audience to be</p>
                                        <p style={{ marginRight: "45px", marginTop: "-20px" }}>as broad or well-define as you like</p>
                                    </div>
                                </div>
                            </div>


                            <div className="grid-item--a">
                                <div className="flex-card">
                                    <div className="card--left">
                                    <img className="toolkiPic" src={Sound} alt="Card image cap" />
                                        <h3 style={{ marginRight: "40px" }}>Create & Manage Campaigns</h3>
                                        <p style={{ marginRight: "127px" }}>Select campaign parameters, such as an</p>
                                        <p style={{ marginRight: "93px", marginTop: "-20px" }}>advertising objective and manage everything</p>
                                        <p style={{ marginRight: "370px", marginTop: "-20px" }}>on go</p>
                                    </div>
                                </div>
                            </div>


                            <div className="grid-item--a">
                                <div className="flex-card">
                                    <div className="card--left">
                                    <img className="toolkiPic" src={Home} alt="Card image cap" />
                                        <h3 style={{ marginRight: "33px" }}>Get Real-time Insights</h3>
                                        <p style={{ marginRight: "07px" }}>Real time insights and analystics to better</p>
                                        <p style={{ marginRight: "07px", marginTop: "-20px" }}>understand the impact for your campaign</p>
                                    </div>
                                </div>
                            </div>


                            <div className="grid-item--a">
                                <div className="flex-card">
                                    <div className="card--left">
                                    <img className="toolkiPic" src={Setting} alt="Card image cap" />
                                        <h3 style={{ marginRight: "40px" }}>Optimize and Get Better</h3>
                                        <p style={{ marginRight: "57px" }}>Do testing and optimization for Search</p>
                                        <p style={{ marginRight: "53px", marginTop: "-20px" }}>Engines to improve performance over a</p>
                                        <p style={{ marginRight: "230px", marginTop: "-20px" }}>period of time</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BusinessToolkit
