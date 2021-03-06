const initialState = {
    allProducts: [],
    copyProducts:[],
    deletedProducts: [],
    types: [],
    details: [],
    strains: [],
    brands: [],
    filters: {
        type: '',
        strain: '',
        brand: '',
        price: ''
    }
}

function reducer (state = initialState, {type, payload}) {
    
    switch(type){
        case 'getAllProducts':
            return{...state, allProducts: payload, copyProducts: payload}
        case 'getProductByName':
            return{...state, allProducts:payload}
        case 'deleteProduct':
            return{...state, deletedProducts: payload}
        case 'getAllTypes':
            return{...state, types: payload}
        case 'getAllStrains':
            return{...state, strains: payload} 
        case 'getAllBrands':
            return{...state, brands: payload} 
        case 'getProduct':
            if(payload === 'clear'){
                return {...state, details: []}
            } else return{...state, details: payload}
        case 'createProduct':
            return{...state}
        case 'updateProduct':
            return{...state}
        case 'setFilterProducts':
            return{...state, 
                filters:{
                    ...state.filters, 
                    [payload.filter]: payload.value
            }}
        case 'getFilterProducts':
            
            let Products = state.allProducts;
            console.log(Products)
            
            if (state.filters.type) {
               
              const filtered = [
                ...Products.filter(
                    product=>{
                        return product.type.name.includes(state.filters.type);
                    }

                )
              ];
      
              Products = filtered;
            }

            if (state.filters.strain) {
                
              if(Products[0]){
                const filtered = [
                  ...Products.filter((product)=>product.strain.name === state.filters.strain)
                ];
        
                Products = filtered;
              }
            }

            if (state.filters.brand) {
               
              if(Products[0]){
                const filtered = [
                  ...Products.filter((product)=>product.brand.name === state.filters.brand)
                ];
        
                Products = filtered;
              }
               
            }
    
            if (state.filters.price === "ascendent") {
              Products = [
                ...Products.sort((x, y) => {
                  if (x.price < y.price) {
                    return -1;
                  }
                  if (x.price > y.price) {
                    return 1;
                  }
                  return 0;
                }),
              ];
            }

            if (state.filters.price === "descendent") {
                Products = [
                  ...Products.sort((x, y) => {
                    if (y.price < x.price) {
                      return -1;
                    }
                    if (y.price > x.price) {
                      return 1;
                    }
                    return 0;
                  }),
                ];
              }
      
            return {
              ...state,
                copyProducts: Products[0] ? [...Products] : ["null"],
            };
        default: return state
        
    }
};

export default reducer;