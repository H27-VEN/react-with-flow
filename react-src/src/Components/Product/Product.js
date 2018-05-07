import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import noproduct from '../../Images/no_product.png';
import './Product.css';


class Product extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        console.log("In Render...");
        console.log("prodlist: ", this.props.prodlist);
        let prodlist = this.props.prodlist.data;
        let row = [];
        let col = [];
        let rowCount = 0;
        console.log("prodlist.data: ", prodlist);
        if(Array.isArray(prodlist)) {
            for(let i = 0, j = 0; i < prodlist.length; i++) {
                if(rowCount > 3) { 
                    row[j] = <ul className="row">{col}</ul>
                    rowCount = 0;
                    j++;
                }
                col[rowCount] = <li className="col-3" key={prodlist[i].prodid}>
                                    <div className="card">
                                        <img className="card-img-top text-center" src={noproduct} alt="product image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{prodlist[i].prodname}</h5>
                                            <div className="card-text">
                                                <p>{prodlist[i].proddesc}</p>
                                                <p>{prodlist[i].prodprice}</p>
                                            </div>
                                            <button className="btn btn-md btn-primary">Add to Cart</button>
                                        </div>
                                    </div>   
                                </li>
                        

                rowCount++;
            }
            if(prodlist.length < 3) {
                row[0] = <ul className="row">{col}</ul>
            }
            console.log("row: ", row);
            return (
                <div className="container">{row}</div>
            );          
        }
        else{
           return( <div className="container">
                    ...Loading
            </div> );
        }
    }

    componentDidMount() {
        console.log("In Component DiD Mount...");
        this.props.fetchProduct();
    }

}

const mapStateToProps = (state) => {
   return { 
       prodlist: state.productReducer 
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: () => {
            console.log("in fetch products");
            dispatch( dispatch => {
                axios.get('http://localhost:5000/data/products')
                .then((response) => {
                    console.log("response: ",response);
                    if(Array.isArray(response.data)) {
                        return dispatch(
                            {type: "FETCH_PRODUCTS_SUCCESS", payload: response.data}
                        );
                    }
                })
                .catch((error) => {
                    return dispatch(
                        {type: "FETCH_PRODUCTS_ERROR", payload: error}
                    );
                });
            });
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
//export default Product;