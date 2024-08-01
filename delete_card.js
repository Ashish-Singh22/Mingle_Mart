import { get_local_storage_data } from "./get_local_storage_data";
import { showToast } from "./showToast";
import { update_cart_value } from "./update_cart_value";

export const delete_card=(event,id)=>{
    let local_storage_array=get_local_storage_data();

    let new_array=local_storage_array.filter((curr_ele)=>{
       return curr_ele.id !== id;
    });
    // console.log(new_array);
    localStorage.setItem("cartProducts",JSON.stringify(new_array));
    
    // to remove that particular div

    let remove_div=document.getElementById(`card${id}`);
    if(remove_div)
    {
        remove_div.remove();
        showToast("delete",id);
    }
    
    update_cart_value(new_array);
};   