let userDetails = JSON.parse(localStorage.getItem("userDetails"));

let username = document.getElementById("name");
username.textContent = userDetails.firstname + " " + userDetails.lastname;

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
payable.textContent = "$" + userDetails.toPay;
