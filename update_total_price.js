import { get_local_storage_data } from "./get_local_storage_data";

export const update_total_price=()=>{
    let local_storage_array=get_local_storage_data();

    let i_v=0;
    let product_total_price=local_storage_array.reduce((accum,curr_ele)=>{
       let p_p=curr_ele.p_price;
       return accum+p_p;
    },i_v);
    document.querySelector(".p-total-value").innerText=`₹${(product_total_price).toFixed(2)}`;
    document.querySelector(".p-final-value").innerText=`₹${(product_total_price>0)?(product_total_price).toFixed(2)+50:0}`;
    

};  