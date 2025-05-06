import Image from 'next/image'
import Part from '../components/subcomponents/part.js'
export default function JobExperience() {
    return (
        <div className='homeStyling'>
            <h1>
                I love working,
            </h1>
            <h2>in startup environments, where I can take on more responsibility and wear multiple hats.</h2>
            <h2>Currently working at Truewind in the San Francisco Bay Area!</h2>
           
            <div className="section">

                <Part 
                    date="Current"
                    h1="Software Engineer Intern"
                    h2="Truewind"
                    h3="AI-Powered Accounting Solutions for Startups and Firms."
                />
                <Part 
                    date="W25"
                    h1="Software Engineer"
                    h2="Raylu"
                    h3="Built tooling to analyze transcripts from expert interviews, to get actionable insights for Private Market Funds."
                />
                <Part 
                    date="S24"
                    h1="Machine Learning Engineer"
                    h2="Healthcare Systems R&D"
                    h3="Developing and optimizing a deep learning model that classifies physical activities in videos submitted by patients with chronic lower back pain."
                /> 
                <Part 
                    date="S23"
                    h1="Product Manager Intern"
                    h2="ContactMonkey"
                    h3="Spearheaded the initiation of the SMS Product Line by designing 7 novel product features, managing the end-to-end development process of these features from conception to deployment."
                />
            </div>
        </div>
    )
}
