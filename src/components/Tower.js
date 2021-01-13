import Layout from './Layout';
import Footer from './Footer';
import {useSpring, animated} from 'react-spring';

function Tower(){
  const props = useSpring({
                           opacity:1, from:{opacity: 0},
                           config:{duration:1500}
                         });

  return(

    <animated.div style={props}>

      <div className='container'>

        <Layout />

        <div className="content">

          <h3>Game: "Tower"</h3>
          <p>
            This is a game made by using Phaser3. There are some axes, kunais and
            fires that if the player has collision with them, the game is over. I
            have made the platforms, axes, fires and kunais to randomly comes in a random place.
          </p>

          <img src="Tower.jpg" className="project-home-img"/>

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
            >
              https://cullsgit.github.io/games/
            </a>
          </p>
          <p>Link to Tower game:<br/>
            <a href="https://cullsgit.github.io/games/FM-FallingDown/index.html"
              target="_blank"
              className='path'
            >
              https://cullsgit.github.io/games/FM-FallingDown/index.html
            </a>
          </p>
          <p>Link to code:<br/>
            <a href="https://github.com/CullsGit/games/tree/main/FM-FallingDown"
               target="_blank"
               className='path'
            >
              https://github.com/CullsGit/games/tree/main/FM-FallingDown
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
                  <li>createBrick()</li>
                  <li>...</li>
                </ul><br/>

                <li>Update</li><br/>

                <ul>

                  <li>
                    At first, it is gonna check if the player comes to the end of the
                    tower, and it will make the velocity of the player in y direction to be zero.
                  </li>

                  <li>Next it will add a text 'Next Level'. (future: next level will be made).</li>
                  <li>If the game is not over, makes the arrow keys on keyboard to work properly.</li>
                  <li>If the game is over, it makes the player to have an animation named "dizzy".</li>
                  <li>It will check if the axes and kunais went out of the window boundries, destroy them.</li>
                  <li>using setCircle() for axes to have dynamic boundries of axes to chase the head of
                  the axes. (by using Math.cos() and Math.sin() ).</li>
                  <li>Chase the player.y value and create new axes, kunais and fires in random position.</li>

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
            “In every department of physical science there is only so much science,
            properly so-called, as there is mathematics.” -- Immanuel Kant<br/>
          </p>

        </div>

        <Footer />

      </div>

    </animated.div>

  )
}

export default Tower;
