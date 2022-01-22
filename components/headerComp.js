<<<<<<< HEAD

function header() {
    return `
=======
function header() {
  return `
>>>>>>> main
    <div class="alert alert-primary" id="alert" role="alert">
            #1 Home Improvement Retailer
        </div>
        <header>
            <nav id="navlist">
                <a class="col-1">Store Finder</a>
                <a class="col-1">Truck & Tool</a>
                <a class="col-1">For the Pro</a>
                <a class="col-1">Gift Cards</a>
                <a class="col-1">Track Order</a>
                <a class="col-1">Help</a>
            </nav>
            <div class="container-fluid" id="mainnav">
                <div class="row">
                    <div class="col-1" id="logo">
<<<<<<< HEAD
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/800px-TheHomeDepot.svg.png"
                            width="50px" alt="" />
=======
                        <a href="index.html"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/800px-TheHomeDepot.svg.png"
                        width="50px" alt="" /></a>
>>>>>>> main
                    </div>
                    <div class="col-2" id="location">
                        <h6 class="m-0">You're Shoping at <span id="view_location"></span> </h6>
                        <div class="btn-group row">
                            <div type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span class="fw-5">Enter your location</span>
                            </div>
<<<<<<< HEAD
                            <div class="dropdown-menu box" >
                                <div class="dropdown-item">
                                    <input type="text" id="location_search">
                                </div>
                            </div>
                        </div>
                        <h6 class="text-success m-0">
                            <i class="bi bi-circle-fill"></i> Open
                            <span>until 10pm</span>
                        </h6>
                    </div>
=======
                            <div class="dropdown-menu box" id="inputpart">
                                <div class="dropdown-item">
                                    <input type="text" id="location_search" placeholder=" Enter location">
                                </div>
                            </div>
                        </div>
                        <h6 class="timeZone"></h6>
                    </div>

>>>>>>> main
                    <div class="col-6" id="searchBox">
                        <input type="search" id="search" placeholder="What can we help you find today?">
                        <button id="searchBtn"><i class="bi bi-search"></i></button>
                    </div>
                    <div class="col-3 m-auto" id="account">
<<<<<<< HEAD
                        <div class="row ">
                            <h6 class="col-5">My Accounts <span><i class="bi bi-person"></i></span></h6>
                            <h6 class="col-3">List <span><i class="bi bi-suit-heart"></i></span></h6>
                            <h6 class="col-4">Cart <span><i class="bi bi-cart2"></i></i></span></h6>
=======

                        <div class="profile-sec">
                            <div class="dropAccount">
                                <h6 class="dropH1">My Accounts <span><i class="bi bi-person"></i></span></h6>
                                <div class="dropH1-content">
                                    <div class="loginhover">
                                        <div>
                                            <button><a href="login.html">Sign in</a></button>
                                            <button><a href="register.html">Register</a></button>
                                        </div>
                                        <div class="lining"></div>
                                        <div>
                                            <div>
                                                <a href=""><i class="bi bi-box"></i> &nbsp; Order & Pusrchase</a>
                                                <a href=""><i class="bi bi-credit-card-2-front"></i> &nbsp; My Home
                                                    Depot
                                                    Credit Card</a>
                                                <a href=""><i class="bi bi-person"></i> &nbsp; Account Profile</a>
                                                <a href=""><i class="bi bi-cart4"></i> &nbsp; Instant Checkout
                                                    Setting</a>
                                                <a href=""><i class="bi bi-suit-heart"></i> &nbsp; List</a>
                                                <a href=""><i class="bi bi-hurricane"></i> &nbsp; My Subscription</a>
                                                <a href=""><i class="bi bi-award"></i> &nbsp; Military Discount
                                                    Program</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h6 class="col-3">List <span><i class="bi bi-suit-heart"></i></span></h6>
                            <h6 class="col-4" ><a  href="cart_page.html">Cart <span><i class="bi bi-cart2"></i></i></span></a></h6>
>>>>>>> main
                        </div>
                    </div>
                </div>
            </div>
            <div id="item_list">
<<<<<<< HEAD
                <a href="">All Departments</a>
                <a href="">Home Decor, Furniture & Kitchenware</a>
                <a href="">DIY Projects & Ideas</a>
                <a href="">Project Calculator</a>
                <a href="">Installation & Services</a>
                <a href="">Special & Offers</a>
                <a href="">Local Ad & Catalog</a>
            </div>
        </header>`
}


export { header }
=======
                <div class="dropdown">
                    <a class="dropbtn" href="products.html">All Departments</a>
                    <div class="dropdown-content">
                        <a href="#">Appliances</a>
                        <a href="#">Bath & Faucets</a>
                        <a href="#">Bath & Faucets</a>
                        <a href="">Blinds & Window Treatment</a>
                        <a href="">Building Materials</a>
                        <a href="">Cleaning</a>
                        <a href="">Decor & Furniture</a>
                        <a href="">Doors & Windows</a>
                        <a href="">Electrical</a>
                        <a href="">Flooring & Area Rugs</a>
                        <a href="">Hardware</a>
                        <a href="">Heating & Cooling</a>
                        <a href="">Kitchen & Kitchenware</a>
                        <a href="">Lawn & Garden</a>
                        <a href="">Lighting & Ceiling Fans</a>
                        <a href="">Outdoor Living & Patio</a>
                        <a href="">Paint</a>
                        <a href="">Plumbing</a>
                        <a href="">Smart Home</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="">Home Decor, Furniture & Kitchenware</a>
                    <div class="dropdown-content">
                        <a href="#">Home Decor</a>
                        <a href="#">Furniture</a>
                        <a href="#">Wall Decor</a>
                        <a href="">Small Kitchen Appliances</a>
                        <a href="">Kitchenware & Tableware</a>
                        <a href="">Bedding & Bath</a>
                        <a href="">Lighting</a>
                        <a href="">Window Treatments</a>
                        <a href="">Shop By Room</a>
                    </div>
                </div>

                <div class="dropdown">
                    <a href="diy.html">DIY Projects & Ideas</a>
                    <div class="dropdown-content">
                        <a href="#"> Bathroom</a>
                        <a href="#">Living Room</a>
                        <a href="#">Paint</a>
                        <a href="">Bedroom</a>
                        <a href="">Dining Room</a>
                        <a href="">Flooring</a>
                        <a href="">Hallway & Wall</a>
                        <a href="">Lighting & Ceiling Fans</a>
                        <a href="">Small Spaces</a>
                        <a href="">Outdoor Living</a>
                        <a href="">Home Accents</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="">Project Calculator</a>
                </div>
                <div class="dropdown">
                    <a href="">Installation & Services</a>
                    <div class="dropdown-content">
                        <a href="#"> Cabinet Installation</a>
                        <a href="#">Carpet Installation</a>
                        <a href="#">Countertop Installation</a>
                        <a href="#">Door Installation</a>
                        <a href="#">Fence Installation</a>
                        <a href="#">Flooring Installation</a>
                        <a href="#">Garage Door Installation</a>
                        <a href="#">HVAC Installation</a>
                        <a href="#">Shed Installation</a>
                        <a href="#">Water Heater Installation</a>
                        <a href="#">Window Installation</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="">Special & Offers</a>
                    <div class="dropdown-content">
                        <a href="#">Tools</a>
                        <a href="#">Outdoor Living</a>
                        <a href="#">Bath & Faucet</a>
                        <a href="#">Kitchen</a>
                        <a href="#">Storage</a>
                        <a href="#">Hardware</a>
                        <a href="#">Flooring & Tile</a>
                        <a href="#">Lawn & Garden</a>
                        <a href="#">Plumbing</a>
                        <a href="#">Lighting & Fans</a>
                        <a href="#">Building Materials</a>
                        <a href="#">Blinds & Window Treatments</a>
                        <a href="#">Paint</a>
                        <a href="#">Furniture</a>
                        <a href="#">Electrical</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="">Local Ad & Catalog</a>
                    <div class="dropdown-content">

                    </div>
                </div>
            </div>
        </header>`;
}

export { header };
>>>>>>> main
