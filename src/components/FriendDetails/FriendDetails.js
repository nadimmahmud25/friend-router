import React from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId} = useParams();
    return (
        <div>
            <h2>this is friend Details:{friendId}</h2>
        </div>
    );
};

export default FriendDetails;