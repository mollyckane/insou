import {
    faGlassWater,
    faDumbbell,
    faSpa,
    faBook,
    faPalette,
    faTimesCircle,
    faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

// Map habit ids to icons
const iconMap = {
    "drink-water": faGlassWater,
    "exercise": faDumbbell,
    "meditation": faSpa,
    "reading": faBook,
    "art-creation": faPalette,
    "face-picking": faTimesCircle,
};

// Map habit ids to color classes (only icon circle + icon + dot)
const habitColorMap = {
    "drink-water": {
        iconBg: "bg-sky-50",
        iconText: "text-sky-700",
        dot: "bg-sky-500",
    },
    "exercise": {
        iconBg: "bg-emerald-50",
        iconText: "text-emerald-700",
        dot: "bg-emerald-500",
    },
    "reading": {
        iconBg: "bg-indigo-50",
        iconText: "text-indigo-700",
        dot: "bg-indigo-500",
    },
    "art-creation": {
        iconBg: "bg-purple-50",
        iconText: "text-purple-700",
        dot: "bg-purple-500",
    },
    "face-picking": {
        iconBg: "bg-rose-50",
        iconText: "text-rose-700",
        dot: "bg-rose-500",
    },
};

// Export small helpers so the page stays simple
export function getHabitIcon(habitId) {
    return iconMap[habitId] ?? faQuestionCircle;
}

export function getHabitColors(habitId) {
    return (
        habitColorMap[habitId] || {
            iconBg: "bg-emerald-50",
            iconText: "text-emerald-700",
            dot: "bg-emerald-500",
        }
    );
}

// Label for positive / negative
export function getHabitKindLabel(kind) {
    if (kind === "good") return "Positive";
    if (kind === "bad") return "Negative";
    return "";
}

