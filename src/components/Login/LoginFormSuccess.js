import {useState} from 'react';
import './LoginFormSuccess.css'

export function LoginFormSuccess(){
    const [email, setEmail] = useState(window.localStorage.getItem('email'))

    return (
        <div className="LoginFormSuccess">
            <h3 className="LoginSuccessTitle">Session started successfully</h3>
            <h3 className="LoginSuccessTitle">Te damos la bienvenida {email}</h3>
            
        </div>
    )
}