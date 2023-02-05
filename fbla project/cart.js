let product = [
    {name: "item1", description: "1 bed 1 room ", price: 70, image: "imgs/img1.1.webp"},
    {name: "item2", description: "2 bed 1 room", price: 90, image: "imgs/img2.2.webp"},
    {name: "item3", description: "suite", price: 120, image: "imgs/img3.3.webp"}
  ];
  
  let cart = [];
  
  function addToCart(event) {
    let itemName = event.target.getAttribute("data-item");
    let item = product.find(p => p.name === itemName);
    cart.push(item);
    console.log(`${item.name} has been added to the cart.`);
    console.log(`The current cart items are:`, cart);
  }
  
  function renderProducts(products) {
    let productCards = "";
    for (let product of products) {
      productCards += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" class="product-card-img">
          <h3 class="product-card-name">${product.name}</h3>
          <p class="product-card-description">${product.description}</p>
          <p class="product-card-price">${product.price}</p>
          <button class="add-to-cart" data-item="${product.name}" onclick="addToCart(event)">Add To Cart</button>
        </div>
      `;
    }
    return productCards;
  }
  
  const productContainer = document.querySelector('.product-container');
  productContainer.innerHTML = renderProducts(product);
  
  const buttons = document.querySelectorAll('.add-to-cart');
  buttons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
