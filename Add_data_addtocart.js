import './style.css'
import products from "./api/products.json";
import { get_local_storage_data } from './get_local_storage_data';
import { fetch_price_quantity_ls } from './fetch_price_quantity_ls';
import { delete_card } from './delete_card';
import { addtocart_incdec } from './addtocart_incdec';
import { update_total_price } from './update_total_price';
// import { delete_card } from './delete_card';



const p_container=document.querySelector(".p-container");
const p_template=document.querySelector(".p-template");
const show_local_storage_data=() => {
    let local_storage_array=get_local_storage_data();
    
    let filter_data=products.filter((curr_product)=>{
        return local_storage_array.some((curr_ele)=>{
            return curr_ele.id === curr_product.id;
        });
    });


   filter_data.forEach((curr_element)=>{

    
    const {brand,category,description,id,image,name,price,stock}=curr_element;
    

   
   
    let price_quantity=fetch_price_quantity_ls(id,price);
    
    const p_clone=document.importNode(p_template.content,true);


    p_clone.querySelector("#cardvalue").setAttribute("id",`card${id}`);
    p_clone.querySelector(".category").innerText=curr_element.category;
    p_clone.querySelector(".p-image").src=image;
    p_clone.querySelector(".p-name").innerText=name;
     

    p_clone.querySelector(".p-price-discount").innerText=price_quantity.p_price.toFixed(2);
    p_clone.querySelector(".p-quantity-value").innerText=price_quantity.p_quantity;


    p_clone.querySelector(".remove_item").addEventListener("click",(event)=>{
       delete_card(event,id);
       update_total_price();
    });
    p_clone.querySelector(".p-quantity-incdec").addEventListener("click",(event) => {
        addtocart_incdec(event,id,price,stock);
        update_total_price();
    });


   p_container.append(p_clone);
});
};




show_local_storage_data();

update_total_price();
