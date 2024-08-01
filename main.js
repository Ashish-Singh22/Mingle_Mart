import './style.css'
import products from "./api/products.json";
import { showProductContainer } from './home ProductCards';

 console.log(products);

 // showing products card dynamically
 //to get reference of javascript directly pree ctrl+space before =>(products) below
 showProductContainer(products);

