// Hirher Order Component: HOC a component that render other component

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. please don't share it!</p>}     
            <WrappedComponent {...props} />
        </div>

    );

};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view info</p>
            )}     
            
        </div>

    );

};

const AdminInfo = withAdminWarning(Info);
const AuthInfo= requireAuthentication(Info)

//ReactDom.render(<AdminInfo isAdmin={true} info='There are the details'/>, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={false} info='There are the details'/>, document.getElementById('app'));