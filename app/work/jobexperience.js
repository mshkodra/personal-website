import Image from 'next/image'
import Part from '../components/subcomponents/part.js'
export default function jobexperience() {
    return (
        <div className='homeStyling'>
            <h1>
                I have experience working,
            </h1>
            <h2>in small start-up-like environments where individuals must take on considerable responsibility and wear multiple hats. I have experience as a Machine Learning Engineer and as a Product Manager, but am more interested in the former.</h2>
{/* 
            <h2>
                a Machine Learning Engineer, where I am currently working at Healthcare Systems R&A. I am working on a deep learning model trying to classify the exercises being done from patient videos in an effort to help study chronic lower back pain.
            </h2>

            <h2>
                Last Summer I worked as a Product Manager at a tech startup called ContactMonkey in downtown Toronto, where I was responsible for developing a new product line and designing the foundational features for it.
            </h2> */}
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
                I am currently looking for ML/DS internship opportunities for the Winter 2025 term. Please feel free to reach out if you are hiring!
            </h2>
        </div>
    )
}