function flipReversibleCards() {
    const reversibleCards = document.querySelectorAll(".reversible-card");
    reversibleCards.forEach((reversibleCard) => {

        reversibleCard.addEventListener("click", function (event) {
            reversibleCard.classList.toggle("flipcard");

        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    flipReversibleCards();
    console.log("DOM fully loaded and parsed");
});
