import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from 'react'

const URI = 'http://localhost:8000/wines';

const EditProduct = () => {

    const navigate = useNavigate()
    
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [strain, setStrain] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const id = useParams()

    const update = async (event) => {
        event.preventDefault()
        await axios.put(URI+id, {
            image: image,
            type: type,
            name: name,
            brand: brand,
            strain: strain,
            description: description,
            price: price
        })
        navigate('/')
    }

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = async () => {
       const res = await axios.get(URI+id);
       setName(res.data.name)
       setImage(res.data.image)
       setBrand(res.data.brand)
       setPrice(res.data.price)
       setStrain(res.data.strain)
       setType(res.data.type)
       setDescription(res.data.description)
    }

    return (
        <div>
            
        </div>
    )
}

export default EditProduct
