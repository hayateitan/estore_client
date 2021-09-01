import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Avatarr from './Avatarr';
import server from '../Config';


const Register = (props) => {

const [img, setimg] = useState()
const [mail, setMail] = useState('');
const [username, setUsername] = useState('');
const [pass, setPass] = useState('');
const [passc, setPassc] = useState('');

    const doSubmitNewUser = () => {

        
        let reg = RegExp('[A-Z][a-z]{7,}')
        if (!reg.test(pass)){
            alert("reg pas bon")
          
        }
       
   

        axios.post(`${server}/register`, { email: mail, password: pass, comfirmpassword: passc, Username: username, image: img })

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
            <div id="divpourbackgroundlogin">
            <div id="login-body">

                <h1 id='reg'>Register</h1>

                <form >
                <Avatarr onImageChange={(img) => { handleImageChanged(img) }} img={img} />

                    <input type="username" id="username" placeholder=" Username" required onChange={(e) => setUsername(e.target.value)}/>
                    <input type="email" id="mail" placeholder=" Adresse mail " required onChange={(e) => setMail(e.target.value)}/>
                    <input type="password" id="password" placeholder="Mot de passe" required onChange={(e) => setPass(e.target.value)}/>
                    <input type="password" id="comfirmPassword" placeholder="Retapez votre mot de passe" required onChange={(e) => setPassc(e.target.value)}/>
                    <button type="button" id='button2' onClick={doSubmitNewUser}>S'inscrire</button>


                </form>

                <p className="grey">Vous avez deja un compte ? <Link to="/Login">Connectez-vous</Link>.</p>


            </div>
            </div>
        </section>

    )
}





export default Register;