import axios from 'axios';
import React, { Component } from 'react';
import './Product.css'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[]
        }
    }
    getAllProduct(){
        axios.get("http://localhost:4000/products").then((Response)=>
        this.setState({
            products:Response.data
        })
        ).catch((error)=>{
            console.log("Unable to fetch the data")
        })
    }
    render() { 
        const product=this.state.products.map((product)=>{
            return(
                <div className='item-box'>
                    <div className='image-box'>
                        <img src={product.thumbnail}></img>
                    </div>
                    <div className='right-pane'>
                        <div className='discription-box'> 
                            <h1>{product.brand}: {product.title}</h1>
                            <div className='product-discription'>
                                <h6>Description:</h6>
                                <p>{product.description}</p>
                            </div>
                            <div className='price'>
                                <p>Price: <span className='product-price'>&#36;{product.price}</span> <span className='product-off'><i> &#40; {product.discountPercentage}&#37; off &#41;</i></span> </p>
                            </div>
                            <div className='stock'>
                                <p>Available Stocks: <span className='product-stock'>{product.stock}</span>  </p>
                            </div>
                            <div className='category'>
                                <p>Category: <span className='product-category'>{product.category}</span>  </p>
                            </div>                   
                        </div>
                        <div className='action-button'>
                            <button className='edit-button' type='button'>Edit</button>
                            <button className='delete-button' type='button'>Delete</button>

                        </div>              
                    </div>
                </div>
            );
        })
        return ( 
            <div>
                <h2>
                    <button className='display-button' type='button' onClick={()=>this.getAllProduct()}>Display Product</button>

                </h2>
                <div className='add-item'>
                    <button type='button'>Add Item</button>
                </div>
                {/* <table style={{paddingLeft:"200px"}}>
                     <thead>
                        <td>Product ID</td>
                        <td>Product Title</td>
                        <td>Product Brand</td>
                        <td>Product Price</td>
                    </thead> 
                    <tbody>
                        {product}
                    </tbody>
                </table> */}
               
                {product}
            </div>
         );
    }
}
 
export default Product;