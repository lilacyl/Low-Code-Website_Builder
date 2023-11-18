
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import { Form, Button, Col, Row, Badge, Modal, Dropdown, Alert} from 'react-bootstrap'
import "./UserTemplateScreen.scss"
import BasicTemplate1 from '../component/templates/BasicTemplate1';
import BasicTemplate2 from '../component/templates/BasicTemplate2';
import Card from 'react-bootstrap/Card';
import * as ReactDOMServer from 'react-dom/server';
import axios from 'axios'
import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import TemplateList from '../component/TemplateList';

class UserTemplateScreen extends React.Component {
    constructor(props) {
      super(props);
      
      this.state={
        templateList:[],
        nameList:[],
        idList:[],
        loaded:false,
        userName: "",
      }
    }

    componentDidMount() {
        const userLogin = JSON.parse(localStorage.getItem('userInfo'));

      const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userLogin.token}`
        }
      }

      axios.get(`/api/template`, config).then((response)=>{
        if (response.data) {
          let templateList = [];
          let nameList = [];
          let idList = [];
            response.data.data.forEach(template => {
                nameList.push(template.name)
                idList.push(template._id)
                let MyComponent = BasicTemplate1;
                if (template.template === "BasicTemplate2"){
                    MyComponent = BasicTemplate2;
                }
                let templatePart =  <MyComponent templateState={template.templateState}
                      isDetailView={true}
                      updateBackgroundColor={(update)=>this.setState(state => ({backgroundColor: update}))}
                      setCurrentSection={()=>({})}
                      updateText={()=>({})}
                      updateColor={()=>({})}
                      updatefont={()=>({})}
                      updatefontSize={()=>({})}
                      updatefontStyle={()=>({})}
                      collectTemplateStates={()=>({})}
                      />
                templateList.push(templatePart);
            });
            this.setState({
                templateList:templateList,
                nameList:nameList,
                idList:idList,
                loaded:true,
                userName: userLogin.name,
            })

        }
      })
    }
    render(){
        if (!this.state.loaded) {
            return <Alert variant="secondary">
            Loading
          </Alert> ;
      
          } 
          else if(this.state.templateList === []){
            return(
                <Container>
                    <h3>You have no project.</h3>
                    <h3>Go to <Link to='/template'>create your project from scratch</Link> !</h3>
                </Container>
            )
          }else {
            return(
            <div className='templatePage' style={{backgroundcolor:"lightgray"}}>
            <Container fluid="md">
                <Row>
                <div style={{margin: '0 0 3% 0'}}>
                        </div>
                <div  id='Text' style={{ fontSize: 30, textAlign: 'center', marginLeft: 30, marginTop:20 }}>
                    <h1> {this.state.userName + "'s Own Websites"}  </h1>
                    </div>
                    <div style={{margin: '0 0 3% 0'}}>
                        </div>
                </Row>
            
                {this.state.templateList?.map((template, index) => (
                    <div>
                        {/* <Badge> */}
                      
                        
                            <Row>
                            
                            </Row>
                        <Row className='justify-content-center divider'>
                         
                         {this.state.nameList[index]}
                     
                     </Row>
                            <Row className='no-gutters'>
                                <Col>

                                <Link to={`/detail/${this.state.idList[index].toString()}`} style={{ textDecoration: 'none' }}>
                                <Card className='preview' border="dark" >
                                        {template}
                                    
                                </Card>  
                            </Link>
                                </Col>
                            </Row>
                            <Row>
                            <div style={{margin: '0 0 5% 0' ,backgroundColor:'lightgray'}}>
                                </div>
                            </Row>
                        {/* </Badge> */}
                    </div>
                ))}
                 </Container>
            </div>
        )
    }
}
}
export default UserTemplateScreen