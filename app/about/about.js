export default function About() {
    return (
        <div className="homeStyling">
            <h1>
                My name is Mateo Shkodra,
            </h1>

            {/* <h2>
                I am a student at the University of Waterloo entering my 3rd year this fall. I am studying Combinatorics & Optimization and Statistics, but who knows, maybe that is subject to change.
            </h2> */}

            <h2>
                I am a student entering my 3rd year of studies at the University of Waterloo where I am double majoring in Combinatorics & Optimization and Statistcs.
            </h2>
            <h2>
                I love playing soccer and the piano, and recently I started reading a lot of literature. I support Chelsea FC, the best club in London and England. I played soccer competitively when I was a kid until high school, and now I just play for fun at school and in mens leagues.
            </h2>

            <h2>
                My favourite genre of music is classical music, and so on the piano that's what I mainly play.
            </h2>

            
            <h2 style={{fontWeight: "500"}}><br/>Current Repertoire:</h2>
            <ul>
                <li className="flicker">Moonlight Sonata Mv. 1, 2, 3 - Beethoven</li>
                <li>Prelude in C# Minor Op. 3, No. 2 - Rachmaninoff</li>
                <li>Waltz in C# Minor Op. 64, No. 2 - Chopin</li>
            </ul>

            <br/>

            <h2>
                When I was a kid my Mom would make me read a lot and I stopped liking it as I grew older, but recently I started reading again since I realized I could simply read the books I want to read, and not read the ones I don't want to read.
            </h2>

            <h2 style={{fontWeight: "500"}}><br/>Current Reading List:</h2>
            <ul>
                <li className="flicker">The Brothers Karamazov - Fyodor Dostoevsky</li>
                <li>Klara and the Sun - Kazuo Ishiguro</li>
                <li>When We Were Orphans - Kazuo Ishiguro</li>
            </ul>
        </div>


    )
}