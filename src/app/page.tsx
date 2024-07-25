import Link from "next/link";
//Home page
export default function MainPage() {

    return (
      <main>

        <div>
          <div>
          
            <div className="sectionBox">
              <h2>Welcome~ </h2>
              <p> You can call me Kat (unique name, I know), and this is my personal website, which I can use as a creative outlet to showcase stuffs and have a presence on the internet!</p><br></br> 
              <p> This site is currently a <span className ="text-red-600">work in progress</span> and will probably continue to do so for years to come, so it will be basic, barebone, and even broken (especially on smaller screens) at first, but hopefully the site will be optimized and more contents will be added in the future!</p>
              <br></br>
              <h2> Quick facts about me: </h2>
              <ul>
                <li> • My pronouns are she/they.</li>
                <li> • Software development is my main profession (Mainly React developer, but I also work with Python, C#, and maybe Rust).</li>
                <li> • Favorite hobbies include playing video games (especially rhythm games), creating mods, watching anime, and partaking in various creative activities such as music, drawing, writing, and DJing!</li>
                <li> • Aviation is a huge passion of mine and I am working on becoming an air traffic controller.</li>
              </ul>
              <br></br>
              <p> Thanks for visiting! And consider signing the <Link className = "text-red-600 underline" href ="https://cybercat.atabook.org/">Guestbook</Link>~</p>
            </div>
  
            <div className="sectionBox">
              <h2>Latest Blog Post </h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies erat nisl, ut vestibulum ligula ultricies eu. Etiam nibh nisl, hendrerit sed est vel, faucibus gravida lectus. Aenean sit amet aliquam felis. Aenean ultricies nisl id vehicula tincidunt. Suspendisse imperdiet sed sapien id vestibulum. Nullam ut mauris finibus, molestie metus a, ultricies nunc. Nam fermentum erat ut libero dictum convallis. Suspendisse accumsan dignissim velit, eu mattis felis sagittis sit amet. Proin lacus massa, interdum elementum aliquet sit amet, bibendum id tellus. Ut id dui tortor.</p>
            </div>
            <div className="sectionBox">
              <div className="flex flex-row">
                <h2> more stuffs coming soon...</h2>
                <img className="mb-[-10%] ml-[37%]" src = {'/kat-pics/kat-2.png'}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  