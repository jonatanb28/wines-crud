import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getProduct} from '../Redux/Actions'
import './editProduct.css'

const Details = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.details)
  console.log(productDetail)

  const [wine, setWine] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
    strainId: 0,
    typeId: 0,
    brandId: 0
  })

  useEffect(()=>{
    dispatch(getProduct(id))
    setWine({
      name: productDetail.name,
      description: productDetail.description,
      price: productDetail.price,
      image: productDetail.image,
      strainId: productDetail.strainId,
      typeId: productDetail.typeId,
      brandId: productDetail.brandId
    })
  }, []);

  function handleChange(){
    
  }

  return(
    <div>
        { productDetail && 
              productDetail.map((product, index) => {
                
                return(

                  <div key={index} className="details_container">
                      <div className="header">
                          <img className="img" src={product.image} alt='img'></img>
                          <h2 className="title">{product.name}</h2>
                      </div>

                      <div className="description">
                          
                          <h3 className="title"><span>Precio: </span><input className='edit-input' type="number" value={wine.price}/></h3>
                          


                          <h3 className="title"><span>Características: </span><textarea className='edit-input' type="text"value={wine.description} /></h3>
                          <Link to='/'><button className="my_button">Volver</button></Link>
                      </div>
                  </div>
             
                )
              }) 
        }
    </div>
  )
}

export default Details
