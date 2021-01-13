import Layout from './Layout';
import Footer from './Footer';
import {useSpring, animated} from 'react-spring';

function PrimeNumbersClient(){

  const props = useSpring({
                           opacity:1, from:{opacity: 0},
                           config: {duration:1500}
                         });

  return(

    <animated.div style={props}>

      <div className='container'>

        <Layout />

        <div className="content">
          <h3>Prime Numbers API Client</h3>
          <p>
            This is a front-end web application made by using webpack. The application
            gives results about prime numbers. It is connected to a back-end api made by express.
          </p>

          <img src="prime-numbers-client-2.jpg" className="project-home-img"/>

          <h4>About this project</h4>
          <p>
            Making a front-end application using webpack, react, react-dom, react-router-dom,
            babel to show some results about prime numbers using an api which made by myself using express.
          </p>

          <h4>Link</h4>
          <p>Link to app:<br/>
            <a href="https://prime-numbers-api-client.surge.sh/#/"
              target="_blank"
              className='path'
            >
            https://prime-numbers-api-client.surge.sh/#/
            </a>
          </p>

          <p>Link to code:<br/>
            <a href="https://github.com/faridmasjedi/Prime-Numbers-API-client"
              target="_blank"
              className='path'
            >
            https://github.com/faridmasjedi/Prime-Numbers-API-client
            </a>
          </p>

          <h4>Steps to make the client-side</h4>
          <ul>

            <li>
              <h4>Installing</h4>
              <ul>
                <li>Installing node.js</li>
                <li>Installing webpack packages</li>
                <li>Installing babel packages</li>
                <li>Installing react packages</li>
                <li>Installing axios</li>
              </ul>
            </li>

            <li>
              <h4>Making src directory</h4>
              <ul>
                <li>Inside that make a directory named components</li>
                <li>index.html</li>
                <li>index.js</li>
                <li>style.css</li>
              </ul>
            </li>

            <li>
              <h4>Making a webpack.config.js</h4>
            </li>

            <li>
              <h4>Deploying on surge.sh</h4>
            </li>

          </ul>

          <h4>Techs and libraries</h4>
          <ul>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>webpack</li>
            <li>babel</li>
            <li>axios</li>
            <li>react</li>
            <li>react-dom</li>
            <li>react-router-dom</li>
            <li>surge</li>
          </ul>

          <hr/>
          <p>
            “It is a case of twice two makes four! Nature does not ask your permission,
            she has nothing to do with your wishes, and whether you like her laws or dislike
            them, you are bound to accept her as she is, and consequently all her conclusions.”
            -- Fyodor Dostoyevsky<br/>
          </p>

        </div>

        <Footer />

      </div>
    </animated.div>
  )

}
export default PrimeNumbersClient;
