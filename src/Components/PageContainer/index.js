import React from 'react';

import './styles.sass';

class PageContainer extends React.Component{

    render() {
        return (
            <div>
                Container
                {this.props.children}
            </div>
        )
    }
}

export default PageContainer;