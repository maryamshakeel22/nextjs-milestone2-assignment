import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
            <h4 className="text-center text-3xl text-blue-400">This is a Home page</h4>
            <br />
            <h1 className="text-center text-3xl text-blue-400">
                Hello Maryam
            </h1>
            <br />
            <button className="text-white bg-blue-500 hover:bg-blue-600 text-2xl border-0 py-2 px-6 focus:outline-none rounded">
            <Link href="/about">About</Link>
            </button>
            <br />
            <br />
            <button className="text-white bg-blue-500 hover:bg-blue-600 text-2xl border-0 py-2 px-6 focus:outline-none rounded">
            <Link href="/product">Product</Link>
            </button>
        </div>
  );
}
