/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './LogoutPopup.css'
import { Modal , Container , Col } from 'react-bootstrap'
const LogoutPopup = ({ setShow  , show, setAccountbtn  }) => {
    const signUpBtn = ()=>{
        setAccountbtn("تسجيل الخروج")
        setShow(false)
    }
    
    const closeSignUp = ()=>{
        setAccountbtn("سجل الدخول")
        setShow(false)
    }

    return (
    <div>
          <Modal 
      show={show} onHide={()=>{setShow(false)}}
      className='log-out-modal' >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
            <h1>هل انت متأكد من تسجيل الخروج</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
            <div className="form-fields">
            <Col xs={12} md={12}>
            <button onClick={closeSignUp} className='login-popup-btn'>تأكيد</button>
            </Col>
            <Col xs={12} md={12}>
            <button onClick={signUpBtn} className='logout-verify-btn'>تراجع</button>
            </Col>
          </div>
        </Container>
      </Modal.Body>
      </Modal>
    </div>
  )
}

export default LogoutPopup
