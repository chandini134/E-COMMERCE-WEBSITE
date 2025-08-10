import React, { use } from 'react';
import Carousel from '../../components/Carousel/Carousel'; 
import CategoryCard from '../../components/CategoryCard';
import axios from 'axios';
import { useEffect,useState } from 'react';
import ProductCard from '../../components/ProductCard';
const Home = () => {
    const [storeproduct,setStoreProduct]=useState([]);
    useEffect(()=>{
        async function getProducts(){
            let k= await axios.get('https://dummyjson.com/products?limit=100');
            console.log(k.data.products);
            setStoreProduct(k.data.products);
        }
        getProducts();
    },[])
    return (
        
        <>
            <Carousel />
            <div>
                <h1>categories</h1>
                <div className='d-flex justify-content-start gap-3 flex-wrap'>
                <CategoryCard filename={"books.jpeg"}  categoryname={"BOOKS"}/>
                <CategoryCard filename={"clothes.jpeg"}  categoryname={"CLOTHING"}/>
                <CategoryCard filename={"electronics.jpeg"}  categoryname={"ELECTRONICS"}/>
                <CategoryCard filename={"fanshion.jpg"}  categoryname={"FANSHION"}/>
                <CategoryCard filename={"food.jpeg"}  categoryname={"FOOD"}/>
               
                <CategoryCard filename={"homegoods.jpeg"}  categoryname={"HOMEGOODS"}/>
                <CategoryCard filename={"toys.jpeg"}  categoryname={"TOYS"}/>
               
                
                </div>
                <br/> <br/>  <br/>
            </div>
            <div>
                <h1>Products</h1>
                <div className='d-flex justify-content-start gap-3 flex-wrap'>
                {storeproduct&&storeproduct.length>1&&storeproduct.map(product=>{
                    return (
                        <ProductCard product={product} key={product.id}/>
                    );
                }) }
                </div>
                
            </div>
            
        </>
    );
}

export default Home;
