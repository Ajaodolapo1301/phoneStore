import React, { Component } from 'react';
import Title from "../../tooltips/Title"
import CartColumn from "./CartColumn"
import EmptyCart from "./EmptyCart" 
import {Consumer} from "../../../Context"
import CartList from "./CartList"
import CartTotal from "./CartTotal"




class Cart extends Component {
    state = {  }
    render() { 
        return (  
           <section>
               <Consumer>
                   {value=>{
                       const {cart} = value
                       if (cart.length > 0) {
                           return(
                               <React.Fragment>
                                    <Title name="your" title="cart"/>
                                    <CartColumn/>
                                    <CartList value={value}/>
                                    <CartTotal value={value}/>
                            </React.Fragment>
                           )
                       }else{
                          return<EmptyCart/>

                       }
                   }}
               </Consumer>

           </section>
        );
    }
}
 
export default Cart;