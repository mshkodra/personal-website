import Image from 'next/image'
import Part from '../components/subcomponents/part.js'
export default function JobExperience() {
    return (
        <div className='homeStyling'>
            <h1>
                I have experience working,
            </h1>
            <h2>in small start-up-like environments where individuals must take on considerable responsibility and wear multiple hats.</h2>
           
            <div className="section">
                <Part 
                    date="Winter 25"
                    location="New York City, NY"
                    h1="Software Engineer"
                    h2="Raylu AI"
                    h3="Building an AI Platform for Private Market Funds."
                />
                <Part 
                    date="Summer 24"
                    location="Waterloo, ON"
                    h1="Machine Learning Engineer"
                    h2="Healthcare Systems R&A"
                    h3="Developing and optimizing a deep learning model that classifies physical activities in videos submitted by patients with chronic lower back pain."
                /> 
                <Part 
                    date="Summer 23"
                    location="Toronto, ON"
                    h1="Product Manager Intern"
                    h2="ContactMonkey"
                    h3="Spearheaded the initiation of the SMS Product Line by designing 7 novel product features, managing the end-to-end development process of these features from conception to deployment."
                />
            </div>
            <h2>
                Software Engineering/Machine Learning opportunities for this summer and fall. Please feel free to reach out if you are hiring!
            </h2>
        </div>
    )
}
