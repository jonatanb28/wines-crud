const initialState = {
    allProducts: [],
    types: [],
    details: [],
    strains: [],
    brands: []
}

function reducer (state = initialState, {type, payload}) {
    
    switch(type){
        case 'getAllProducts':
            return{...state, allProducts: payload}
        case 'deleteProduct':
            return{...state}
        case 'getAllTypes':
            return{...state, types: payload}
        case 'getAllStrains':
            return{...state, strains: payload} 
        case 'getAllBrands':
            return{...state, brands: payload} 
        default: return state
        
    }
};

export default reducer;