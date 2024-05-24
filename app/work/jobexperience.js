import Image from 'next/image'
import Part from '../components/subcomponents/part.js'
export default function jobexperience() {
    return (
            <div className="section">
                <h2>Work Experience</h2>
                <Part 
                    date="2024 Summer"
                    h1="Machine Learning Engineer"
                    h2="Healthcare Systems R&A"
                    h3="Haven't started working here yet! Come back soon for updates"
                /> 

                <Part 
                    date="2023 Summer"
                    h1="Product Manager Intern"
                    h2="ContactMonkey"
                    h3="Spearheaded the initiation of the SMS Product Line by designing 7 novel product features, managing the end-to-end development process of these features from conception to deployment."
                />
            </div>
    )
}