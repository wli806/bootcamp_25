import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const params = useParams();
    return (
        <div>
            <h2>Detail</h2>
            <p>Detail ID: {params.id}</p>
        </div>
    );
}

export default Detail;