import Layout from './Layout';
import Footer from './Footer';
import {useSpring, animated} from 'react-spring';

function Spaceship(){
  const props = useSpring({
                           opacity:1, from:{opacity: 0},
                           config:{duration:1500}
                         });

  return(

    <animated.div style={props}>

      <div className='container'>

        <Layout />

        <div className="content">

          <h3>Game: "Spaceship"</h3>
          <p>
            This is a game made by using Phaser3. There are some rocks that if the
            spaceship has collision with them, the game is over. There is a petrol
            value as well and if it is finished, the game is over. At some certain
            seconds, the petrol icons will pop up, and if the player eats them, the
            score (which shows the seconds that the game is not over) will be added
            by 10 points, the petrol will be added by 10 as well and the velocity of
            the rocks will be increased. The rocks have random position.
          </p>

          <img src="spaceship-2.jpg" className="project-home-img"/>

          <h4>About this project</h4>
          <p>Making a game using Phaser3 and modern javascript, it is the third project
            in software engineering immersive course of GA (General Assembly) Sydney. This
            was a group project.
          </p>

          <h4>Links</h4>
          <p>Link to all games:<br/>
            <a href="https://cullsgit.github.io/games/"
              target="_blank"
              className='path'
              className='point'
            >
              https://cullsgit.github.io/games/
            </a>
          </p>
          <p>Link to Spaceship game:<br/>
            <a href="https://cullsgit.github.io/games/FM-Spaceship/index.html"
              target="_blank"
              className='path'
              className='point'
            >
              https://cullsgit.github.io/games/FM-Spaceship/index.html
            </a>
          </p>
          <p>Link to code:<br/>
            <a href="https://github.com/CullsGit/games/tree/main/FM-Spaceship"
               target="_blank"
               className='path'
               className='point'
            >
              https://github.com/CullsGit/games/tree/main/FM-Spaceship
            </a>
          </p>

          <h4>Making game steps</h4>
          <ul>

            <li>
              <h4>config.js</h4>
              <ul>
                <li>config</li>
                <p>
                  Define the configuration of the game: width and height of the canvas,
                  physics (arcade), and the scene.
                </p>
              </ul>
            </li>

            <li>
              <h4>GameScene.js</h4>
              <ul>

                <li>Load</li>
                <p>
                  Loading all the images, sprite sheets, audios and defining the cursors
                  as user can play the game using arrow keys.
                </p>

                <li>Create</li>
                <p>
                  Defining different functions for creating different objects of the game.
                </p>

                <ul>
                  <li>createMainSong()</li>
                  <li>createSky()</li>
                  <li>...</li>
                </ul><br/>

                <li>Update</li><br/>

                <ul>

                  <li>
                    At first it is gonna check if the petrol is over or any collision
                    with the rock, then it will stop the main music of the game, it will play
                    the game over music song, it will pause the physics. Otherwise,
                    it will make the speed to increase in some certain petrol value and it
                    will make the gravity to increase.
                  </li>

                  <li>It will chase the arrow keys of keyboard and give them a different velocity.</li>
                  <li>It will make a new rocks.</li>
                  <li>it will makes the score/petrol value to increase/decrease.</li>

                </ul>

              </ul>
            </li>

          </ul>

          <h4>Techs and libraries</h4>
          <ul>
            <li>Modern javascript</li>
            <li>Phaser3</li>
            <li>Node.js</li>
          </ul>

          <hr/>
          <p>
            “Mathematics and poetry are the two ways to drink the beauty of truth.” -- Amit Ray<br/>
          </p>

        </div>

        <Footer />

      </div>

    </animated.div>

  )
}

export default Spaceship;
