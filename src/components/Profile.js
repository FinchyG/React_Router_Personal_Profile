import React from 'react';

const Profile = () => {

    return(
        <div>
            <h1>Profile</h1>
            <p>Hi, I'm Luke and welcome to my personal profile. I'm thirty-three years old 
                and live in the county of West Yorkshire, United Kingdom. If you want to 
                find out more about me, please click on the above links to find out more about 
                my interests.</p>
            <img id="profile_image" src={require('../images/me.png')} />
        </div>
    );
};

export default Profile;