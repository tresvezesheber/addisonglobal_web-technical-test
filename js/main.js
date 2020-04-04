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
    var cardTitle = document.querySelectorAll(".card__title")
    var cardCover = document.querySelectorAll(".card__cover")
    var cardDesc = document.querySelectorAll(".card__desc")
    var cardBtnTerms = document.querySelectorAll("#btn-terms")
    var cardBtnJoin = document.querySelectorAll("#btn-join")
    var count = 0

    for (item of promos) {
        cardTitle[count].textContent = item.name
        cardCover[count].setAttribute("src", item.heroImageUrl)
        cardDesc[count].textContent = item.description
        cardBtnTerms[count].textContent = item.termsAndConditionsButtonText
        cardBtnJoin[count].textContent = item.joinNowButtonText
        count++
    }
}