let vases = [
  {
    id: "1",
    name: "13 in. High Lavoisier Antiqued Gold Metal/Glass Hinged Flower Vases (Set of 10)",
    mrp: "141.91",
    msp: "101",
    mspChange: "02",
    rating: "4",
    imageUrl:
      "https://images.thdstatic.com/productImages/fcb07c41-34f2-4e27-af44-5b7ffdd0adda/svn/gold-two-s-company-vases-min100-64_400.jpg",
  },
  {
    id: "2",
    name: "2-Piece White Metal Roma Pitcher Vase Set by LuxenHome",
    mrp: "72.50",
    msp: "59",
    mspChange: "97",
    rating: "5",
    imageUrl:
      "https://images.thdstatic.com/productImages/8c88f955-e3ab-4040-acbd-049ffd6cc7f8/svn/white-luxenhome-vases-whd747-64_400.jpg",
  },
  {
    id: "3",
    name: "3-Piece Metal Multi-Tone Vase Set",
    mrp: "0",
    msp: "103",
    mspChange: "30",
    rating: "5",
    imageUrl:
      "https://images.thdstatic.com/productImages/cbc1ad1b-7e6e-4a4f-aad8-698039edc565/svn/gray-vases-whd939-64_400.jpg",
  },
  {
    id: "4",
    name: "White Fiberglass Farmhouse Decorative Vase by Litton Lane",
    mrp: "0",
    msp: "95",
    mspChange: "91",
    rating: "4",
    imageUrl:
      "https://images.thdstatic.com/productImages/f8f436ab-6660-477c-bf6b-24985ea17564/svn/white-litton-lane-vases-14887-64_400.jpg",
  },
  {
    id: "5",
    name: "Modern Tall Bamboo Floor Vase, Fill Up with Dried Branches or Flowers, Glossy Red by Uniquewise",
    mrp: "0",
    msp: "266",
    mspChange: "63",
    rating: "4",
    imageUrl:
      "https://images.thdstatic.com/productImages/cf5dd842-b65f-40f8-8b91-aedcdb9d203c/svn/red-uniquewise-vases-qi003243-64_400.jpg",
  },
  {
    id: "6",
    name: "Stroil 3-Piece Ceramic Decorative Vase Set in Gold by Artistic Weavers",
    mrp: "0",
    msp: "304",
    mspChange: "87",
    rating: "0",
    imageUrl:
      "https://images.thdstatic.com/productImages/71b86961-e25d-4d65-a491-668449912ffe/svn/gold-artistic-weavers-vases-s00161000596-64_400.jpg",
  },
  {
    id: "7",
    name: "Oriental Furniture 14 in. Famille Rose porcelain Fishbowl",
    mrp: "0",
    msp: "169",
    mspChange: "00",
    rating: "0",
    imageUrl:
      "https://images.thdstatic.com/productImages/57003689-e352-425d-875e-595d7b443cbb/svn/multi-colored-vases-bw-14fish-rm2-64_400.jpg",
  },
  {
    id: "8",
    name: "Silver Aluminum Contemporary Vase (set of 2)",
    mrp: "273.79",
    msp: "231",
    mspChange: "74",
    rating: "0",
    imageUrl:
      "https://images.thdstatic.com/productImages/09ca3ffb-0de5-4bf2-ae1a-10e91e205826/svn/silver-vases-040384-64_400.jpg",
  },
  {
    id: "9",
    name: "39 in. High Black Tall Bamboo Floor Standing Vase with Wicker Woven Design by Uniquewise",
    mrp: "0",
    msp: "164",
    mspChange: "57",
    rating: "5",
    imageUrl:
      "https://images.thdstatic.com/productImages/0dd4d3a6-8901-45bf-b1fa-331620f7033c/svn/black-uniquewise-vases-qi003822-64_400.jpg",
  },
  {
    id: "10",
    name: "23.5 in. Porcelain Decorative Vase in Blue by Oriental Furniture",
    mrp: "0",
    msp: "76",
    mspChange: "10",
    rating: "5",
    imageUrl:
      "https://images.thdstatic.com/productImages/9ad2701a-fad8-4dd1-9e00-889e98355564/svn/multi-oriental-furniture-vases-bw-umbr-bwfl-64_400.jpg",
  },
  {
    id: "11",
    name: "14 in. Floral Blue and White Porcelain Fishbowl by Oriental Furniture",
    mrp: "0",
    msp: "108",
    mspChange: "30",
    rating: "4",
    imageUrl:
      "https://images.thdstatic.com/productImages/29fdc665-d9fd-4d69-99da-ef89b37dc913/svn/blue-oriental-furniture-vases-bw-14fish-bwfl-64_400.jpg",
  },
  {
    id: "12",
    name: "Cream Glass Rustic Decroratuive Vase by Litton Lane",
    mrp: "0",
    msp: "97",
    mspChange: "70",
    rating: "0",
    imageUrl:
      "https://images.thdstatic.com/productImages/290d0c3c-65ad-5b7a-b79f-46ace45e8a9a/svn/cream-litton-lane-vases-53776-64_400.jpg",
  },
];

let showProducts = (stringOf) => {
  let displayDiv = document.getElementById("products");

  displayDiv.innerHTML = "";

  stringOf.forEach((el, index) => {
    let img = document.createElement("img");
    img.src = el.imageUrl;
    img.setAttribute("class", "imageCntrl");

    let name = document.createElement("p");
    name.textContent = el.name;

    let div2 = document.createElement("div");

    if (Number(el.rating) != 0) {
      let rating = document.createElement("div");
      for (let i = 0; i < el.rating; i++) {
        let itag = document.createElement("i");
        itag.setAttribute("class", "fas fa-star");
        rating.append(itag);
      }
      for (let j = el.rating; j < 5; j++) {
        let itag = document.createElement("i");
        itag.setAttribute("class", "far fa-star");
        rating.append(itag);
      }
      div2.append(name, rating);
    } else {
      div2.append(name);
    }

    let div1 = document.createElement("div");

    let dollar = document.createElement("p");
    dollar.innerText = "$";
    dollar.setAttribute("class", "class675");

    let msp = document.createElement("h3");
    msp.textContent = el.msp;

    let mspChange = document.createElement("sup");
    mspChange.textContent = el.mspChange;

    msp.append(mspChange);
    if (Number(el.mrp) != 0) {
      let div66 = document.createElement("div");

      let mrp = document.createElement("p");
      mrp.textContent = "$" + el.mrp;
      mrp.style.textDecoration = "line-through";

      savedAmount =
        Number(el.mrp) - Number(el.msp) - Number(`0.${el.mspChange}`);

      sumofall = savedAmount.toFixed(2);

      percentageSaved = Math.ceil((sumofall / Number(el.mrp)) * 100);

      let save = document.createElement("p");
      save.textContent = "save $" + sumofall + "(" + percentageSaved + "%)";
      div66.setAttribute("class", "class98");

      div66.append(mrp, save);
      div1.append(dollar, msp, div66);
    } else {
      div1.append(dollar, msp);
    }

    let but = document.createElement("button");
    but.textContent = "Add to Cart";
    but.addEventListener("click", function () {
      let itemsCart = JSON.parse(localStorage.getItem("addToCart")) || [];

      itemsCart.push(el);
      localStorage.setItem("addToCart", JSON.stringify(itemsCart));
    });

    div1.setAttribute("class", "class141");

    let div = document.createElement("div");

    div2.append(div1, but);
    div2.setAttribute("class", "class624");

    div.append(img, div2);
    div.setAttribute("class", "class55");

    displayDiv.append(div);
  });
};

showProducts(vases);

let sortBy = () => {
  let xot = document.getElementById("id78").value;

  if (xot == "low") {
    vases.sort((a, b) => {
      return Number(a.msp) - Number(b.msp);
    });
  } else if (xot == "high") {
    vases.sort((a, b) => {
      return Number(b.msp) - Number(a.msp);
    });
  } else if (xot == "topRated") {
    vases.sort((a, b) => {
      return Number(b.rating) - Number(a.rating);
    });
  } else if (xot == "topSellers") {
    vases.sort((a, b) => {
      return Math.random() - Math.random();
    });
  } else if (xot == "mostPopular") {
    vases.sort((a, b) => {
      return Math.random() - Math.random();
    });
  }

  showProducts(vases);
};

function getRated() {
  let ratingReq = document.getElementById("changeRating").value;

  let op = vases.filter((el) => {
    return el.rating >= ratingReq;
  });
  console.log(op);
  showProducts(op);
}

let checkbox = document.getElementById("check123");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    console.log(checkbox.value);
  } else {
    console.log("Checkbox is not checked..");
  }
});
