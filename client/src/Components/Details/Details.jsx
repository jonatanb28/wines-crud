import React, {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, getProduct } from '../../Redux/Actions/index.js';
import './Details.css'

const Details = () => {

  const {id} = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.details)
  console.log(productDetail)

  useEffect(()=>{
    dispatch(getProduct(id))
    return(function cleanUp(){
        dispatch(getProduct('clear'))
    }) 
  }, [dispatch, id]);

  function handleDelete(id){
    dispatch(deleteProduct(id));
    navigate('/')
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
                          <h2 className="title"><span>Tipo: </span>{product.type.name}</h2>
                          <h3 className="title"><span>Bodega: </span>{product.brand.name}</h3>
                          <h3 className="title"><span>Precio: </span>${product.price.toLocaleString("es-AR")}</h3>
                          <h3 className="title"><span>Variedad: </span>{product.strain.name}</h3>
                          <h3 className="title"><span>Características: </span>{product.description}</h3>
                          <button onClick={handleDelete(product.id)} className='btn-delete'>Eliminar</button>
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
