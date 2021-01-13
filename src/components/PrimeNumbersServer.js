import Layout from './Layout';
import Footer from './Footer';
import {useSpring, animated} from 'react-spring';

function PrimeNumbersServer(){
  const props = useSpring({
                           opacity:1, from:{opacity: 0},
                           config:{duration:1500}
                         });

  return(
    <animated.div style={props}>

      <div className='container'>

        <Layout />

        <div className="content">

          <h3>Prime Numbers API Server</h3>
          <p>
            This is a server made by using express. The server gives results about prime numbers.
          </p>

          <img src="prime-numbers-server-2.jpg" className="project-home-img"/>

          <h4>About this project</h4>
          <p>
            Making a server using express, ejs for making views and cors as the results
            can be used in a web application.
          </p>

          <h4>Link</h4>
          <p>Link to app:<br/>
            <a href="https://prime-numbers-api-server.herokuapp.com/"
              target="_blank"
              className='path'
            >
              https://prime-numbers-api-server.herokuapp.com/
            </a>
          </p>

          <p>Link to code:<br/>
            <a href="https://github.com/faridmasjedi/Prime-Numbers-API-server"
               target="_blank"
               className='path'
            >
              https://github.com/faridmasjedi/Prime-Numbers-API-server
            </a>
          </p>

          <h4>Steps to make the server-side</h4>
          <ul>

            <li>
              <h4>Installing</h4>
              <ul>
                <li>Installing node.js</li>
                <li>Installing express</li>
                <li>Installing ejs</li>
              </ul>
            </li>

            <li>
              <h4>index.js</h4>
              <ul>
                <li>all the commands that a server need to tackle with a request has been written.</li>
                <li>a port has been defined.</li>
                <li>using cors as a server can make a connection with another web applications.</li>
                <li>different get request for having different result on different requests about prime numbers.</li>
              </ul>
            </li>

            <li>
              <h4>functions directory</h4>
              <ul>
                <li>different functions to give different results about different prime numbers properties.</li>
                <li>the main function is IsPrime which written according to the pattern that i found.</li>
              </ul>
            </li>

          </ul>

          <h4>Techs and libraries</h4>
          <ul>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>nodemon</li>
            <li>express</li>
            <li>ejs</li>
            <li>cors</li>
          </ul>

          <hr/>
          <p>
            “In this whole, wide world, the only thing that treats me so kindly is math.”
            -- Haruki Murakami<br/>
          </p>

        </div>

        <Footer />

      </div>

    </animated.div>
  )

}
export default PrimeNumbersServer;
