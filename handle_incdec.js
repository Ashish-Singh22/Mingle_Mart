export const handle_incdec=(event,id,stock) => {
  const curr_product=document.getElementById(`card${id}`);

//   console.log(curr_product.querySelector(".p-quantity-value").textContent);

const p_quantity_value=curr_product.querySelector(".p-quantity-value");
let quantity= parseInt(p_quantity_value.getAttribute("data-quantity")) || 1;

// console.log(event.target.className);
if(event.target.className == "p-btn p-quantity-inc")
{
    // console.log(quantity,stock);
    if(quantity < stock)
    {
        quantity += 1;
    }
    
    
}
if(event.target.className == "p-btn p-quantity-dec")
{
    console.log(quantity,stock);
    if(quantity > 1)
    {
        quantity -= 1;
    }
}
console.log(quantity);
p_quantity_value.innerText=quantity;
p_quantity_value.setAttribute("data-quantity",quantity.toString());
return quantity;







};