import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class AboutMe extends Component {

  render () {
    return <div className='AboutMe'>
    <Header />
        <main className='about'>
        <h2>About Me</h2>
        <div className='newHaven'>
          <img id='newHaven' src='http://i49.tinypic.com/2rz5746.jpg' height='300' width='300' />
           <p className='homeA'> Born and raised in New Haven Connecticut, home to Yale University and known as the "Cultural Capital of Connecticut". I've always been exposed to the arts when growing up. During my childhood, I was always either in photography, video, dance, drawing, painting, choir or theatre. </p>
         </div>
         <div className='coop'>
           <p className='homeP'> In June of 2000, I graduated from Cooperative Arts and Humanities High School at that time it was the only full-time arts High School in Connecticut.  I graduated as a Visual Arts major with a concentration in Video and Photography.  During that time I was Secretary of the Senior Class, Editor in Cheif of our class Yearbook and Tresurer of the Recycling Club.  I was also inducted into the National Art Honor Society that same year. </p>
           <a href='http://co-opartsandhumanities.org/'>
           <img id='coop' src='http://news.yale.edu/sites/default/files/ydb-images/8102-32332916.jpg' height='300' width='300' />
           </a>
         </div>
         <div className='uncw'>
          <a href='http://uncw.edu/'>
          <img id='uncw' src='https://its-go-time.com/wp-content/uploads/2015/02/UNCW_Primary_WhiteBgrnd.jpg' height='300' width='300' />
          </a>
          <p className='homeA'> In June 2004, I received a Bachelor of Arts Degree in Communication & Media Studies as well as a minor in Theater at the University of North Carolina at Wilmington. During that time I had a plethora of achievements. With four other sorors we reactivated the Pi Nu Chapter of Zeta Phi Beta Sorority Incorporated which is still currently active. I also worked on the student television channel Studio 124 as a Technical Director and Set Designer. I also graduated with the honor of being on the Dean's List my last two consecutive years.</p>
         </div>
         <div className='step'>
           <p className='homeP'> One of the proudest moments of my life was joining a competitive Step Team in Alexandria Virginia by the name of Z-Phi Dynasty. Not only did we get to perform in arenas in front of thousands of people in the Tri-State Area, we won countless shows and are known for being the very first step team to win B.E.T.'s StepOff Challenge. </p>
           <iframe id='step' width='420' height='300' src='https://www.youtube.com/embed/sW8PQT-uhbw' frameBorder='0' allowFullScreen></iframe>
         </div>
         <div className='sauls'>
          <img id='sauls' src='https://s-media-cache-ak0.pinimg.com/236x/0c/a1/2c/0ca12cd076ff05ae4de6eaaaccadbd75.jpg' height='400' width='300' />
           <p className='homeA'> After moving to Florida, I became involved with the Tampa Independent Film and Theater Scene.  I worked with Award Winning Director Tony Stinyard in multiple Films and Theater Shows for AMS Productions as an Assistant Director, Production Manager, Stage Manager and Actress.  AMS is most well-known for Sauls Juke Joint, it is an award winning Theatrical Dance Musical and a local Tampa favorite which is Written, Directed and Produced by Tony Stinyard, Music Written by Grammy Award Winning Music Director Desmond Boone, Sr.
           </p>
         </div>
         <div className='oncue'>
           <p className='homeP'>Currently, I am in a Hip-Hop Dance team called OnCue Dance as an Elite Dancer.  We performed at the St Pete Pride Parade in 2014, multiple Music Videos, as well as other shows across Tampa. So as you can see... Performing and Visual Arts are definitely part of my being.</p>
           <img id='oncue' src={require('../images/oncue.jpg')} height='300' width='400' />
         </div>
         <div className='tiy'>
          <a href='https://www.theironyard.com/'>
          <img id='tiy' src={require('../images/tiy.jpeg')} height='300' width='300'/>
          </a>
           <p className='homeP'> As a recent Front End Engineering graduate of the Iron Yard, I am now able to show my creativity everyday using Web Development and Graphic Designing. The knowledge that I have obtained during my cohort was amazing.  Web Designing is so fun and challenging all at once. I'm always eager to make something beautiful from a blank page.</p>
         </div>
       </main>
      <Footer />
     </div>
  }
}

export default AboutMe
