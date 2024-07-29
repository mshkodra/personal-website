import Link from 'next/link'
export default function Blog() {
    return (
        <div className="homeStyling">
            <h1>Some Blog Posts...</h1>

            <ul>
                <Link href="blog/germany">
                        <li>Germany ~ Summer 2024</li> 
                </Link>
            </ul>
        </div>
    )
}