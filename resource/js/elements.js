var nav_bar = document.getElementById("nav-bar")
var footer = document.getElementById("footer")
var setka = document.getElementById("setka")
var site_temp

fetch("fragments/card.html")
    .then(
        (responce) => {
            return responce.text()
        }
    ).then(
        (responce) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(responce, "text/html").body.firstChild
            add_element(doc)
        }
    )


function add_element(tameplate) {
    var data = fetch("objects.json").then(
        (responce) => {
            return responce.json()
        }
    ).then(
        (products) => {
            console.log(products)
            for (let index = 0; index < products.length; index++) {
                var card = tameplate.cloneNode(true)
                card.id = "card-" + products[index]["id"]
                setka.appendChild(card)
                var card_ = $("#card-" + products[index]["id"])
                card_.find("#price").html(products[index]["price"])
                card_.find("#name_on_card").html(products[index]["name_on_card"])
                card_.find("#img_src")[0].src = products[index]["img_src"]
                card_.find("#img_src")[0].alt = products[index]["card_name"]
                card_.find("#small_desc").html(products[index]["small_desc"])
                var action = "open_product_site(" + index + ")"
                card_.find(".btn")[0].setAttribute("onclick", action)
            }
        }
    )
}

function open_product_site(product_id) {
    fetch("product.html").then(
        (responce) => {
            return responce.text()
        }
    ).then(
        (responce) => {
            site_temp = responce
            console.log(site_temp)
            document.documentElement.innerHTML = site_temp

        }
    )




}


fetch("fragments/footer.html")
    .then(
        (responce) => {
            return responce.text()
        }
    )
    .then(
        (responce) => {
            footer.innerHTML = responce
        }
    )

fetch("fragments/nav-bar.html")
    .then(
        (responce) => {
            return responce.text()
        }
    ).then(
        (responce) => {
            nav_bar.innerHTML = responce
        }
    )





