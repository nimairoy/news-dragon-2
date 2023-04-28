import React from 'react';
import {  Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaRegBookmark, FaRegEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({news}) => {
    console.log(news)
    const {_id, image_url, title, total_view, details, author, } = news;
    return (
        <Card className="mt-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{width: '50px', height: '50px'}} roundedCircle src={author?.img}></Image>
                <div className='ms-2 flex-grow-1'>
                    <h6 className='mb-0 mt-1'>{author?.name}</h6>
                    <p><small>{moment(author?.published_date).format("YYYY-MM-D")}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Image fluid src={image_url}></Image>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {details.length < 250 ? details: details.slice(0, 250)}......<Link to={`/news/${_id}`}>See More</Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div>
                    
                </div>
                <div>
                    <FaRegEye></FaRegEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;