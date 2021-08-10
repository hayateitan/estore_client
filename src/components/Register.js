import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Avatarr from './Avatarr';
import server from '../Config';


const Register = (props) => {

const [img, setimg] = useState()

    const doSubmitNewUser = () => {
        let mail = document.getElementById('mail');
        let pass = document.getElementById('password');
        let passC = document.getElementById('comfirmPassword');
        let username = document.getElementById('username');

        axios.post(`${server}/register`, { email: mail.value, password: pass.value, comfirmpassword: passC.value, Username: username.value, image: img })

            .then(res => {

                if (res.data === 0) {
                    return false
                }
                props.history.push('/Login');
            })
    }



    const handleImageChanged = (img) => {
        setimg(img);
    }


    return (

        <section >
            <div id="login-body">

                <h1 id='reg'>Register</h1>

                <form >
                    <Avatarr onImageChange={(img) => {handleImageChanged(img)}} />

                    <input type="username" id="username" placeholder=" Username" required />
                    <input type="email" id="mail" placeholder=" Adresse mail " required />
                    <input type="password" id="password" placeholder="Mot de passe" required />
                    <input type="password" id="comfirmPassword" placeholder="Retapez votre mot de passe" required />
                    <button type="button" id='button2' onClick={doSubmitNewUser}>S'inscrire</button>


                </form>

                <p className="grey">Vous avez deja un compte ? <Link to="/Login">Connectez-vous</Link>.</p>


            </div>
        </section>

    )
}





export default Register;