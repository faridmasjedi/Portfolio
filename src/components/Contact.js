import Layout from './Layout';
import Footer from './Footer';
import {useSpring, animated} from 'react-spring';

function Contact() {
  const props = useSpring({
                           opacity:1, from:{opacity: 0},
                           config:{duration:1500}
                         });


  return (
    <animated.div style={props}>

      <div className='container'>

        <Layout />

        <div className='content'>
          <h3> Lets have a chat! </h3>
          <br/>Email: farid.masjedi1985@gmail.com<br/>
          <br/>Twitter: <a href="https://twitter.com/FaridM118"
                          target="_blank"
                          className="path"
                          className='point'
                       >
                        https://twitter.com/FaridM118
                       </a><br/>
          <br/>Linkedin: <a href="https://au.linkedin.com/in/farid-masjedi"
                  target="_blank"
                  className="path"
                  className='point'
               >https://au.linkedin.com/in/farid-masjedi</a><br/>
          <br/>Github: <a href="https://github.com/faridmasjedi"
                  target="_blank"
                  className="path"
                  className='point'
               >https://github.com/faridmasjedi</a><br/>
          <br/>Mobile: 0449 077 053<br/>
          <br/>Resume: <a href="https://drive.google.com/file/d/1GhcFZy8_VFM_yRGoPuw-UCuB4efRe4nN/view?usp=sharing"
                  target="_blank"
                  className="path"
                  className='point'
               >link to my resume</a><br/>

        </div>

        <div className='content'>
          <hr/>
          <p>
            “Mathematics would certainly have not come into existence if one had
            known from the beginning that there was in nature no exactly straight line,
            no actual circle, no absolute magnitude.” -- Friedrich Nietzsche<br/>
          </p>
        </div>
        <footer>
          <p> Designed and built by Farid Masjedi - an experiment with React | ©2020 </p>
        </footer>

      </div>
    </animated.div>

  );
}

export default Contact;
