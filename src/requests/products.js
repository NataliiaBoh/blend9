import axios from "axios"
export  const getAllProducts = async() => {
    const response = await axios.get('https://dummyjson.com/products')
    return response
}