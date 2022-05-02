import React from 'react'
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './Card.css'
import { deleteProduct, getAllProducts } from '../Redux/Actions/index.js';
import FilterBar from './FilterBar';
import swal from 'sweetalert';


const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts);
    const copyProducts = useSelector(state => state.copyProducts);
    const deletedProducts = useSelector(state => state.deletedProducts);

    useEffect(()=>{
        dispatch(getAllProducts()) 
    },[dispatch, deletedProducts])
 
    function handleDelete(id){

        swal({
            title: "¿Deseas confirmar la operación?",
            text: `Estás por eliminar este producto`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              swal(`¡Producto eliminado!`, {
                icon: "success",
              });
              dispatch(deleteProduct(id));
            //   dispatch(getAllProducts());
            } else {
              swal(`¡Sigue navegando entre nuestros vinos!`);
            }
          });
        
    }
    
    if(copyProducts[0] === ''){
        return (
            <>
                <div className='title'>
                    <h1>Catálogo de vinos</h1>
                 
                </div>
    
                <div>
                    <FilterBar />
                </div>
    
                <div>
                    <Link to="/create" className="btn btn-dark mt-2 mb-2">CREAR PRODUCTO</Link>
                </div>
    
                <div className="card-group">
    
                    {products.map((product) => (
    
                        <div className='container_card'>
                            
                            <div className='img_card_container'>
                                <Link to={`/${product.id}`}>
                                    <img className='img_card' src={product.image} alt="not found"/>
                                </Link>
                            </div> 
    
                            <div className='detail_card_container'>
                                <h2 className='name_pokemon_card'>{product.name}</h2> 
                                <h3>${product.price.toLocaleString("es-AR")}</h3>
                            </div> 
    
                            <div className='btns'>
                                <Link to={`/edit/${product.id}`}><button className='btn-update'>Editar</button></Link>
                                <button onClick={handleDelete(product.id)} className='btn-delete'>Eliminar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
       
    } else if(copyProducts[0] === 'null'){
        return(
            <>
            <div className='title'>
                <h1>Catálogo de vinos</h1>
                <p>Para <span className='span-title'>Aenima</span></p>
            </div>

            <div>
                <FilterBar />
            </div>

            <div>
                <Link to="/create" className="btn btn-dark mt-2 mb-2">CREAR PRODUCTO</Link>
            </div>

            <div className="card-group">
                <div>
                    <h1>No hay nada en los filtros</h1>
                </div>
            </div>
        </>
        )
        
    } else {
        return (
            <>
                <div className='title'>
                    <h1>Catálogo de vinos</h1>
                    <p>Para <span className='span-title'>Aenima</span></p>
                </div>
    
                <div>
                    <FilterBar />
                </div>
    
                <div>
                    <Link to="/create" className="btn btn-dark mt-2 mb-2">CREAR PRODUCTO</Link>
                </div>
    
                <div className="card-group">
    
                    {copyProducts.map((product) => (
    
                        <div className='container_card'>
                            
                            <div className='img_card_container'>
                                <Link to={`/${product.id}`}>
                                    <img className='img_card' src={product.image} alt="not found"/>
                                </Link>
                            </div> 
    
                            <div className='detail_card_container'>
                                <h2 className='name_pokemon_card'>{product.name}</h2> 
                                <h3>${product.price.toLocaleString("es-AR")}</h3>
                            </div> 
    
                            <div className='btns'>
                                <Link to={`/edit/${product.id}`}><button className='btn-update'>Editar</button></Link>
                                <button onClick={()=>handleDelete(product.id)} className='btn-delete'>Eliminar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default Products;





