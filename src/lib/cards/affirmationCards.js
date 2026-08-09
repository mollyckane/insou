const affirmationData = [
    {
        text: "I am capable of handling whatever comes my way.",
    },
    {
        text: "I am worthy of love and respect.",
    },
    {
        text: "I choose to focus on the positive aspects of my life.",
    },
    {
        text: "I am resilient and can overcome challenges.",
    },
    {
        text: "I am grateful for the abundance in my life.",
    },
    {
        text: "I acknowledge the abundance that flows into my life.",
    },
    {
        text: "I listen to my body and give it rest when needed.",
    },
    {
        text: "I am grateful for each new day and its possibilities.",
    },
    {
        text: "I approach each day with an open heart and mind.",
    },
    {
        text: "I am calm, confident and centred.",
    },
    {
        text: "I am committed to my personal growth and development.",
    },
    {
        text: "I choose to take care of myself mentally, physically and emotionally.",
    },
    {
        text: "I am manifesting less stress into my reality with grace and ease.",
    },
    {
        text: "My work is meaningful and brings value to others.",
    },
    {
        text: "I trust in the journey of life.",
    },
];

export const affirmationCards = affirmationData.map((card, index) => ({
    ...card,
    id: `affirmation-${index + 1}`,
}));
