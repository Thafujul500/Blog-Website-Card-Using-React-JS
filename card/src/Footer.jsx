import React from 'react';

const Footer = () => {
    return (
        <div className='container'>
            <ul className='pagination'>
                <li className='pageItem btn btn-primary btn-outline-danger'><a className='pageLink' href="">1</a></li>
                <li className='pageItem btn btn-primary btn-outline-danger'><a className='pageLink' href="">2</a></li>
                <li className='pageItem btn btn-primary btn-outline-danger'><a className='pageLink' href="">3</a></li>
                <li className='pageItem btn btn-primary btn-outline-danger'><a className='pageLink' href="">4</a></li>
            </ul>
            
        </div>
    );
};

export default Footer;