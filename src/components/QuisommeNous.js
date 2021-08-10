import axios from 'axios';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import server from '../Config';

const QuisommeNous = () => {

    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }

    const [question, getQuestion] = useState();
    // const Question = question.split(',');

    const getAllQuestion = () => {
        axios.get(`${server}/quisommenous`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                getQuestion(res.data);
                console.log(res.data)
            })
    }

    useEffect(() => {
        getAllQuestion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="quisommenous">
            <h1 id="quisommenous"> Vos questions les plus récurrente</h1>
            {
                question?.map(
                    q => (
                        <Accordion>
                            <Card key={q.id}>
                                <Accordion.Toggle as={Card.Header} eventKey="0" >
                                    {q.title}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body> {q.subtitle}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    )
                )
            }
        </div>
    )
}

export default QuisommeNous;