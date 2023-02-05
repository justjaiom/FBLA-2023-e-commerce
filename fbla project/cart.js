function addToCart(event) {
    let item = event.target.getAttribute("data-item");
    cart.push(item);
    console.log(`${item} has been added to the cart.`);
    console.log(`The current cart items are: ${cart}.`);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

const buttons = document.querySelectorAll('.add-to-cart');
buttons.forEach(button => {
  button.addEventListener('click', addToCart);
});
