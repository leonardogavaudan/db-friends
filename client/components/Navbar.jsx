import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href="/"><a>HOME</a></Link>
                </li>

                <li>
                    <Link href="/search"><a>SEARCH</a></Link>
                </li>

                <li>
                    <Link href="/register"><a>REGISTER</a></Link>
                </li>

                <li>
                    <Link href="/login"><a>LOGIN</a></Link>
                </li>

                <li>
                    <Link href="/about"><a>ABOUT</a></Link>
                </li>
            </ul>
        </>
    );
}

export default Navbar;