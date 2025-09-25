"use client";
import { useState } from "react";
import WithoutTransition from "@/components/WithoutTransition";

export default function SearchNoTransitionPage() {

    return (
        <div style={{ padding: 20 }}>
            <h1>Search Demo (Without useTransition)</h1>
            <WithoutTransition/>
        </div>
    );
}
