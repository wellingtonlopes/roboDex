import React from 'react';

const Card = ({ url, name, email }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${url}?200x200`} className='br-100 ba b--black-10' alt={`${name} robot`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;