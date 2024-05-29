import { Product } from "../Product";

export type ProductList = Array<Product>


export const getProducts = async (): Promise<ProductList> => {

    const productsList = await fetch(" http://localhost:5000/products", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(async (res) => {
        const productList: ProductList = await res.json()

        if(res.ok){
            return productList
        }
        else {
            console.log(`Erro: ${productList}`)
        }
    })
    return productsList
}

document.addEventListener("DOMContentLoaded", getProducts);
