import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands, getAllStrains, getAllTypes, getFilterProducts, setFilterProducts, getAllProducts } from '../Redux/Actions';
import './inputs.css'

function FilterBar() {

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllTypes())
        dispatch(getAllBrands())
        dispatch(getAllStrains())
    },[dispatch])

    const tipo = useSelector((state)=>state.types)
    const strain = useSelector((state)=>state.strains)
    const brand = useSelector((state)=>state.brands)
    const filter = useSelector((state)=>state.filters)

    function handleChange(event){
        dispatch(setFilterProducts(event.target.name, event.target.value))
    }

    useEffect(()=>{
        dispatch(getFilterProducts())
    }, [dispatch, filter])

    function handleDeleteFilter(){
        dispatch(getAllProducts())
    }

  return (
    <div>

            <div className="div">
                <label className="label">Tipo:</label>
                <select className="select" onChange={handleChange} name='type'>
                <option className="option">Tipo</option>
                {tipo &&
                    tipo.map((tipo) => {
                    return (
                        <option className="option" value={tipo.name}>
                            {tipo.name}
                        </option>
                    );
                    })}
                </select>
            </div>
            <div className="div">
                <label className="label">Variedad:</label>
                <select className="select" onChange={handleChange} name='strain'>
                <option className="option">Variedad</option>
                {strain &&
                    strain.map((strain) => {
                    return (
                        <option className="option" value={strain.name}>
                            {strain.name}
                        </option>
                    );
                    })}
                </select>
            </div>
            <div className="div">
                <label className="label">Familia:</label>
                <select className="select" onChange={handleChange} name='brand'>
                <option className="option">Familia</option>
                {brand &&
                    brand.map((brand) => {
                    return (
                        <option className="option" value={brand.name} onChange={handleChange}>
                            {brand.name}
                        </option>
                    );
                    })}
                </select>
                
            </div>
            <div className="div">
                <label className="label">Precio:</label>
                <select className="select" onChange={handleChange} name='price'>
                    <option className="option" value="ascendent">Precio</option> 
                    <option className="option" value="ascendent">Menor a mayor valor</option> 
                    <option className="option" value="descendent">Mayor a menor valor</option> 
                </select>
                
            </div>

            <button className="btn btn-dark mt-2 mb-2" onClick={handleDeleteFilter}>Limpiar Filtros</button>

    </div>
  )
}

export default FilterBar