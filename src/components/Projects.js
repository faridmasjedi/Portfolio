import Layout from './Layout';
import Footer from './Footer';
import {useSpring, animated} from 'react-spring';

function Projects(){
  const props = useSpring({
                           opacity:1, from:{opacity: 0},
                           config:{duration:1500}
                         });

  return (

    <animated.div style={props}>

      <div className='container'>

        <Layout />

        <div className='projects-home'>

          <div className='project-samples'>
            <a href="/#/tic-tac-toe">
              <img src="Tic-Tac-Toe-2.jpg" className="project-img"/>
            </a><br/><br/>
            <a href="/#/tic-tac-toe">Tic-Tac-Toe</a>
          </div>

          <div className='project-samples'>
            <a href="/#/nomad-art-group">
              <img src="Nomad-Art-Group-2.jpg" className="project-img"/>
            </a><br/><br/>
            <a href="/#/nomad-art-group">Nomad Art Group</a>
          </div>

          <div className='project-samples'>
            <a href="/#/spaceship-game">
              <img src="spaceship.jpg" className="project-img"/>
            </a><br/><br/>
            <a href="/#/spaceship-game">Spaceship Game</a>
          </div>

          <div className='project-samples'>
            <a href="/#/tower-game">
              <img src="Tower.jpg" className="project-img"/>
            </a><br/><br/>
            <a href="/#/tower-game">Tower Game</a>
          </div>

          <div className='project-samples'>
            <a href="/#/prime-numbers-client">
              <img src="Prime-Numbers.jpg" className="project-img"/>
            </a><br/><br/>
            <a href="/#/prime-numbers-client">Prime Numbers Client</a>
          </div>

          <div className='project-samples'>
            <a href="/#/prime-numbers-server">
              <img src="Prime-Numbers-Server.jpg" className="project-img"/>
            </a><br/><br/>
            <a href="/#/prime-numbers-server">Prime Numbers Server</a>
          </div>

        </div>

        <div className='content'>

          <hr/>
          <p>
            “The important thing to remember about mathematics is not to be frightened” -- Richard Dawkins<br/>
          </p>

        </div>

        <Footer />
      </div>

    </animated.div>
  )
}

export default Projects;
