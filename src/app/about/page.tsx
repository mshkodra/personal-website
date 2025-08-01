import Link from "next/link";

export default function About() {


    return (
        <div>
            <p>I am a rising senior at the <a href="https://uwaterloo.ca/statistics-and-actuarial-science/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">University of Waterloo</a> studying Statistics.</p>
            <br/>
            <p>I sometimes <Link href="/bookshelf" className="text-blue-600 hover:underline">read</Link>, and train more than sometimes.</p>
            <br/>
            <p>Internships:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
                <li>SWE Intern @ <a href="https://www.eudia.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Eudia</a> (Incoming this Fall)</li>
                <li>SWE Intern @ <a href="https://www.truewind.ai/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Truewind</a></li>
                <li>SWE @ <a href="https://raylu.ai/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Raylu</a></li>
                <li>MLE Intern @ <a href="https://www.healthcare-systems.ca/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Healthcare Systems R&A</a></li>
                <li>PM Intern @ <a href="https://www.contactmonkey.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ContactMonkey</a></li>
            </ul>

        </div>

    )
}