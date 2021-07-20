import axios from 'axios';
import React from 'react';
import Footericon from './Footericon'
// import { useHistory } from "react-router-dom";


const NousContacter = () => {
    // let history = useHistory();
    const doSubmitNousContacter = () => {
        let nom = document.getElementById('Nom');
        let mail = document.getElementById('Mail');
        let message = document.getElementById('Message');


        axios.post(`http://localhost:3001/NousContacter`, { Nom: nom.value, Mail: mail.value, Message: message.value })

            .then(res => {
                console.log(res);
                if (res.data !== 0) {


                    // history.push('/Home');
                }

            })
    }




    return (
        <div>
            <section id="contact" className="bg-lioght py-5">
                <div class="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Contactez-Nous</h3>
                            {/* <p className="lead"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aperiam maxime
                        minima repellat veritatis adipisci?</p> */}

                            <form>
                                <div className="input-group input-group-lg mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text" id="Nom" className="form-control" placeholder="Nom" />
                                </div>

                                <div className="input-group input-group-lg mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input type="text" id="Mail" className="form-control" placeholder="Mail" />
                                </div>

                                <div className="input-group input-group-lg mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-pencil-alt"></i>
                                        </span>
                                    </div>
                                    <textarea rows="5" id="Message" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <input type="submit" onClick={doSubmitNousContacter} value="Envoyer" className="btn btn-primary btn-block btn-lg" />
                            </form>
                        </div>
                    </div>

                </div>

            </section>


            <Footericon></Footericon>
        </div>








    )
}

export default NousContacter
