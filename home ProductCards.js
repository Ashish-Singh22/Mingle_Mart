import { add_data_to_local_storage } from "./add_data_to_local_storage";
import { handle_incdec } from "./handle_incdec";

const p_container=document.querySelector(".p-container")
const p_template=document.querySelector(".p-template");

export const showProductContainer=(products)=>{
  if(!products)
  {
    return false;
  }
  products.forEach((currproduct) => {



    const {brand,category,description,id,image,name,price,stock}=currproduct;
  
    

    const p_clone=document.importNode(p_template.content,true);
    p_clone.querySelector("#cardvalue").setAttribute("id",`card${id}`);
    
    
    
    p_clone.querySelector(".category").textContent=category;
    p_clone.querySelector(".p-image").src=image;
    p_clone.querySelector(".p-name").textContent=name;
    p_clone.querySelector(".p-description").textContent=description;
    p_clone.querySelector(".p-price-discount").textContent=`₹${price}`;
    p_clone.querySelector(".p-price-original").textContent=`₹${price*4}`;
    p_clone.querySelector(".p-stock-value").textContent=stock;
   

    //for adding functionlity to increment and decrement button

    p_clone.querySelector(".p-quantity-incdec").addEventListener("click",(event) => {
         handle_incdec(event,id,stock);
    });



    // adding functionality to add to cart button to save data on local storage
    p_clone.querySelector(".p-addtocart").addEventListener("click",(event) => {
       add_data_to_local_storage(event,id,stock);
    });
   p_container.append(p_clone);
});
 
}