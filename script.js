// Array of fun facts
const funFacts = [
    "Bananas are berries, but strawberries aren't.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896 – Zanzibar surrendered after 38 minutes.",
    "Honey never spoils; archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "A group of flamingos is called a 'flamboyance.'",
    "The average person spends six months of their life waiting for red lights to turn green.",
    "Cows have best friends and can become stressed when they are separated.",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron.",
];

// Function to display a random fun fact
function getRandomFact() {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById('funFact').innerText = randomFact;
}
