import Popup from "./Popup";
import React from 'react';



class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showPopup:false
        }
    }

    togglePopup = (e) => {
        //console.log("element clicked");
        this.setState((prevState)=>{
            return {
                showPopup:!prevState.showPopup
            }
        })
      };

    onSend = (e)=>{
        alert("Message Sent");
    }

    render() {
       return (<div  className="row">
            <nav className="flex-column">
            <button className="nav-link active" onClick={this.togglePopup}>Create</button> 
            {this.state.showPopup?<Popup showPopup={this.state.showPopup} togglePopup={this.togglePopup} onSend={this.onSend}/>:null}

            <a className="nav-link">Inbox</a>
            <a className="nav-link">Trash</a>
            <a className="nav-link">Spam</a>
            </nav>
        </div>)
    }
}

export default Sidebar
