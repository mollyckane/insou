export const decks = [
    {
        id: "animal-cards",
        title: "Animal cards",
        description: "A deck of cute animals to give you a little boost when you're feeling overwhelmed.",
        coverImage: "/images/animal-card-cover.webp",
    },
    {
        id: "affirmation-cards",
        title: "Affirmations",
        description: "A deck of affirmations and gentle reminders for different kinds of days.",
        coverImage: "/images/affirmation-card-cover.webp",
    },
    {
        id: "tiny-next-step-cards",
        title: "Tiny next steps",
        description: "A deck of tiny next steps to help you break down overwhelming tasks into manageable actions.",
        coverImage: "/images/tiny-next-steps-card-cover.webp",
    },
    {
        id: "quote-cards",
        title: "Quotes",
        description: "A deck of quotes to inspire and motivate you on your journey.",
        coverImage: "/images/quotes-card-cover.webp",
    },
];

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

export const affirmationCards = [
    {
        id: "affirmation-1",
        text: "I am capable of handling whatever comes my way.",
    },
    {
        id: "affirmation-2",
        text: "I am worthy of love and respect.",
    },
    {
        id: "affirmation-3",
        text: "I choose to focus on the positive aspects of my life.",
    },
    {
        id: "affirmation-4",
        text: "I am resilient and can overcome challenges.",
    },
    {
        id: "affirmation-5",
        text: "I am grateful for the abundance in my life.",
    },
];

export const quoteCards = [
    {
        id: "quote-1",
        text: "You are allowed to take this one moment at a time.",
        author: "INSOU",
    },
    {
        id: "quote-2",
        text: "Small progress is still progress.",
        author: "INSOU",
    },
    {
        id: "quote-3",
        text: "Rest does not make your effort less meaningful.",
        author: "INSOU",
    },
    {
        id: "quote-4",
        text: "Your current best is still 100% your best.",
        author: "INSOU",
    },
];