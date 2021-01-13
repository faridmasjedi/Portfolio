import Layout from './Layout';
import Footer from './Footer';
import {useSpring, animated} from 'react-spring';

function TicTacToe(){
  const props = useSpring({
                           opacity:1, from:{opacity: 0},
                           config:{duration:1500}
                         });

  return(

    <animated.div style={props}>

      <div className="container">

          <Layout />

          <div className='content'>

            <h4>Tic-Tac-Toe</h4>
            <p>
              Tic-tac-toe (American English), noughts and crosses (Commonwealth English),
              or Xs and Os, is a game for two players, X and O, who take turns marking
              the spaces in a 3×3 grid. The player who succeeds in placing three of
              their marks in a horizontal, vertical, or diagonal row is the winner. It
              is a solved game with a forced draw assuming best play from both players.
            </p>

            <img src="tic-tac-toe-3.jpg" className="project-home-img"/>

            <h4>About this project</h4>
            <p>
              Making a Tic-Tac-Toe game is the first project in software engineering immersive
              course of GA (General Assembly) Sydney.
            </p>

            <h4>Links</h4>
            <p>Link to the play:<br/>
              <a href="https://faridmasjedi.github.io/Tic-Tac-Toe/"
                className='path'
                target="_blank"
              >
                https://faridmasjedi.github.io/Tic-Tac-Toe/
              </a>
            </p>

            <p>Link to the code:<br/>
              <a href="https://github.com/faridmasjedi/Tic-Tac-Toe"
                className='path'
                target="_blank"
              >
                https://github.com/faridmasjedi/Tic-Tac-Toe
              </a>
            </p>

          <h4>How to play</h4>
          <ol>

            <li>
              Press the 'Player1 VS. Player2' button.
            </li><br/>

            <li>
              Enter your names and then click the 'Submit' button. (note: there is a random
              function which tell who is the first player.)
            </li><br/>

            <li>
              Choose one sign, "X" or "O" by clicking on.
            </li><br/>

            <li>
              Enter round numbers you want to play and click the submit button.
            </li><br/>

            <li>
              Start the game by choosing a cell. (note: after any round the, the table is ready
              for another round.)
            </li><br/>

            <li>
              When the game is finished, it is gonna ask you if you want to play again or not.
              (note: the signs will not change, but the first player is going to chosen by random
                function again.). You have another option to start the game by another users as well.
            </li><br/>

          </ol>

          <h4>Used Library and fonts</h4>
          <ul>

            <li>
              Math Library
            </li><br/>

            <li>
              <a href="https://jquery.com/" target="_blank" className='point'>jQuery</a>
            </li><br/>

            <li>
              <a href="https://fonts.google.com/" target="_blank" className='point'>Google fonts</a>
            </li><br/>

          </ul>

          <hr/>
          <p>
            “Mathematics is the art of giving the same name to different things.” -- Henri Poincaré<br/>
          </p>

        </div>

        <Footer />

      </div>

    </animated.div>

  )
}
export default TicTacToe;
