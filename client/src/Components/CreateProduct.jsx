import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'

const URI = 'http://localhost:8000/wines';

const CreateProduct = () => {

    const navigate = useNavigate()
    
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [strain, setStrain] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');


    const [types, setTypes] = useState([])
    const getAllTypes = async()=>{
        const res = await axios.get(URI);
        setTypes(res.data)
    }

    const store = async(event) => {
        event.preventDefault();
        await axios.post(URI, {
            image: image,
            type: type,
            name: name,
            brand: brand,
            strain: strain,
            description: description,
            price: price
        });
        navigate('/')
    }

    return (
        <div>
            <h1>Crear Producto</h1>

            <form onSubmit = {store}>
                <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input 
                        value={image}
                        onChange={(event)=>setImage(event.target.value)}
                        type='text'
                        className="form-control"
                    />
                    <label className="form-label">Tipo</label>
                    <select 
                        
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateProduct

