"use client";
import Link from "next/link";

export default function NavButtons() {
    return (
        <div className="flex gap-4 mb-6">
            <Link href="/search-no-transition">
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-lg shadow-sm transition-colors">
                    Without Transition
                </button>
            </Link>

            <Link href="/search-demo">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-colors">
                    With Transition
                </button>
            </Link>
        </div>
    );
}
