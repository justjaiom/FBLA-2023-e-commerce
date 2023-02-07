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
    tag: "img2.2",
    price: 90,
    incart: 0,
  },
  {
    name: "suite",
    tag: "img3.3",
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
  console.log(cartItems);
  let productContainer = document.querySelector(".container");
  let cartCost = localStorage.getItem("totalCost");
  let total = document.querySelector(".total");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      console.log(item);
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
    
    `
  }
}

displayCart();
