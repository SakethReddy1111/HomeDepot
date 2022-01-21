let cartDivHere = document.getElementById("viewProducts");

let cartItems = JSON.parse(localStorage.getItem("addToCart"));

let updatePrice = () => {
  total = 0;
  save = 0;
  toPay = 0;

  cartItems.forEach((el) => {
    if (Number(el.mrp != 0)) {
      total += Number(el.mrp) * el.quantity;
      save +=
        (Number(el.mrp) - Number(el.msp) - Number(`0.${el.mspChange}`)) *
        el.quantity;
    } else {
      total += Number(el.msp) * el.quantity;
    }

    toPay += (Number(el.msp) + Number(`0.${el.mspChange}`)) * el.quantity;
  });

  percentageSaved = Math.ceil((save.toFixed(2) / total.toFixed(2)) * 100);

  let totalPrice = document.getElementById("totalPrice");
  totalPrice.textContent = "$" + total.toFixed(2);

  let savings = document.getElementById("savings");
  savings.textContent = "-$" + save.toFixed(2);

  let totalPayable = document.getElementById("totalPayable");
  totalPayable.textContent = "$" + toPay.toFixed(2);

  let totalSvings = document.getElementById("totalSvings");
  totalSvings.textContent = percentageSaved.toFixed(2) + "%";
};

let showProducts = () => {
  cartDivHere.innerHTML = "";
  cartItems.forEach((el, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "class911");

    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.imageUrl;
    div1.append(img);
    div1.setAttribute("class", "class912");

    let div2 = document.createElement("div");

    let name = document.createElement("h3");
    name.textContent = el.name;
    div2.append(name);

    let div21 = document.createElement("div");

    let i1 = document.createElement("i");
    i1.setAttribute("class", "fas fa-minus");
    i1.addEventListener("click", function () {
      quantityUpdate(index, -1);
    });

    let span = document.createElement("span");
    span.textContent = el.quantity;
    span.setAttribute("class", "id5214");

    let i2 = document.createElement("i");
    i2.setAttribute("class", "fas fa-plus");
    i2.addEventListener("click", function () {
      quantityUpdate(index, 1);
    });

    let div569 = document.createElement("div");

    div569.append(i1, span, i2);

    let div989 = document.createElement("div");
    let i5 = document.createElement("i");
    i5.setAttribute("class", "fas fa-trash-alt");

    i5.addEventListener("click", function () {
      delFunc(index);
    });

    div989.append(i5);

    div2.setAttribute("class", "class913");
    div569.setAttribute("class", "class6352");
    div21.setAttribute("class", "class00213");
    div989.setAttribute("class", "class32100");

    div21.append(div569, div989);
    div2.append(div21);

    let div3 = document.createElement("div");
    div3.setAttribute("class", "class914");

    let msp = document.createElement("p");
    msp.textContent = "$" + el.msp + "." + el.mspChange;
    if (Number(el.mrp) != 0) {
      let mrp = document.createElement("p");
      mrp.textContent = "$" + el.mrp;

      let save = document.createElement("p");
      savedAmount =
        Number(el.mrp) - Number(el.msp) - Number(`0.${el.mspChange}`);

      sumofall = savedAmount.toFixed(2);

      percentageSaved = Math.ceil((sumofall / Number(el.mrp)) * 100);

      save.textContent = "Save " + percentageSaved + "%";

      div3.append(msp, mrp, save);
    } else {
      div3.append(msp);
    }

    div.append(div1, div2, div3);
    cartDivHere.append(div);
  });

  updatePrice();
};

showProducts();

function quantityUpdate(i, nexteven) {
  cartItems[i].quantity = Number(cartItems[i].quantity) + nexteven;

  if (cartItems[i].quantity == 0) {
    cartItems.splice(i, 1);
  }

  localStorage.setItem("addToCart", JSON.stringify(cartItems));

  showProducts();
}

function delFunc(i) {
  cartItems.splice(i, 1);

  localStorage.setItem("addToCart", JSON.stringify(cartItems));

  showProducts();
}
