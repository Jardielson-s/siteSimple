import React from 'react';
import './notFound.scss';


class NotFound extends React.Component{
   
    render(){
        return(
            <div className="not-found-404">
                <h1 className="page-not-found">404</h1>
                <h2 className="not-found">page not found</h2>
            </div>
        );
    }
}

export default NotFound;