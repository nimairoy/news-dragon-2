import React from 'react';
import logo from '../../../../../assets/logo.png'
import { Container, Image } from 'react-bootstrap';
import moment from 'moment';

const Header = () => {
    return (
        <Container className='text-center py-4'>
            <Image src={logo} fluid />
            <h5 className='text-secondary mt-2 fw-normal'>Journalism Without Fear or Favour</h5>
            <h5 className='text-secondary'>{moment().format("dddd, MMMM D, YYYY")}</h5>
        </Container>
    );
};

export default Header;