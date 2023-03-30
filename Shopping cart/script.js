  let cartItems=[]

        function addToCart(item){
            let itemExist = false;
            for(let i=0;i<cartItems.length;i++){
                if(cartItems[i].item === item){
                    cartItems[i].quantity++;
                    itemExist=true;
                    break;
                }
            }
            if(!itemExist){
                cartItems.push({item:item,quantity:1})
            }

            updateCart();
        }

        function removeFromcart(item){
            for(let i=0;i<cartItems.length;i++){
                if(cartItems[i].item === item){
                    if(cartItems[i].quantity > 1){
                        cartItems[i].quantity--;
                    }
                    else{
                        cartItems.splice(i,1)
                    }
                    break;
                }
            }
            updateCart();
        }

        function updateCart(){
            const cartElement = document.getElementById("cart")
            cartElement.innerHTML="";

            for(let i = 0;i<cartItems.length;i++){
                const item = cartItems[i].item
                const quantity = cartItems[i].quantity

                const li = document.createElement('li')
                const span = document.createElement("span")
                
                const quantityField = document.createElement('h3')
                quantityField.innerText=quantity
                quantityField.style.display = "inline-block"

                const addButton = document.createElement('button')
                addButton.textContent="Add"
                addButton.style.display = "inline-block"
                addButton.addEventListener("click",()=>addToCart(item))

                const removeButton = document.createElement('button')
                removeButton.textContent="Remove"
                removeButton.style.display = "inline-block"
                removeButton.addEventListener("click",()=>removeFromcart(item))


                span.textContent = `Item: ${item}`

                span.appendChild(addButton)
                span.appendChild(quantityField)
                span.appendChild(removeButton)
                li.appendChild(span)
                cartElement.appendChild(li)

                // const button = document.createElement("button")
                // button.textContent="Remove"
                // button.addEventListener("click",()=>removeFromcart(item))

                // span.appendChild(button)
                
        
            }
        }