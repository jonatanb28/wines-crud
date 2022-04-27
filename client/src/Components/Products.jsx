import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import './Card.css'
import { deleteProduct, getAllProducts, getAllTypes  } from '../Redux/Actions/index.js';
const URI = 'http://localhost:8000/wines'


const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts);
    const types = useSelector(state => state.types);
    console.log(products)
    console.log(types)
   
    useEffect(()=>{
       dispatch(getAllProducts()) 
    },[dispatch, products])

    function handleDelete(id){
        dispatch(deleteProduct(id));
    }
    
    
    return (
        <>
            <div className='title'>
                <h1>Catálogo de vinos</h1>
                <p>Para <span className='span-title'>Aenima</span></p>
            </div>

            <div>
                <Link to="/create" className="btn btn-primary mt-2 mb-2">Crear Producto</Link>
            </div>

            <div className="card-group">
                {products.map((product) => (

                    // <Link to={}>

                        <div className='container_card'>
                            
                            <div className='img_card_container'>
                                <img className='img_card' src={product.image} alt="not found"/>
                            </div> 

                            <div className='detail_card_container'>
                                <h2 className='name_pokemon_card'>{product.name}</h2> 
                                <h3>${product.price.toLocaleString("es-AR")}</h3>
                            </div> 

                            <div className='btns'>
                                <Link to={`/Edit/${product.id}`}><button className='btn-update'>Editar</button></Link>
                                <button onClick={()=>handleDelete(product.id)} className='btn-delete'>Eliminar</button>
                            </div>
                        </div>
                    // </Link>

                ))}
            </div>
        </>
    )
}

export default Products;





