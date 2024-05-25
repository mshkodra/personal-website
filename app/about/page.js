import Header from "../components/Header.js"
import Links from "../components/links.js"
import About from "./about.js"
export default function Home() {
    return (
        <div className="everything">
            <Header 
                arr = {[0, 1, 0, 0, 0]}
            />
            <About />
            {/* <Links /> */}
        </div>
    )
}