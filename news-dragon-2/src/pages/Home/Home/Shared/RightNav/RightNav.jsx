import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import Qzone from '../Qzone/Qzone';
import bg from '../../../../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='p-2'>
            <h4>Login With</h4>
            <Button variant="outline-primary" className='w-100 mt-2'><FaGoogle></FaGoogle> Login With Google</Button>
            <Button variant="outline-secondary" className='w-100 mt-2'><FaGithub></FaGithub> Login With Github</Button>
            <h4 className='my-4'>Find Us On</h4>
            <ListGroup>
                <ListGroup.Item><FaFacebook className='text-primary'></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item><FaWhatsapp className='text-success'></FaWhatsapp> Whatsapp</ListGroup.Item>
                <ListGroup.Item><FaTwitter className='text-info'></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item><FaTwitch className='text-warning'></FaTwitch> Twich</ListGroup.Item>
            </ListGroup>
            <Qzone></Qzone>
            <div className='position-relative'>
                <img className='img-fluid' src={bg} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle text-center'>
                    <h3 className='text-white'>Create an Amazing Newspaper</h3>
                    <p className='text-white py-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more</p>
                    <Button variant='danger'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;