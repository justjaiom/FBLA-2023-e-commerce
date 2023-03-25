let cart = document.querySelectorAll(".add-to-cart");


let products = [
  {
    name: "1 room 1 bed",
    tag: "img1.1",
    price: 69.00,
    incart: 0,
  },
  {
    name: "2 room 1 bed",
    tag: "img3.3",
    price: 99.00,
    incart: 0,
  },
  {
    name: "suite",
    tag: "img2.2",
    price: 119.00,
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

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".container");
  let cartCost = localStorage.getItem("totalCost");
  let total = document.querySelector(".total");
  let screenWidth = window.innerWidth;
  let fontSize = screenWidth > 768 ? "12px" : "24px"; 

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    let totalPrice = 0;
    Object.values(cartItems).map((item) => {
      totalPrice += item.incart * item.price;
      productContainer.innerHTML += `
        <div class="products" style="margin-left: 80px">
          <img src='./imgs/${item.tag}.jpg'/>
          <span class="change">${item.name}</span>
        </div>
        <div class='quantity' style="text-align: center">
          <button class="decrement-btn" onclick="decrementItem('${item.tag}')">-</button>
          <span>${item.incart}</span>
          <button class="increment-btn" onclick="incrementItem('${item.tag}', ${item.price})">+</button>
        </div>
        <div class='price' style="text-align: center">$${item.price}.00</div>
        <div class='total'id='grid-total';">$${cartCost}.00</div>
        `;
        
    });

    cartCost = totalPrice;
    localStorage.setItem("totalCost", cartCost);
    // total.innerHTML = `
    //   <div class='total' style="font-size: ${fontSize};">$${cartCost}.00</div>`;
  }

  var widthofheader = document.getElementById('setwidth').offsetWidth;
  document.getElementById("getwidth").style.width = widthofheader;

  var widthoftotal = document.getElementById ('grid-total').offsetWidth
  document.getElementById('cover').style.padding = widthoftotal/2 
  document.getElementById('cover').style.height = 300

  window.addEventListener("resize", function() {
    screenWidth = window.innerWidth;
    fontSize = screenWidth > 768 ? "24px" : "16px"; 
    total.querySelector(".total").style.fontSize = fontSize;
  });
}


function decrementItem(tag) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems[tag].incart > 0) {
    cartItems[tag].incart -= 1;
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    let cartCost = parseInt(localStorage.getItem("totalCost"));
    cartCost -= cartItems[tag].price;
    localStorage.setItem("totalCost", cartCost);
    displayCart();
  }
}

function incrementItem(tag, price) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  cartItems[tag].incart += 1;
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  let cartCost = parseInt(localStorage.getItem("totalCost"));
  cartCost += price;
  localStorage.setItem("totalCost", cartCost);
  displayCart();
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

function phpdata(event){
  event.preventDefault()
  var gname = document.getElementById('gname').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var cnn = document.getElementById('ccn').value;
  var expmonth = document.getElementById('expmonth').value;
  var cvv = document.getElementById('cvv').value;

  localStorage.setItem("gname", gname);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("cnn", cnn);
  localStorage.setItem("expmonth", expmonth);
  localStorage.setItem("cvv", cvv);
}


function cleardate() {
  localStorage.checkin_date = ''
  localStorage.checkout_date = ''
}

function refreshPage() {
  window.location.reload();
}
