/* eslint-disable react/prop-types */
import './VerifyEmail.css'
import { Modal} from 'react-bootstrap'
const VerifyEmail = ({setVerifyShow , VerifyShow}) => {
return (
    <div>
    <Modal show={VerifyShow} onHide={()=>{setVerifyShow(false)}} className='verify-modal' >
        <Modal.Header  >
        <Modal.Title>
        <h1> <span className='account-user-name'>RED</span> مرحبا بك </h1>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>  <span className='gmail-account'>(red1234@gmail.com)</span>: لقد تم ارسال رمز التأكيد الى </p>
            <div className="squares">
                <span className="square">5</span>
                <span className="square">4</span>
                <span className="square">0</span>
                <span className="square">3</span>
                <span className="square">3</span>
                <span className="square last">_</span>
            </div>
            <button className='submit-verify-btn'>تأكيد</button>
            <p className='resend-msg'>اذا لم يصلك الرمز يمكنك اعادة المحاولة بعد <span className='timer'> 4:20</span><span className='timer-title'>د </span>  </p>
            <button className='resend-verify-btn'>إعادة الإرسال</button>
        </Modal.Body>
    </Modal>
    </div>
)}
export default VerifyEmail
