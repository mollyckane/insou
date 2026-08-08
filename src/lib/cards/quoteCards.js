const quoteData = [
    {
        text: "You are allowed to take this one moment at a time.",
        author: "INSOU",
    },
    {
        text: "Small progress is still progress.",
        author: "INSOU",
    },
    {
        text: "Rest does not make your effort less meaningful.",
        author: "INSOU",
    },
    {
        text: "Your current best is still 100% your best.",
        author: "INSOU",
    },
    {
        text: "It is never too late to be what you might have been.",
        author: "George Eliot",
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt",
    },
    {
        text: "Hold fast to dreams, \nFor if dreams die \nLife is a broken- winged bird, \nThat cannot fly.",
        author: "Langston Hughes",
    },
    {
        text: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
        author: "Joseph Campbell",
    },
]

export const quoteCards = quoteData.map((card, index)=> ({
    ...card,
    id: `quote-${index + 1}`,
    })
);