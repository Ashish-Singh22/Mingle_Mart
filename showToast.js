 export const showToast=(operation,id)=>{

    let  toast=document.createElement("div");
    toast.classList.add("toast");
    if(operation==="add")
    {
       toast.textContent=`Product with ID ${id} has been added`;
    }
    if(operation === "delete")
    {
        toast.textContent=`Product with ID ${id} has been removed`;
    }
    document.body.appendChild(toast);


    setTimeout(()=>{
         toast.remove();
    },2000);
 };