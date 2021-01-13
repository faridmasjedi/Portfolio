import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import Layout from './Layout';

function Toggle() {
  // const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    transform:'translate3d(0,-50px,0)', from:{transform:'translate3d(0,0,0)'},
    config:{duration:3000}
  })

  return (
    <Layout style={fade} />
  )
}
export default Toggle;
