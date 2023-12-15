import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-stone-100 p-8">
      <nav className="container">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="text-sm font-medium uppercase text-stone-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="text-sm font-medium uppercase text-stone-400"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/new"
              className="text-sm font-medium uppercase text-stone-400"
            >
              Write
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
