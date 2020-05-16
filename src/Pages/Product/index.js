import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product(props) {

    
    const { id } = useParams();

    return (
        <div> Produto {id} </div>
    )
    
}
