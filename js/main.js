axios
    .get("http://www.mocky.io/v2/5bc3b9cc30000012007586b7")
    .then(function (response) {
        console.log(response);

        var promos = response.data

        createCards(promos)
        insertDataInCards(promos)
    })
    .catch(function (error) {
        console.warn(error);
    });

function createCards(promos) {
    var promosList = document.querySelector(".cards__container")
    var card = document.querySelector(".card")

    for (item of promos) {
        var cardClone = card.cloneNode(true)
        promosList.appendChild(cardClone)
    }
    card.remove()
}

function insertDataInCards(promos) {
    var card = document.querySelectorAll(".card")
    var cardTitle = document.querySelectorAll(".card__title")
    var cardCover = document.querySelectorAll(".card__cover")
    var cardDesc = document.querySelectorAll(".card__desc")
    var cardBtnTerms = document.querySelectorAll("#btn-terms")
    var cardBtnJoin = document.querySelectorAll("#btn-join")
    var count = 0

    for (item of promos) {
        if (item.onlyNewCustomers) {
            card[count].classList.add("onlyNewCustomers")
        }

        cardTitle[count].textContent = item.name
        cardCover[count].setAttribute("src", item.heroImageUrl)
        cardDesc[count].textContent = item.description
        cardBtnTerms[count].textContent = item.termsAndConditionsButtonText
        cardBtnJoin[count].textContent = item.joinNowButtonText

        count++
    }
}

var nav = document.querySelector("nav");
var btns = nav.querySelectorAll(".nav__button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.querySelectorAll(".nav__button--active");
        current[0].className = current[0].className.replace(" nav__button--active", "");
        this.className += " nav__button--active";
        if (this.id !== "newCustomers") {
            var cardNewCustomers = document.querySelectorAll(".onlyNewCustomers")
            for (x = 0; x < cardNewCustomers.length; x++) {
                cardNewCustomers[x].style.display = "block"
            }
        } else {
            var cardNewCustomers = document.querySelectorAll(".onlyNewCustomers")
            for (x = 0; x < cardNewCustomers.length; x++) {
                cardNewCustomers[x].style.display = "none"
            }
        }
    });
}

// var btnAllPromos = document.querySelector("#allPromotions")
// var btnNewCustoms = document.querySelector("#newCustomers")

// btnAllPromos.addEventListener("click", function() {
//     btnNewCustoms.classList.toggle("nav__button--active")
//     btnAllPromos.classList.toggle("nav__button--active")
// })

// btnNewCustoms.addEventListener("click", function() {
//     btnNewCustoms.classList.toggle("nav__button--active")
//     btnAllPromos.classList.toggle("nav__button--active")
// })
