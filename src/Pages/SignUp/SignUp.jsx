/* eslint-disable react/prop-types */
import './SignUp.css'
import { assets } from '../../assets/assets'
import { Row , Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const SignUp = ({ setVerifyShow , setShow}) => {
return (
        <div className="sing-up-overlay">
    <div className="sing-up-content">
        <h1 >انشاء حساب</h1>

    <Row className="sign-up-fields">

        <Col  xs={12} md={6} className="sign-up-left-side">
            <div className="upload-images">
                <img src={assets.upload_first_img} alt="" />
                <img src={assets.upload_second_img} alt="" />
            </div>
            <Link to='/'>
              <button  className='sign-up-btn' onClick={()=>{setVerifyShow(true)}} >انشاء الحساب</button>
            </Link>
        <div className="sign-up-options">
            <div className="create-account">
              <Link to='/'>
                <span onClick={()=>{setShow(false)}} className='create-account-btn'>تسجيل الدخول</span>
              </Link>
                <p>ليس لديك حساب ؟</p>
            </div>
        </div>
        </Col> 

        <Col  xs={12} md={6} className="sign-up-right-inputs">

        <Row>
            <Col xs={12} md={12}>
            <p>الايميل أو رقم الهاتف</p>
          <input type="text" required />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
            <p>اسم المستهخدم</p>
        <input type="text" required />
          </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
            <p>رقم الهاتف</p>
        <input type="text" required />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
            <p>كلمة المرور</p>
          <input type="text" required />  
          </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
            <p>تأكيد كلمة المرور</p>
          <input type="text" required />  
          </Col>
          </Row>
        </Col>
        
    </Row>
    <div className="sign-up-line">
        <p>أو</p>
    </div>
        <div className="social-sign-up-buttons">
            <img src={assets.face_icon} alt="" />
            <img src={assets.apple_icon} alt="" />
            <img src={assets.apple_icon} alt="" />
        </div>
    </div>
    </div>
)}

export default SignUp
