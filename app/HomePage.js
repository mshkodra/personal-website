import Image from "next/image"
import PFP from "../public/icon.png"

export default function HomePage() {
    return (
        <div className="homeStyling">
            <Image src={PFP} alt="pfp" width="100" height="100"/>
            <h1>Hello There,</h1>

            <h2>welcome to my isolated node in the internet. Perhaps it will become more connected one day, or not.</h2>

            <h2>This website is owned by me; Mateo Shkodra a student at the University of Waterloo in Canada. I'm interested in Combinatorics and Statistics so I figured it would make sense for me to study them.</h2>

            <h2>If you would like to reach out, please email me or connect with me using the links below.</h2>
        </div>
    )
}