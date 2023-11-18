import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';

const GridCard = (props) => {
  return (
    <Container  fluid>
    <Row style={{paddingLeft: '2%', paddingRight: '2%', paddingBottom: '2%', paddingTop: '3%'}}>
        <Col >
          <Card style={{border:"none",height:"15rem"}}>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body style={{border:"none"}}>
                <Card.Title className='fs-1  border-bottom border-3' style={{fontSize:"20px", color:"#29648A"}}>
                  {props.title}
                </Card.Title>
              <Card.Text className='fs-5'>
                {props.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Image alt="Logo of Website Builder" fluid style={{height:"15rem",width:"40rem", margin:"auto"}} src={require("./component_image/logo.jpg")} />
        </Col>
    </Row>
    </Container>
  );
}

export default GridCard;