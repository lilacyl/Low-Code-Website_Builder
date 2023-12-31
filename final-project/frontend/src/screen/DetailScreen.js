import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert} from 'react-bootstrap'
import BasicTemplate1 from '../component/templates/BasicTemplate1';
import BasicTemplate2 from '../component/templates/BasicTemplate2';
import axios from 'axios'
import './SaveScreen.css';


class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      template: BasicTemplate2,
      templateName: "BasicTemplate2",
      // current website name
      name:"w",
      userId:"aa",
      templateState:{},
      websiteId:"63955d7dc4056b5825ff62ed",
      loaded: false
    };

  }
  componentDidMount() {
    const userLogin = JSON.parse(localStorage.getItem('userInfo'));
    const config = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userLogin.token}`
      }
    }
    axios.get(`/api/template/${window.location.href.slice(29)}`, config)
      .then((response)=>{
        if (response.data) {
          console.log(response.data)
          this.setState({
            templateState: response.data.templateState,
            templateName: response.data.template,
            userId:response.data.userId,
            loaded: true
        })
        }
      }
    )
  }

 

  render() {
    let MyComponent = BasicTemplate2;
    if (this.state.templateName == "BasicTemplate1") {
      MyComponent = BasicTemplate1;
    }
    // TODO: ADD here if more module added

    if (!this.state.loaded) {
      return <Alert variant="secondary">
      Loading
    </Alert> ;

    } else {
      console.log(this.state.templateState)
    return(
      <div style={{backgroundColor:this.state.templateState.backgroundColor}}>
        <div style={{height:"10vh", backgroundColor:this.state.templateState.backgroundColor}}></div>
       <MyComponent templateState={this.state.templateState}
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
        <Link to={`/template/${this.state.userId}`}><Button style={{marginLeft: '30%'}}>Back to Your templates</Button></Link>
        <Button style={{marginLeft: '5%'}} onClick={() => {window.confirm(`Share the link to your friend now: http://localhost:3000/shared/${window.location.href.slice(29)}`)}}>Share Your Website</Button>
        <div style={{backgroundColor:this.state.templateState.backgroundColor}}></div>
      </div>)
    }
  }
}

export default DetailScreen