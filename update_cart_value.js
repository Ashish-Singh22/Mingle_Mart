 const add_to_cart_item_no=document.querySelector(".add_to_cart_item_no");

export const update_cart_value=(local_storage_array)=>{
    return (add_to_cart_item_no.textContent=local_storage_array.length);
};