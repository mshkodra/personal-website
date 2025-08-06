import Link from "next/link";

export default function About() {


    return (
        <div>
            <p>I am a rising senior at the <a href="https://uwaterloo.ca/statistics-and-actuarial-science/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">University of Waterloo</a> studying Statistics.</p>
            <br/>
            <p>I sometimes <Link href="/bookshelf" className="text-blue-600 hover:underline">read</Link>.</p>
            <p>I train BJJ and play a lot of soccer.</p>
            <br/>
            <p>I'm currently looking for new grad opportunities after I graduate in August 2026.</p>
            <br/>
            <p>Internships:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
                <li>SWE Intern @ <a href="https://www.eudia.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Eudia</a> (Incoming this Fall)</li>
                <li>SWE Intern @ <a href="https://www.truewind.ai/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Truewind</a></li>
                <li>SWE @ <a href="https://raylu.ai/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Raylu</a></li>
                <li>MLE Intern @ <a href="https://www.healthcare-systems.ca/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Healthcare Systems R&A</a></li>
                <li>PM Intern @ <a href="https://www.contactmonkey.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ContactMonkey</a></li>
            </ul>
            <br/>
            <p>Some cool websites:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://quarter--mile.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Quarter Mile</a> is a cool website with blog posts.</li>
                <li><a href="https://jordangonen.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Jordan Gonen</a> is one of the creators of Quarter Mile.</li>
            </ul>
        </div>

    )
}