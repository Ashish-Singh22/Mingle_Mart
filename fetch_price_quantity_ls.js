import { get_local_storage_data } from "./get_local_storage_data";

export const fetch_price_quantity_ls=(id,price) => {
    let local_storage_array=get_local_storage_data();

    let existing_product=local_storage_array.find((curr_ele)=> {
         return curr_ele.id === id;
    });
    return {"p_price":existing_product.p_price,"p_quantity":existing_product.p_quantity};
};