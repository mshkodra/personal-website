import PFP from "../../public/pfp.png"
import Image from "next/image"
export default function About() {
    return (
        <div className="homeStyling">
            <Image src={PFP} alt="pfp" width="100" height="100"/>
            <h1>
                My name is Mateo Shkodra,
            </h1>

            <h2>
                I love playing soccer, and I used to play competitively until high school, now I just play for fun. Here is a cute video of me playing as a <a href="https://www.youtube.com/watch?v=0vCZo6EahTk" target="_blank">kid</a>.
            </h2>

            <h2>At the moment I am really into martial arts and fighting. I started training Brazilian Jiu Jitsu in Winter 2025, and Judo in Winter 2025. I'm a white belt in both, hopefully that will change soon.</h2>

            <h2>
                I used to be super into the piano, but I don't play as much as I used to. It is still my favourite genre of music, 
                check out my <a href="https://open.spotify.com/playlist/2w6EfyTxYyppiSDfKAzHq4?si=360700ac9499439f" target="_blank">spotify playlist</a>.
            </h2>

            <h2 style={{fontWeight: "500"}}><br/>Current Repertoire:</h2>
            <ul>
                <li><a href="https://www.youtube.com/watch?v=BExfhP9Xric" target="_blank">Prelude in C# Minor Op. 3, No. 2 - Rachmaninoff</a></li>
                <li>Waltz in C# Minor Op. 64, No. 2 - Chopin</li>
            </ul>
            

            <h2>I'm into philosophy, primarily existentialism. Though I'm branching out my reading list more and more. Excuse the categorization below, hard to group each book into single categories.</h2>

            <h2 style={{fontWeight: "500"}}><br/>Current Reading List:</h2>
            <ul>
                <h2 style={{fontWeight: "700"}}>Philosophy</h2>
                <li className="flicker">Nicomachean Ethics - Aristotle</li>

                <br/>
                <li>Nausea - Jean-Paul Sartre</li>
                <li>Fear and Trembling - Soren Kierkegaard</li>
                <li>The Myth of Sisyphus - Albert Camus</li>
                <li>The Outsider - Albert Camus</li>
                <li>Notes from Underground - Fyodor Dostoevsky</li>

                <br/>
                <h2 style={{fontWeight: "700"}}>Fiction</h2>
                <li>Animal Farm - George Orwell</li>
                <li>The Brothers Karamazov - Fyodor Dostoevsky</li>
                <li>Klara and the Sun - Kazuo Ishiguro</li>
                <li>When We Were Orphans - Kazuo Ishiguro</li>
                <br/>

                <h2 style={{fontWeight: "700"}}>Miscellaneous</h2>
                <li>Deep Work - Cal Newport</li>
                <li>Can't Hurt Me - David Goggins</li>
                <li>Atomic Habits - James Clear</li>
                <li>Digital Minimalism - Cal Newport</li>
            </ul>

            <br/>
        </div>


    )
}