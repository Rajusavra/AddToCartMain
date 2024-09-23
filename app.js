
const m_data = [{
    id: 1,
    product_name: "camera",
    img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
},
{
    id: 2,
    product_name: "headphone",
    img: "https://i.pinimg.com/564x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
},
{
    id: 3,
    product_name: "mouse",
    img: "https://i.pinimg.com/564x/80/17/a2/8017a2f48d590c7f2f664198f18230c6.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
},
{
    id: 4,
    product_name: "mobile",
    img: "https://i.pinimg.com/564x/8c/1b/12/8c1b1208fca4933dad3f3916cae2caee.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
},
{
    id: 5,
    product_name: "laptop",
    img: "https://i.pinimg.com/736x/8a/29/01/8a2901ff5b2aacab1bf74601f124d835.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
},
{
    id: 6,
    product_name: "tabs",
    img: "https://i.pinimg.com/564x/7c/3c/83/7c3c83c6b48f242524b08fe1a7f00766.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
},
{
    id: 7,
    product_name: "Keyboard",
    img: "https://i.pinimg.com/236x/4a/77/2f/4a772f7b4df1435642192c33cb8c9cc9.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
},
{
    id: 8,
    product_name: "mac-mini",
    img: "https://i.pinimg.com/564x/70/ac/93/70ac9331047949fa63fe80650029b219.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
},
{
    id: 9,
    product_name: "wire less charging",
    img: "https://i.pinimg.com/564x/b4/68/78/b46878b22592ec105102d26b3d336593.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
},
{
    id: 10,
    product_name: "i Watch",
    img: "https://i.pinimg.com/564x/4f/b7/ba/4fb7ba89d8fdbae6ed3a21c977a4d121.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
}]

localStorage.setItem('products', JSON.stringify(m_data))

let data = JSON.parse(localStorage.getItem("products")) || [];

function product() {

    // data.clear()
    const card = document.getElementById('card');
    
    card.innerHTML = ""
    data.map((val, ind) => {
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
            </div>
            <hr/>
            ${"<p>" + val.description + "</p>"}
            <div class="btn-group">
                <div class="btn">
                    <a onclick = "addcart(${ind})" >Add To Cart</a>
                </div>
            </div>
        </div>
        `;
        card.appendChild(div);
    })
}
product()


let item = JSON.parse(localStorage.getItem("mycart")) || [];
function addcart(index) {
    cart_item = data[index];
    item.push(cart_item)
    localStorage.setItem("mycart", JSON.stringify(item))
    alert("Product added to the cart");
    location.reload();
}

