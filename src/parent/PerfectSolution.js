import React from 'react'
import { Button, NavDropdown, Navbar, Nav, Container, Card } from 'react-bootstrap';
import img from "../media/piclady.png"
import Logo from "../media/CompanyLogo.png"

const PerfectSolution = () => {
    return (
        <div >
            <Card className="text-center border-0">
                <div>
                <img src={Logo} alt="" style={{ borderRadius: "50%", width: "60px", height: "60px", marginRight:"140px" }} />
                <p style={{marginTop:"-55px"}}>being the<span style={{ marginTop: "-30px", marginRight: "17px" }}> <br/>parent</span></p>
                </div>
                
                <Card.Body>
                    <Card.Title>Your perfect<span style={{
                        textDecoration: "underline",
                        textDecorationColor: "red"
                    }}>  solutions !</span> </Card.Title>
                    <div style={{ marginBottom: "0rem" }}>
                        <p style={{
                            marginTop: "0",
                            marginBottom: "0rem"
                        }}> Our innovative blend of marketing and advertising solutions connect</p>
                        <p style={{
                            marginTop: "0",
                            marginBottom: "0rem"
                        }}>brands with parents in powerful ways. at key decision-making moments</p>
                        <p>throughout the journey called life</p>
                    </div>
                    <div style={{width: "18rem",marginLeft:"39%"}}>
                        <img className="card-img-top" src={img} alt="Card image cap" />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PerfectSolution
