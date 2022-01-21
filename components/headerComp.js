function header() {
  return `
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/800px-TheHomeDepot.svg.png"
                            width="50px" alt="" />
                    </div>
                    <div class="col-2" id="location">
                        <h6 class="m-0">You're Shoping at <span id="view_location"></span> </h6>
                        <div class="btn-group row">
                            <div type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span class="fw-5">Enter your location</span>
                            </div>
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

                    <div class="col-6" id="searchBox">
                        <input type="search" id="search" placeholder="What can we help you find today?">
                        <button id="searchBtn"><i class="bi bi-search"></i></button>
                    </div>
                    <div class="col-3 m-auto" id="account">
                        <div class="row ">
                            <h6 class="col-5">My Accounts <span><i class="bi bi-person"></i></span></h6>
                            <h6 class="col-3">List <span><i class="bi bi-suit-heart"></i></span></h6>
                            <h6 class="col-4">Cart <span><i class="bi bi-cart2"></i></i></span></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div id="item_list">
                <a href="">All Departments</a>
                <a href="">Home Decor, Furniture & Kitchenware</a>
                <a href="">DIY Projects & Ideas</a>
                <a href="">Project Calculator</a>
                <a href="">Installation & Services</a>
                <a href="">Special & Offers</a>
                <a href="">Local Ad & Catalog</a>
            </div>
        </header>`;
}

export { header };
