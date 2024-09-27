import PFP from "../../public/pfp.png"
import Image from "next/image"
export default function About() {
    return (
        <div className="homeStyling">
            <Image src={PFP} alt="pfp" width="100" height="100"/>
            <h1>
                My name is Mateo Shkodra,
            </h1>

            {/* <h2>
                I am a student at the University of Waterloo entering my 3rd year this fall. I am studying Combinatorics & Optimization and Statistics, but who knows, maybe that is subject to change.
            </h2> */}

            <h2>
                I am a student in my 3A term at the University of Waterloo where I am double majoring in Combinatorics & Optimization and Statistics.
            </h2>
{/* 
            <h2 style={{fontWeight: "500"}}><br/>Fall 2024 Courseload:</h2>
            <ul>
                <li>CO 330 - Combinatorial Enumeration</li>
                <li>CO 342 - Introduction to Graph Theory</li>
                <li>STAT 333 - Stochastic Processes 1</li>
                <li>STAT 341 - Computational Statistics and Data Analysis</li>
                <li>MUSIC 223 - Music Studio</li>
            </ul> */}
            <h2>
                I love playing soccer and the piano, and recently I started reading a lot of literature. My favourite club is Chelsea FC and I used to play soccer competitively when I was a <a href="https://www.youtube.com/watch?v=0vCZo6EahTk" target="_blank">kid</a> until high school, but now I just play for fun.
            </h2>

       
            <h2 style={{fontWeight: "500"}}><br/>Current Repertoire:</h2>
            <ul>
                {/* <li className="flicker">Waltz in A-flat Major Op. 64, No. 3 - Chopin</li> */}
                <li><a href="https://www.youtube.com/watch?v=BExfhP9Xric" target="_blank">Prelude in C# Minor Op. 3, No. 2 - Rachmaninoff</a></li>
                <li>Waltz in C# Minor Op. 64, No. 2 - Chopin</li>
            </ul>

            <h2 style={{fontWeight: "500"}}><br/>Current Reading List:</h2>
            <ul>
                <li className="flicker">The Brothers Karamazov - Fyodor Dostoevsky</li>
                <li className="flicker">The Myth of Sisyphus - Albert Camus</li>
                <li>The Outsider - Albert Camus</li>
                <li>Notes from Underground - Fyodor Dostoevsky</li>
                <li>Can't Hurt Me - David Goggins</li>
                <li>Atomic Habits - James Clear</li>
                <li>Digital Minimalism - Cal Newport</li>
                <li>Klara and the Sun - Kazuo Ishiguro</li>
                <li>When We Were Orphans - Kazuo Ishiguro</li>
            </ul>

            <br/>
        </div>


    )
}