let VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
});
// let product = [
//     {
//         id:1,
//         sl:1,
//         Image:"../image/Invicta Pro Diver Stainless Steel Automatic.jpg",
//         name:"Rolex Stainless Steel Automatic",
//         price:9955000,
//     },
//     {
//         id:2,
//         sl:1,
//         Image:"../image/Lady-Datejust 28 279163 Gold.jpg",
//         name:"Lady-Datejust 236996 Gold",
//         price:62550000,
//     },
//     {
//         id:3,
//         sl:1,
//         Image:"../image/ROLEX Datejust   Gold.jpg",
//         name:"ROLEX Datejus 196",
//         price:76625500,
//     },
//     {
//         id:4,
//         sl:1,
//         Image:"../image/rolex white 12x.jpg",
//         name:"rolex white 12x",
//         price:34525500,
//     },
//     {
//         id:5,
//         sl:1,
//         Image:"../image/seiko 2133sv.jpg",
//         name:"seiko 2133sv",
//         price:87528500,
//     },
//     {
//         id:6,
//         sl:1,
//         Image:"../image/Seiko 5 Men's Stainless Steel.jpg",
//         name:"Seiko 5 Men's Stainless",
//         price:78925500,
//     },
//     {
//         id:7,
//         sl:1,
//         Image:"../image/Seiko Dark Green Sunray.jpg",
//         name:"Seiko Dark Green Sunray",
//         price:76525500,
//     },
//     {
//         id:8,
//         sl:1,
//         Image:"../image/SSC293P2666.jpg",
//         name:"rolex Stainless Steel",
//         price:67825500,
//     },
    
// ]
// localStorage.setItem("product",JSON.stringify(product));
let product = JSON.parse(localStorage.getItem("product"));
function renderProduct(){
    let result = "";
    for(let i=0 ; i < product.length ;i++){
        let total1 = product[i].price;
        let total = VND.format(total1);
        result+=`
        <div class="item">
        <img src="${product[i].Image}" alt="">
        <div class="name">${product[i].name}</div>
        <div class="price">${total}</div>
        <button onclick="addCart(${product[i].id})">
          <i class="fa-solid fa-cart-shopping"></i>
          Mua Hàng
        </button>
        </div>
        `
    }
    document.getElementById("list-products").innerHTML= result;
}
    renderProduct()
function addCart(id){
    let listCart=JSON.parse(localStorage.getItem("listCart"));
    // console.log(listCart);
    if (listCart == null){
        // console.log("aaa");
        listCart = [];
        for(let j=0; j<product.length; j++){
            console.log();
            if (product[j].id == id){
                listCart.push(product[j])
                console.log("bbb");
                localStorage.setItem("listCart",JSON.stringify(listCart))
            }
        }
    }
    let flag = false;
    for(i=0; i<listCart.length; i++){
        if (listCart[i].id ==id){
            flag = true;
            break;
        }else{
            flag = false;
        }
    }
    if (!flag){
        for(let j=0; j<listCart.length; j++){
            if(listCart[j].id == id){
                listCart.push(listCart[j])
                localStorage.setItem("listCart",JSON.stringify(listCart))
            }
        }
    }
}

let slideIndex = 0; 
showSlides(); 
function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
    if (slides.length > 0 && dots.length > 0) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }
    setTimeout(showSlides, 2000);
}