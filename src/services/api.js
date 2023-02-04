import axios from "axios";
const url = "https://dummyjson.com";
const getProducts = async () => {
    const response = await axios.get(`${url}/products`)
    
    return response.data.products
}
export {getProducts}
