import React from 'react'

const Popup = ({onSend,togglePopup}) => {

    let body='';
    let to=[];

    const handleToChange=(e)=>{
        console.log(e.target.value);
    }

    const handleBodyChange=(e)=>{
        console.log(e.target.value);
    }

    return (
        <div className='popup'>
            <div className='popup_inner'>
            <h1>PopUp is clicked</h1>
            <form>
                <div class="mb-3">
                    <label for="inputEmail">Email address</label>
                    <input type="email" class="form-to" id="inputEmail1" onChange={handleToChange} />
                </div>
                <div class="mb-3">
                    <label for="inputBody">Body</label><br />
                    <textarea id="inputText" class="form-text" rows="4" cols="50" onChange={handleBodyChange}></textarea>
                </div>
                <button onClick={onSend}>Send</button>
                <button onClick={togglePopup}>Close</button> 
            </form>   
            
            </div>
         </div>
    )
}

export default Popup
