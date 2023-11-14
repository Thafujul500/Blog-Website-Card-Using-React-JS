import React from 'react';

const Food2 = (props) => {
    return (
        <div>
            <div class="card">
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.discription}</p>
                    <a href="#" class="btn btn-primary">Shope Now</a>
                </div>
                </div>
            
        </div>
    );
};

export default Food2;