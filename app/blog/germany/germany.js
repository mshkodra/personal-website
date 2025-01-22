import Image from "next/image";
import leipzig from "@/public/leipzig.jpg";
import mendelssohn from "@/public/mendelssohn.jpg";
import albania_fans from "@/public/albania_fans.jpg";
import frankfurt_river from "@/public/frankfurt_river.jpg";
import frankfurt_game from "@/public/frankfurt_game.jpg";

export default function Germany() {
    return (
        <div className="homeStyling">
            <h1>My trip to Germany,</h1>
            <h2>will perhaps be one of my most beloved memories in my life. Hopefully that isn't the case and my life continues to be as, or if not, more interesting in the future, but regardless it was beautiful. Football is my 2nd, if not, my biggest interest and have been playing the game ever since I could walk. Naturally when Albania qualified for the Euro's this summer (their second major tournament qualification ever), I, like every other Albanian on this Earth, signed up for the ticket draw to watch one of their group matches. I swiftly registered and then completely forgot about it for months.</h2>

            <h2>Come February, I was on school term and searching for summer internships, and was dreaming about waking up in the morning, looking at my phone, and seeing the email notification about getting accepted for interviews. One particular morning, I woke up, read the congratulations and instinctively got excited, then saw that it was an email from UEFA and became even more excited. I was lucky enough to get 4 tickets for Albania vs. Croatia. This was incredible and which I later found out was extremely lucky since everyone I knew who applied for tickets had no such luck. I quickly bought the tickets and from there the Germany trip planning began.</h2>


            <h2>My flight was booked for Frankfurt, and I was to meet the rest of my family there as they had already been vacationing in Albania without me for a few months. Immediately I noticed the atmosphere for the tournament. Standing there at the train station, I forgot that there was a game going on and didn't realize that the TV's were actually playing the live updates from Switzerland vs. Hungary game.</h2>

            <h2>When I arrived in Frankfurt, you could see people around with jerseys, and I was right next to the fan zone where they had huge TV's all along the river where fans were together watching the ongoing games. Later that day I went to go see Italy vs. Albania on the big TV's and it was so awesome seeing so many other Albanian's there finally speaking a language other than German that I could actually understand. That game Albania scored the fastest goal in Euro history and everyone was going crazy.</h2>

            <Image src={frankfurt_river} alt="Frankfurt River" style={{width: "50%", height: "50%"}} />
            <Image src={frankfurt_game} alt="Frankfurt Fans" style={{width: "50%", height: "50%"}} />
            <h2>(I will attach an image here but I am currently at the aurport again so will leave that for when I can sit down properly again.)</h2>


            <h2>This beautiful atmosphere continued when we moved from city to city in a rental car. Dusseldorf was really cool since there were a ton more fans, and in the city centre where there were a lot of bars and restaurants, the concentration of fans was even larger and I could experience those street vibes that you would usually only see in YouTube videos showing the beauty of the game or something like that.</h2>


            <video style={{width: "50%"}} src="/dusseldorf_fans.MOV" type="video/MOV" controls>Austria & France fans in Dusseldorf</video>
            <video style={{width: "50%"}} src="/dusseldorf_2.MOV" type="video/MOV" controls>More Austria & France fans</video>
            <h2>Hamburg was really beautiful as well, and it was finally time to see the game in person. I'd seen only 1 European football game prior to this; Chelsea vs. Brentford in Stamford Bridge which was super cool, but the Chelsea fans are not known for being super loud, especially when this was around the start of their decline in form. This on the other hand was much cooler, there was actually hope for Albania since Croatia had previously just been destroyed by Spain and with the team getting older we thought we had a chance. The fans were so loud, and actually had chants that you could hear unlike the scrambled Chelsea supporters. When we scored it was wild, people jumping in the air, throwing their cups of beer and screaming. We were initially winning 1-0, when eventually we started losing 1-2, and thought it would remain like this when we scored a last minute equalizer which I caught on video.</h2>


            {/* Put video of goal + picture of the Albanian fans */}
            <video style={{width: "50%"}} src="/albania_goal.MOV" type="video/MOV" controls>Albania equaliser vs Croatia</video>
            <Image src={albania_fans} alt="Albania Fans" style={{width: "50%", height: "50%"}} />
            <h2>Here I will put the video I recorded + some more images.</h2>




            <h2>This game was the highlight of the trip honestly, and the rest of it became more touristy and less foccused on football since my brother had to leave us to visit his girlfriend in another country. Berlin had a very cold feeling, but got to go see the Berlin wall, as well as some museums. We left Berlin the day before I had to fly back to Canada, and thus drove back to Frankfurt, stopping in Leipzig since it was on the way. Leipzig is the home of many famous classical composers including Schumann, Mendelssohn and Bach. Some of them weren't born here, but still lived there for a few years and had their homes turned into musuems for people to learn about their lives.</h2>

            <Image src={mendelssohn} alt="Mendelssohn" style={{width: "50%", height: "50%"}} />
            <Image src={leipzig} alt="Leipzig" style={{width: "50%", height: "50%"}} />

            <h2>Eventually after 1700 kilomteres on the road we arrived back in Frankfurt, experiencing a once in a life time opportunity which I can hopefully experience again and then had to fly back to Canada where I resumed my regular life again.</h2>

            
 
        </div>
    )
}