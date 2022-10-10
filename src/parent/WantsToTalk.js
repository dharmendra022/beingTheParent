import React from 'react'
import { Button, NavDropdown, Navbar, Nav, Container, Card } from 'react-bootstrap';
import Talk from "../media/WantsToTalk.png"

const WantsToTalk = () => {
    return (
        <Card className="border-0" style={{ width: "80%",backgroundColor:"#f26358",height:"300px", marginLeft:"160px",borderRadius:"33px" }}>
            <Card.Body className='ml-230px'>
                <div style={{ marginLeft: "80px" }}>
                    <h3 style={{color:"white",fontWeight:"bold",fontSize:"40px",marginTop:"60px",}}>Wants to talk to parents ? </h3>
                    <Button style={{color:"#f26358",fontWeight:"bold", backgroundColor:"white",padding:"13px",borderRadius:"12px"}}>Advertise with us</Button>
                    
                </div>
                <div style={{
                    width: "27rem", float: "right", marginTop:"-109px",
                    marginRight: "80px"
                }} colspan="6">
                    <img className="card-img-top" src={Talk} alt="Card image cap" />
                </div>
            </Card.Body>
        </Card>
    )
}

export default WantsToTalk
