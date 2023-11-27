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

let factCounter = 0;

// Function to display a random fun fact with animation
function getRandomFact() {
    const funFactElement = document.getElementById('funFact');
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

    // Add a fade-out animation
    funFactElement.style.opacity = 0;
    setTimeout(() => {
        funFactElement.innerText = randomFact;
        // Add a fade-in animation
        funFactElement.style.opacity = 1;
    }, 500);

    // Increment the counter
    factCounter++;

    // Update the counter display
    document.getElementById('factCounter').innerText = `Fun Facts Displayed: ${factCounter}`;
}

// Function to reset the fun fact counter
function resetCounter() {
    factCounter = 0;
    document.getElementById('factCounter').innerText = `Fun Facts Displayed: ${factCounter}`;
}
