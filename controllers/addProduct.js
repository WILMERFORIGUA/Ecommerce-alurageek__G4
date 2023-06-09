//  import   ../services/client-service.js"     CRUD
import { clientService } from "../services/client-service.js";

const form = document.querySelector('.add-product__form');

// QUERY SELECTOR     ATRIBUTOS DE:  db.json
// function uuid.v4 returns a 36-character alphanumeric string  (UUID=unique identifier).
const createProduct = async (e) => {
    e.preventDefault();
    const id = uuid.v4();
    const name = document.querySelector('#product-name').value;
    const category = document.querySelector('#category').value;
    const url = document.querySelector('#img').value;
    const price = document.querySelector('#price').value;
    const description = document.querySelector('#description').value;
    
    //jsonProduct    ATRIBUTOS DE:  db.json
    const jsonProduct = JSON.stringify({id, name, category, url, price, description});
    try {
        await clientService.createProduct(jsonProduct);
        window.location.href = './completed.html'
    } catch (error) {
        console.log(error)
    }
}

//    escuchador
form.addEventListener('submit', createProduct);

