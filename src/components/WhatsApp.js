import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export const WhatsApp = () => {
  const [msj, setMsj] = useState('Your message');
  const [link, setLink] = useState(' ')

  const sendWA = (e) => {
    e.preventDefault();
    setLink(`https://wa.me/+50685493046?text=${msj.split(" ").join("%20")}`)
    window.open(link)
    clearFields()
  }

  const clearFields = () => {
    setMsj('Your message');
  }

  return (
      <Col lg={12}>
        <div className="msj-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>¿Is your dream happening right now?<br></br>¡Send me a WhatsApp!</h3>
            </Col>
            <Col md={6} xl={7}>
              <form>
                <div className="new-msj-bx">
                  <input value={msj} type="text" onChange={(e) => setMsj(e.target.value)}/>
                  
                  <button style={window.screen.width < 600 ? {padding: "10px 35px"} 
                  : {padding: "20px 65px"}} 
                  onClick={sendWA} type="submit">Send</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
