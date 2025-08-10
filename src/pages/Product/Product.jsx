import React, { use, useEffect } from 'react';
import './Product.css';
import Productcarosel from '../../components/productcarosel/productcarosel.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Product = () => {
    const[product,setProduct] = React.useState( []);
    const {id} = useParams();
        
      useEffect(()=>{
        async function profuctdetails(){
            if(id){
            let product=await axios.get('https://dummyjson.com/products/'+id);
            setProduct(product.data);
        }
           
         }
        profuctdetails();
      },[]);
    return (
        <div>
            <div className='productpage d-flex'>
                <div className='productimage halfdiv d-flex justify-content-center align-items-center'>
                   <Productcarosel images={product.images} />
                </div>
                <div className='productdetails halfdiv d-flex justify-content-center align-items-center'>
                    <div className=' p-3 d-flex flex-column row-gap-3'>
                    <h1>{product.title}</h1>
                    <h3>price ${product.price}</h3>
                    <h5>{product.category}</h5>
                    <p>{product.description}</p>
            <Link to={`/cart/${id}`} >
                    <button className='btn btn-primary btn-sm w-25'>Add to Cart</button>
                    </Link>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Product;
