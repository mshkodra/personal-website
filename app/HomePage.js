import Image from "next/image"
import PFP from "../public/icon.png"

export default function HomePage() {
    return (
        <div className="homeStyling">
            <Image src={PFP} alt="pfp" width="100" height="100"/>
            <h1>Hello There,</h1>

            <h2>welcome to my isolated node in the internet. Perhaps it will become more connected one day, or not.</h2>

            <h2>I am Mateo, a third year student at the University of Waterloo studying Statistics.</h2>

            <h2>Feel free to look around and explore my website, and reach out if you'd like.</h2>

        </div>
    )
}