import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getProduct, getAllBrands, getAllStrains, getAllTypes, updateProduct } from '../Redux/Actions'
import './editProduct.css'

const Details = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.details)

  const [wine, setWine] = useState({
    name: productDetail[0] && productDetail[0].name,
    description: productDetail[0].description && productDetail[0].description,
    price: productDetail[0].price && productDetail[0].description,
    strainId: productDetail[0].strainId && productDetail[0].description,
    typeId: productDetail[0].typeId && productDetail[0].description,
    brandId: productDetail[0].brandId && productDetail[0].description
  })

  useEffect(()=>{
    dispatch(getProduct(id))
  }, [id])

  function handleChange(event){
    setWine({
      ...wine, [event.target.name]:event.target.value 
  });
  }

  useEffect(()=>{
    dispatch(getAllTypes())
    dispatch(getAllBrands())
    dispatch(getAllStrains())
  },[dispatch])

  const tipo = useSelector((state)=>state.types)
  const strain = useSelector((state)=>state.strains)
  const brand = useSelector((state)=>state.brands)  

  function handleSubmit(event){
    event.preventDefault();
    dispatch(updateProduct(id, wine))
    alert('¡Producto editado!')
}

  return(
    <div>
        { productDetail && 
              productDetail.map((product, index) => {
                
                return(

                  <div key={index} className="details_container">
                      <div className="header">
                          <img className="img" src={product.image} alt='img'></img>
                          <textarea className="textarea-c" placeholder={productDetail[0].name} value={wine.name} name='name' onChange={handleChange} />
                         
                      </div>

                      <div className="description">
                          
                      <label className="label" htmlFor="">Precio:</label>
                      <input className='input' type='number' value={Number(wine.price)} name='price' onChange={handleChange}/>
                          
                          <div className="div">
                              <label className="label">Tipo:</label>
                              <select className="select" onChange={handleChange} name='typeId'>
                              <option className="option">Tipo</option>
                              {tipo &&
                                  tipo.map((tipo) => {
                                  return (
                                      <option className="option" value={Number(tipo.id)}>
                                          {tipo.name}
                                      </option>
                                  );
                                  })}
                              </select>
                          </div>
                          <div className="div">
                              <label className="label">Variedad:</label>
                              <select className="select" onChange={handleChange} name='strainId'>
                              <option className="option">Variedad</option>
                              {strain &&
                                  strain.map((strain) => {
                                  return (
                                      <option className="option" value={Number(strain.id)}>
                                          {strain.name}
                                      </option>
                                  );
                                  })}
                              </select>
                          </div>
                          <div className="div">
                              <label className="label">Familia:</label>
                              <select className="select" onChange={handleChange} name='brandId'>
                              <option className="option">Familia</option>
                              {brand &&
                                  brand.map((brand) => {
                                  return (
                                      <option className="option" value={Number(brand.id)} onChange={handleChange}>
                                          {brand.name}
                                      </option>
                                  );
                                  })}
                              </select>
                          </div>
                          
                          <label className="label">Características:</label>
                          <div>
                            <textarea className='textarea' placeholder={productDetail[0].description} type='text' value={wine.description} name='description' onChange={handleChange}/>
                          </div>
                          <div>
                            <button className="my_button-c" onClick={handleSubmit}>Editar</button>
                          </div>
                          <div>
                            <Link to='/'><button className="my_button-c">Volver</button></Link>
                          </div>
                      </div>
                  </div>
             
                )
              }) 
        }
    </div>
  )
}

export default Details
