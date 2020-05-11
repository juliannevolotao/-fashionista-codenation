import React from 'react';
import { useParams } from 'react-router-dom';

class Product extends React.Component {

    
    constructor(props) {
        super(props)
        
        this.state = {
            id: props.match.params.id
        }
    }

    render() {
        return (
            <div> Produto {this.state.id} </div>
        )
    }
}

export default Product