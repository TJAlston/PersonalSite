import React, { Component } from 'react'
import Header from './Header'
class AboutMe extends Component {

  render () {
    return <div>
    <Header />
      <main>
        <h2>Some Tidbits About Me</h2>
        <div className='about'>
          <div className='newhaven' />
          <p className='homeA'> Born an raised in New Haven Connecticut, home to Yale University and known as the "Cultural Capital of Connecticut". I was always exposed to the arts when I was growing up. During my childhood I was always either in photography, video, dance, drawing, painting, choir or theatre. </p>
        </div>
        <div className='about'>
          <p className='homeP'> In June of 2000, I graduated from Cooperative Arts and Humanities High School at that time it was the only full-time arts High School in Connecticut.  I graduated as a Visual Arts major with a concentration in Video and Photography.  During that time I was Secretary of the Senior Class, Editor in Cheif of our class Yearbook and Tresurer of the Recycling Club.  I was also inducted into the National Art Honor Society that same year. </p>
          <div className='coop' />
        </div>
        <div className='about'>
          <div className='uncw' />
          <p className='homeA'> I attended college at the University of North Carolina and Wilmington. In 2003, I joined the Pi Nu Chapter of Zeta Phi Beta Sorority Incorporated. I graduated in 2004 with a Bachelor of Arts Degree in Communication Studies and a minor in Theater.   Worked on the student television channel Studio 124 as a Technical Director and Set Designer.  I also graduated with the honor of being on the Dean's List my last two consecutive years. </p>
          </div>
        <div className='about'>
          <p className='homeP'> One of the proudest moments of my life was joining a competeitve Step Team in Alexandria Virginia by the name of Z-Phi Dynasty. Not only did we get to perform in arenas in front of thousands of people, we won countless shows and are known for being the very first step team to win BET's StepOff Challenge. </p>
          <iframe width='560' height='315' src='https://www.youtube.com/embed/sW8PQT-uhbw' frameBorder='0' allowFullScreen></iframe>
        </div>
        <div className='about'>
          <div className='sauls' />
          <p className='homeA'> After moving to Florida, I became involved with the Tampa Independent Film and Theater Scene.  I worked with Award Winning Director Tony Stinyard in multiple Films and Theater Shows for AMS Productions as an Assisant Director, Production Manager and Stage Manager.  Sauls Juke Joint is an award winning Musical and a local Tampa favorite.
          </p>
        </div>
      </main>
    </div>
  }
}

export default AboutMe
