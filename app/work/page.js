import JobExperience from "./jobexperience.js"
import Header from "../components/Header.js"
import Links from "../components/links.js"
import "../globals.css"
export default function Home() {
    return (
        <div className="everything">
            <Header 
                arr = {[0, 0, 1, 0, 0]}
            />
            <JobExperience />
            <Links />
        </div>
    )
}