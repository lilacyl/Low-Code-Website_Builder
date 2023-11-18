import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

const Exhibition = (props) => {
    return (
      <Row  style={{paddingLeft: '2%', paddingRight: '2%', paddingBottom: '2%'}}>
          <Col>
            <Image alt="An sample UIUC school website built by our website" style={{height:"25rem",width:"45rem", margin:"1rem"}} src={require("./component_image/mainscreen_sample2.png")} />
          </Col>

          <Col style={{height:"25rem", width:"40rem", margin:"auto"}}>
  
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body >
                <Card.Title className='fs-1 border-bottom border-3' style={{textAlign:"right",color:"#29648A"}}>{props.title}</Card.Title>
                <Card.Text className='fs-5'>
                Here is one example of the website built by our user for there school's website. This user has no coding background at all but she built this website with 5 minutes.
                <p></p>It is based on one of our templates.

              </Card.Text>
  
              </Card.Body>
            </Card>
          </Col>
          
    </Row>
    
    );
}

export default Exhibition;