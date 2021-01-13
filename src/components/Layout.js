import logo from '../farid_logo.png';

function Layout(){
  return(
    <div>
      <header>

        <div className="logo-div">
          <a href="/" className='logo-link'>
            <img src={logo} className="logo"/>
          </a>
        </div>

        <div className="nav-div">
          <nav>
            <a href='/'>Home</a>
            <a href='/#/about'>About</a>
            <a href='/#/projects'>Projects</a>
            <a href='/#/contact'>Contact</a>
            <a href="https://drive.google.com/file/d/1GhcFZy8_VFM_yRGoPuw-UCuB4efRe4nN/view?usp=sharing" target='_blank'>
              Resume
            </a>
          </nav>
        </div>

      </header>
    </div>
  )
}

export default Layout;
