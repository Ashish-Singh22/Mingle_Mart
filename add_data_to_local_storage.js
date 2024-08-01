import { get_local_storage_data } from "./get_local_storage_data";
import { showToast } from "./showToast";
import { update_cart_value } from "./update_cart_value";
get_local_storage_data();
export const add_data_to_local_storage=(event,id,stock) => {
   let local_storage_array=get_local_storage_data();
   update_cart_value(local_storage_array);
   const curr_product=document.getElementById(`card${id}`);
   let p_price=curr_product.querySelector(".p-price-discount").innerText;
   let p_quantity=Number(curr_product.querySelector(".p-quantity-value").innerText);
   p_price=Number(p_price.replace("₹",""));
   console.log(p_quantity,p_quantity*p_price);
   
   let existing_prod=local_storage_array.find((curr_product)=> curr_product.id === id);
   console.log(existing_prod);
   if(existing_prod && p_quantity>1)
   {
  
      p_quantity=Number(existing_prod.p_quantity)+p_quantity;
      p_price=p_price * p_quantity;
      let new_card={id,p_quantity,p_price};

      let updated_cart=local_storage_array.map((curr_product)=>{
          return curr_product.id === id ? new_card : curr_product;
      });
      console.log(updated_cart);
      localStorage.setItem("cartProducts",JSON.stringify(updated_cart));
      return false;
   }
   
   
   if(existing_prod && p_quantity<=1)
   {
    return false;
   }
   p_price=p_price*p_quantity;
   local_storage_array.push({id,p_quantity,p_price});
   localStorage.setItem("cartProducts",JSON.stringify(local_storage_array));
   showToast("add",id);
//    localStorage.clear();

   update_cart_value(local_storage_array);

};