const mycart = JSON.parse(localStorage.getItem("mycart"));

function cart_item() {

    // data.clear()
    
    const card = document.getElementById('cart_card');
    card.innerHTML = ""

    mycart.map((val, ind) => {
        const div = document.createElement("div");
        div.className = "card_main"
        div.innerHTML = `
       <div id="card_img">
        ${"<img src='" + val.img + "'>"}
        </div>
        <div class="card-body">
            <div class="row">
                <div class="card-title">
                    ${"<h1>" + val.product_name + "</h1>"}
                    ${"<h3>" + val.price + "</h3>"}
                </div>
                <div class="view-btn">
                    <a href="">View Details</a>
                </div>
            </div>
            <hr/>
            ${"<p>" + val.description + "</p>"}
            <div class="btn-group">
                <div class="btn">
                    <a onclick="del(${ind})">Cancel</a>
                </div>
            </div>
        </div>
        `;
        card.appendChild(div);
    })
}
cart_item();

function del(index) {
    mycart.splice(index, 1)
    console.log(index);
    localStorage.setItem("mycart", JSON.stringify(mycart));
    location.reload();
}

