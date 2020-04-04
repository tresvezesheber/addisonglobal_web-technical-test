axios
    .get("http://www.mocky.io/v2/5bc3b9cc30000012007586b7")
    .then(function (response) {
        console.log(response);

        var promos = response.data
        var promosList = document.querySelector(".cards__container")
        var card = document.querySelector(".card")

        for (item of promos) {
            var cardClone = card.cloneNode(true)
            promosList.appendChild(cardClone)
        }
        card.remove()

        var cardTitle = document.querySelectorAll(".card__title")
        console.log(cardTitle)
        var count = 0
        
        for (item of promos) {

            var dataTitle = item.name
            // console.log(dataTitle)
            cardTitle[count].textContent = dataTitle
            console.log(item)

            count++
        }
    })
    .catch(function (error) {
        console.warn(error);
    });