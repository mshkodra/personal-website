import Part from "../components/subcomponents/part.js"
export default function Projects() {
    return (
        <div className="homeStyling">
            <h1>
                Some side projects of mine,
            </h1>
            <h2> that involved full-stack applications, work with LLM's or both.</h2>
            <div className="section">

                <Part 
                    date="Summer 2024"
                    h1="League of Legends Commentary LLM"
                    h2="Finetuned GPT4o-mini to be able to accurately generate League of Legends eSports commentary. Generated the data by having Whisper transcribe the commentary from uploaded 2016 World Championship VODs, and had it overlayed over videos using OpenAI's text-to-speech model."
                    h3="Python, Fine-tuning, Transformers"
                />
                <Part 
                    date="Summer 2024"
                    h1="Minecraft Chat-Assistant"
                    h2="Implemented a RAG model that would allow Llama 3 to more accurately answer Minecraft related questions, and had it deployed in a private server with friends for the players to use."
                    h3="Python, Transformers, RAG, LangChain"
                />
                <Part 
                    date="Winter 2024"
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
                <Part 
                    date="Summer 2023"
                    h1="myUniCourseBuddy"
                    h2="Course scheduling tool for friends to maximize shared lecture time together. Using MongoDB, UW course information sites and Graph Theory to generate and maximize optimize possible course schedules."
                    h3="React, Next, MongoDB, Puppeteer"
                />
            </div>
        </div>
    )
}
