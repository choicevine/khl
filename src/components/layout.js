import React, {Component} from 'react';
import Suggestions from './For-you';
import {Container, Row, Col } from 'reactstrap';



class Layout extends Component {

    render() {

        return(
            <div>
               <Container>
               
                 <Row color= "green">
                    <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}> <Suggestions /> Holla</Col>
                    </Row>
                    <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3 Rilly</Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3 Rofia</Col>
                    </Row>
                </Row>
                </Container>
            </div>
        );
    }
}

export default Layout;

