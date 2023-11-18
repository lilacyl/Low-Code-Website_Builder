import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
// const profile_img = require(./component_image/mainscreen_profile.png)


const GroupCard = (props) => {
    return (
      <Row xs={1} md={1} className="g-1" style={{paddingLeft: '2%', paddingRight: '2%', paddingBottom: '2%'}}>
          <Col >
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body >
                <Card.Title className='fs-2 border-bottom ' style={{color:"#29648A"}}>{props.title}</Card.Title>
                {/* <CardGroup className='d-flex flex-wrap'> */}

                <Row xs={3} md={5} className="g-2">
                    <Col>
                    <Card>
                        <Card.Img className='w-25 rounded mx-auto d-block mt-1' variant="top" alt= "Photo of Zhihui Wan" src={require("./component_image/wan.jpeg")}/>
                        <Card.Body>
                        <Card.Title className='text-center'>Zhihui Wan</Card.Title>
                        <Card.Text className='text-center'>
                            Backend developer. 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>


                    <Col>
                    <Card>
                        <Card.Img className='w-25 rounded mx-auto d-block mt-1' variant="top" alt= "Photo of Lilac Lai" src={require("./component_image/lai.jpeg")} />
                        <Card.Body>
                        <Card.Title className='text-center'>Lilac Lai</Card.Title>
                        <Card.Text className='text-center'>
                            Frontend developer. 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card>
                        <Card.Img className='w-25 rounded mx-auto d-block mt-1' variant="top" alt= "Photo of Carol Song" src={require("./component_image/song.jpeg")} />
                        <Card.Body>
                        <Card.Title className='text-center'>Carol Song</Card.Title>
                        <Card.Text className='text-center'>
                            Frontend developer. 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>


                    <Col>
                    <Card>
                        <Card.Img className='w-25 rounded mx-auto d-block mt-1' variant="top" alt= "Photo of Xinyi He" src={require("./component_image/he.JPG")}  />
                        <Card.Body>
                        <Card.Title className='text-center'>Xinyi He</Card.Title>
                        <Card.Text className='text-center'>
                            Frontend developer. 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>


                    <Col>
                    <Card>
                        <Card.Img className='w-25 rounded mx-auto d-block mt-1' variant="top" alt= "Photo of Yang Zhou" src={require("./component_image/zhou.jpeg")} />
                        <Card.Body>
                        <Card.Title className='text-center'>Yang Zhou</Card.Title>
                        <Card.Text className='text-center'>
                            Backend developer. 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>


                {/* </CardGroup> */}
  
  
  
              </Card.Body>
            </Card>
          </Col>
      </Row>
    );
}

export default GroupCard;