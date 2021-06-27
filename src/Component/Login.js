import React from 'react'
import GoogleLogin from "react-google-login";
import axios from 'axios';

const Login = () => {

    const responseSuccessGoogle =(response)=>{
        console.log(response);
        axios({
            method:"POSt",
            url:"http://localhost:3000/api/googlelogin",
            data:{tokenId:response.tokenId}
        }).then(response=>{
            console.log(response)
        })
    }

    const responseErrorGoogle =(response)=>{
        
    }

    return (
        <div>
            <GoogleLogin
                clientId="99166491960-gf19sgna4kc892ec6vl6htdf9dsh7o31.apps.googleusercontent.com"
                buttonText="Login With Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login
