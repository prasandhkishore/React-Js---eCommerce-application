import React, { Component } from 'react';
class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <h2 style={{paddingTop:'100px'}}>Hello from Product Page</h2>
            </div>
         );
    }
}
 
export default Product;