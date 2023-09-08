import Link from "next/link";

export default function Navbar() {

    return (
        <nav>
        <h1>NavBar</h1>

        <ul>
          <li>
            <Link href="/">Homee</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/tienda">Tienda</Link>
          </li>
        </ul> 

      </nav>
    )
}