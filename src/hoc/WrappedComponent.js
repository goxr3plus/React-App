import React from 'react';

const wrappedComponent = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent/>
        </div>
    )
}

export default wrappedComponent;