import {LoginForm} from "./LoginForm";
import {LoginFormSuccess} from "./LoginFormSuccess";
import {useState} from 'react'


import './Login.css';

export function Login(){
    const [isLogged, setIsLogged] = useState(window.localStorage.getItem('isLogged'))

    function onSuccess(){
        setIsLogged('true')
    }

    
    return (
        <main className="Login">
            
            <section className="LoginContainer">
                <h2 className="LoginTitle">Stax Food Admin Login</h2>
                {isLogged === 'true' ? <LoginFormSuccess/> : <LoginForm onSuccess={onSuccess}/>}
                
                
            </section>
        
        </main>
    )
}