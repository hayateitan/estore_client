import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import server from "../Config";

const Login = (props) => {
  const [ErrP, setErrP] = useState(1);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  function createMarkup() {
    if (ErrP !== 0) {
    } else {
      return {
        __html:
          "<p style='color:red'>Utilisateur ou mot de passe incorrect</p>",
      };
    }
  }
  const doSubmit = () => {
    axios
      .post(`${server}/login`, { email: mail, password: pass })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          sessionStorage.setItem("jwt", res.data);

          props.history.push("/Home");
        } else {
          setErrP(ErrP - 1);
        }
      });
  };

  return (
    <div id="divpourbackgroundlogin">
      <div id="login-body">
        <h1 id="log">S'identifier</h1>

        <form>
          <input
            type="email"
            id="mail"
            placeholder="Votre adresse email ou username"
            required
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            required
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="button" id="button1" value="LOGIN" onClick={doSubmit}>
            S'identifier
          </button>
          <div dangerouslySetInnerHTML={createMarkup(ErrP)} />
          <label id="option">
            <input type="checkbox" name="auto" checked readOnly />
            Se souvenir de moi
          </label>
        </form>

        <p className="grey">
          Première visite ? <Link to="/Register">Inscrivez-vous.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
