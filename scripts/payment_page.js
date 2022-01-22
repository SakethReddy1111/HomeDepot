let toPay = JSON.parse(localStorage.getItem("payableAmount"));

let div = document.getElementById("toPay");
div.textContent = "$" + Number(toPay).toFixed(2);

let navToDelivery = () => {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let hno = document.getElementById("hno").value;
  let town = document.getElementById("town").value;
  let country = document.getElementById("country").value;
  let pin = document.getElementById("pin").value;
  let mobile = document.getElementById("mobile").value;

  let userDetails = {
    firstname: firstname,
    lastname: lastname,
    hno: hno,
    town: town,
    country: country,
    pin: pin,
    mobile: mobile,
    toPay: toPay,
  };

  localStorage.setItem("userDetails", JSON.stringify(userDetails));

  window.location.href = "success_page.html";
};
