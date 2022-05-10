import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import React from 'react';
import { Link } from "react-router-dom";
import { createProduct, getAllBrands, getAllStrains, getAllTypes } from "../Redux/Actions";
import './inputs.css'
import swal from 'sweetalert';

export default function CreateProduct() {

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllTypes())
        dispatch(getAllBrands())
        dispatch(getAllStrains())
    },[dispatch])

    const tipo = useSelector((state)=>state.types)
    const strain = useSelector((state)=>state.strains)
    const brand = useSelector((state)=>state.brands)

    const [input, setInput] = useState({
        name: '',
        image:'',
        price: 0,
        typeId: 0,
        strainId: 0,
        brandId: 0,
        description: ''
    })

    function handleChange(event){
        setInput({
            ...input, [event.target.name]:event.target.value 
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(createProduct(input))
        swal({
            title: "¡Producto creado!",
            text: "¡Puedes seguir creando más productos!",
            icon: "success",
            button: "Ok!",
          });
        setInput({
            name: '',
            image:'',
            price: 0,
            typeId: 0,
            strainId: 0,
            brandId: 0,
            description:''
        })
    }

    return(
        
        <div className="body">
            
            <h1 className="h1">Agregar Producto</h1>
           
            <form className="form" onSubmit={event=>handleSubmit(event)}>
                <div className="div">
                    <label className="label" htmlFor="">Name:</label>
                    <input className='input' type="text" value={input.name} name='name' placeholder="Nombre del producto" onChange={handleChange}/>
                </div>
                <div className="div">
                    <label className="label" htmlFor="">Image:</label>
                    <input className='input' type='text' value={input.image} name='image' placeholder="Dirección de img" onChange={handleChange}/>
                </div>
                <div className="div">
                    <label className="label" htmlFor="">Precio:</label>
                    <input className='input' type='number' value={Number(input.price)} name='price' onChange={handleChange}/>
                </div>
                <div className="div">
                    <label className="label">Tipo:</label>
                    <select className="select" onChange={handleChange} name='typeId'>
                    <option className="option" value='0'>Tipo</option>
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
                    <option className="option" value='0'>Variedad</option>
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
                    <option className="option" value='0'>Familia</option>
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
                <div className="div">
                    <label className="label" htmlFor="">Descripción:</label>
                </div>
                <div>
                    <textarea className='textarea' type='text' value={input.description} name='description' onChange={handleChange}/>
                </div>

                <button className="create_button" type="submit">Agregar a lista</button>
                <div>
                    <Link className="link-create-product" to='/'>Volver</Link>
                </div>
                
            </form>
            
        </div>
    )

}



