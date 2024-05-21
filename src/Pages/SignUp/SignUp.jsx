/* eslint-disable react/prop-types */
import './SignUp.css'
import { assets } from '../../assets/assets'
import { Row , Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebook  , FaApple} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
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
              <button className='sign-up-btn' onClick={()=>{setVerifyShow(true)}} >انشاء الحساب</button>
        <div className="sign-up-options">
            <div className="create-account">
              <Link to='/'>
                <span onClick={()=>{setShow(true)}} className='create-account-btn'>تسجيل الدخول</span>
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
        <p className='or-line'>أو</p>
    </div>
                    <Row className='social-sign-up-buttons'>
              <Col xs={3} md={3}>
              <button className="apple-social-btn"> <FaApple/>  </button>
                </Col>
              <Col xs={3} md={3}>
              <button className="google-social-btn "> <FcGoogle/> </button>
                </Col>
                <Col xs={3} md={3}>
              <button className="facaebook-social-btn"> <FaFacebook/>  </button>
                </Col>
            </Row>
    </div>
    </div>
)}

export default SignUp
