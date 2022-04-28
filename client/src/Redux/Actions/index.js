import axios from 'axios';
axios.defaults.baseURL = 'https://crud-wines-mysql-react.herokuapp.com/wines'

export function getAllProducts() {
    return async function(dispatch){
        const res = await axios.get('/');
        return dispatch({
            type: 'getAllProducts',
            payload: res.data
        })
    }
}

export function getProduct(id){
    return async function(dispatch){ 
        if(id === 'clear'){
            dispatch({type: 'getProduct',
            payload: 'clear'})
        } else{
            let json = await axios (`/${id}`)
            return dispatch({
            type: 'getProduct',
            payload: json.data
            })
        }
    }
     
}

export function getAllTypes(){
    return async function (dispatch){
        let json = await axios ('/types')
        return dispatch({
            type: 'getAllTypes',
            payload: json.data
        })
    }
};

export function getAllStrains(){
    return async function (dispatch){
        let json = await axios ('/strains')
        return dispatch({
            type: 'getAllStrains',
            payload: json.data
        })
    }
};

export function getAllBrands(){
    return async function (dispatch){
        let json = await axios ('/brands')
        return dispatch({
            type: 'getAllBrands',
            payload: json.data
        })
    }
};

export function deleteProduct(id){
    return async function(dispatch){
        console.log(id)
        await axios.delete(`/${id}`)
        return dispatch({
            type: 'deleteProduct',
        })
    }
}

export function createProduct(payload){
    return async function(dispatch){
        const product = await axios.post('/',payload)
        return dispatch({
            type: 'createProduct',
            payload: product
        })
    }
}

export function getProductByName(name){
    return async function(dispatch){
        console.log(name)
        let json = await axios.get('?name=' + name)
        console.log(json.data)
        return dispatch({
            type: 'getProductByName',
            payload: json
        })
    }
}

export function updateProduct(id, payload){
    return async function(dispatch){
        let json = await axios.put(`/${id}`, payload)
        return dispatch({
            type: updateProduct,
            payload: json
        })
    }
}

export function setFilterProducts(filter, value){
    return {
        type: 'setFilterProducts',
        payload: {
            filter,
            value
        }
    }
}

export function getFilterProducts(){
    return {
        type: 'getFilterProducts'
    }
}