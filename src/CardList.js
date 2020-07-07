import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <Fragment>
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                    key={i} 
                    id={user.id} 
                    name={user.name} 
                    email={user.email}
                    />);
                })
            }
        </Fragment>
    );
}

export default CardList;