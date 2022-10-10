import React from 'react'
import { Button, NavDropdown, Navbar, Nav, Container, Card } from 'react-bootstrap';
import img from "../media/laptop.png"
import Dabar from "../media/Dabar.png"
import Family from "../media/Family.png"
import ComeOnBoard from "../media/Comeonboard.png"
import List from "../media/ListyourBrand.png"
import Categories from "../media/CategoriesYorProduct.png"
import SetUp from "../media/SetUpMangeCamp.png"
import Mom from "../media/Mom.png"
const Advertising = () => {
    return (
        <div>
            <Card className='border-0' style={{ marginTop: "20px" }}>
                <div className="text-justify" style={{ marginLeft: "38%" }}>
                    <h1>Do more with Brands Labs</h1>
                    <p style={{ marginLeft: "17%" }}>Ready to start advertising ?</p>
                </div>
                <Card.Body className='ml-230px' style={{ marginTop: "100px" }}>
                    <div style={{ marginLeft: "200px" }}>
                        <Card.Title>Brand page Showcase</Card.Title>
                        <p>
                            Increase awareness of your business with a free
                        </p>
                        <p style={{ marginTop: "-20px" }}> brand page that you can make in minutes</p>
                        <div className="mb-2" >
                            <p style={{ color: "red" }}>See Brand Pages</p>
                        </div>
                    </div>
                    <div style={{
                        width: "18rem", float: "right", marginBottom: "70px", marginTop: "-169px",
                        marginRight: "96px"
                    }} colspan="6">
                        <img className="card-img-top" src={img} alt="Card image cap" />
                    </div>
                </Card.Body>
            </Card>
            {/* New Portion */}
            <Card style={{ marginTop: "10px" }} className='border-0'>
                <Card.Body>
                    <div style={{ width: "18rem", marginLeft: "180px" }}>
                        <img className="card-img-top" src={Dabar} alt="Card image cap" />
                    </div>
                    <div style={{
                        width: "18rem", float: "right", marginBottom: "70px", marginTop: "-230px",
                        marginRight: "170px"
                    }} colspan="6" >
                        <Card.Title>Precise Ad Targeting</Card.Title>
                        <p>
                            Inovation blend of life-stage marketing
                        </p>
                        <p style={{ marginTop: "-20px" }}> solutions to Reach and engage new , expectant</p>
                        <p style={{ marginTop: "-20px" }}>and experienced moms</p>

                        <ul>
                            <li>Set clear objectives</li>
                            <li>Define your audience</li>
                            <li>Make impact</li>
                        </ul>

                    </div>
                </Card.Body>
            </Card>
            {/* Third portion */}
            <Card style={{ marginTop: "10px" }} className='border-0'>
                <Card.Body className='ml-230px'>
                    <div style={{ marginLeft: "200px" }}>
                        <Card.Title>Brand page Showcase</Card.Title>
                        <p>
                            Increase awareness of your business with a free
                        </p>
                        <p style={{ marginTop: "-20px" }}> brand page that you can make in minutes</p>
                        <div className="mb-2" >
                            <p style={{ color: "red" }}>See Brand Pages</p>
                        </div>
                    </div>
                    <div style={{
                        width: "18rem", float: "right", marginBottom: "70px", marginTop: "-169px",
                        marginRight: "96px"
                    }} colspan="6">
                        <img className="card-img-top" src={Family} alt="Card image cap" />
                    </div>
                </Card.Body>
            </Card>
            <Card className="text-center border-0" style={{ backgroundColor: "#FFFFE0" }} >
                <Card.Body>
                    <Card.Title style={{ marginTop: "50px", fontWeight: "bold", fontSize: "30px" }}>Take steps towards your goals </Card.Title>
                    <p style={{ marginTop: "40px" }}>Our secret sauce for your success </p>
                    <div class="container" style={{ marginTop: "90px" }}>
                        <div class="services-inner">
                            <div class="services-box">
                                <span class="icon">
                                    <img className="card-img-top" src={ComeOnBoard} alt="Card image cap" />
                                </span>
                                <h3 class="services-title">Come onboard</h3>
                            </div>
                            <div class="services-box">
                                <span class="icon">
                                    <img className="card-img-top" src={List} alt="Card image cap" />
                                </span>
                                <h3 class="services-title">List your brand page</h3>
                            </div>
                            <div class="services-box">
                                <span class="icon">
                                    <img className="card-img-top" src={Categories} alt="Card image cap" />
                                </span>
                                <h3 class="services-title">Categorize your products</h3>
                            </div>
                            <div class="services-box">
                                <span class="icon">
                                    <img className="card-img-top" src={SetUp} alt="Card image cap" />
                                </span>
                                <h3 class="services-title">Set up & manage campaigns</h3>
                            </div>
                            <div class="services-box">
                                <span class="icon">
                                    <img className="card-img-top" src={Mom} alt="Card image cap" />
                                </span>
                                <h3 class="services-title">Get discoveres by moms</h3>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Advertising
