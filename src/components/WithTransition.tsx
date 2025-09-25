"use client";
import { useState, useTransition } from "react";

export default function WithTransition() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();

    const data = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

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
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-2xl font-bold text-black mb-6">
                    Search Demo (useTransition)
                </h1>

                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Type to search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-6 text-black"
                />

                {isPending && (
                    <p className="text-sm text-blue-600 font-medium mb-4">
                        Loading results...
                    </p>
                )}

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
