'use client'
import { useState, useEffect } from "react";


//Home page
export default function MainPage() {
    const dateTime= new Date();
    const [localDateTime, setLocalDateTime] = useState(dateTime.toLocaleString('en-US'));
    const [UTCTime, setUTCDateTime] = useState(dateTime.toLocaleString('en-US', { timeZone: 'UTC' }));
    const counter = 0;

    //const [buttonCounter, setButtonCounter] = useState(0);

    //real time clock useeffect
    const updateTime = () => {
      const newLocalTime = new Date().toLocaleString('en-US');
      const newUTCTime = new Date().toLocaleString('en-US', {timeZone: 'UTC'});

      setLocalDateTime(newLocalTime);
      setUTCDateTime(newUTCTime);
    }

    useEffect(() => {
      const timeInterval = setInterval(() => updateTime(), 1000);
      return () => {
        clearInterval(timeInterval);
      }
    }, [])
    

    return (
      <main>

        <div>
          <div>
          
            <div className="sectionBox">
              <h2>Welcome! </h2>
              <p> You can call me Kat, and this is my personal website, which I can use as a creative outlet to showcase stuffs and have a presence on the internet! It is currently a <span className ="text-red-600">work in progress</span> and will probably continue to do so for years to come! </p>
              <p> Why &quot;Cyber Cat&quot;? It&apos;s from the name of the organization (Cyber Cats Collective) my main OC is a part of so yeah.</p>
              <br></br>
              <h2> Quick facts about me: </h2>
              <ul>
                <li> • My pronouns are she/they.</li>
                <li> • Software development is my main profession. (Mainly React developer, but hoping to work with Python, C#, and maybe Rust more).</li>
                <li> • Favorite hobbies include playing video games (especially rhythm games), creating mods, watching anime, and partaking in various creative activities such as music, drawing, and writing.</li>
                <li> • Aviation is a huge passion of mine.</li>
              </ul>
              <br></br>
              <p> Thanks for visiting!</p>
            </div>
           
            <div className="sectionBox">
              <h2>Some numbers and stuffs! </h2>
              <ul>
                <li> The local date and time are {localDateTime}.</li>
                <li> The UTC date and time are {UTCTime}.</li>
                <li> There are X unique visitors to this site and X followers.</li>
                <li> This website was last updated on X, or X days ago.</li>
              </ul>
            </div>
  
            <div className="sectionBox">
              <h2>Latest Blog Post </h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies erat nisl, ut vestibulum ligula ultricies eu. Etiam nibh nisl, hendrerit sed est vel, faucibus gravida lectus. Aenean sit amet aliquam felis. Aenean ultricies nisl id vehicula tincidunt. Suspendisse imperdiet sed sapien id vestibulum. Nullam ut mauris finibus, molestie metus a, ultricies nunc. Nam fermentum erat ut libero dictum convallis. Suspendisse accumsan dignissim velit, eu mattis felis sagittis sit amet. Proin lacus massa, interdum elementum aliquet sit amet, bibendum id tellus. Ut id dui tortor.</p>
            </div>
            <div className="sectionBox">
              <h2> more stuffs coming soon...</h2>
            </div>
          </div>
        </div>
      </main>
    );
  }
  