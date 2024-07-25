import type { Metadata } from "next";
import Link from "next/link";
//import { Inter } from "next/font/google";
import "./globals.css";
import Nekoapi from "./components/nekoapi";
import Clock from "./components/clock";
import Musicplayer from "./components/musicplayer";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nya~",
  description: "pink nyan nyan punch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mainContainer">
          <h1>Cyber Cat</h1>  
          <div className = "flex flex-row justify-between">
            <div className = "bodyContainer">
              <img className = "absolute mt-[-7%] ml-[14%]"src = {'/kat-pics/kat-1.png'}/>
              <div className="sectionBox" id="sideBox">
                <h2>Links</h2>
                <ul>
                  <li><Link className = "hover:text-red-600 hover:underline" href="/">Home</Link></li>
                  <li><Link className = "hover:text-red-600 hover:underline" href="/about">About</Link></li>
                  <li><Link className = "hover:text-red-600 hover:underline" href="http://www.X.com/SyndieKat">Twitter</Link></li>
                  <li><Link className = "hover:text-red-600 hover:underline" href="http://github.com/SyndieKat">GitHub</Link></li>
                  <li><Link className = "hover:text-red-600 hover:underline" href="https://next.nexusmods.com/profile/syndiekat/">Nexus</Link></li>
                  <li><Link className = "hover:text-red-600 hover:underline" href="/blog">Blog</Link></li>
                  <li><Link className = "hover:text-red-600 hover:underline" href ="https://cybercat.atabook.org/">Guestbook</Link></li>
                </ul> 
              </div>

              <div className="sectionBox" id="sideBox">
                <h2>Music that I like</h2>
                <Musicplayer/>
              </div>

              <div className="sectionBox" id="sideBox">
                <h2>Status Update</h2>
                <p> 4am wawa</p> 
              </div>
              
              <div className="sectionBox" id="sideBox">
                <h2>Web Statistics</h2>
                <Clock/>
                <Nekoapi/> 
              </div> 

              <div className="sectionBox" id="sideBox">
                <h2>some cool buttons</h2>
                <div className="flex">
                  <a href="https://nekoweb.org/"><img src="https://nekoweb.org/assets/buttons/button3.gif" title="nyan nyan~"/></a>
                  <a href="https://dimden.dev/"><img src="https://dimden.dev/services/images/88x31.gif"title="how i found out about nekoweb in the first place"/></a>
                  <a href="https://maia.crimew.gay"><img src="https://maia.crimew.gay/badges/maia.crimew.gay.png" title="cool anarchist hacker"/></a>
                </div>
                <div className="flex">
                  <a href="https://xtract.dev/"><img src="https://xtract.dev/buttons/button_yuuki.png" alt="xtract's space" title="another kat!"/></a>
                  <a href="https://remblanc.com"><img src="https://remblanc.com/images/button.png" alt="remblanc"/></a>
                  <a href="https://max.nekoweb.org/"><img src="https://max.nekoweb.org/images/button.png" alt="max's apartment"/></a>
                </div>
                <div className="flex">
                  <a href="https://www.mozilla.org/en-US/firefox/new/"><img src="https://file.garden/ZgvLyuxekygVJeux/buttons/season1/firefox4.gif"title="superior browser"/> </a>
                  <img src="https://file.garden/ZgvLyuxekygVJeux/buttons/season1/miku.gif" title="the world belongs to her and her alone"/>
                  <a href="https://marisakirisame.net/battle-of-wits"><img src="https://marisakirisame.net/battle-of-wits.gif" title="oops"/></a>
                </div>
              </div> 
            </div>
            <div className="bodyContainer" id="mainBox">
              {children}
            </div>
          </div>
          <p className ="text-center"> Made with Node.js, Next.js, Tailwind CSS. Powered by Nekoweb. </p>
        </div>
      </body>
    </html>
  );
}
