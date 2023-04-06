//CRUD

//CREATE     
            // FETCH        (async    -   await )

const createProduct = async (jsonProduct) => {
    try {
        const response = await fetch(`http://localhost:3000/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonProduct
        });
        return response.json;
    } catch (error) {
        return console.log(error);
    }
}

//  READ    
const readProducts = () => fetch('http://localhost:3000/products').then(response => response.json());

const readProduct = (id) => fetch(`http://localhost:3000/products/${id}`).then(response => response.json());

// DELETE   
const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });
};

//UPDATE
const updateProduct = (id, jsonProduct) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonProduct
    })
    .then(response => response.json)
    .catch(error => console.log(error))
}

//   EXPORT  const clientService  para ejecutar  los METODOS DE client-service.js

export const clientService = {
    createProduct,
    readProducts,
    readProduct,
    updateProduct,
    deleteProduct,
};