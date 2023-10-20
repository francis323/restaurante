function flipReversibleCards() {
    const reversibleCards = document.querySelectorAll(".reversible-card");
    reversibleCards.forEach((reversibleCard) => {
        let isFlipped = false;

        reversibleCard.addEventListener("click", function (event) {
            const clickedElement = event.target;
            if (
                clickedElement.classList.contains("front") ||
                clickedElement.classList.contains("back")
            ) {
                if (isFlipped) {
                    reversibleCard.classList.remove("flipped");
                } else {
                    reversibleCard.classList.add("flipped");
                }
                isFlipped = !isFlipped;
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    flipReversibleCards();
});

