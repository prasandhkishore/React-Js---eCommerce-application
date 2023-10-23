import axios from 'axios';
import React, { Component } from 'react';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[]
        }
    }
    getAllProduct(){
        axios.get("http://localhost:3000/Product").then((Response)=>
        this.setState({
            products:Response.data
        })
        ).catch((error)=>{
            console.log("Unable to fetch the data")
        })
    }
    render() { 
        const product=this.state.products.map((product)=>{
            
        })
        return ( 
            <div>
                <h2 style={{paddingTop:'100px'}}>Product List</h2>
            </div>
         );
    }
}
 
export default Product;