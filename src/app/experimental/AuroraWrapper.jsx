// src/components/layout/AuroraWrapper.jsx
"use client";

import "@/app/experimental/aurora.css";

export default function AuroraWrapper({ children }) {
    return (
        <div className="aurora-bg min-h-screen">
            <div className="relative z-10">{children}</div>
        </div>
    );
}