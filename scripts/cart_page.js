
var remove = document.getElementsByClassName("cart_item")

     console.log(remove[0].innerHTML)
 


var remove_btn=document.getElementsByClassName("remove")

 let cart_item=[]

 cart_item.push(remove)

// console.log(cart_item)
 

 localStorage.setItem("remove1",JSON.stringify(cart_item))

var get= JSON.parse(localStorage.getItem("remove1"))
// console.log(get)

function removeItem(e){

        

   console.log(e.target.parentNode.parentNode.parentNode)

       e.target.parentNode.parentNode.parentNode.remove()
      
    
}