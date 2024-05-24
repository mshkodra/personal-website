import Header from "./components/Header.js"
import About from "./about/about.js"
import Projects from "./projects/projects.js"
import Links from "./components/links.js"
import HomePage from "./HomePage.js"
import "./globals.css"


export default function Home() {
  return (
    <div className="everything">
      <link rel="icon" href="/icon.png" type="image/png" sizes="32x32"/>
      <Header />
      <HomePage />
      <Links />
    </div>
  );
}
