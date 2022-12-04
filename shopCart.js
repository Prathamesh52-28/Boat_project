var shopCart = JSON.parse(localStorage.getItem("shopCart")) || [];

console.log(shopCart.length)

display();

function display(){
    let t = document.getElementById("shopCart-count")
    console.log(t)

    shopCart.map(function(elem){
        var div = document.createElement("div");
        div.setAttribute("class","card");
        div.setAttribute("id",elem.id);

        var img = document.createElement("img");
        img.setAttribute("src",elem.url);

        var namev = document.createElement("p");
        namev.setAttribute("class","name");
        namev.textContent = elem.name;

        var price = document.createElement("p");
        price.setAttribute("class","price");
        price.textContent = "₹"+" "+elem.price;

        var rem = document.createElement("button");
        rem.setAttribute("class","rem");
        rem.textContent = "Remove";
        rem.addEventListener("click",function(){
            removeele(elem.id);
        });

        updateprice();
        div.append(img,namev,price,rem);
        document.getElementById("items").append(div);

    })
}



function removeele(idx){
    document.getElementById(idx).remove();

    for(let i=0;i<shopCart.length;i++){
        if(shopCart[i].id===idx){
            shopCart.splice(i,1);
            break;
        }
    }

    updateprice();
    document.getElementById("shopCart-count").textContent=shopCart.length;
    localStorage.setItem("shopCart",JSON.stringify(shopCart));
}


function updateprice(){
    var totalprice = 0;

    shopCart.map(function(elem){
        totalprice+=parseInt(elem.price);
    })

    document.getElementById("price").textContent="Price: "+"₹"+totalprice;

}



