"use client";
import {useState} from "react";

export default function WithoutTransition() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<string[]>([]);

    const data = Array.from({length: 10000}, (_, i) => `Item ${i}`);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);

        // Expensive work runs immediately as an urgent update
        const filtered = data.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered);
    }

    return (
        <div style={{padding: 20}}>
            <h1>Search Demo (Without useTransition)</h1>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Type to search..."
                style={{padding: 8, marginBottom: 12}}
            />
            <ul>
                {results.map((r, i) => (
                    <li key={i}>{r}</li>
                ))}
            </ul>
        </div>
    );
}
