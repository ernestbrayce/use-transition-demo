"use client";
import {useState, useTransition} from "react";

export default function WithTransition() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();

    const data = Array.from({length: 10000}, (_, i) => `Item ${i}`);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
            const filtered = data.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filtered);
        });
    }

    return (
        <div style={{padding: 20}}>
            <h1>Search Demo (useTransition)</h1>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Type to search..."
                style={{padding: 8, marginBottom: 12}}
            />
            {isPending && <p>Loading...</p>}
            <ul>
                {results.slice(0, 20).map((r, i) => (
                    <li key={i}>{r}</li>
                ))}
            </ul>
        </div>
    );
}
