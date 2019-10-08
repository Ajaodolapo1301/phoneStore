import React, { Component } from 'react';
import {storeProducts, detailProduct} from "./data"



const Context =React.createContext()


export class Provider  extends Component{
    state = { 
       products: [],
       detailProduct:detailProduct,
       cart:[],
       modelOpen: false,
       modelProduct:detailProduct,
       cartSubTotal: 0,
       cartTax: 0,
       cartTotal: 0
    } 
 
componentDidMount(){
    this.setProduct()
}


setProduct =() =>{
    let tempproducts = []
    storeProducts.forEach(item=>{
        const singleItem = {...item}
        tempproducts = [...tempproducts,singleItem]
    })
    this.setState(()=>{
        return{products:tempproducts}
    })
}


getItem = (id) =>{
    const product = this.state.products.find(item =>item.id === id)
    return product
}


 handleDetails =(id)=>{
     const product = this.getItem(id)
     this.setState(()=>{
         return {detailProduct:product}
     })
 }

 addToCart=(id) =>{
    const tempproducts = [...this.state.products]
    const index = tempproducts.indexOf(this.getItem(id))
    const product = tempproducts[index]
    product.inCart = true
    product.count = 1
    const price =product.price
    product.total = price

    this.setState(()=>{
        return{products:tempproducts, cart:[...this.state.cart,product]}
    },()=>{
      this.addTotal()
    })
 }

 openModel=(id)=>{
    const product = this.getItem(id)
    this.setState(()=>{
        return {modelProduct:product,modelOpen:true}
    })
 }

 closeModel= ()=>{
    this.setState(()=>{
        return{modelOpen:false}
    })
 }

increment =(id)=>{
    const tempCart = [...this.state.cart]
    const selectedItem = tempCart.find(item => item.id ===id)
    const index = tempCart.indexOf(selectedItem)
    const product = tempCart[index]
    
    product.count = product.count + 1
    product.total = product.count * product.price

    this.setState(()=>{
        return{cart: [...tempCart]}
    }, ()=>{
        this.addTotal()
    })
}


decrement =(id)=>{
    const tempCart = [...this.state.cart]
    const selectedItem = tempCart.find(item => item.id ===id)
    const index = tempCart.indexOf(selectedItem)
    const product = tempCart[index]
    
    product.count = product.count - 1
     if (product.count=== 0) {
         this.removeItem(id)
     }else{
        product.total = product.count * product.price
        this.setState(()=>{
            return{cart: [...tempCart]}
        }, ()=>{
            this.addTotal()
        })
     }

}

removeItem= (id)=>{
   let tempCart = [...this.state.cart]
    let tempproduct = [...this.state.products]
    tempCart= tempCart.filter(item=> item.id !==id)
const index = tempproduct.indexOf(this.getItem(id))
let removedProduct= tempproduct[index]
removedProduct.inCart = false
removedProduct.count = 0
removedProduct.total = 0
this.setState(()=>{
    return{
        cart: [...tempCart],
        products: [...tempproduct]
    }
},()=>{
    this.addTotal()
})
}

clearCart=()=>{
   this.setState(()=>{
       return{ cart: []}
   },()=>{
       this.setProduct()
       this.addTotal()
   })
}

addTotal=()=>{
    let subTotal = 0
    this.state.cart.map(item=>(subTotal +=item.total))
    let tempTax  = subTotal * 0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax
    this.setState(()=>{
        return{
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total                        
        }
    })
}


    render() {
        return(
        <Context.Provider value={{
            
            ...this.state,
            handleDetails: this.handleDetails,
            addToCart:this.addToCart,
            openModel:this.openModel,
            closeModel:this.closeModel,
            increment: this.increment,
            decrement:this.decrement,
            clearCart: this.clearCart,
            removeItem: this.removeItem

        }}>
        {this.props.children}
        </Context.Provider>
    )   
  }
}

export const Consumer = Context.Consumer


