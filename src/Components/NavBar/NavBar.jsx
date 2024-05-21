/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './NavBar.css'
import {Container , Button ,Nav , Navbar} from 'react-bootstrap';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
const NavBar = ({ accoutnbtn , setShow}) => {
  return (
    <>
    <Navbar expand="lg" className=" navbar"  >
      <Container className='navbar-container'>
        <div className="navbar-logo">
        <Navbar.Brand  >
          <Link to='/'>
          <img src={assets.logo} alt="" />
          </Link>
        </Navbar.Brand>
        </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
        <div className="navbar-item">
          <Nav className="mr-auto">
            <Nav.Link >العقارات</Nav.Link>
            <Nav.Link >حول</Nav.Link>
            <Nav.Link >برامج الجنسية لدى اسيستفاي</Nav.Link>
            <Nav.Link >البيع</Nav.Link>
            <Nav.Link >المزيد</Nav.Link>
          </Nav>
          </div>
          <div className="buttons">
          <Button onClick={()=>{setShow(true)}} className='login-btn'>{accoutnbtn}</Button>
          <Button className='start-btn'>ابدأ</Button>
          </div>
        </Navbar.Collapse>
          
      
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
