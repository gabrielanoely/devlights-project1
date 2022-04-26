import {useState} from 'react';
import './LoginForm.css';

export function LoginForm({onSuccess}:{onSuccess: any}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [student, setStudent] = useState('')
    const [teacher, setTeacher] = useState('')

    function handleClick(){
        if (email === 'test@test.com'){
            if (password === 'test'){
                setError('')
                window.localStorage.setItem('isLogged', true)
                window.localStorage.setItem('email', email)
                onSuccess()

                return;
            }
        }
        window.localStorage.setItem('isLogged', false)
        setError('incorrect data')
    }

    function onEmailChange(event: any){
        setEmail(event.target.value)
    }

    function onPwdChange(event: any){
        setPassword(event.target.value)
    }


    return (
        <div className="LoginForm">
                      
            <div className="LoginFormContainer">
                <h4 className="LoginFormDescription">Please fill in your unique admin login details below</h4>


                {error.length > 0 ? (
                    <div className="LoginFormError">
                        {error}
                    </div>
                )  : null  }

                <label className="LoginFormInputLabel">Type</label>
                <select className="LoginFormSelect">
                    <option value={student}>Student</option>
                    <option value={teacher}>Teacher</option>
                </select>
                <label htmlFor="email" className="LoginFormInputLabel">Email address</label>
                <input name="email" id="email" type="text" className="LoginFormInput" value={email} onChange={onEmailChange}/>
                <label htmlFor="password" className="LoginFormInputLabel">Password</label>
                <input name="password" id="password" value={password} type="password" className="LoginFormInput" onChange={onPwdChange}/>
                <p className="forgot">Forgot password?</p>
                <button className="LoginFormButton" onClick={handleClick}>Sign in</button>
            </div>

        </div>
    )
}