import Link from "next/link";

export default function About() {
    return (
        <div className="items-center justify-center text-center">
                <h1 className="text-center text-3xl text-green-400"> About Page </h1>
            <br />
            <h4 className="text-green-400 text-center text-3xl">This is a About page</h4>
            <br />
            <button className="text-white bg-green-500 hover:bg-green-600 text-2xl border-0 py-2 px-6 focus:outline-none rounded">
            <Link href="/about/about">Nested About</Link>
            </button>
        </div>
    )
}