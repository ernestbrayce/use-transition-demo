"use client";
import {useState} from "react";

export default function WithoutTransition() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<string[]>([]);

    const data = Array.from({length: 1000}, (_, i) => `Item ${i}`);

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
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-2xl font-bold text-black mb-6">
                    Search Demo (Without useTransition)
                </h1>

                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Type to search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-6 text-black"
                />

                <ul className="space-y-2 max-h-96 overflow-y-auto">
                    {results.map((r, i) => (
                        <li
                            key={i}
                            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-black"
                        >
                            {r}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
