import Link from 'next/link'

export default function Header() {
    return (
        <div className="header">

            <Link href="/">
                <h1>Home</h1>
            </Link>



            <Link href="/about">
                <h1>About</h1>
            </Link>

            <Link href="/work">
                <h1>Work</h1>
            </Link>


            <Link href="/projects">
                <h1>Projects</h1>
            </Link>


            <Link href="/blog">
                <h1>Blog</h1>
            </Link>
        </div>
    )
}