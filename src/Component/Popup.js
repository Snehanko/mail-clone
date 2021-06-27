import React from 'react'
import { Button, Modal,Form, Input, TextArea,Icon} from "semantic-ui-react";

class Popup extends React.Component{

    constructor(props){
        super(props);
        this.state={
            emailBody:"",
            recipient:"",
            emailSubject:""
        }
        
    }
    handleEmailAddressChange =(e)=>{
        this.setState({
            recipient : e.target.value
        })

        console.log("Email changed");
    }
    handleSubjectChange =(e)=>{
        this.setState({
            emailSubject : e.target.value
        })
    }
    handleEmailBodyChange =(e)=>{
        this.setState({
            emailBody : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const mailObject = this.state;
        //clearing the text on submit
        this.setState({
            emailBody:"",
            recipient:"",
            emailSubject:""
        })
        //closing the popup
        this.props.togglePopup();
        console.log(mailObject);
      }

    render(){
        return  <Modal
        centered={true}
        open={this.props.showPopup}
        onClose={this.props.togglePopup}
        size = "small">
        <Modal.Header className="modal-header">Send a message  <Icon name='close' onClick={this.props.togglePopup}/></Modal.Header>
        <Modal.Content>
          <Modal.Description>
          <Form onSubmit={this.handleSubmit}>
              <Form.Field inline>
              <label>Email</label>
              <Input  onChange={this.handleEmailAddressChange}/>
              </Form.Field>
              <Form.Field
              id='form-input-control-error-email'
              control={Input}
              label='Subject'
              onChange={this.handleSubjectChange}
              />
              <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Body'
              onChange={this.handleEmailBodyChange}
              />
              <Form.Field
              id='form-button-control-public'
              control={Button}
              content='Send'
              />
          </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>;
    }  
}

export default Popup
