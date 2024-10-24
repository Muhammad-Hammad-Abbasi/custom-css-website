import Link from "next/link";
import '@/app/style.css'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>

                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
