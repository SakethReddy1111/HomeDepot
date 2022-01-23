let userDetails = JSON.parse(localStorage.getItem("userDetails"));

let username = document.getElementById("name");
username.textContent = userDetails.firstname + " " + userDetails.lastname;

let cartproducts = JSON.parse(localStorage.getItem("addToCart"));
cartproducts = [];
localStorage.setItem("addToCart", JSON.stringify(cartproducts));

let payableamountIs = JSON.parse(localStorage.getItem("payableAmount"));
payableamountIs = 0;
localStorage.setItem("payableAmount", JSON.stringify(payableamountIs));

let address = document.getElementById("address");
address.textContent =
  userDetails.hno +
  ", " +
  userDetails.town +
  " ," +
  userDetails.country +
  " ," +
  userDetails.pin;

let number = document.getElementById("number");
number.textContent = userDetails.mobile;

let payable = document.getElementById("payable");
payable.textContent = "$" + Number(userDetails.toPay).toFixed(2);

function treaser() {
  window.location.href = "index.html";
}
