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
                    date="Present"
                    h1="Machine Learning Engineer"
                    h2="Healthcare Systems R&A"
                    h3="Developing and optimizing a deep learning model that classifies physical activities in videos submitted by patients with chronic lower back pain."
                /> 
                <Part 
                    date="2023 Summer"
                    h1="Product Manager Intern"
                    h2="ContactMonkey"
                    h3="Spearheaded the initiation of the SMS Product Line by designing 7 novel product features, managing the end-to-end development process of these features from conception to deployment."
                />
            </div>
            <h2>
                I am currently looking for Data Science or Machine Learning internship opportunities for the Winter and Summer. Please feel free to reach out if you are hiring!
            </h2>
        </div>
    )
}
