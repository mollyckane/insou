const animalCaptions = [
    "A fox taking a quiet moment in the woods.",
    "A sleepy cat reminding you to rest.",
    "A rabbit enjoying a peaceful afternoon.",
    "A bear having a slow and gentle day.",
    "A seal bringing a little joy to the moment.",
    "A duck reminding you not to take everything too seriously.",
];

export const animalCards = animalCaptions.map((caption, index) => {
    const cardNumber = index + 1;

    return {
        id: `animal-${cardNumber}`,
        image: `/images/animal-cards/animal-${cardNumber}.webp`,
        caption,
    };
});