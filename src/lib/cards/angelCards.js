const angelNumbersData = [
    {
        number: "111",
        meaning: "New beginnings, manifestation and alignment with your higher self.",
    },
    {
        number: "222",
        meaning: "Balance, harmony and trust in the process of life.",
    },
    {
        number: "333",
        meaning: "Encouragement, support and guidance from your angels.",
    },
    {
        number: "444",
        meaning: "Protection, stability and a reminder that you are on the right path.",
    },
    {
        number: "555",
        meaning: "Change, transformation and personal growth.",
    },
    {
        number: "666",
        meaning: "Re-evaluate your thoughts and actions and focus on your spiritual growth.",
    },
    {
        number: "777",
        meaning: "Spiritual awakening, divine guidance and a reminder to trust your intuition.",
    },
    {
        number: "888",
        meaning: "Abundance, prosperity and the manifestation of your desires.",
    },
    {
        number: "999",
        meaning: "Completion, closure and the end of a cycle in your life.",
    },  
    {
        number: "000",
        meaning: "Infinite possibilities, spiritual growth and a reminder that you are one with the universe.",
    },
    {
        number: "101",
        meaning: "Waking up to something within yourself. Notice your inner wisdom. Let the small idea become a big shift.",
    },
    {
        number: "414",
        meaning: "New formation, needs structure. Guidance to rebuild from the ground up, especially around home, purpose or stability.",
    },
    {
        number: "808",
        meaning: "Cycles, especially around time, energy and money, coming back into alignment. Infinite support.",
    },
    {
        number: "919",
        meaning: "An ending, sacred clearing. Release what no longer fits to allow for the new.",
    },
    {
        number: "1221",
        meaning: "Reflection: What are people or situations mirroring back to you right now? Alignment begins with honesty.",
    },
    {
        number: "707",
        meaning: "Growth spiritually, energetically and emotionally. Your guides understand the path you're on. Stay the course.",
    },
]

export const angelCards = angelNumbersData.map((card, index) => ({
    ...card,
    id: `angel-${index + 1}`,
}));