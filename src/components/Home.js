import Layout from './Layout';
import Footer from './Footer';
import {useSpring, animated} from 'react-spring';

function Home() {
  const props = useSpring({
                           opacity:1, from:{opacity: 0},
                           config:{duration:1500}
                         });

  return (
    <animated.div style={props}>

      <div>

        <div className='container'>

          <Layout />

          <div className='content'>

            <p>
              Hello, I'm <strong>Farid Masjedi</strong>!<br/><br/>
              I'm a mathematics teacher and a theatre director turned <strong>
              software engineer</strong> in Sydney, Australia.<br/><br/>I'm passionate about coding, problem solving and of course, mathematics.
            </p>

            <hr/>
            <h4>My Skills</h4>
            <div className="skillsIcons">
              <i class="devicon-react-original-wordmark" />
              <i class="devicon-javascript-plain"/>
              <i class="devicon-ruby-plain-wordmark"/>
              <i class="devicon-rails-plain-wordmark"/>
              <i class="devicon-nodejs-plain-wordmark"/>
              <i class="devicon-html5-plain-wordmark"/>
              <i class="devicon-css3-plain-wordmark"/>
            </div>
            

            <hr/>

            <h4>Projects</h4>

          </div>

          <div className='projects-home'>

            <div className="project-samples">
              <a href="/#/tic-tac-toe" className='projects-a-img'>
                <img src="Tic-Tac-Toe.jpg" className="project-home-img"/>
              </a><br/><br/>
              <a href="/#/tic-tac-toe" className='projects-a'>Tic-Tac-Toe</a>
            </div>

            <div className="project-samples">
              <a href="/#/nomad-art-group" className='projects-a-img'>
                <img src="Nomad-Art-Group.jpg" className="project-home-img"/>
              </a><br/><br/>
              <a href="/#/nomad-art-group" className='projects-a'>Nomad Art Group</a>
            </div><br/>

            <div className="more-projects-nav">
              <a href='/#/projects'>More Projects &#x2192;</a>
            </div><br/>

          </div>

          <div className='content'>
            <hr/>
            <p>
              “But in my opinion, all things in nature occur mathematically.” --Rene Decartes<br/>
            </p>
          </div>

          <Footer />

        </div>
      </div>
    </animated.div>

  );
}

export default Home;
