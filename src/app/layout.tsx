import type { Metadata } from "next";
import Link from "next/link";
//import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nya~",
  description: "nyan nyan punch",
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
              <div className="sectionBox" id="sideBox">
                <h2>Links</h2>
                <ul>
                  <li><Link className = "hover:text-red-600 hover:underline" href="/">Home</Link></li>
                  <li><Link className = "hover:text-red-600 hover:underline" href="/about">About</Link></li>
                  <li><a className = "hover:text-red-600 hover:underline" href="http://www.twitter.com/SyndieKat">Twitter (it will never be X)</a></li>
                  <li><a className = "hover:text-red-600 hover:underline" href="http://github.com/SyndieKat">GitHub</a></li>
                  <li><a className = "hover:text-red-600 hover:underline" href="https://next.nexusmods.com/profile/syndiekat/">Nexus</a></li>
                  <li><Link className = "hover:text-red-600 hover:underline" href="/blog">Blog</Link></li>
                  <li> Worldbuilding (Coming Soon!)</li>
                </ul> 
              </div>

              <div className="sectionBox" id="sideBox">
                <h2>Banger music</h2>
                <iframe width="100%" height="166" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/726697129&color=%23fc0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              </div>

              <div className="sectionBox" id="sideBox">
                <h2>Status Update</h2>
                <p> 4am wawa</p> 
              </div>
              
              <div className="sectionBox" id="sideBox">
                <h2>Web statistic</h2>
                <p> Coming soon!</p> 
              </div> 

              <div className="sectionBox" id="sideBox">
                <h2>some cool buttons</h2>
                <div className="flex">
                  <a href="https://nekoweb.org/"><img src="https://nekoweb.org/assets/buttons/button3.gif"/></a>
                  <a href="https://dimden.dev/"><img src="https://dimden.dev/services/images/88x31.gif"/></a>
                  <a href="https://maia.crimew.gay"><img src="https://maia.crimew.gay/badges/maia.crimew.gay.png"/></a>
                </div>
                <div className="flex">
                  <a href="https://xtract.dev/"><img src="https://xtract.dev/buttons/button_yuuki.png" alt="xtract's space"/></a>
                  <a href="https://www.mozilla.org/en-US/firefox/new/"><img src="https://file.garden/ZgvLyuxekygVJeux/buttons/season1/firefox4.gif"/> </a>
                  <img src="https://file.garden/ZgvLyuxekygVJeux/buttons/season1/miku.gif"/>
                </div>
              </div> 
            </div>
            <div className="bodyContainer" id="mainBox">
              {children}
            </div>
          </div>
          <p className ="text-center"> Made with Node.js, Next.js, TailwindCSS. Powered by Nekoweb. </p>
        </div>
      </body>
    </html>
  );
}
