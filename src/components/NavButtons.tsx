"use client";
import Link from "next/link";

export default function NavButtons() {
    return (
        <div style={{marginBottom: 20}}>
            <Link href="/search-no-transition">
                <button style={{marginRight: 10, padding: "6px 12px"}}>
                    Without Transition
                </button>
            </Link>
            <Link href="/search-demo">
                <button style={{padding: "6px 12px"}}>
                    With Transition
                </button>
            </Link>
        </div>
    );
}
