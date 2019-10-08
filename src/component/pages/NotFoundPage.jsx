import React, { Component } from 'react';

class NotFound extends Component {
    render() { 
        return ( 
            <div className= "container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                    <h1 className="display-4"><span className="text-danger">404</span>  page not found</h1>
            <p className="lead">sorry,page does not exist</p>
            <h3 className="text-capitalize"> The requested url <span className="text-danger">{this.props.location.pathname}</span> was not found</h3>

                    </div>
                </div>
            
            </div>
         );
    }
}
 
export default NotFound;
