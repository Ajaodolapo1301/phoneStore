import React, { Component } from 'react';
import Product from "../pages/Product"
import Title from "../tooltips/Title"
import {Consumer} from "../../Context"
class ProductList extends Component {
    state = { 
        products:[]
     }
    
    
    render() { 
        return (  <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <div className="row">
                      <Title name="Our" title="products"/>
                      <div className="row">
                        <Consumer>
                            {value=>{
                                return value.products.map(product=>(
                                    <Product
                                    key={product.id}
                                    product={product}
                                    />
                                ))
                            }}
                        </Consumer>

                      </div>

                    </div>

                </div>
            </div>




            {/* <Product/> */}
            </React.Fragment>
        );
    }
}
 
export default ProductList;