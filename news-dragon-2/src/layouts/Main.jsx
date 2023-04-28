import React from 'react';
import Home from '../pages/Home/Home/Home';
import Header from '../pages/Home/Home/Shared/Header/Header';
import Footer from '../pages/Home/Home/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Home/Home/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Home/Home/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        this is main part
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;