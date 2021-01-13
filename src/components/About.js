import Layout from './Layout';
import Footer from './Footer';
import {useSpring, animated} from 'react-spring';

function About() {
  const props = useSpring({
                           opacity:1, from:{opacity: 0},
                           config:{duration:1500}
                         });


  return (
    <animated.div style={props}>

      <div className='container'>

        <Layout />

        <div className='My-img'>
          <img src="Picture1.png" className='My-img'/>
        </div>

        <div className='content'>
          <p> My name is Farid Masjedi. I am a junior software engineer based in Sydney, Australia.
            Originally from Iran.
          </p>

          <p>
           I have recently graduated from General Assembly. And I am looking for my first job.
           I enjoy working as a team member and helping others.
          </p>

          <p>Some of my friends and I have an art group named Nomad Art Group. I directed
           a theatre named Dystopia. Also I ran a movie workshop. I was a director assistant
           for two times too. I made videos for theatre advertisements and video arts
           during the performances. <br/><br/>
           Yes, if I am not at a computer, I am in theatre or making videos.<br/><br/>
           Beside that, I love mathematics and always want to think about maths problems. Now
           I am thinking about prime numbers and how to work with big numbers to check if
           a number is prime or not.
          </p>

          <p>
            If you'd like to have a chat, feel free to contact me.
            <br/><br/>Email: farid.masjedi1985@gmail.com
            <br/>Mobile: 0449 077 053
          </p>

        </div>

        <div className='content'>
          <hr/>
          <p>
            “It is the story that matters not just the ending.” -- Paul Lockhart<br/>
          </p>
        </div>

        <Footer />
      </div>
    </animated.div>

  );
}

export default About;
