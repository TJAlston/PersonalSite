import React, { Component } from 'react'
import Header from './Header'
import { Link } from 'react-router'

class AboutMe extends Component {

  render () {
    return <div className='AboutMe'>
    <Header />
          <main>
         <h2>About Me</h2>
        <div className='about'>
           <div className='newhaven' />
           <p className='homeA'> Born and raised in New Haven Connecticut, home to Yale University and known as the "Cultural Capital of Connecticut". I was always exposed to the arts when I was growing up. During my childhood I was always either in photography, video, dance, drawing, painting, choir or theatre. </p>
           <img src='http://i49.tinypic.com/2rz5746.jpg' height='300' width='300' />
         </div>
         <div className='about'>
          <div className='coop' />
           <p className='homeP'> In June of 2000, I graduated from Cooperative Arts and Humanities High School at that time it was the only full-time arts High School in Connecticut.  I graduated as a Visual Arts major with a concentration in Video and Photography.  During that time I was Secretary of the Senior Class, Editor in Cheif of our class Yearbook and Tresurer of the Recycling Club.  I was also inducted into the National Art Honor Society that same year. </p>
           <img src='http://news.yale.edu/sites/default/files/ydb-images/8102-32332916.jpg' height='300' width='300' />
         </div>
         <div className='about'>
           <div className='uncw' />
          <p className='homeA'> I attended college at the University of North Carolina at Wilmington. In 2003, I joined the Pi Nu Chapter of Zeta Phi Beta Sorority Incorporated. I graduated in 2004 with a Bachelor of Arts Degree in Communication Studies and a minor in Theater.   Worked on the student television channel Studio 124 as a Technical Director and Set Designer.  I also graduated with the honor of being on the Dean's List my last two consecutive years. </p>
          <img src='https://its-go-time.com/wp-content/uploads/2015/02/UNCW_Primary_WhiteBgrnd.jpg' height='300' width='300' />
           </div>
         <div className='about'>
           <p className='homeP'> One of the proudest moments of my life was joining a competitive Step Team in Alexandria Virginia by the name of Z-Phi Dynasty. Not only did we get to perform in arenas in front of thousands of people, we won countless shows and are known for being the very first step team to win BET's StepOff Challenge. </p>
           <iframe width='560' height='315' src='https://www.youtube.com/embed/sW8PQT-uhbw' frameBorder='0' allowFullScreen></iframe>
         </div>
         <div className='about'>
           <div className='sauls' />
           <p className='homeA'> After moving to Florida, I became involved with the Tampa Independent Film and Theater Scene.  I worked with Award Winning Director Tony Stinyard in multiple Films and Theater Shows for AMS Productions as an Assistant Director, Production Manager and Stage Manager.  Sauls Juke Joint is an award winning Theatrical Dance Musical and a local Tampa favorite which is Written, Directed and Produced by Tony Stinyard, Music Written by Grammy Award Winning Music Director Desmond Boone, Sr.
           </p>
           <img src="https://s-media-cache-ak0.pinimg.com/236x/0c/a1/2c/0ca12cd076ff05ae4de6eaaaccadbd75.jpg" height='500' width='300' />
         </div>
       </main>
     </div>
  }
}

export default AboutMe
