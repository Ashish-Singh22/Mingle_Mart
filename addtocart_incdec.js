import { get_local_storage_data } from "./get_local_storage_data";

export const addtocart_incdec=(event,id,price,stock) => {
 
    const parent_ele=document.getElementById(`card${id}`);

    const curr_price=parent_ele.querySelector(".p-price-discount");
    const curr_quantity=parent_ele.querySelector(".p-quantity-value");

    if(event.target.className === "p-btn p-quantity-inc" && Number(curr_quantity.innerText)<stock)
    {
        curr_quantity.innerText=Number(curr_quantity.innerText)+1;
    }
    else{
        if(Number(curr_quantity.innerText)>1)
        curr_quantity.innerText=Number(curr_quantity.innerText)-1;
    }
    curr_price.innerText=(Number(price)*Number(curr_quantity.innerText)).toFixed(2);

    let local_storage_array=get_local_storage_data();
    const new_array=local_storage_array.map((curr_ele) =>{
    
        if(curr_ele.id === id)
        {
            console.log("yes");
            console.log({"id":id,"p_quantity":Number(curr_quantity.innerText),"p_price":Number(curr_price.innerText)});
            return {"id":id,"p_quantity":Number(curr_quantity.innerText),"p_price":Number(curr_price.innerText)};
        }
        else{
            return curr_ele;
        }
    });
     console.log(new_array);
    localStorage.setItem("cartProducts",JSON.stringify(new_array));
};