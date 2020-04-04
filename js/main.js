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
    var count = 0

    for (item of promos) {
        var dataTitle = item.name
        cardTitle[count].textContent = dataTitle
        count++
    }
}