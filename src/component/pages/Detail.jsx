import React, { Component } from 'react';
import {Consumer} from "../../Context"
import {Link} from "react-router-dom"
import {ButtonContainer} from '../tooltips/Button'

class Detail extends Component {
    state = {  }
    render() { 
        return ( 
            <Consumer>
                {value=>{
                const {id,company,img,info,price,inCart,title }=value.detailProduct
                return(
                    <div className="container py-5">
                        {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* end of title */}
                    
                        {/* product info */}
                        <div className="row">
                            {/* product img */}
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="pics"/>
                            </div>
                           {/* product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h1>model: {title}</h1>  
                                <h2 className="text-title text-uppercase text-muted mt-3 mb-2">made by:
                                <span className="text-uppercase">{company}</span>
                                </h2>       
                                <h4 className="text-blue"><strong>Price : <span>$</span>{price}</strong></h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    some info about product: </p>
                                <p className="text-muted lead">{info}</p>
                                {/* the footer buttons */}
                                <Link to="/">
                                    <ButtonContainer>
                                        back to Products
                                    </ButtonContainer>
                                </Link>
                                <ButtonContainer cart disable={inCart? true:false}
                                    onClick={()=>{
                                        value.addToCart(id)   
                                        value.openModel(id) 
                                    }}
                                >
                                    {inCart ? "inCart": "add to cart"}
                                </ButtonContainer>
                            </div>      
                        </div>
                    </div>
                )
                }}
            </Consumer>
         );
    }
}
 
export default Detail;
