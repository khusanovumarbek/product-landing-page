import './Error.css'
import err404 from '../../img/404.svg'
import meteor from '../../img/meteor.svg'
import astronaut from '../../img/astronaut.svg'
import spaceship from '../../img/spaceship.svg'


const Error404 = () => {
  return (
    <div className="error-container">
      <div className="mars"></div>
      <img src={err404} className="logo-404" alt="404 Logo" />
      <img src={meteor} className="meteor" alt="Meteor" />
      <p className="title">Oh no!!</p>
      <p className="subtitle">
        You’re either misspelling the URL <br /> or requesting a page that's no longer here.
      </p>
      <img src={astronaut} className="astronaut" alt="Astronaut" />
      <img src={spaceship} className="spaceship" alt="Spaceship" />
    </div>
  );
}

export default Error404;
