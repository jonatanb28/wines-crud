import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Card.css'

const URI = 'http://localhost:8000/wines'

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getAllProducts()
    },[])
    
    const getAllProducts = async()=>{
        const res = await axios.get(URI);
        setProducts(res.data)
    }

    const deleteProduct = async(id)=>{
        await axios.delete(`${URI}${id}` );
        getAllProducts()
    }

    
    return (
        <>
            <div className='title'>
                <h1>Catálogo de vinos</h1>
                <p>Para Aenima</p>
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
                                <p>{product.description}</p>
                            </div> 

                            <div className='btns'>
                                <Link to={`/Edit/${product.id}`}><button className='btn-update'>Editar</button></Link>
                                <button onClick={()=>deleteProduct()} className='btn-delete'>Eliminar</button>
                            </div>
                        </div>
                    // </Link>

                ))}
            </div>
        </>
    )
}

export default Products;





