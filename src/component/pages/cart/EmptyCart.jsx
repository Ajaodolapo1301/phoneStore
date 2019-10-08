import React, { Component } from 'react';

class EmptyCart extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-auto text-center text-title">
                        <h1 className="">your cart is  currently empty</h1> 
                    </div>
                </div>
            </div>
         );
    }
}
 
export default EmptyCart;
