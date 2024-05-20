/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { assets } from '../../assets/assets'
import './LoginPopup.css'
import { Modal , Button ,  Form , Col  , Container , Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const LoginPopup = ({ show ,setAccountbtn  , setShow }) => {

  const signUpBtn = ()=>{
    setAccountbtn("تسجيل الخروج")
    setShow(false)
  }

//   <Form.Group as={Col} md="4" controlId="validationCustom01">
//   <Form.Label>First name</Form.Label>
//   <Form.Control
//     required
//     type="text"
//     placeholder="First name"
//     defaultValue="Mark"
//   />
//   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
// </Form.Group>


// return (

    //      <div className="login-overlay">
    //  <div className="login_background">
    //  <div className='login-popup'>
    //      <button onClick={()=>{setShowlogin(false)}}>x</button>
    //  <h1>تسجيل الدخول</h1>
    //  <div className="login-popup-fields">

    //      <div className="form-fields">
    //      <p>الايميل أو رقم الهاتف</p>
    //      <input type="text" required />
    //      <p>كلمة المرور</p>
    //      <input type="text" required />
    //      </div>

    //      <button className='login-popup-btn'>تسجيل الدخول</button>
    //      <div className="login-options">
    //          <div className="create-account">
    //              <p>ليس لديك حساب ؟</p>
    //              <p className='create-account-btn'>إنشاء حساب</p>
    //          </div>
    //          <div className="password">
    //          <p>نسيت كلمة المرور</p>
    //          </div>
    //      </div>
    //      <p>أو</p>
    //      <div className="social-login-buttons">
    //          <img src={assets.face_icon} alt="" />
    //          <img src={assets.apple_icon} alt="" />
    //          <img src={assets.google_icon} alt="" />
    //      </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    // <>
    return(
 <> <Modal
      show={show} 
      onHide={()=>{setShow(false)}}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
            <h1>تسجيل الدخول</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
            <div className="form-fields">
          <Row>
            <Col xs={12} md={12}>
            <p>الايميل أو رقم الهاتف</p>
          <input type="text" required />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
            <p>كلمة المرور</p>
          <input type="text" required />  
          </Col>
          </Row>
            <Col xs={12} md={12}>
            <button onClick={signUpBtn} className='login-popup-btn'>تسجيل الدخول</button>
            </Col>
          </div>

            <Row className="login-options">
            <Col xs={4} md={4} className="password">
            <p>نسيت كلمة المرور</p>
            </Col>
            <Col xs={6} md={6} className="create-account">
              <p>ليس لديك حساب؟
              <Link to='/sign-up'>
              <span onClick={()=>{setShow(false)}} className='create-account-btn'>إنشاء حساب</span>  
              </Link>
                </p>
            </Col>
            </Row>
            <Row>
              <Col>
              <div className="line">
                <p>أو</p>
              </div>
              </Col>
            </Row>
            <Row className='social-login-buttons'>
              <Col xs={3} md={3}><img src={assets.face_icon} alt="" /></Col>
              <Col xs={3} md={3}><img src={assets.face_icon} alt="" /></Col>
              <Col xs={3} md={3}><img src={assets.apple_icon} alt="" /></Col>
            </Row>
        </Container>
      </Modal.Body>
      </Modal>
      </> 
      
      
    )
}

export default LoginPopup
