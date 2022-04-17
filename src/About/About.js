import React from 'react';
import me from '../../src/images/me.jpg'
import './About.css'

const About = () => {
    return (
        <div className='me'>
            <img src={me} alt="" />
           <p><b>Name:</b> Md. Monir Mia .</p>
           <p><b>Qualification:</b> BBA & MBA .</p>
           <p><b>Major Subject:</b> Finance & Banking .</p>
           <p><b>University:</b> Rajshahi University .</p>
           <p>I'm learning web development but I have no enough time to practice due to my job. although the time is short, and journey is long, I will see it's last. This is my determination.</p>
           
           
          
        </div>
    );
};

export default About;