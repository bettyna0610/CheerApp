import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const Navigation = () => {
    return (
        <Navbar expand="lg" variant="warning"  bg="warning"  fixed="top">
        <Navbar.Brand href="#home" style={{ color:"black"}}>CheerApp!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ color:"black"}} >
          <Link to="/" style={{ color:"black",marginRight:5}}>Home</Link>
          <Link to="/jokes" style={{ color:"black",marginRight:5}}>Joke </Link>
          <Link to="/quotes" style={{ color:"black",marginRight:5}}>Quotes</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}