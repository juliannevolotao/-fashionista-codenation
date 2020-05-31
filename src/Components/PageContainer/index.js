import React from 'react';

import './styles.sass';

export default function PageContainer(props){

        return (
            <div className="container">
              <div className="container__content">
                {props.children}
              </div>
            </div>
        )
    
}
