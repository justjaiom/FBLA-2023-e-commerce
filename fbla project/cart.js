let cart = document.querySelectorAll(".add-to-cart");


let products = [
  {
    name: "1 room 1 bed",
    tag: "img1.1",
    price: 70,
    incart: 0,
  },
  {
    name: "2 room 1 bed",
    tag: "img3.3",
    price: 90,
    incart: 0,
  },
  {
    name: "suite",
    tag: "img2.2",
    price: 120,
    incart: 0,
  },
];

for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
  } else {
    localStorage.setItem("cartNumbers", 1);
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems !== null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].incart += 1;
  } else {
    product.incart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".container");
  let cartCost = localStorage.getItem("totalCost");
  let total = document.querySelector(".total");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
        <div class="products" style="margin-left: 80px">
            <img src='./imgs/${item.tag}.jpg'/>
            <span class="change">${item.name}</span>
        </div>
        <div class='quantity' style="text-align: center">${item.incart}</div>
        <div class='price' style="text-align: center">$${item.price}.00</div>


        `;
    });

    total.innerHTML += `
<div class='total'>$${cartCost}.00</div>
    
    `;
  }
}

displayCart();

function refreshPage(){
  window.reload();
} 

function setdate(event) {
  event.preventDefault();
  var checkin_date = document.getElementById("chekin-date").value;
  localStorage.setItem("checkin_date", checkin_date);
  var checkout_date = document.getElementById("chekout-date").value;
  localStorage.setItem("checkout_date", checkout_date);
}

function displayDate() {
  let checkin_date = localStorage.getItem("checkin_date");
  let checkout_date = localStorage.getItem("checkout_date");
  console.log(checkout_date);
  console.log(checkin_date);
  let date_container = document.querySelector(".date_container");
  let checkin = document.querySelector(".checkin");
  let checkout = document.querySelector(".checkout");



  if ( checkin_date === '') {
    checkin.innerHTML += `
    <form class = "book-form" onsubmit="setdate(event)">
    <div class = "form-item">
                  <input type = "date" id = "chekin-date">
                  <input type="submit"  onClick=refreshPage() value="submit "/>
              </div>
    </form>
  `;
  } 
  
  if (checkin_date) {
    checkin.innerHTML += `
    <div>${checkin_date}</div>
    `;
  }

  if (checkout_date === '') {
    checkout.innerHTML += `
    <form class = "book-form" onsubmit="setdate(event)">
    <div class = "form-item">
                  <input type = "date" id = "chekout-date">
                  <input type="submit"  onClick=refreshPage() value="submit "/>
              </div>
    </form>
  `;
  } 
  if (checkout_date) {
        checkout.innerHTML += `
  <div>  ${checkout_date}</div>
  `;
  }
}

displayDate();



function cleardate() {
  localStorage.checkin_date = ''
  localStorage.checkout_date = ''
}

function refreshPage() {
  window.location.reload();
}