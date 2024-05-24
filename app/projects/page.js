import Header from "../components/Header.js"
import Links from "../components/links.js"
import Projects from "./projects.js"
export default function Home() {
    return (
        <div className="everything">
            <Header />
            <Projects />
            <Links />
        </div>
    )
}