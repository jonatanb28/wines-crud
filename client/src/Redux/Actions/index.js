import axios from 'axios';
const URI = 'http://localhost:8000/wines'

export function getAllProducts() {
    return async function(dispatch){
        const res = await axios.get(URI);
        return dispatch({
            type: 'getAllProducts',
            payload: res.data
        })
    }
}

export function getAllTypes(){
    return async function (dispatch){
        let json = await axios (URI + '/types')
        return dispatch({
            type: 'getAllTypes',
            payload: json.data
        })
    }
};

export function getAllStrains(){
    return async function (dispatch){
        let json = await axios (URI + '/strains')
        return dispatch({
            type: 'getAllTypes',
            payload: json.data
        })
    }
};

export function getAllBrands(){
    return async function (dispatch){
        let json = await axios (URI + '/brands')
        return dispatch({
            type: 'getAllTypes',
            payload: json.data
        })
    }
};

export function deleteProduct(id){
    return async function(dispatch){
        console.log(id)
        await axios.delete(`http://localhost:8000/wines/${id}`)
        return dispatch({
            type: 'deleteProduct',
        })
    }
}
