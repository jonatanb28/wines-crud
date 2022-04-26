// import React, {useEffect, useState} from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const URI = 'http://localhost:8000/wines';

// const Details = () => {

//     const {id} = useParams();
//     // const navigate = useNavigate()
    
//     const [product, setProduct] = useState([]);
    
//     useEffect(()=>{
//         getProduct()
//     },[])
    
//     const getProduct = async()=>{
//         const res = await axios.get(URI+id);
//         setProduct(res.data)
//     }

//   return (
//     <div>
//             { product.length > 0 ? 
//                 <div className="container">
//                     <div className="details_container">
//                         <div className="header">
//                             <img className="img" src={product.image} alt='img'></img>
//                             <h2 className="title">{product.name}</h2>
//                         </div>

//                         <div className="description">
//                             <h2 className="title"><span>Type: </span>{product.type}</h2>
    
//                             <h3 className="title"><span>Pecio: </span>{product.price}</h3>
//                             <h3 className="title"><span>Cepa: </span>{product.strain}</h3>
//                             <h3 className="title"><span>Familia: </span>{product.brand}</h3>
                           
//                             <Link to='/'><button className="my_button">Volver</button></Link>
//                         </div>
//                     </div>
//                 </div>
//                 :  (<h1>Loading</h1>) 
//             }
//         </div>
//   )
// }

// export default Details
