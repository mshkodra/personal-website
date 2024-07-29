import Header from "../../components/Header.js"
import Link from 'next/link'
import Germany from "./germany.js"
export default function GermanyHome() {
    return (
        <div className="everything">
            <Header 
                arr = {[0, 0, 0, 0, 1]}
            />
            <Link href="/blog">
                <h3 style={{color: "black", fontWeight: "400", fontSize: "15px"}}>Back to Home</h3>
            </Link>
            <Germany />
            
        </div>
    )
}