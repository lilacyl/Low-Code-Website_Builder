import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert, Container} from 'react-bootstrap'
import BasicTemplate1 from '../component/templates/BasicTemplate1';
import BasicTemplate2 from '../component/templates/BasicTemplate2';
import axios from 'axios'


class SharedScreen extends React.Component {
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
    const config = {
      headers: {
          'Content-Type': 'application/json',
      }
    }
    axios.get(`/api/template/${window.location.href.slice(29)}/visit`, config)
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
    if (this.state.templateName === "BasicTemplate1") {
      MyComponent = BasicTemplate1;
    }
    // TODO: ADD here if more module added

    if (!this.state.loaded) {
      return <Alert variant="secondary">
      Loading
    </Alert> ;

    } else {
      console.log(this.state.templateState.backgroundColor)
    return(
      <div style={{backgroundColor: this.state.templateState.backgroundColor}}>
        <div style={{margin: '0 0 8% 0', backgroundColor: this.state.templateState.backgroundColor}}></div>
        
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
      </div>)
    }
  }
}

export default SharedScreen