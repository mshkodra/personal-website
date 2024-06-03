import Part from "../components/subcomponents/part.js"
export default function Projects() {
    return (
        <div className="homeStyling">
            <h1>
                Some side projects of mine,
            </h1>
            <h2>consist mainly of full-stack apps, machine learning models or both. Below are some that I am most proud of.</h2>
            <div className="section">
                <Part 
                    date="Ongoing"
                    h1="TrueWeekly"
                    h2="Developed and deployed a full-stack app with React and Flask, integrating OAuth for Spotify account access. Utilized Pandas, NumPy for data processing, and Skikit-Learn for a playlist recommendation model."
                    h3="Scikit-Learn, Pandas, Flask, React"
                />
                <Part 
                    date="Winter 2024"
                    h1="Catan"
                    h2="Created Settlers of Catan in C++ using OOP for game elements like tiles, resources, players, and the board. Utilized Observer Design Pattern for real-time updates and interactions, and Factory Design Pattern for game initialization options."
                    h3="C++"
                />
            </div>
        </div>
    )
}
