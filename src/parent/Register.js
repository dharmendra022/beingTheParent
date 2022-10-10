import React from 'react'
import { Button, NavDropdown, Navbar, Nav, Container, Card } from 'react-bootstrap';
import img from "../media/pic.png"
const Register = () => {
    return (
        <Card style={{marginTop:"50px"}} className="border-0">
            <Card.Body className='ml-230px'>
                <div style={{marginLeft:"200px"}}>
                <Card.Title>Parents do play favorites</Card.Title>
                <Card.Title>with Brands</Card.Title>
                <p>
                    A new mom is born every 8 seconds. She needs <br />
                    your brand now more then ever
                </p>
                <div className="mb-2">
                    <Button type="button" variant="outline-danger" >Register</Button><span>{' '}</span>
                    <Button type="button" variant="danger" >Login</Button>
                </div>
                </div>
                <div style={{width: "18rem",float:"right",marginBottom:"70px",marginTop:"-169px",
marginRight: "96px"}} colspan="6">
                <img className="card-img-top" src={img} alt="Card image cap" />
            </div>
            </Card.Body>
        </Card>
    )
}

export default Register
