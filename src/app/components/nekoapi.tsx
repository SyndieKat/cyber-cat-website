import React from 'react';

const Nekoapi = async () => {

    //credit to max.nekoweb.org for the orignal code
    let username = 'cybercat';

    const request = await fetch(`https://nekoweb.org/api/site/info/${username}`);
    const json = await request.json();
    
    let updated = new Date(json.updated_at).toLocaleDateString(); // Formats Last Updated text
    let created = new Date(json.created_at).toLocaleDateString(); // Formats Creation Date text
    let visitors = json.views;
    let followers = json.followers;
    
    return(
        <div>
            <ul>
                <li> <b>Created:</b> {created}</li>
                <li> <b>Last updated:</b> {updated}</li>
                <li> <b>Number of visitors:</b> {visitors}</li>
                <li> <b>Number of followers:</b> {followers}</li>
            </ul>
        </div>
    );
}

export default Nekoapi;
