import Layout from './Layout';
import Footer from './Footer';
import {useSpring, animated} from 'react-spring';

function NomadArtGroup(){
  const props = useSpring({
                           opacity:1, from:{opacity: 0},
                           config:{duration:1500}
                         });
  return(
    <animated.div style={props}>

      <div>

        <div className="container">

          <Layout />

          <div className='content'>

            <h3>Nomad Art Group Website</h3>
            <p>
              This is an app for an art group named Nomad. User can visit the website, check the events,
              check the artists of this art group. User can sign in and sign out and can choose which
              events they went. The admin can add an event, artist, image to an event, video to
              an event, a role to an event and new review.
            </p>

            <img src="Nomad-Art-Group-3.jpg" className="project-home-img"/>

            <h4>About this project</h4>
            <p>
              Making an app with Ruby on Rails using different models and associations, is the second project
              in software engineering immersive course of GA (General Assembly) Sydney.
            </p>

            <h4>Links</h4>
            <p>Link to app:<br/>
              <a href="https://nomad-art-group.herokuapp.com/"
                target="_blank"
                className='path'
              >
                https://nomad-art-group.herokuapp.com/
              </a>
            </p>

            <p>Link to code:<br/>
              <a href="https://github.com/faridmasjedi/Nomad_art_group"
                 target="_blank"
                 className='path'
              >
                https://github.com/faridmasjedi/Nomad_art_group
              </a>
            </p>

            <h4>Models</h4>

            <img src="models.png" className="project-img"/>

            <ul>

              <li>
                <h4>User Model</h4>
                <ul>
                  <li>Login/Create account option</li>
                  <li>My Page: Every user can go and select which event they went.</li>
                </ul>
              </li>

              <li>
                <h4>Genre Model</h4>
                <ul>
                  <li>
                      Nomad Art Group works on different art genres like theatre, play reading, etc.
                      Admin can choose genre for each event. Each genre may be have many events.
                  </li>
                </ul>
              </li>

              <li>
                <h4>Event Model</h4>
                <ul>
                  <li>
                    Each event has it own page that show informations, images, videos, artists, genre,
                    each artist's role.
                  </li>
                </ul>
              </li>

              <li>
                <h4>Image Model</h4>
                <ul>
                  <li>Each image belongs to an event and an event may be have many images.</li>
                  </ul>
              </li>

              <li>
                <h4>Video Model</h4>
                <ul>
                  <li>Each video belongs to an event and an event may be have many videos.</li>
                </ul>
              </li>

              <li>
                <h4>Role Model</h4>
                <ul>
                  <li>
                    Each role belongs to an artist in an event. This model gives the chance to admin
                    to choose role and artist for any event.
                  </li>
                </ul>
              </li>

              <li>
                <h4>Artist Model</h4>
                <ul>
                  <li>Each artist can have many roles in different events.</li>
                </ul>
              </li>

            </ul>

            <h4>Layout</h4>
            <ul>

              <li>

                <h4>Home Page</h4>
                <ul>

                  <li>
                    User, without sign up and sign in, can check the home page and visit every
                    event's page and see the images and videos. They can check every artist's page as well.
                  </li><br/>

                  <li>
                    User can see two reviews on the home page.
                  </li><br/>

                  <li>
                    There is a link to donation page that can be checked.
                  </li><br/>

                  <li>
                    A nav bar that navigate to the events, team that shows the artists page and reviews.
                    By signing in, they can their own page and logout.
                  </li><br/>

                  <li>
                    For admin, there is another navigation, that is dropdown one, and admin can go to the
                    All Users page, which shows all users of the website, New Event page, New Genre page,
                    New Artist Page, New Role page, New Image page, New video Page and New Review page.
                  </li><br/>

                  <li>
                    There is a footer that has links to facebook, instagram, youtube pages of Nomad
                    Art Group and Contact us page.
                  </li><br/>

                </ul>

              </li>

              <li>

                <h4>Events Page</h4>
                <ul>

                  <li>
                    In this page, users can see the poster and title of every events. They are linked to every
                    event page.
                  </li>

                </ul>

              </li>

              <li>

                <h4>Event Page</h4>
                <ul>

                  <li>
                    In every event page, there are informations about the event and there is a nav bar that user
                    can see the artists, images and videos of the event.
                  </li>

                  <li>
                    Admin has four link at the top of the page to edit and the event, delete a role and at the
                    bottom of each image and video, a link to delete the image or video.
                  </li>

                </ul>

              </li>

              <li>

                <h4>Team Page</h4>
                <ul>

                  <li>
                    In the Team page, the user can see photos all the artists who works with Nomad Art Group, with
                    their name, linked to each artist.
                  </li>

                </ul>

              </li>

              <li>

                <h4>Artist Page</h4>
                <ul>

                  <li>
                    In every artist page, the user can check the information about an artist.
                  </li>

                  <li>
                    Admin can Edit and Delete an artist.
                  </li>

                </ul>
              </li>

            </ul>

            <h4>Techs and libraries</h4>
            <ul>

              <li>
                Ruby on Rails
              </li><br/>

              <li>
                Bootstrap
              </li><br/>

              <li>
                bcrypt
              </li><br/>

            </ul>

            <hr/>
            <p>
              “1+1 = <strong>1</strong>” -- ???<br/>
            </p>

          </div>

          <Footer />
        </div>
      </div>
    </animated.div>

  )
}
export default NomadArtGroup;
