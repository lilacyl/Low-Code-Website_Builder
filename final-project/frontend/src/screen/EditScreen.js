import React, { useState } from 'react'
import './EditScreen.css';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import { Link, redirect } from 'react-router-dom'
import { Form, Button, Col, Row, Badge, Modal, Dropdown} from 'react-bootstrap'
import FormContainer from '../component/FormContainer';
import ControlledCarousel from '../component/Carousel/Carousel';
import BasicTemplate1 from '../component/templates/BasicTemplate1';
import BasicTemplate2 from '../component/templates/BasicTemplate2';
import BasicTemplate3 from '../component/templates/BasicTemplate3';
import BasicTemplate4 from '../component/templates/BasicTemplate4';
import DetailScreen from './DetailScreen';
import Card from 'react-bootstrap/Card';
import * as ReactDOMServer from 'react-dom/server';
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush, faPalette, faUpload, faFont } from '@fortawesome/free-solid-svg-icons'



class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    const TemplateList = [[BasicTemplate1, BasicTemplate2, BasicTemplate3, BasicTemplate4]];
    const templateInfo = JSON.parse(localStorage.getItem('templateStr'));
    const userLogin = localStorage.getItem("userInfo")
    if (!userLogin || !templateInfo){
      window.location.href = '/template';
    }
    this.state = {
      pageTitle : '12345',
      text : '',
      imageLink: "",
      showImage: false,
      showText: false,
      showColor: false,
      showFont: false,
      save: false,

      color: 'black',
      backgroundColor: 'white',

      fontSize: 1,
      fontStyle: "normal",
      font:"times",

      templateStr :templateInfo.templateStr,
      template: TemplateList[templateInfo.type][templateInfo.id],
      nameTemplate:"",
      userId:"639514eb078f1356e86471fa",
      templateState:{},

      idd:"999",
      idUpdated:false,
      
      userLogin: null
    };
  
  

    this.handleClick = this.handleClick.bind(this);

    this.handleShowHideText = this.handleShowHideText.bind(this);
    this.handleHideText = this.handleHideText.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleClearText = this.handleClearText.bind(this);
    this.handleClearSave = this.handleClearSave.bind(this);
    
    this.handleShowImage = this.handleShowImage.bind(this);
    this.handleCloseImage = this.handleCloseImage.bind(this);
    this.handleCloseSave = this.handleCloseSave.bind(this);
    this.handleUploadSave = this.handleUploadSave.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleImageLink = this.handleImageLink.bind(this);

    this.handleShowHideColor = this.handleShowHideColor.bind(this);

    this.handleShowHideFont = this.handleShowHideFont.bind(this);

    this.handleExport = this.handleExport.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmitSave = this.handleSubmitSave.bind(this);
  }

  
  
  
  handleClick() {
    this.setState(state => ({
      text : 'ssssssseqws'
    }));
  }
  
  handleShowImage() {
    this.setState(state => ({
      showImage : true
    }));
  }
  handleUploadImage = async(e) =>{
    // this.setState(state => ({
    //   showImage : true
    // }));
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      const { data } = await axios.post('/api/upload', formData, config)

      this.setState({imageLink: '../../../../../' + data.split('/')[3]})
      console.log(this.state.imageLink)

    }catch (error){
      console.log(error)
    }

  }

  handleCloseImage() {
    this.setState(state => ({
      showImage : false
    }));
  }
  handleUploadSave= async() =>{
    console.log(this.state.setTemplateUpdated)

    this.setState(state => ({
      save : false
    }));
    const userLogin = JSON.parse(localStorage.getItem('userInfo'));
    const config = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userLogin.token}`
      }
    }
    // TODO: couldn't modify idd at this part
    // console.log({ name:this.state.nameTemplate,template:this.state.template.templateName, templateState:this.state.templateState})
    const {data} = await axios.post('/api/template', { name:this.state.nameTemplate,template:this.state.templateStr, templateState:this.state.templateState}, config)
    console.log(data)
  //   console.log(data.data._id)
  //   console.log(this.state.idd)
  //   const dataId = await data.data._id;
  //   this.setState(state => ({idd:dataId}), () => {
  //     this.props.idReceived()
  // })
    
}

handleSubmitSave(){
  if (Object.keys(this.state.templateState ).length == 0){
    console.log(this.state.templateState);
    alert("You haven't change anything!");
  } else {
    this.setState({save:true});
  }
}
  // console.log(this.state.save)
  //   console.log(this.state.idd)
  // }

  // idReceived () {
  //   this.setState({idUpdated: true})
  // }
  handleCloseSave(){
    this.setState(state => ({
      save : false
    }));
  }
  handleClearSave(){
    this.setState(state => ({
      name : ""
    }));
  }


  handleClearText(event) {
    this.setState(state => ({
      text: ''
    }));
  }
  handleHideText(event) {
    this.setState(state => ({
      showText : false
    }));
  }
  handleShowHideText(event) {
    this.setState(state => ({
      showText : !this.state.showText
    }));
  }
  handleChangeText(event) {
    this.setState(state => ({
      text: event.target.value
    }));
  }

  handleImageLink(event) {
    console.log("here")
    this.setState(state => ({
      imageLink: event.target.value
    }));
  }

  handleChangeName(event) {
    this.setState(state => ({
      nameTemplate: event.target.value
    }));
  }

  handleShowHideColor(event) {
    this.setState(state => ({
      showColor : !this.state.showColor
    }));
  }

  handleShowHideFont(event) {
    this.setState(state => ({
      showFont : !this.state.showFont
    }));
  }

  handleExport() {
    // console.log(ReactDOMServer.renderToString(templatePart))
    /* {TODO: Need backend first */
  }

  componentDidMount = () => {
    this.setState({userLogin: JSON.parse(localStorage.getItem('userInfo'))})
  }

  render() {
    console.log(this.state.templateStr);
    // const MyComponent = ( props ) => <div>{this.state.template}</div>
    // console.log(this.state.templateState)
    var templatePart = 
      <this.state.template
        isDetailView={false}
        setTemplateUpdated={(update)=>this.setState(state => ({templateUpdated: update}))}
        templateState={null}

        updateText={(update)=>this.setState(state => ({text: update}))}
        text={this.state.text}

        updateColor={(update)=>this.setState(state => ({color: update}))}
        color ={this.state.color}

        updateBackgroundColor={(update)=>this.setState(state => ({backgroundColor: update}))}
        backgroundColor ={this.state.backgroundColor}

        updatefont={(update)=>this.setState(state => ({font: update}))}
        font ={this.state.font}
        
        updatefontSize={(update)=>this.setState(state => ({fontSize: update}))}
        fontSize ={this.state.fontSize}

        updatefontStyle={(update)=>this.setState(state => ({fontStyle: update}))}
        fontStyle ={this.state.fontStyle}

        collectTemplateStates={(update)=>this.setState(state => ({templateState: update}))}

        imageLink={this.state.imageLink}
        />
    if (this.state.userLogin === null) {
      return (<>
        <Container>
          <h3>You have no authority to access this page.</h3>
          <h3>Please <Link to='/login'>login</Link> to unlock this function!</h3>
        </Container>
      </>)
    }else{
    return (
      <div style={{backgroundColor:"lightgrey"}}>
      {/* Save modal */}
      <Modal show={this.state.save} onHide={this.handleCloseSave}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your template's name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="txt"
                placeholder={this.state.nameTemplate}
                value={this.state.nameTemplate}
                onChange={this.handleChangeName}
              />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.handleClearSave}>
            Clear
          </Button>
  
          <Link to={`/save`}>
            <Button variant="success" onClick={this.handleUploadSave}>
              Save
            </Button>
          </Link>
          
          
        </Modal.Footer>
      </Modal>  
      {/* save */}


      <Modal show={this.state.showImage} onHide={this.handleCloseImage}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Your Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* TODO: Need to post this part in server, do later*/}
          <Form.Control
            label='Choose File'
            type='file'
            onChange={this.handleUploadImage}
            />
            <div style={{margin: '0 0 3% 0'}}>
            </div>
          <Form.Control
            type='text'
            placeholder='Enter an URL for your picture'
            value={this.state.imageLink}
            onChange={this.handleImageLink}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' onClick={this.handleCloseImage}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>  

      <Container fluid="md">
        <Row className='space'>
        </Row>
        <Row className='space'>
        </Row>

        <Row>
          {/* Template */}
          <Col>
            <Card className='preview' border="dark">
              {templatePart}
            </Card>  
          </Col>

          {/* Buttons for editing */}
          <Col  style={{margin:"auto", height: "20rem"}}>
            <div>
          
            <Row className='edit-button'>
              <Button variant='secondary' onClick={this.handleShowImage}> <FontAwesomeIcon icon={faUpload}/> Upload Image</Button>  
            </Row>

            {/* Text edit */}
            <Row className='edit-button'>
              <Button variant='secondary' onClick={this.handleShowHideText}><FontAwesomeIcon icon={faBrush}/>  Edit Text Block</Button>  
              { this.state.showText

              ? <Card className='input-text'>
              <Form onSubmit={this.handleSubmit}>
                <Form.Control
                  type='txt'
                  placeholder={'Input Text Here'}
                  value={this.state.text}
                  onChange={this.handleChangeText}
                  />
              </Form>
              <Modal.Footer>
                <Button className = "mx-3 my-3" variant='danger' onClick={this.handleClearText}>
                  Clear
                </Button>
                
                <Button variant='success' onClick={this.handleShowHideText}>
                  Return
                </Button>
              </Modal.Footer>
              </Card>
              
              : null
            }
            </Row>

            {/* Color selection */}
            <Row className='edit-button'>
              <Button variant='secondary' onClick={this.handleShowHideColor}> <FontAwesomeIcon icon={faPalette}/> Edit Color</Button>  
            </Row>

    
            {
              this.state.showColor
              ? <Row>
                <Col>
                <Dropdown className="dropdown-box">
                    <Dropdown.Toggle style={{color: (this.state.backgroundColor ==="white" || this.state.backgroundColor ==="#fff5b3" || this.state.backgroundColor==="#d9ffb3")?"black":"white",  background: this.state.backgroundColor}} >
                      Background Color
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"black"})} active={this.state.backgroundColor === "black"} style={{"background-color":"black", color:"white"}}>Black</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"white"})} active={this.state.backgroundColor === "white"} style={{"background-color":"white", color:"black"}}>White</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"#f78f8f"})} active={this.state.backgroundColor === "#f78f8f"} style={{"background-color":"#f78f8f"}}>Red</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"#f7cb92"})} active={this.state.backgroundColor === "#f7cb92"} style={{"background-color":"#f7cb92"}}>Orange</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"lightpink"})} active={this.state.backgroundColor === "lightpink"}  style={{"background-color":"lightpink"}}>Pink</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"lightblue"})} active={this.state.backgroundColor === "lightblue"} style={{"background-color":"lightblue"}}>Blue</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"#fff5b3"})} active={this.state.backgroundColor === "#fff5b3"} style={{"background-color":"#fff5b3"}}>Yellow</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"#d9ffb3"})} active={this.state.backgroundColor === "#d9ffb3"} style={{"background-color":"#d9ffb3"}}>Green</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({backgroundColor:"grey"})} active={this.state.backgroundColor === "grey"} style={{"background-color":"grey"}}>Grey</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>

                  <Col>
                  <Dropdown className="dropdown-box">
                    <Dropdown.Toggle style={{color: this.state.color ==="white" ?"black":"white", background: this.state.color}} >
                    Text Color
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>this.setState({color:"black"})} active={this.state.color === "black"} style={{color:"black"}}>Black</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"blue"})} active={this.state.color === "darkblue"} style={{color:"blue"}}>Blue</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"white"})} active={this.state.color === "white"} style={{color:"black"}}>White</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"red"})} active={this.state.color === "red"} style={{color:"red"}}>Red</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"orange"})} active={this.state.color === "orange"} style={{color:"orange"}}>Orange</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"pink"})} active={this.state.color === "pink"} style={{color:"pink"}}>Pink</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"green"})} active={this.state.color === "green"} style={{color:"green"}}>Green</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({color:"grey"})} active={this.state.color === "grey"} style={{color:"grey"}}>Grey</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>
                  </Row>
                  :null
                }

            {/* Font selection */}
            <Row className='edit-button'>
              <Button variant='secondary' onClick={this.handleShowHideFont}><FontAwesomeIcon icon={faFont}/> Edit Font</Button>  
            </Row>
    
            {
              this.state.showFont
              ? <Row>

                <Col>
                  <Dropdown className="dropdown-box">
                    <Dropdown.Toggle>
                      Font
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>this.setState({font:"arial"})} active={this.state.font === "arial"} style={{"font-family":"arial"}}>Arial</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({font:"georgia"})} active={this.state.font === "georgia"} style={{"font-family":"georgia"}}>Georgia</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({font:"helvetica"})} active={this.state.font === "helvetica"} style={{"font-family":"helvetica"}}>Helvetica</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({font:"impact"})} active={this.state.font === "impact"} style={{"font-family":"impact"}}>Impact</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({font:"menlo"})} active={this.state.font === "menlo"} style={{"font-family":"menlo"}}>Menlo</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({font:"rockwell"})} active={this.state.font === "rockwell"} style={{"font-family":"rockwell"}}>Rockwell</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({font:"times"})} active={this.state.font === "times"} style={{"font-family":"times"}}>Times</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>

                <Col>
                <Dropdown className="dropdown-box">
                  
                    <Dropdown.Toggle>
                      Font Size
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:1})} active={this.state.fontSize === 1}>1</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:4})} active={this.state.fontSize === 4}>4</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:8})} active={this.state.fontSize === 8}>8</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:12})} active={this.state.fontSize === 12}>12</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:20})} active={this.state.fontSize === 20}>20</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:30})} active={this.state.fontSize === 30}>30</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontSize:40})} active={this.state.fontSize === 40}>40</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>

                  <Col>
                  <Dropdown className="dropdown-box">
                    <Dropdown.Toggle>
                      Font Style
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>this.setState({fontStyle:"bold"})} active={this.state.fontStyle === "bold"} style={{"fontWeight":"bold", "font-family":this.state.font}}>Bold</Dropdown.Item>
                      <Dropdown.Item onClick={()=>this.setState({fontStyle:"normal"})} active={this.state.fontStyle === "normal"} style={{"fontWeight":"normal", "font-family":this.state.font}}>Normal</Dropdown.Item>
                      {/* <Dropdown.Item onClick={()=>this.setState({fontStyle:"italic"})} active={this.state.fontStyle === "italic"} style={{"font-style":"italic"}}>Italic</Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>
                  </Col>
                  </Row>
                  :null
                }

            <Row className='space'>
            </Row>

            {/* Return buttons */}
            <Row className='space'>
        </Row>
        <Row className='edit-button'>

          <Button variant='primary'  onClick={this.handleSubmitSave}>Save</Button>  
        </Row>

      
            {/* <Row>
              <Col className ="link-button">
                <Link to='/'><Button variant='primary'>Return Home</Button></Link>
              </Col>
              <Col className ="link-button">
              <Link to='/Template'><Button variant='primary'>Return Template</Button></Link>
              </Col>
            </Row> */}
          </div>
          </Col>
        </Row>

        <Row className='space'>
        </Row>
        <Row className='space'>
        </Row>

        {/* <Row  className='justify-content-md-center'>
          <Button variant='primary' style={{ width: '60rem'}} onClick={()=>{}}>Export Model as HTML/CSS</Button>  
        </Row> */}


        
          
      </Container>
      <Row className='space'>
      </Row>
      </div>
    )
      }
  }
}

export default EditScreen