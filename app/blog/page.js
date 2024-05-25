import Header from "../components/Header.js"
import Links from "../components/links.js"
import Blog from "./blog.js"
export default function Home() {
    return (
        <div className="everything">
            <Header 
                arr = {[0, 0, 0, 0, 1]}
            />
            <Blog />
            <Links />
        </div>
    )
}