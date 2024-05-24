import Part from "../components/subcomponents/part.js"
export default function Projects() {
    return (
        <div className="section">
            <h2>Projects</h2>
            <Part 
                date="Ongoing"
                h1="TrueWeekly"
                h2="Developed and deployed a full-stack app with React and Flask, integrating OAuth for Spotify account access. Utilized Pandas, NumPy for data processing, and PyTorch for ML to create personalized playlists and analytics."
                h3="PyTorch, Pandas, Flask, React"
            />

            <Part 
                date="Winter 2024"
                h1="Catan"
                h2="Created Settlers of Catan in C++ using OOP for game elements like tiles, resources, players, and the board. Utilized Observer Design Pattern for real-time updates and interactions, and Factory Design Pattern for game initialization options."
                h3="C++"
            />
        </div>


    )
}