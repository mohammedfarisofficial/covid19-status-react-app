import React, { Component } from 'react' ;
import "./india.css"
import { Card , Accordion , Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class India extends Component {

    render() {
        return (
            

            <div className="home-page">
                    <div className='top-section'>
                        <div className="box">
                            <div><h2>Hello</h2></div>
                            <div><h2>9999</h2></div>
                        </div>
                        <div className="box">
                            <div><h2>Hello</h2></div>
                            <div><h2>9999</h2></div>
                        </div>
                        <div className="box">
                            <div><h2>Hello</h2></div>
                            <div><h2>9999</h2></div>
                        </div>
                        <div className="box">
                            <div><h2>Hello</h2></div>
                            <div><h2>9999</h2></div>
                        </div>
                    </div>
                    <div className="bottom-section">
                        <Accordion defaultActiveKey="0">
                        <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        </Accordion>   
                    </div>
            </div>
        )
    }
}
