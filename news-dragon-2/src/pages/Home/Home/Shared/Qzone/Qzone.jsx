import React from 'react';
import qzone1 from '../../../../../assets/qZone1.png';
import qzone2 from '../../../../../assets/qZone2.png';
import qzone3 from '../../../../../assets/qZone3.png';
import { Image } from 'react-bootstrap';

const Qzone = () => {
    return (
        <div>            
            <h4 className='my-4'>Q-Zone</h4>
            <div style={{background: '#F3F3F3'}} className='p-1'>
                <Image className='img-fluid' src={qzone1}></Image>
                <Image className='img-fluid' src={qzone2}></Image>
                <Image className='img-fluid' src={qzone3}></Image>
            </div>
        </div>
    );
};

export default Qzone;