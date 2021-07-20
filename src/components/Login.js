import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = (props) => {

    const [ErrP, setErrP] = useState(1);

    function createMarkup() {
        if (ErrP !== 0) {

        } else {
            return { __html: "<p style='color:red'>Utilisateur ou mot de passe incorrect</p>" }
        }


    }
    const doSubmit = () => {
        let mail = document.getElementById('mail');
        let pas = document.getElementById('password');

        axios.post(`http://localhost:3001/login`, { email: mail.value, password: pas.value })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    sessionStorage.setItem('jwt', res.data);

                    props.history.push('/Home');
                } else {
                    setErrP(ErrP - 1);
                }

            })
    }


    return (

        <section id="body1">

            <div id="login-body">
                <h1 id='log'>S'identifier</h1>

                <form >
                    <input type="email" id="mail" placeholder="Votre adresse email ou username" required />
                    <input type="password" id="password" placeholder="Mot de passe" required />
                    <button type='button' id='button1' value='LOGIN' onClick={doSubmit} >S'identifier</button>
                    <div dangerouslySetInnerHTML={createMarkup(ErrP)} />
                    <label id="option"><input type="checkbox" name="auto" checked readOnly />Se souvenir de moi</label>
                </form>


                <p className="grey">Première visite ? <Link to="/Register">Inscrivez-vous.</Link></p>
            </div>

        </section>

    )
}





export default Login;