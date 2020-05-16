import React from 'react';

import './styles.sass';

export default function PageContainer(props){

        return (
            <div>
                Container
                {props.children}
            </div>
        )
    
}
