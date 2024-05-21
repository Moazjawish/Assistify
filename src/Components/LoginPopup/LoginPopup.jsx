/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './LoginPopup.css'
import { Link } from 'react-router-dom';
import { Modal , Col  , Container , Row } from 'react-bootstrap'
import { FaFacebook  , FaApple} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const LoginPopup = ({ show ,setAccountbtn  , setShow }) => {

  const signUpBtn = ()=>{
    setAccountbtn("تسجيل الخروج")
    setShow(false)
  }

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
            <button onClick={signUpBtn} type="submit" className='form-btn  submit-btn'>تسجيل الدخول</button>
            </Col>
          </div>

            <Row className="login-options">
            <Col xs={4} md={4} className="password">
            <p>نسيت كلمة المرور</p>
            </Col>
            <Col xs={6} md={6} className="create-account">
              <p>ليس لديك حساب؟
              <Link to='/sign-up'>
              <span onClick={()=>{setShow(false)}} className='create-account-btn '>إنشاء حساب</span>  
              </Link>
                </p>
            </Col>
            </Row>
            <Row>
              <Col>
              <div className="line">
                <p className='or-line'>أو</p>
              </div>
              </Col>
            </Row>
            <Row className='social-login-buttons'>
              <Col xs={12} md={3}>
              <button className="apple-social-btn"> <FaApple/>  </button>
                </Col>
              <Col xs={12} md={3}>
              <button className="google-social-btn "> <FcGoogle/> </button>
                </Col>
                <Col xs={12} md={3}>
              <button className="facaebook-social-btn"> <FaFacebook/>  </button>
                </Col>
            </Row>
        </Container>
      </Modal.Body>
      </Modal>
      </> 
      
      
    )
}

export default LoginPopup
