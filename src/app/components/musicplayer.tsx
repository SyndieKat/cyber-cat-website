'use client'
import React from 'react';
import {useState} from 'react';

export default function Musicplayer() {
    const songArray = [
        '726697129',    //Bifrost by satie
        '1249097854',   //Waltz Und Basse by Nstryder
        '1125859369',    //Nephilis by Gardens
        '332365573',    //Farthest Limit by Lonouc
        '347930617',    //OVER by Mavie
        '273739966',    //Shades of Light in a Transcendent Realm by ak+q
        '1211887603',   //Fantasia Sonata Destiny by PYKAMIA
    ]

    const [randomSongPicker, setRandomSongPicker] = useState(Math.floor(Math.random() * songArray.length));
    const songSelect = songArray[randomSongPicker];
    const songURL = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${songSelect}&color=%23fc0000&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`

    console.log(randomSongPicker);

    return (
        <div>
            <br></br>
            <iframe width="100%" height="166" src= {songURL}></iframe>
        </div>
    )
}
